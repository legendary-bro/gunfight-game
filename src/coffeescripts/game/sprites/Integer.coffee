Text = require './Text.coffee'

class Digit extends Text
  constructor: (@game, @game_state, frame, x=0, y=0) ->
    super @game, @game_state, frame, x, y

class Integer
  constructor: (@game, @game_state, @start_value=0, @x=0, @y=0) ->
    @value = @start_value

    @left_digits = {}
    @left_digits[d] = new Digit @game, @game_state, d, @x, @y for d in [1..9]
    # @left_digits[0].exists = false # blank out the zero

    @right_digits = {}
    @right_digits[d] = new Digit @game, @game_state, d, @x + 32, @y for d in [0..9]

    @left_digit = undefined
    @right_digit = undefined

    @hidden = true
    @setValue()

  hideAllLeft: -> @left_digits[d].hide() for d in [0..9]
  hideAllRight: -> @right_digits[d].hide() for d in [0..9]

  hideLeft: -> @left_digit.hide() if @left_digit
  hideRight: -> @right_digit.hide()

  showLeft: -> @left_digit.show() if @left_digit
  showRight: -> @right_digit.show()

  hide: ->
    @hidden = true
    @hideLeft()
    @hideRight()

  show: ->
    @hidden = false
    @showLeft()
    @showRight()

  setValue: (val=@start_value) ->
    @value = val
    @left_digit.hide() if @left_digit
    @right_digit.hide() if @right_digit
    # handle single digit start value
    if @value < 10
      @left_digit = @undefined
      @right_digit = @right_digits[String(@value).split('')[0]]
    else
      @left_digit = @left_digits[String(@value).split('')[0]]
      @right_digit = @right_digits[String(@value).split('')[1]]
    @show() unless @hidden

  resetValue: (val) -> @setValue(@start_value)
  inc: (n=1) -> @increment(n)
  dec: (n=1) -> @decrement(n)
  increment: (n=1) -> @setValue(@value + n)
  decrement: (n=1) -> @setValue(@value - n)

module.exports = Integer
