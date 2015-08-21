class Preload
  constructor: ->

  preload: ->
    @load.crossOrigin = @game.hosturl unless @game.cdn is '/'

    # LOAD STUFFS
    CDN = @game.cdn
    # SPRITES
    key = 'atlas'
    texture_url = "#{CDN}images/atlas.png"
    atlas_data = require '../constants/atlas.coffee'
    @load.atlasJSONHash key, texture_url, null, atlas_data

    # SFX
    _.each @game.constants.SFX, (sfx) =>
      asset = @load.audio sfx,
      ["#{CDN}audio/#{sfx}.mp3#{@game.version}",
      "#{CDN}audio/#{sfx}.ogg#{@game.version}"]
      asset.crossOrigin = @load.crossOrigin  unless @game.cdn is '/'

  update: ->
    if @game.debugMode
      @state.start 'game'
    else
      @state.start 'intro'

module.exports = Preload
