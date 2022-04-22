// On first go utilise a prefix to track the product of the left-to-right pass omitting the leading element
// On second go utilise a postfix to track the product of the right-to-left pass omitting the leading element
// The two passes count the procuct of the both left and right product halves

const productExceptSelf = (nums) => {
  const res = new Array().fill(1, nums.length)

  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix
    prefix *= nums[i]
  }

  let postfix = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= postfix
    postfix *= nums[i]
  }
  return res
}
