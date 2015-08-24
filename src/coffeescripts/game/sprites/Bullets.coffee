# bullet position config
GUN_POS_CONFIG =
  high:    {x: 45, y: 15, deg: -52}
  medhigh: {x: 50, y: 35, deg: -26}
  med:     {x: 55, y: 46, deg: 0}
  medlow:  {x: 50, y: 75, deg: 22}
  low:     {x: 45, y: 88, deg: 42}

# speed of fired bullet
SPEED = 1000

class Bullet extends Phaser.Sprite
  constructor: (@game, @game_state, @player) ->
    key = 'atlas'
    frame = 'bullet'
    super @game, @player.body.x, @player.body.y, key, frame

    @game.physics.enable @

    # visibility var
    @time = Date.now()

    # bounce off surfaces
    @body.bounce.set 1

    # player
    @is_player_one = @player.is_player_one

    # bounds
    @outOfBoundsKill = true

    # clean up
    @game.add.existing @
    @kill()

    return @

  shoot: ->
    gun_pos = @player.gun_pos[@player.gun_pos_index]
    pos = GUN_POS_CONFIG[gun_pos]
    x = if @is_player_one then @player.body.right + pos.x else @player.body.x - pos.x
    y = @player.body.y + pos.y
    angle = if @is_player_one then pos.deg else 180 - pos.deg
    # revive the bullet
    @reset x, y
    # set velocity
    @game.physics.arcade.velocityFromAngle angle, SPEED, @body.velocity

class Bullets extends Phaser.Group
  constructor: (@game, @game_state, @player) ->
    super @game, null, 'bullets', false, true, Phaser.Physics.Arcade.Body
    @add new Bullet(@game, @game_state, @player) for n in [1..@player.num_bullets]

    @game.add.existing @

  shoot: -> @getFirstDead().shoot()

module.exports = Bullets
