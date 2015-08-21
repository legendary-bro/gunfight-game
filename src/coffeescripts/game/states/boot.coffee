class Boot
  constructor: ->

  create: ->
    # set background color to black
    @game.stage.backgroundColor = '#000000'

    # Scale the game in the browser
    @scale.pageAlignHorizontally = true
    @scale.scaleMode = Phaser.ScaleManager.SHOW_ALL

    # start preload
    @state.start 'preload'

  preload: ->
    # set intial scale
    @game.scaler()

module.exports = Boot
