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
            <Board />
          </div>
        </div>
      </div>
    )
  }
}

export default App
