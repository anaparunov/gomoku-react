import React from 'react'
import _ from 'lodash'

import Square, {X, O} from './Square'
import {repeatsTimes} from './util'

const SIZE = 20
const WIN = 5

class Board extends React.Component {
  constructor () {
    super()
    const board = _.times(SIZE, () => _.times(SIZE, _.constant(null)))
    this.state = {
      board,
      current: X,
      prev: [],
      won: null,
    }
    this.click = this.click.bind(this)
    this.log = this.log.bind(this)
    this.process = this.process.bind(this)
    this.win = this.win.bind(this)
    this.won = this.won.bind(this)
  }

  log () {
    const {board} = this.state
    console.log(_.join(_.map(board, function (row) {
      return _.join(_.map(row, function (col) {
        if (col === null) {
          return 0
        }
        return col
      }), ' ')
    }), '\n'))
  }

  warn () {
    // when clicking existing
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
    const range = _.range(-WIN + 1, WIN)
    return _.some([
      repeatsTimes(_.map(range, function (i) {
        return _.get(board, [x, y - i])
      }), mark, WIN), // N-S
      repeatsTimes(_.map(range, function (i) {
        return _.get(board, [x + i, y - i])
      }), mark, WIN), // NE-SW
      repeatsTimes(_.map(range, function (i) {
        return _.get(board, [x + i, y])
      }), mark, WIN), // E-W
      repeatsTimes(_.map(range, function (i) {
        return _.get(board, [x + i, y + i])
      }), mark, WIN), // SE-NW
    ])
  }

  play (x, y) {
    const {board, current} = this.state
    const prev = _.concat(this.state.prev, board)
    if (board[x][y]) {
      return false
    }

    board[x][y] = current
    this.setState({
      board,
      current: current === X ? O : X,
      prev,
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
    this.log()
  }

  render () {
    const click = this.click
    const {board, won} = this.state
    const current = this.state.current
    return (
      <div>
        <div className='board-container'>
          <div className={'board ' + this.state.current}>
            {_.map(_.range(0, SIZE), function (y) {
              return (
                <div className='board__row'>
                  {_.map(_.range(0, SIZE), function (x) {
                    return <Square mark={board[x][y]} click={function () {
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
          {current === X && <h2>PLAYERS MOVE: X</h2>}
          {current === O && <h2>PLAYERS MOVE: O</h2>}
          {won === X && <h1>X won</h1>}
          {won === O && <h1>O won</h1>}
          <small>Your goal in Five-in-a-row is to get five X's in a
           row while preventing your opponent from getting five O's in a row.</small>
        </div>
      </div>
    )
  }
}

export default Board
