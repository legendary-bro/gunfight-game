module.exports = class Floor extends Phaser.Sprite
  constructor: (@game, y_offset=0) ->
    super @game, 0, @game.height + y_offset
    @game.physics.enable @, Phaser.Physics.ARCADE
    @body.setSize @game.world.width, 1, 0, 0
    @body.allowGravity = false
    @body.immovable = true
    @game.add.existing @
