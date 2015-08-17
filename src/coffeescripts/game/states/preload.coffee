class Preload
  constructor: ->

  create: ->
    @load.crossOrigin = @game.hosturl  unless @game.cdn is '/'

    # LOAD STUFFS
    CDN = @game.cdn
    # SPRITES
    # atlas(key, textureURL, atlasURL, atlasData, format)
    texture_url = '../../../images/atlas.png'
    atlas_data = require '../constants/atlas.coffee'
    # jsonAtlas = JSON.stringify atlasData
    @load.atlasJSONHash 'atlas', texture_url, null, atlas_data

    # _.each @game.constants.SPRITES, (sprite) =>
    #   key = sprite.key
    #   atlas_url = "#{CDN}#{sprite.atlas_url}"
    #   atlas_data = sprite.atlas_data
    #   # atlasJSONHash(key, textureURL, atlasURL, atlasData)
    #   asset = @load.atlasJSONHash key, null, atlas_url, atlas_data

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
