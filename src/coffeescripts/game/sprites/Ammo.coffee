class Ammo extends Phaser.Sprite
  constructor: (@game, @game_state, @player) ->
    key = 'atlas'
    frame = 'ammo'
    x = if @player.is_player_one then 92 else 816
    y = @game.height - 45
    super @game, x, y, key, frame

    # clean up
    @game.add.existing @

    # add crop rect
    @cropRect = @game.add.graphics()

    return @

  crop: ->
    width = @width - @player.num_bullets / 6 * @width
    @drawRect width

  reload: -> @cropRect.clear()

  drawRect: (width) ->
    @cropRect.lineStyle 0
    @cropRect.beginFill "0x000000"
    @cropRect.drawRect @x, @y, width, @height
    @cropRect.endFill()

module.exports = Ammo
