class Terrain extends Phaser.Sprite
  constructor: (@game, @game_state, x=0, y=0, frame='cactus') ->
    key = 'atlas'
    frame = "terrain/#{frame}"
    super @game, x, y, key, frame

    # set physics body
    @game.physics.enable @, Phaser.Physics.ARCADE
    @body.immovable = true

    # clean up
    @game.add.existing @

    # add crop rect
    @cropRect = @game.add.graphics()

    return @

  deform: (collision_y) ->
    height = collision_y - @y
    # deform body
    @body.setSize @width, @height - height, 0, height
    @drawRect height

  reload: -> @cropRect.clear()

  drawRect: (height) ->
    @cropRect.lineStyle 0
    @cropRect.beginFill "0x000000"
    @cropRect.drawRect @x, @y, @width, height
    @cropRect.endFill()
    @game.world.bringToTop @cropRect

module.exports = Terrain
