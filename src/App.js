import React from 'react'
import _ from 'lodash'


import Board from './Board'
import GameOptions from './GameOptions'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      size: 5,
      win: 5,
    }
  }

  render () {
    return (
      <div className='App'>
        <div className='app-bg'></div>
        <div className='wrapper'>
          <div className='site-content'>
            <div className='row between-xs middle-xs'>
              <div className='col-xs'>
                <div className='site-title text-left'>
                  <h1>gomoku</h1>
                  <a href='/' title='Go back to welcome page'>
                    <i className='icon-logout'></i>
                  </a>
                </div>
              </div>
              <div className='col-xs'>
                <div className="toolbar toolbar-right">
                  <button type='button'>
                    <i className='icon-refresh'></i>
                    <span>New game</span>
                  </button>
                </div>
              </div>
            </div>
            <Board size={this.state.size} win={this.state.win} />
            {/* <Route path="/welcome" component={GameWelcome} /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default App
