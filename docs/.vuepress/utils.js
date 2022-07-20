function p(id, parentId = null, link, text) {
  if (!id) return console.warn('pageId must be defined');
  return {
    id,
    parentId,
    link,
    text: text ? text : id
  }
}

function listToTree(arr) {
  const map = new Map()
  const res = []
  arr.forEach(i => map.set(i.id, i))
  arr.forEach(i => {
    const parent = map.get(i.parentId)
    if (parent) {
      (parent.children || (parent.children = [])).push(i)
    } else {
      res.push(i)
    }
  })
  return res
}

module.exports = {
  p,
  listToTree
}