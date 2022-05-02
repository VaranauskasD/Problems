const binarySearch = (nums, l, r, target) => {
  if (r >= l) {
    mid = l + Math.floor((r - l) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[mid] > target) {
      return binarySearch(nums, l, mid - 1, target)
    }

    return binarySearch(nums, mid + 1, r, target)
  }

  return -1
}

const search = (nums, target) => {
  return binarySearch(nums, 0, nums.length - 1, target)
}
