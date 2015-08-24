Bullets = require './Bullets.coffee'
StateMachine = require 'javascript-state-machine'

# POSITION CONSTANTS
PLAYER_ONE_X = 192
PLAYER_ONE_Y = 340
PLAYER_TWO_X = 896
PLAYER_TWO_Y = 340

# MOVEMENT CONSTANTS
SPEED = 60
DELTA = 34
FRAMERATE = 7

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
    frame = 'cowboy/med/two'
    x = if @is_player_one then PLAYER_ONE_X else PLAYER_TWO_X
    y = if @is_player_one then PLAYER_ONE_Y else PLAYER_TWO_Y
    super @game, x, y, key, frame

    # enable arcade physics
    @game.physics.enable @, Phaser.Physics.ARCADE
    # save width and height of sprite body
    @width = @body.width
    @height = @body.height
    # change body size for more accurate hit collision
    @body.setSize 45, 136, 25, 0
    @body.setSize 45, 136, -25, 0 if @is_player_one
    # collide with world
    @body.collideWorldBounds = true
    # don't let bullet physics push ya back
    @body.immovable = true
    # set anchor to horizontal center so sprite flips around its middle
    @anchor.setTo .5, 1
    # flip sprite if is player two
    @scale.x = if @is_player_one then -1 else 1

    # direction object
    @direction =
      up: false
      down: false
      left: false
      right: false

    # aim object
    @aim =
      up: false
      down: false

    # movement vars
    @time = Date.now()
    @moving = false
    @dead = false

    # frame vars
    @gun_pos = ['low','medlow','med','medhigh','high']
    @leg_pos = ['two','one','cross']
    @gun_pos_index = 2
    @leg_pos_index = 1

    # hud vars
    @wins = 0
    @num_bullets = 6
    @bullets = new Bullets @game, @game_state, @

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
      @body.y -= DELTA if @direction.up    and @body.y > @game_state.ceiling.y
      @body.y += DELTA if @direction.down  and @body.y < @game_state.floor.y - @body.height
      if @is_player_one
        @body.x -= DELTA if @direction.left  and @body.x > 0
        @body.x += DELTA if @direction.right and @body.right < @game_state.left_wall.body.x
      else
        @body.x -= DELTA if @direction.left  and @body.x > @game_state.right_wall.body.x
        @body.x += DELTA if @direction.right and @body.x < @game.width - @body.width
      # @animate_aim_up()  if @aim.up
      # @animate_aim_down() if @aim.down
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

  aim_up:         -> @animate_aim_up()
  aim_down:       -> @animate_aim_down()
  # aim_up:         -> @aim.up          = true
  # aim_down:       -> @aim.down        = true
  # aim_up_off:     -> @aim.up          = false
  # aim_down_off:   -> @aim.down        = false

  # full ammo!
  reload:         -> @num_bullets = 6

  # handle aiming animations
  animate_aim_up: ->
    current_frame = @animations.currentFrame.name
    @gun_pos_index += 1 if @gun_pos_index < @gun_pos.length - 1

    for pos, index in @leg_pos
      @leg_pos_index = index
      break if current_frame.match pos

    @animations.stop()
    @animations.play "move-#{@gun_pos[@gun_pos_index]}"
    @animations.next @leg_pos_index

  animate_aim_down: ->
    current_frame = @animations.currentFrame.name
    @gun_pos_index -= 1 if @gun_pos_index > 0

    for pos, index in @leg_pos
      @leg_pos_index = index
      break if current_frame.match pos

    @animations.stop()
    @animations.play "move-#{@gun_pos[@gun_pos_index]}"
    @animations.next @leg_pos_index

  # shoot!
  shoot: ->
    if @num_bullets > 0
      @num_bullets -= 1
      @bullets.shoot()

  setupControls: ->
    # map control keys
    controls = if @is_player_one then PLAYER_ONE_CONTROLS else PLAYER_TWO_CONTROLS
    _.each controls, (key, action) =>
      input = @game_state.input.keyboard.addKey Phaser.Keyboard[key]
      input.onDown.add => @[action]()
      input.onDown.add => @moving = true if action.match 'move'
      input.onUp.add   => @["#{action}_off"]() if action.match 'move'
      # input.onUp.add   => @["#{action}_off"]()

  setupAnimations: ->
    # die animations
    @animations.add 'die', [

    ], FRAMERATE, false

    # move animatinos
    @animations.add 'move-high', [
      'cowboy/high/two'
      'cowboy/high/one'
      'cowboy/high/cross'
      'cowboy/high/one'
    ], FRAMERATE, true
    @animations.add 'move-low', [
      'cowboy/low/two'
      'cowboy/low/one'
      'cowboy/low/cross'
      'cowboy/low/one'
    ], FRAMERATE, true
    @animations.add 'move-medhigh', [
      'cowboy/medhigh/two'
      'cowboy/medhigh/one'
      'cowboy/medhigh/cross'
      'cowboy/medhigh/one'
    ], FRAMERATE, true
    @animations.add 'move-medlow', [
      'cowboy/medlow/two'
      'cowboy/medlow/one'
      'cowboy/medlow/cross'
      'cowboy/medlow/one'
    ], FRAMERATE, true
    @animations.add 'move-med', [
      'cowboy/med/two'
      'cowboy/med/one'
      'cowboy/med/cross'
      'cowboy/med/one'
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
        on_die: (event, from, to) => @dead = false

module.exports = Cowboy
