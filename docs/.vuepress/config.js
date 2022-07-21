const { defaultTheme } = require('@vuepress/theme-default')

const { vue3sidebar } = require('./sidebars')

module.exports = {
  lang: 'zh-CN',
  title: '我的前端笔记',
  theme: defaultTheme({
    home: '/',
    sidebar: vue3sidebar
  })
}