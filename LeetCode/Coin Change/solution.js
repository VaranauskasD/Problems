const coinChange = (coins, amount) => {
  dp = [0]
  for (let i = 1; i < amount + 1; i++) {
    dp[i] = amount + 1
  }

  for (let i = 1; i < amount + 1; i++) {
    coins.forEach((c) => {
      if (i - c >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - c])
      }
    })
  }

  return dp[amount] != amount + 1 ? dp[amount] : -1
}
