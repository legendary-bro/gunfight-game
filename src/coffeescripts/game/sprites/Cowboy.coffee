StateMachine = require 'javascript-state-machine'

# POSITION CONSTANTS
PLAYER_ONE_X = 192
PLAYER_ONE_Y = 340
PLAYER_TWO_X = 896
PLAYER_TWO_Y = 340

# MOVEMENT CONSTANTS
SPEED = 60
DELTA = 34

# CONTROL CONSTANTS
PLAYER_ONE_CONTROLS =
  move_up: 'W'
  move_down: 'S'
  move_left: 'A'
  move_right: 'D'
  aim_up: 'E'
  aim_down: 'C'
  shoot: 'F'

PLAYER_TWO_CONTROLS =
  move_up: 'I'
  move_down: 'K'
  move_left: 'J'
  move_right: 'L'
  aim_up: 'U'
  aim_down: 'N'
  shoot: 'H'

class Cowboy extends Phaser.Sprite
  constructor: (@game, @game_state, @is_player_one=true) ->
    key = 'atlas'
    frame = 'cowboy/med/two.png'
    x = if @is_player_one then PLAYER_ONE_X else PLAYER_TWO_X
    y = if @is_player_one then PLAYER_ONE_Y else PLAYER_TWO_Y
    super @game, x, y, key, frame

    # direction object
    @direction =
      up: false
      down: false
      left: false
      right: false

    @time = Date.now()

    # enable arcade physics
    @game.physics.enable @, Phaser.Physics.ARCADE

    # collide with world
    @body.collideWorldBounds = true

    # set anchor to horizontal center so sprite flips around its middle
    @anchor.setTo .5, 1

    # flip sprite if is player two
    @scale.x = if @is_player_one then -1 else 1

    # setup controls
    @setupControls()
    # create state machine
    @createStateMachine()

    # clean up
    @game.add.existing @
    # @kill()

    return @

  update: ->
    current_time = Date.now()
    if current_time - @time > SPEED
      @body.y -= DELTA if @direction.up    and @body.y > 0
      @body.x -= DELTA if @direction.left  and @body.x > 0
      @body.x += DELTA if @direction.right and @body.x < @game.width - @body.width
      @body.y += DELTA if @direction.down  and @body.y < @game.height - @body.height
      @time = current_time

  move_up:        -> @direction.up    = true
  move_left:      -> @direction.left  = true
  move_right:     -> @direction.right = true
  move_down:      -> @direction.down  = true
  move_up_off:    -> @direction.up    = false
  move_left_off:  -> @direction.left  = false
  move_right_off: -> @direction.right = false
  move_down_off:  -> @direction.down  = false
  aim_up: -> console.log 'aim_up'
  aim_down: -> console.log 'aim_down'
  shoot: -> console.log 'shoot'

  setupControls: ->
    controls = if @is_player_one then PLAYER_ONE_CONTROLS else PLAYER_TWO_CONTROLS

    # map control keys
    _.each controls, (key, action) =>
      input = @game_state.input.keyboard.addKey Phaser.Keyboard[key]
      input.onDown.add => @[action]()
      input.onUp.add => @["#{action}_off"]() if action.match 'move'

  createStateMachine: ->
    @state = StateMachine.create
      initial: '_idle'
      events: [
        { name: '_idle', from: '*', to: 'idling' }
        { name: '_move', from: '*', to: 'moving' }
        { name: '_die',  from: '*', to: 'dying'  } ]
      callbacks:
        on_idle: (event, from, to) =>
        on_move: (event, from, to) =>
        on_die: (event, from, to) =>

module.exports = Cowboy
