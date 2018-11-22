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
              <div className='col-xs'>
                <div className="toolbar toolbar-right">
                  <button type='button'>
                    <i className='icon-refresh'></i>
                    <span>New game</span>
                  </button>
                  {/* <div className='game-settings'> */}
                  {/*   <button type='button' className='game-settings'> */}
                  {/*     Game settings <span>&#8595;</span> */}
                  {/*   </button> */}
                  {/*   <div className='game-settings__dropdown'> */}
                  {/*     <span className='label'> */}
                  {/*       <i className='icon-size'></i> */}
                  {/*       <input type='number' min={this.state.win} max='30' value={this.state.size} onChange={this.handleSizeChange} /> */}
                  {/*     </span> */}
                  {/*     <span className='label'> */}
                  {/*       <i className='icon-trophy'></i> */}
                  {/*       <input type='number' min='3' max={this.state.size} value={this.state.win} onChange={this.handleWinChange} /> */}
                  {/*     </span> */}
                  {/*   </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
            <Board size={this.state.size} win={this.state.win} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
