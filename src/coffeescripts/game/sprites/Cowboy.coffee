StateMachine = require 'javascript-state-machine'

# POSITION CONSTANTS
PLAYER_ONE_X = 192
PLAYER_ONE_Y = 340
PLAYER_TWO_X = 896
PLAYER_TWO_Y = 340

# MOVEMENT CONSTANTS
SPEED = 60
DELTA = 34
FRAMERATE = 6

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

    # movement vars
    @time = Date.now()
    @moving = false
    @dead = false

    # frame vars
    @gun_pos = ['low','medlow','med','medhigh','high']
    @leg_pos = ['two','one','cross']
    @gun_pos_index = 2
    @leg_pos_index = 1

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
    # setup animations
    @setupAnimations()
    # create state machine
    @createStateMachine()

    # clean up
    @game.add.existing @
    # @kill()

    return @

  update: ->
    # handle incremental movement
    current_time = Date.now()
    if current_time - @time > SPEED and !@dead
      @body.y -= DELTA if @direction.up    and @body.y > 0
      @body.x -= DELTA if @direction.left  and @body.x > 0
      @body.x += DELTA if @direction.right and @body.x < @game.width - @body.width
      @body.y += DELTA if @direction.down  and @body.y < @game.height - @body.height
      @time = current_time

    # is the player moving?
    @moving = false unless @direction.up || @direction.down || @direction.left || @direction.right

    # trigger move animation
    @move() if  @moving and @state.current != 'moving' and !@dead
    @idle() if !@moving and @state.current != 'idle'   and !@dead

  # change state
  move:           -> @state._move()
  idle:           -> @state._idle()
  die:            -> @state._die()

  # control direction
  move_up:        -> @direction.up    = true
  move_left:      -> @direction.left  = true
  move_right:     -> @direction.right = true
  move_down:      -> @direction.down  = true
  move_up_off:    -> @direction.up    = false
  move_left_off:  -> @direction.left  = false
  move_right_off: -> @direction.right = false
  move_down_off:  -> @direction.down  = false

  # handle aiming
  aim_up: -> console.log 'aim_up'
  aim_down: -> console.log 'aim_down'

  # shoot!
  shoot: -> console.log 'shoot'

  setupControls: ->
    # map control keys
    controls = if @is_player_one then PLAYER_ONE_CONTROLS else PLAYER_TWO_CONTROLS
    _.each controls, (key, action) =>
      input = @game_state.input.keyboard.addKey Phaser.Keyboard[key]
      input.onDown.add => @[action]()
      input.onDown.add => @moving = true     if action.match 'move'
      input.onUp.add => @["#{action}_off"]() if action.match 'move'

  setupAnimations: ->
    # die animations
    @animations.add 'die', [
      
    ], FRAMERATE, false

    # move animatinos
    @animations.add 'move-high', [
      'cowboy/high/two.png'
      'cowboy/high/one.png'
      'cowboy/high/cross.png'
      'cowboy/high/one.png'
    ], FRAMERATE, true
    @animations.add 'move-low', [
      'cowboy/low/two.png'
      'cowboy/low/one.png'
      'cowboy/low/cross.png'
      'cowboy/low/one.png'
    ], FRAMERATE, true
    @animations.add 'move-medhigh', [
      'cowboy/medhigh/two.png'
      'cowboy/medhigh/one.png'
      'cowboy/medhigh/cross.png'
      'cowboy/medhigh/one.png'
    ], FRAMERATE, true
    @animations.add 'move-medlow', [
      'cowboy/medlow/two.png'
      'cowboy/medlow/one.png'
      'cowboy/medlow/cross.png'
      'cowboy/medlow/one.png'
    ], FRAMERATE, true
    @animations.add 'move-med', [
      'cowboy/med/two.png'
      'cowboy/med/one.png'
      'cowboy/med/cross.png'
      'cowboy/med/one.png'
    ], FRAMERATE, true

  createStateMachine: ->
    @state = StateMachine.create
      initial: '_idle'
      events: [
        { name: '_idle', from: '*', to: 'idling' }
        { name: '_move', from: '*', to: 'moving' }
        { name: '_die',  from: '*', to: 'dying'  } ]
      callbacks:
        on_idle: (event, from, to) => @animations.stop null, true
        on_move: (event, from, to) => @play "move-#{@gun_pos[@gun_pos_index]}"
        on_die: (event, from, to) => @dead = true

module.exports = Cowboy
