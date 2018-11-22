import React from 'React'

class GameWelcome extends React.Component {
  render () {
    return (
      <div>
        <div className='page-intro text-center'>
            <h1>Play Five-In-A-Row game online.</h1>
            <p>
              Your goal in Five-in-a-row (Gomoku) is to get 5 X's in a row while preventing your opponent from getting 5 O's in a row.
            </p>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-6'>
                <div className='action-box'>
                  <div className='action-box__body'>
                    <h2>New players</h2>
                    <p>Register to track wins.</p>
                    <div className='row'>
                      <div className="col-xs-12 col-sm-6">
                          <input type='text' placeholder='Player 1'/>
                      </div>
                      <div className="col-xs-12 col-sm-6">
                          <input type='text' placeholder='Player 2'/>
                      </div>
                    </div>
                  </div>
                  <div className='action-box__footer'>
                    <a href='/' className='btn'>
                      <span>
                        Go to game settings
                      </span>
                    </a>
                  </div>
                </div>
            </div>
            <div className='col-xs-12 col-sm-6'>
                <div className='action-box'>
                  <div className='action-box__body'>
                    <h2>Login</h2>
                    <div className='row'>
                      <div className="col-xs-12 col-sm-6">
                          <input type='text' placeholder='Player 1'/>
                      </div>
                      <div className="col-xs-12 col-sm-6">
                          <input type='text' placeholder='Player 2'/>
                      </div>
                    </div>
                  </div>
                  <div className='action-box__footer'>
                    <a href='/' className='btn'>
                      <span>
                        Go to game settings
                      </span>
                    </a>
                  </div>
                </div>
            </div>
      </div>
    )
  }
}

export default GameWelcome
