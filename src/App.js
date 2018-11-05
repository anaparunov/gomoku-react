import React from 'react'
import _ from 'lodash'

import Board from './Board'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      size: 5,
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
              <div className='col-xs toolbar toolbar-right'>
                <div className='controls'>
                  <button type='button'>
                    <i className='icon-refresh'></i>
                    <span>New game</span>
                  </button>

                  <span className='label'>
                    <i className='icon-size'></i>
                    <input type='number' min={this.state.win} max='30' value={this.state.size} onChange={this.handleSizeChange} />
                  </span>
                  <span className='label'>
                    <i className='icon-trophy'></i>
                    <input type='number' min='3' max={this.state.size} value={this.state.win} onChange={this.handleWinChange} />
                  </span>
                </div>
              </div>
            </div>
            <Board size={this.state.size} win={this.state.win} />

            {/* STATS PAGE */}
            <div className='row'>
              <div className='col-xs-12'>
                <div className='stats'>
                  <h1>Stats.</h1>
                  <div className='table'>
                    <div className='table-head'>
                      <div className='table-row'>
                        <div className='table-col text-left'>
                          #
                        </div>
                        <div className='table-col text-right'>
                          <i className='icon-trophy'></i>
                        </div>
                      </div>
                    </div>
                    <div className='table-row'>
                      <div className='table-col text-left'>
                        <span>
                          1.
                        </span>
                        <span>
                          PLAYER
                        </span>
                      </div>
                      <div className='table-col text-right'>
                        <span>
                          10
                        </span>
                      </div>
                    </div>
                    <div className='table-row'>
                      <div className='table-col text-left'>
                        <span>
                          2.
                        </span>
                        <span>
                          Player 2
                        </span>
                      </div>
                      <div className='table-col text-right'>
                        <span>
                          13
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SET GAME OPTIONS PAGE */}
          <div className='page-intro text-center'>
            <h1>Set game options</h1>
            <p>
              You can always change this later.
            </p>
          </div>
          <div className='row'>
            <div className='col-xs-12'>
              <div className='action-box'>
                <div className='action-box__body'>
                  <div className='settings-item'>
                    <i className='icon-size'></i>
                    <span>Board size</span>
                    <input type='number' min={this.state.win} max='20' value={this.state.size} onChange={this.handleSizeChange} />
                  </div>
                  <div className='settings-item'>
                    <i className='icon-trophy'></i>
                    <span>
                    Win criteria
                    </span>
                    <input type='number' min='3' max={this.state.size} value={this.state.win} onChange={this.handleWinChange} />
                  </div>
                </div>
                <div className='action-box__footer'>
                  <a href='/' className='btn'>
                    <span>
                      PLAY
                    </span>
                    <i className='icon-play'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* WELCOME PAGE */}
          <div className='page-intro text-center'>
            <h1>Play Five-In-A-Row game online.</h1>
            <p>
              Your goal in Five-in-a-row (Gomoku) is to get 5 X's in a row while preventing your opponent from getting 5 O's in a row.
            </p>
          </div>
          <div className='row'>
            <div className='col-xs-6'>

            </div>
            <div className='col-xs-6'>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App
