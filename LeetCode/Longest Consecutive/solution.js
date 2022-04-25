// Sort and count up

const longestConsecutive = (nums) => {
  if (!nums.length) return 0
  nums.sort((a, b) => a - b)
  let count = 1,
    prev_count = 0
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      if (Math.abs(nums[i] - nums[i + 1]) === 1) {
        count++
      } else {
        if (count > prev_count) prev_count = count
        count = 1
      }
    }
  }
  if (count > prev_count) prev_count = count
  return prev_count
}
