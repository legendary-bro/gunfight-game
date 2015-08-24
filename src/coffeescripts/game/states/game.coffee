# BOUNDS
Floor    = require '../sprites/Floor.coffee'
Ceiling  = require '../sprites/Ceiling.coffee'
Wall     = require '../sprites/Wall.coffee'
WALL_OFFSET = 275

# HUD
# Timer  = require '../sprites/Timer.coffee'
# Ammo   = require '../sprites/Ammo.coffee'
# Score  = require '../sprites/Score.coffee'

# SPRITES
Cowboy = require '../sprites/Cowboy.coffee'
# Bullet = require '../sprites/Bullet.coffee'
# Cactus = require '../sprites/Cactus.coffee'
# Tree   = require '../sprites/Tree.coffee'
# Wagon  = require '../sprites/Wagon.coffee'

class Game
  constructor: ->

  create: ->
    # create the bounds
    @ceiling    = new Ceiling @game, 150
    @floor      = new Floor @game, -150
    @left_wall  = new Wall @game, @game.world.width / 2 - WALL_OFFSET
    @right_wall = new Wall @game, @game.world.width / 2  + WALL_OFFSET

    # setup the hud

    # create the players
    @player_one = new Cowboy @game, @
    @player_two = new Cowboy @game, @, false

    # collision elements
    @bullets  = [ @player_one.bullets, @player_two.bullets ]
    @walls    = [ @left_wall, @right_wall ]
    @surfaces = [ @ceiling, @floor ]
    @players  = [ @player_one, @player_two ]

    # start the game
    @start()

  start: ->

  update: ->
    # set bounce surfaces for bullets
    @game.physics.arcade.collide @bullets, @surfaces

    # set player, bullet collisions
    @game.physics.arcade.collide @bullets, @players, (player, bullet) =>
      # kill all bullets
      b.kill() for b in @player_one.bullets.children
      b.kill() for b in @player_two.bullets.children
      # trigger player death
      player.die()

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

  setupLevel: ->

module.exports = Game
