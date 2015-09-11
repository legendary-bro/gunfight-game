# BOUNDS
Floor    = require '../sprites/Floor.coffee'
Ceiling  = require '../sprites/Ceiling.coffee'
Wall     = require '../sprites/Wall.coffee'
WALL_OFFSET = 275

# HUD
# Timer  = require '../sprites/Timer.coffee'
# Score  = require '../sprites/Score.coffee'

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

    # setup the hud


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
    @player_one.enableInput()
    @player_two.enableInput()

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

  render: ->
    if @game.debugMode
      @game.debug.body @ceiling
      @game.debug.body @floor
      @game.debug.body @left_wall
      @game.debug.body @right_wall
      # @game.debug.body @player_one
      # @game.debug.body @player_two
      # @game.debug.body @player_one.bullets
      # @game.debug.body @player_two.bullets
      # @game.debug.body @wagon

  setupLevel: ->
    level_num = @game.level
    level = @game.constants.LEVELS["#{level_num}"]
    @terrain = new TerrainGroup @game, @, level
    @wagon.start() if level.wagon

module.exports = Game
