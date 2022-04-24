// Time complexity would not change, thus not optimised validation

const isValidSudoku = (board) => {
  let flagArray = new Array(9).fill(0)
  let valid = true

  for (let row = 0; row < 9 && valid; row++) {
    for (let col = 0; col < 9 && valid; col++) {
      if (board[row][col] !== '.') {
        flagArray[`${board[row][col] - 1}`]++
      }
      if (flagArray[`${board[row][col] - 1}`] > 1) {
        valid = false
      }
    }
    flagArray = new Array(9).fill(0)
  }
  if (!valid) return valid

  for (let col = 0; col < 9 && valid; col++) {
    for (let row = 0; row < 9 && valid; row++) {
      if (board[row][col] !== '.') {
        flagArray[`${board[row][col] - 1}`]++
      }
      if (flagArray[`${board[row][col] - 1}`] > 1) {
        valid = false
      }
    }
    flagArray = new Array(9).fill(0)
  }
  if (!valid) return valid

  for (let i = 0; i < 3 && valid; i++) {
    for (let k = 0; k < 3 && valid; k++) {
      for (let row = i * 3; row < 3 * (i + 1) && valid; row++) {
        for (let col = k * 3; col < 3 * (k + 1) && valid; col++) {
          if (board[row][col] !== '.') {
            flagArray[`${board[row][col] - 1}`]++
          }
          if (flagArray[`${board[row][col] - 1}`] > 1) {
            valid = false
          }
        }
      }
      flagArray = new Array(9).fill(0)
    }
  }

  return valid
}
