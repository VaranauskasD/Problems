// Remove all non-alphanumerics reverse and compare

const isPalindrome = (s) => {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
  const reverse = s.split('').reverse().join('')
  return s === reverse
}
