// Iterate from front to back validating each position from the maximum index
// if the sum of the current index and the jump value at the position are greater or equal
// to the maximum set the maximum to current and move down checking

const canJump = (nums) => {
  let max = nums.length - 1
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= max) {
      max = i
    }
  }
  return max === 0
}
