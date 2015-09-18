When = require 'when'
Bullets = require './Bullets.coffee'
Ammo = require './Ammo.coffee'
Text = require './Text.coffee'
StateMachine = require 'javascript-state-machine'

# POSITION CONSTANTS
PLAYER_ONE_X = 200
PLAYER_ONE_Y = 495
PLAYER_TWO_X = 888
PLAYER_TWO_Y = 495

# MOVEMENT CONSTANTS
SPEED = 60
DELTA = 15
FRAMERATE = 7

# CONTROL CONSTANTS
PLAYER_ONE_CONTROLS =
  move_up: 'W'
  move_down: 'S'
  move_left: 'A'
  move_right: 'D'
  aim_up: 'Q'
  aim_down: 'E'
  shoot: 'F'

PLAYER_TWO_CONTROLS =
  move_up: 'I'
  move_down: 'K'
  move_left: 'J'
  move_right: 'L'
  aim_up: 'O'
  aim_down: 'U'
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
    @input_disabled = true

    # frame vars
    @gun_pos = ['low','medlow','med','medhigh','high']
    @leg_pos = ['two','one','cross']
    @gun_pos_index = 2
    @leg_pos_index = 1

    # hud vars
    @wins = 0
    @num_bullets = 6
    @bullets = new Bullets @game, @game_state, @
    @ammo = new Ammo @game, @game_state, @

    # text for die state
    @text = new Text @game, @game_state, 'got me'

    # setup controls
    @setupControls() unless @game_state.is_intro
    # setup animations
    @setupAnimations()
    # create state machine
    @createStateMachine()

    # clean up
    @game.add.existing @
    @kill()

    return @

  runIntro: (cb) ->
    @intro_callback = cb
    @reload()
    @kill()
    if @is_player_one
      @reset(-48, PLAYER_ONE_Y)
      @direction.right = true
    else
      @reset(1136 , PLAYER_TWO_Y)
      @direction.left = true

    if @game_state.is_intro
      @in_intro_loop = true
      @gun_pos_index = 0
    else
      @in_intro_cutscene = true
      @gun_pos_index = 2

    @moving = true

  update: ->
    # handle incremental movement
    if @state.current != 'dying' and (!@input_disabled or (@in_intro_cutscene or @in_intro_loop))
      current_time = Date.now()
      if current_time - @time > SPEED
        @body.y -= DELTA if @direction.up    and @body.y > @game_state.ceiling.y and !@in_intro_cutscene
        @body.y += DELTA if @direction.down  and @body.y < @game_state.floor.y - @body.height and !@in_intro_cutscene
        if @is_player_one
          @body.x -= DELTA if @direction.left  and @body.x > @game_state.left_wall_outer.body.x
          @body.x += DELTA if @direction.right and @body.right < @game_state.left_wall.body.x

          # handle intro cutscene (between rounds)
          if @in_intro_cutscene and @body.right >= PLAYER_ONE_X
            @in_intro_cutscene = false
            @direction.right = false
          # hanlde looping intro (game start and game over)
          if @in_intro_loop and @body.x >= PLAYER_ONE_X
            @in_intro_loop = false
            @direction.right = false

        else
          @body.x -= DELTA if @direction.left  and @body.x > @game_state.right_wall.body.x
          @body.x += DELTA if @direction.right and @body.right < @game_state.right_wall_outer.body.x
          if @in_intro_cutscene and @body.x <= PLAYER_TWO_X
            @in_intro_cutscene = false
            @direction.left = false
            @intro_callback() # call the intro callback
        # @animate_aim_up()  if @aim.up
        # @animate_aim_down() if @aim.down
        @time = current_time

      # is the player moving?
      @moving = false unless @direction.up || @direction.down || @direction.left || @direction.right

      # trigger move animation
      @move() if  @moving and @state.current != 'moving'
      @idle() if !@moving and @state.current != 'idle'

    # handle dying sequence
    else
      # show "GOT ME!" text
      current_frame = @animations.currentFrame.name
      if current_frame is 'cowboy/dead/rip' and !@text.visible
        x = if @is_player_one then @body.right - @text.width / 2 else @body.x - @text.width / 2
        y = @body.y
        @text.place x, y
        @text.show()

      # reset the players

  # disable / enable movement
  enableInput: -> @input_disabled = false
  disableInput: -> @input_disabled = true
  toggleInput: -> @input_disabled = !@input_disabled

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
  reload: ->
    @num_bullets = 6
    @ammo.reload()
    b.kill() for b in @bullets.children

  # handle aiming animations
  animate_aim_up: ->
    unless @in_intro_cutscene
      current_frame = @animations.currentFrame.name
      @gun_pos_index += 1 if @gun_pos_index < @gun_pos.length - 1

      for pos, index in @leg_pos
        @leg_pos_index = index
        break if current_frame.match pos

      @animations.stop()
      @animations.play "move-#{@gun_pos[@gun_pos_index]}"
      @animations.next @leg_pos_index

  animate_aim_down: ->
    unless @in_intro_cutscene
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
    if @num_bullets > 0 and !@input_disabled
      @num_bullets -= 1
      @ammo.crop()
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
    # die animation
    @animations.add 'die', [
      'cowboy/dead/hit'
      'cowboy/dead/hit'
      'cowboy/dead/hit'
      'cowboy/dead/hit'
      'cowboy/dead/hit'
      'cowboy/dead/hit'
      'cowboy/dead/rip'
      'cowboy/dead/rip'
      'cowboy/dead/rip'
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
        on_die: (event, from, to)  => @play "die"

module.exports = Cowboy
