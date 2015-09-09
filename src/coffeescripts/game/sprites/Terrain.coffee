class Terrain extends Phaser.Sprite
  constructor: (@game, @game_state, x=0, y=0, frame='cactus') ->
    key = 'atlas'
    frame = frame
    super @game, x, y, key, frame

    # clean up
    @game.add.existing @

    # draw crop rect
    @cropRect = @game.add.graphics 0, 0
    @cropRect.lineStyle 0
    @cropRect.beginFill "0x000000"
    @cropRect.drawRect @x, @y, @width, 0
    @cropRect.endFill()

    return @

  deform: (collision_y) ->
    height = collision_y - @y
    @drawRect height

  reload: -> @cropRect.clear()

  drawRect: (height) ->
    @cropRect.lineStyle 0
    @cropRect.beginFill "0x000000"
    @cropRect.drawRect @x, @y, @width, height
    @cropRect.endFill()

module.exports = Ammo
