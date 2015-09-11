class Wagon extends Phaser.Sprite
  constructor: (@game, @game_state) ->
    key = 'atlas'
    frame = 'wagon'
    super @game, 500, 816 - 96

    # set physics body
    @game.physics.enable @, Phaser.Physics.ARCADE
    @body.immovable = true

    # clean up
    @game.add.existing @
    # @kill()

    return @

  revive: -> @reset 500, 816 - 96

  roll: ->

  stop: ->

module.exports = Wagon
