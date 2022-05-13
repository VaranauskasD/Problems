const Node = () => {}

var LRUCache = function (capacity) {
  this.capacity = capacity
  this.cacheObj = {}
}

LRUCache.prototype.get = function (key) {
  return this.cacheObj[key] ? this.cacheObj[key] : -1
}

LRUCache.prototype.put = function (key, value) {
  if (Object.keys(this.cacheObj).length >= this.capacity) {
    delete this.cacheObj[this.cacheKey]
  }
  this.cacheKey = key
  this.cacheObj[key] = value
  return
}
