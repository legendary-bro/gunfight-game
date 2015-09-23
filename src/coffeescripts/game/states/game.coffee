# BOUNDS
Floor    = require '../sprites/Floor.coffee'
Ceiling  = require '../sprites/Ceiling.coffee'
Wall     = require '../sprites/Wall.coffee'
WALL_OFFSET = 275

# HUD
Text = require '../sprites/Text.coffee'
Integer = require '../sprites/Integer.coffee'

# SPRITES
Cowboy = require '../sprites/Cowboy.coffee'
TerrainGroup = require '../sprites/TerrainGroup.coffee'
Wagon  = require '../sprites/Wagon.coffee'

STARTING_TIME = 70 #seconds
NO_AMMO_COUNTDOWN = 10 #seconds

class Game
  constructor: ->

  create: ->
    # remove previous event listeners
    @game.input.onDown.removeAll()
    @game.input.onUp.removeAll()
    @game.input.activePointer.leftButton.onUp.removeAll()

    # create the bounds
    @ceiling    = new Ceiling @game, 45
    @floor      = new Floor @game, -45
    @left_wall_outer = new Wall @game, 92
    @left_wall  = new Wall @game, @game.world.width / 2 - WALL_OFFSET
    @right_wall_outer = new Wall @game, 996
    @right_wall = new Wall @game, @game.world.width / 2  + WALL_OFFSET

    # setup the text
    @text_gun_fight =   new Text @game, @, 'gun fight', 408, 250
    @text_get_ready =   new Text @game, @, 'get ready', 408, 250
    @text_insert_coin = new Text @game, @, 'insert coin', 700, 771
    @text_draw =        new Text @game, @, 'draw', 466, 250
    @text_game =        new Text @game, @, 'game', 370, 5
    @text_over =        new Text @game, @, 'over', 599, 5

    # setup the hud
    @hud_score_player_one = new Integer @game, @, 0, 200, 5
    @hud_score_player_two = new Integer @game, @, 0, 830, 5
    @hud_timer            = new Integer @game, @, STARTING_TIME, 644, 5
    @hud_countdown        = new Integer @game, @, NO_AMMO_COUNTDOWN, 400, 5

    # timers
    @timer = @game.time.create(false)
    @countdown = @game.time.create(false)

    # create the players
    @player_one = new Cowboy @game, @
    @player_two = new Cowboy @game, @, false

    # collision elements
    @bullets  = [ @player_one.bullets, @player_two.bullets ]
    @walls    = [ @left_wall, @right_wall ]
    @surfaces = [ @ceiling, @floor ]
    @players  = [ @player_one, @player_two ]
    @wagon = new Wagon @game, @game_state
    @terrain = undefined # instantiate in setupLevel()

    # start the game
    @start()

  start: ->
    @setupLevel() # setup and show terrain
    @hud_timer.show() # show timer
    player.ammo.show() for player in @players
    @text_get_ready.show()
    @runIntro =>
      @text_get_ready.hide()
      @text_draw.show()
      setTimeout () =>
        @text_draw.hide() # hide draw!
        player.enableInput() for player in @players # enabel movement
        # start timers
        @game.time.events.loop(1000, @updateTimer, @).autoDestroy = true
        @game.time.events.loop(1000, @updateCountdown, @).autoDestroy = true
        @timer.start()
        @countdown.start()
      , 700


  update: ->
    # set bounce surfaces for bullets
    @game.physics.arcade.collide @bullets, @surfaces

    # set player, bullet collisions
    @game.physics.arcade.collide @bullets, @players, (player, bullet) =>
      # disable inputs
      @player_one.disableInput()
      @player_two.disableInput()
      # kill all bullets in the field
      @player_one.bullets.forEachAlive (b) -> b.kill()
      @player_two.bullets.forEachAlive (b) -> b.kill()
      # increase score of winning player
      bullet.player.idle()
      bullet.player.wins += 1
      if bullet.player.is_player_one
        @hud_score_player_one.inc()
      else
        @hud_score_player_two.inc()
      # trigger player death
      player.die()
      setTimeout () =>
        @nextLevel() unless @game_over
      , 2000

    # set terrain, bullet collisions
    @game.physics.arcade.collide @bullets, @terrain, (bullet, terrain) =>
      collision_y = bullet.y + bullet.height
      bullet.kill()
      terrain.deform collision_y

    # set wagon, bullet collisions
    @game.physics.arcade.collide @bullets, @wagon, (wagon, bullet) =>
      bullet.kill()

  render: ->
    if @game.debugMode
      @game.debug.body @ceiling
      @game.debug.body @floor
      @game.debug.body @left_wall
      @game.debug.body @right_wall
      @game.debug.body @player_one
      @game.debug.body @player_two
      @game.debug.body @player_one.bullets
      @game.debug.body @player_two.bullets
      @game.debug.body @wagon

  updateTimer: ->
    @hud_timer.dec() if @hud_timer.value > 0
    @gameOver() if @hud_timer.value is 0

  updateCountdown: ->
    unless @game_over
      if @player_one.num_bullets is 0 or @player_two.num_bullets is 0
        @hud_countdown.show()
        @hud_countdown.dec() if @hud_countdown.value > 0
        @nextLevel() if @hud_countdown.value is 0
      @nextLevel() if @player_one.num_bullets is 0 and @player_two.num_bullets is 0 and @player_one.bullets.countDead() is 6 and @player_two.bullets.countDead() is 6 and !@player_one.input_disabled and !@player_two.input_disabled

  setupLevel: ->
    level_num = @game.level
    level = @game.constants.LEVELS[level_num]
    _terrain.cropRect.destroy() for _terrain in @terrain.children if @terrain
    @terrain.destroy() if @terrain
    @terrain = new TerrainGroup @game, @, level
    @showHud()
    @wagon.start() if level.wagon

  nextLevel: ->
    levels_length = Object.keys(@game.constants.LEVELS).length
    @game.level += if (levels_length > @game.level) then 1 else 0
    for player in @players
      player.text.hide()
      player.reload()
      player.idle()
      player.disableInput()
    @hud_countdown.hide()
    @hud_countdown.resetValue()
    @setupLevel()
    @text_get_ready.show()
    @runIntro =>
      @text_get_ready.hide()
      @text_draw.show()
      setTimeout () =>
        @text_draw.hide() # hide draw!
        player.enableInput() for player in @players # enable movement
      , 700

  gameOver: ->
    @game.score_player_one = @player_one.wins
    @game.score_player_two = @player_two.wins
    @game_over = true
    @hideHud()
    @terrain.destroy()
    @wagon.destroy()
    for player in @players
      player.ammo.destroy()
      player.destroy()
    @text_game.show()
    @text_over.show()
    setTimeout () =>
      @state.start 'intro'
    , 1500

  runIntro: (cb) -> player.runIntro(cb) for player in @players

  showHud: ->
    @hud_score_player_one.show()
    @hud_score_player_two.show()
    @hud_timer.show()

  hideHud: ->
    @hud_timer.hide()
    @hud_countdown.hide()
    player.text.hide() for player in @players

module.exports = Game
