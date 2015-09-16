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
    @hud_timer            = new Integer @game, @, 70, 644, 5
    @hud_countdown        = new Integer @game, @, 10, 400, 5

    # timers
    @timer = @game.time.create(false)
    @countdown = @game.time.create(false)
    @game.time.events.loop(1000, @updateTimer, @).autoDestroy = true
    @game.time.events.loop(1000, @updateCountdown, @).autoDestroy = true

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
    # intro the level, place terrain on the map
    @setupLevel()
    # enable movement
    for player in @players
      player.enableInput()
      player.ammo.show()
    # start timer
    @hud_timer.show()
    @timer.start()

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
      # increase game's level
      @game.level += 1
      # trigger player death
      player.die()

    # set terrain, bullet collisions
    @game.physics.arcade.collide @bullets, @terrain, (bullet, terrain) =>
      collision_y = bullet.y + bullet.height
      bullet.kill()
      terrain.deform collision_y

    # set wagon, bullet collisions
    @game.physics.arcade.collide @bullets, @wagon, (wagon, bullet) =>
      bullet.kill()

    # show hud_countdown if player is out of bullets
    if @hud_countdown.hidden and (@player_one.num_bullets is 0 or @player_two.num_bullets is 0)
      @hud_countdown.resetValue()
      @hud_countdown.show()
      @countdown.start()

  render: ->
    if @game.debugMode
      @game.debug.body @ceiling
      @game.debug.body @floor
      @game.debug.body @left_wall
      @game.debug.body @right_wall
      @game.debug.body @player_one
      @game.debug.body @player_two
      # @game.debug.body @player_one.bullets
      # @game.debug.body @player_two.bullets
      # @game.debug.body @wagon

  updateTimer: -> @hud_timer.dec() if @hud_timer.value > 0
  updateCountdown: ->
    @hud_countdown.dec() if @hud_countdown.value > 0
    # @nextLevel if @hud_countdown.value is 0

  setupLevel: ->
    level_num = @game.level
    level = @game.constants.LEVELS["#{level_num}"]
    @terrain = new TerrainGroup @game, @, level
    @showHud()
    @wagon.start() if level.wagon

  showHud: ->
    @hud_score_player_one.show()
    @hud_score_player_two.show()
    @hud_timer.show()

  hideHud: ->
    @hud_score_player_one.hide()
    @hud_score_player_two.hide()
    @hud_timer.hide()
    @hud_countdown.hide()

module.exports = Game
