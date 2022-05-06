// After confirming a solution is present iterate over the gas array using a greedy total to find
// the first index that does not go below 0 and return it

const canCompleteCircuit = (gas, cost) => {
  let total = 0,
    ans = -1
  if (gas.reduce((acc, a) => acc + a) >= cost.reduce((acc, a) => acc + a)) {
    for (let i = 0; i < gas.length; i++) {
      total += gas[i] - cost[i]
      if (total < 0) {
        total = 0
        ans = -1
      } else if (ans < 0) {
        ans = i
      }
    }
  }
  return ans
}
