import React from 'react'
import _ from 'lodash'

import Square, {X, O} from './Square'
import {repeatsTimes} from './util'

function log (board) {
  console.log(_.join(_.map(board, function (row) {
    return _.join(_.map(row, function (col) {
      if (col === null) {
        return 0
      }
      return col
    }), ' ')
  }), '\n'))
}

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.initialState()

    this.click = this.click.bind(this)
    this.initialState = this.initialState.bind(this)
    this.process = this.process.bind(this)
    this.replay = this.replay.bind(this)
    this.reset = this.reset.bind(this)
    this.undo = this.undo.bind(this)
    this.win = this.win.bind(this)
    this.won = this.won.bind(this)
  }

  componentWillReceiveProps () {
    this.reset()
  }

  initialState () {
    const {size} = this.props
    return {
      board: _.times(size, () => _.times(size, _.constant(null))),
      current: X,
      prevBoards: [],
      prevCurrent: O,
      won: null,
    }
  }

  reset () {
    this.setState(this.initialState())
  }

  undo () {
    const {prevBoards, prevCurrent} = this.state
    const board = _.last(prevBoards)
    this.setState({
      board,
      current: prevCurrent,
      prevBoards: _.dropRight(prevBoards),
      prevCurrent: prevCurrent === X ? O : X,
      won: null,
    })
  }

  replay () {
    const {board, prevBoards, current, prevCurrent, won} = this.state
    let i = 0
    const interval = setInterval(advance.bind(this), 500)
    function advance () {
      this.setState({
        board: prevBoards[++i] || board,
      })
      if (i === _.size(prevBoards)) {
        clearInterval(interval)
      }
    }
  }

  warn () {
    alert('STOP THAT')
  }

  win (mark) {
    if (mark === X) {
      alert('X wins')
    }
    if (mark === O) {
      alert('O wins')
    }
  }

  process (x, y) {
    const {board} = this.state
    const mark = board[x][y]
    const won = this.won(mark, x, y)
    if (won) {
      this.setState({
        won: mark,
      })
    }
  }

  won (mark, x, y) {
    const {board} = this.state
    const {win} = this.props
    const range = _.range(-win + 1, win)
    return _.some([
      repeatsTimes(_.map(range, function (i) {
        return _.get(board, [x, y - i])
      }), mark, win), // N-S
      repeatsTimes(_.map(range, function (i) {
        return _.get(board, [x + i, y - i])
      }), mark, win), // NE-SW
      repeatsTimes(_.map(range, function (i) {
        return _.get(board, [x + i, y])
      }), mark, win), // E-W
      repeatsTimes(_.map(range, function (i) {
        return _.get(board, [x + i, y + i])
      }), mark, win), // SE-NW
    ])
  }

  play (x, y) {
    const {board, current, prevBoards} = this.state
    if (board[x][y]) {
      return false
    }

    const prevCurrent = current
    prevBoards.push(_.cloneDeep(board))
    board[x][y] = current
    this.setState({
      board,
      current: current === X ? O : X,
      prevBoards,
      prevCurrent,
    })
    return true
  }

  click (x, y) {
    const valid = this.play(x, y)
    if (!valid) {
      this.warn()
      return
    }
    this.process(x, y)
    log(this.state.board)
  }

  render () {
    const click = this.click
    const {board, won, current} = this.state
    const {size} = this.props
    return (
      <div>
        <div className='board-container'>
          <div className={'board ' + this.state.current}>
            {_.map(_.range(0, size), function (y) {
              return (
                <div className='board__row'>
                  {_.map(_.range(0, size), function (x) {
                    return <Square mark={_.get(board, [x, y])} click={function () {
                      if (won) {
                        return
                      }
                      click(x, y)
                    }} />
                  })}
                </div>
              )
            })}
          </div>
        </div>
        <div className='info-container'>
          <div className='controls'>
            {current === X && <p className='label'>PLAYER TURN: X</p>}
            {current === O && <p className='label'>PLAYER TURN: O</p>}
            {won === X && <h1>X won</h1>}
            {won === O && <h1>O won</h1>}
            <button onClick={this.reset} className='btn btn--info'>
              Restart Game
            </button>
            {_.size(this.state.prevBoards) === 0 &&
            <button onClick={this.undo} className='btn btn--danger' disabled>
              Undo Last Move
            </button>}
            {_.size(this.state.prevBoards) > 0 &&
            <button onClick={this.undo} className='btn btn--danger'>
              Undo Last Move
            </button>}
            {this.state.won &&
              <button onClick={this.replay} className='btn btn--success'>
              Replay
            </button>}
          </div>
        </div>
      </div>
    )
  }
}

export default Board
