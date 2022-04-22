// Map array to a hash containing quantities, translate to a tuple array, sort based on the quantity

const topKFrequent = (nums, k) => {
  const obj = {}
  nums.forEach((num) => {
    if (!obj[num]) obj[num] = 0
    obj[num]++
  })

  const temp = []
  for (key in obj) {
    temp.push([key, obj[key]])
  }

  temp.sort((a, b) => b[1] - a[1])

  const res = []
  for (let i = 0; i < k; i++) {
    res.push(temp[i][0])
  }
  return res
}
