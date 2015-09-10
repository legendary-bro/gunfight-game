Terrain = require './terrain.coffee'

class Tree extends Terrain
  constructor: (@game, @game_state, x=0, y=0) ->
    super @game, @game_state, x, y, 'tree'

module.exports = Tree
