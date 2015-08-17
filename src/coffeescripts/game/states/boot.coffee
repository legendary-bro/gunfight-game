class Boot
  constructor: ->

  create: ->
    #@scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
    #@scale.scaleMode = Phaser.ScaleManager.RESIZE
    @scale.scaleMode = Phaser.ScaleManager.SHOW_ALL

    # start preload
    @state.start 'preload'
    @scale.refresh()

  preload: ->
    # set intial scale
    @game.scaler()

module.exports = Boot
