Terrain = require './terrain.coffee'

class Cactus extends Terrain
  constructor: (@game, @game_state, x=0, y=0) ->
    super @game, @game_state, x, y, 'cactus'

module.exports = Cactus
