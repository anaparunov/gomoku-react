import React from 'react'

class Stats extends React.Component {
  render () {
    return (
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

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stats
