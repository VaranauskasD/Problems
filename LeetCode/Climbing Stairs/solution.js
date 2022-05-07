// Using DP the problem breaks down to a fibonnachi sequence,
// as the bottom steps' branches' totals can be used to calculate the total of all the posibilities
// wip

const climbStairs = (n) => {
  let step_current = 0,
    step_next = 1
  for (let i = 0; i < n; i++) {
    let temp = step_next
    step_next = step_next + step_current
    step_current = temp
  }
  return step_next
}
