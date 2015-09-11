# DRAW, GAME, GET_READY, GOT_ME, GUN_FIGHT, INSERT_COIN, OVER

class Text extends Phaser.Sprite
  constructor: (@game, @game_state, frame, x=0, y=0) ->
    key = 'atlas'
    frame = String frame
    super @game, x, y, key, "text/#{frame.replace(' ','_').toUpperCase()}"

    # clean up
    @game.add.existing @
    @hide()

  place: (x, y) ->
    @x = x
    @y = y

  show: -> @reset @x, @y

  hide: -> @kill()

module.exports = Text
