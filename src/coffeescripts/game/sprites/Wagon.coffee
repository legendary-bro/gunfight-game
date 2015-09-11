SPEED = 300
DELTA = 15

class Wagon extends Phaser.Sprite
  constructor: (@game, @game_state) ->
    key = 'atlas'
    frame = 'wagon'
    # super @game, 500, 816 - 96
    super @game, 500, 675, key, frame

    # set physics body
    @game.physics.enable @, Phaser.Physics.ARCADE
    @body.immovable = true

    @rolling = false
    @direction = 'up'
    @time = Date.now()

    # clean up
    @game.add.existing @
    @kill()

    return @

  revive: -> @reset 500, 675

  roll: -> @rolling = true

  stop: -> @rolling = false

  start: ->
    @revive()
    @roll()

  update: ->
    current_time = Date.now()
    if @rolling and (current_time - @time) > SPEED
      @direction = 'up' if @direction is 'down' and @body.y >= 675
      @direction = 'down' if @direction is 'up' and @body.y <= 45
      sign = if @direction is 'up' then -1 else 1

      @body.y += sign * DELTA

      # console.log @time
      @time = current_time

module.exports = Wagon
