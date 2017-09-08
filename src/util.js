function repeatsTimes (arr, val, times) {
  let r = 0
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === val) {
      ++r
    } else {
      r = 0
    }
    if (r === times) {
      return true
    }
  }
  return false
}

export {repeatsTimes}
