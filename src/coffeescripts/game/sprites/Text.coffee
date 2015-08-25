class Text extends Phaser.Sprite
  constructor: (@game, frame, x=0, y=0) ->
    key = 'atlas'
    super @game, x, y, key, "text/#{frame}"

    # clean up
    @game.add.existing @
    @hide()

    return @

  place: (x, y) ->
    @x = x
    @y = y

  show: -> @reset @x, @y

  hide: -> @kill()

module.exports = Text
