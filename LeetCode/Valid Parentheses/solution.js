// Maintain a stack to check whether the last item in the stack matches
// the current character using a parentheses map

const isValid = (s) => {
  const obj = { ')': '(', ']': '[', '}': '{' }
  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (!obj.hasOwnProperty(s[i])) {
      stack.push(s[i])
      console.log(stack)
    } else {
      if (stack.length < 1 || stack[stack.length - 1] !== obj[s[i]]) {
        return false
      }
      stack.pop()
    }
  }

  return stack.length < 1
}
