// 获取屏幕宽度 (viewport)
const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
const htmlDom = document.getElementsByTagName('html')[0]
htmlDom.style.fontSize = htmlWidth / 10 + 'px'

window.addEventListener('resize', () => {
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  htmlDom.style.fontSize = htmlWidth / 10 + 'px'
})
