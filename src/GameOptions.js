import React from 'react'
import _ from 'lodash'

class GameOptions extends React.Component {
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
      <div>
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
      </div>
    )
  }
}

export default GameOptions
