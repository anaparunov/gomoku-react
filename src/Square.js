import React from 'react'

function xMark () {
  return (
    <span className='x' />
  )
}

function oMark () {
  return (
    <span className='o' />
  )
}

const X = 1
const O = 2

class Square extends React.Component {
  render () {
    let mark
    if (this.props.mark === X) {
      mark = xMark()
    } else if (this.props.mark === O) {
      mark = oMark()
    } else {

    }

    return (
      <button className='btn btn---board' onClick={() => this.props.click()}>
        {mark}
      </button>
    )
  }
}

export default Square
export {X, O}
