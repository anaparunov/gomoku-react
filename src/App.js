import React from 'react'
import _ from 'lodash'

import Board from './Board'
import restartIcon from './media/restart.svg'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      size: 20,
      win: 5,
    }
    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.handleWinChange = this.handleWinChange.bind(this)
  }

  handleSizeChange (e) {
    this.setState({
      size: _.toInteger(e.target.value),
    })
  }

  handleWinChange (e) {
    this.setState({
      win: _.toInteger(e.target.value),
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='wrapper'>
          <div className='site-content'>
            <div className='site-header'>
              <h1>GoMoku Game</h1>
              <p className="board-controls">
                <span>Board size :  <input type="number" min={this.state.win} max="30" value={this.state.size} onChange={this.handleSizeChange} /></span>
                <span>Win criteria: <input type="number" min="3" max={this.state.size} value={this.state.win} onChange={this.handleWinChange} /></span>
              </p>
            </div>
            <Board size={this.state.size} win={this.state.win} />
          </div>
          <small>
            <strong>INSTRUCTIONS: </strong>Your goal in Five-in-a-row is to get five X's in a
            row while preventing your opponent from getting five O's in a row.
          </small>
        </div>
      </div>
    )
  }
}

export default App
