//

const canPartition = (nums) => {
  sum = nums.reduce((acc, val) => acc + val, 0)
  if (sum % 2) return false

  let dp = new Set()
  dp.add(0)
  dp.add(1)
  target = sum / 2

  for (let i = nums.length - 1; i >= 0; i--) {
    nextDP = new Set()
    for (t in dp) {
      console.log(t)
      nextDP.add(t + nums[i])
      nextDP.add(t)
    }
    dp = nextDP
  }
  console.log(dp)
  return dp.has(target)
}
