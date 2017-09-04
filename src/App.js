import React from 'react'

import Board from './Board'
import restartIcon from './media/restart.svg'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='wrapper'>
          <div className='site-content'>
            <h1>GoMoku Game</h1>
            <div className='board-container'>
              <Board />
            </div>
            <div className='info-container'>
              <small>Your goal in Five-in-a-row is to get five X's in a
               row while preventing your opponent from getting five O's in a row.</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
