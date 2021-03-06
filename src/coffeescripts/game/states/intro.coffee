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


class Intro
  constructor: ->

  create: ->
    # remove previous event listeners
    @game.input.onDown.removeAll()
    @game.input.onUp.removeAll()
    @game.input.activePointer.leftButton.onUp.removeAll()

    # is intro flag
    @is_intro = true

    # create the bounds
    @ceiling    = new Ceiling @game, 45
    @floor      = new Floor @game, -45
    @left_wall  = new Wall @game, @game.world.width / 2 - WALL_OFFSET + 100
    @left_wall_outer = new Wall @game, -200

    # setup the text
    @text_gun_fight =   new Text @game, @, 'gun fight', 408, 250
    @text_insert_coin = new Text @game, @, 'insert coin', 700, 771
    @text_draw =        new Text @game, @, 'draw', 466, 250
    @text_game =        new Text @game, @, 'game', 370, 5
    @text_over =        new Text @game, @, 'over', 599, 5

    # setup the hud
    @hud_score_player_one = new Integer @game, @, @game.score_player_one, 200, 5
    @hud_score_player_two = new Integer @game, @, @game.score_player_two, 830, 5

    # create the players
    @cowboy = new Cowboy @game, @

    # collision elements
    @bullets  = @cowboy.bullets
    @walls    = [ @left_wall, @right_wall ]
    @surfaces = [ @ceiling, @floor ]
    @players  = [ @cowboy ]

    # start the animation
    @start()

  start: ->
    # show text
    @text_gun_fight.show()
    @text_game.show()
    @text_over.show()
    @text_insert_coin.show()
    # show score
    @hud_score_player_one.show()
    @hud_score_player_two.show()
    # click handler
    @game.input.activePointer.leftButton.onUp.add => @state.start 'game'
    # run the intro sequence
    @runIntro()

  render: ->
    if @game.debugMode
      @game.debug.body @ceiling
      @game.debug.body @floor
      @game.debug.body @left_wall
      @game.debug.body @left_wall_outer
      @game.debug.body @cowboy
      @game.debug.body @cowboy.bullets

  update: -> @game.physics.arcade.collide @bullets, @surfaces

  runIntro: (cb) -> player.runIntro(cb) for player in @players

module.exports = Intro
