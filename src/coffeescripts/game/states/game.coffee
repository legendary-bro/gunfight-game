# SPRITES
Cowboy = require '../sprites/Cowboy.coffee'
# Bullet = require '../sprites/Bullet.coffee'
# Cactus = require '../sprites/Cactus.coffee'
# Tree   = require '../sprites/Tree.coffee'
# Wagon  = require '../sprites/Wagon.coffee'

# HUD
# Timer  = require '../sprites/Timer.coffee'
# Ammo   = require '../sprites/Ammo.coffee'


class Game
  constructor: ->

  create: ->
    # create the players
    @player_one = new Cowboy @game, @
    @player_two = new Cowboy @game, @, false


  start: ->

  update: ->

  setupLevel: ->

module.exports = Game
