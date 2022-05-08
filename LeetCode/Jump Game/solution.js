// Iterate from front to back validating each position and ensuring that a jump
// is possible and if there is a position of 0 store the index value and use it
// to compare with the next non zero value to see if the index above 0 is reachable

const canJump = (nums) => {
  let index = nums.length - 1,
    temp = null,
    possible = true
  while (index > 0) {
    if (!temp && nums[index - 1] === 0) {
      temp = index - 1
      possible = false
      index--
    } else if (temp) {
      if (nums[index - 1] > temp - index + 1) {
        temp = null
        possible = true
      }
      index--
    } else {
      index--
    }
  }
  return possible
}
