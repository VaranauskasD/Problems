// Create a lookup hash, subtract, lookup without duplicates

const twoSum = (numbers, target) => {
  const hash = {}
  numbers.forEach((n, key) => (hash[n] = key))
  let res = []
  numbers.forEach((n, index) => {
    if (hash[target - n] && hash[target - n] !== index) {
      res = [
        Math.min(index + 1, hash[target - n] + 1),
        Math.max(index + 1, hash[target - n] + 1),
      ]
    }
  })
  return res
}
