const { p, listToTree } = require('./utils')

const vue3sidebar = [
  p('Vue3', null, '/vue3/index.md'),
  p('basic', 'Vue3', '/vue3/basic/ref.md', 'Vue3基础'),
  p('ref', 'basic', '/vue3/basic/ref.md', 'Ref'),
  p('watch', 'basic', '/vue3/basic/watch.md', 'Watch')
]

const vue3finalSidebar = listToTree(vue3sidebar)

module.exports = {
  vue3sidebar: vue3finalSidebar
}