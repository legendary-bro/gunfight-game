Cactus = require './Cactus.coffee'
Tree = require './Tree.coffee'

# game width, height = 1088, 816
# cactus width, height = 32, 88
# tree width, height = 64, 108

CACTUS_POSITIONS =
  top_left: { x: 0, y: 0 }
  top_right: { x: 0, y: 0 }
  center_left: { x: 500, y: 300 }
  center: { x: 528, y: 300 }
  center_right: { x: 600, y: 300 }
  bottom_left: { x: 0, y: 0 }
  bottom_right: { x: 0, y: 0 }

POSITIONS =
  top_left: { x: 0, y: 0 }
  top_right: { x: 0, y: 0 }
  bottom_left: { x: 0, y: 0 }
  bottom_right: { x: 0, y: 0 }

POSITION_KEYS = [
  "top_left"
  "top_right"
  "bottom_left"
  "bottom_right"
]

class TerrainGroup extends Phaser.Group
  constructor: (@game, @game_state, @level_data={}) ->
    super @game, null, 'TerrainGroup'
    @build()

    # add to game
    @game.add.existing @

  # remove terrain sprites
  reset: -> @removeChildren()

  # build a new set of terrain sprites
  build: (level_data=@level_data) ->
    # overwrite the level_data
    @level_data = level_data
    # determine if level has a wagon
    @is_wagon = @level_data.wagon
    @num_cactus = @level_data.num_cactus
    @num_tree = @level_data.num_tree
    # determine positions to pluck from
    @positions = POSITION_KEYS
    _.shuffle @positions
    @cactus_positions = if @is_wagon then ['center_left', 'center_right'] else ['center']
    _.shuffle @cactus_positions
    # add terrain children to the group
    @addCactus() for cactus in [0...@num_cactus]
    @addTree()   for tree in [0...@num_tree]

  addCactus: ->
    pos = @getTerrainPosition 'cactus'
    @add new Cactus @game, @game_state, pos.x, pos.y

  addTree: ->
    pos = @getTerrainPosition 'tree'
    @add new Tree @game, @game_state, pos.x, pos.y

  getTerrainPosition: (key) ->
    pos = undefined
    switch key
      when 'cactus'
        if @cactus_positions.length > 0
          pos_key = @cactus_positions.pop()
          pos = CACTUS_POSITIONS[pos_key]
        else
          pos_key = @positions.pop()
          pos = POSITIONS[pos_key]
      when 'tree'
        pos_key = @positions.pop()
        pos = POSITIONS[pos_key]
    return pos

module.exports = TerrainGroup
