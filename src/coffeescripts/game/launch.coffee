$window = $(window)

# mobile flag
isMobile = ->
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    true
  else
    false

launch = (cdn="/", version="?v=0.0.0") ->

  # 4:3
  game_width = 1088
  game_height = 816

  # Construct Game
  game = new Phaser.Game(
    game_width,   # width
    game_height,  # height
    Phaser.AUTO,  # renderer
    'game',       # ID of parent element
    'boot',       # state
    false,        # transparent
    false,        # antialias
    null          # physicsConfig
  )

  # cdn
  game.cdn = cdn
  game.hosturl = undefined #hosturl

  # game version
  game.version = version

  # debug
  game.debugMode = false
  # game.debugMode = true

  game.enableMusic = !game.debugMode
  game.enableSFX = !game.debugMode

  # constants
  game.constants =
    STATES: ['boot', 'preload', 'intro', 'game', 'reset']
    LEVELS: require 'coffeescripts/game/constants/levels'
    SFX: require 'coffeescripts/game/constants/sfx'

  # default level
  game.level = 1
  # default scores
  game.score_player_one = 0
  game.score_player_two = 0

  # keep the game within the page
  game.scaler = ->
    $game = $("#game")
    $canvas = $("canvas")
    $window = $(window)

    if !isMobile()
      $game = $("#game")
      $canvas = $("canvas")
      $window = $(window)

      if $game.height() > $window.height() - 150
        $game.css("max-height", ($window.height() - 150) + "px")
      else
        $game.css("max-height", "auto")

  # require states and boot!
  game.state.add state, require("./states/#{state}.coffee") for state in game.constants.STATES
  game.state.start 'boot'

module.exports = launch
