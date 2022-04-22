// Create a hashmap using a string character map as a key

const groupAnagrams = (strs) => {
  res = []
  resobj = {}

  strs.forEach((str) => {
    count = new Array(26).fill(0)

    let temp = [...str]
    temp.forEach((c) => {
      count[c.charCodeAt() - 'a'.charCodeAt()] += 1
    })

    if (!resobj[count]) resobj[count] = []
    resobj[count].push(str)
  })

  Object.values(resobj).forEach((val) => res.push(val))
  return res
}
