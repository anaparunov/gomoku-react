import React from 'react'

import Board from './Board'
import restartIcon from './media/restart.svg'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='wrapper'>
          <div className='site-content'>
            <div className='site-header'>
              <h1>GoMoku Game</h1>
              <p className="board-controls">
                <span>Board size : input</span>
                <span>Win criteria: input</span>
              </p>
            </div>
            <Board />
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
