module.exports = class Wall extends Phaser.Sprite
  constructor: (@game, x_offset=0) ->
    super @game, x_offset, 0
    @game.physics.enable @, Phaser.Physics.ARCADE
    @body.setSize 1, @game.world.height, 0, 0
    @body.allowGravity = false
    @body.immovable = true
    @game.add.existing @
