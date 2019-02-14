# daohang
=========
  一个旨在优化网页收藏夹的网站项目。我们的目的是最大化利用屏幕大小、优化用户体验、异地同步，和实现分享。

## 目标用户
  谁愿意用我们的产品？
  * 用浏览器自带的收藏夹收藏了上百个网址的人，用户体验将是糟糕的
  * 希望在不同的操作系统(但不会翻墙..)、不同的浏览器上同步收藏夹的人
  * 希望快捷的分享他们的收藏夹的人

## 关于数据格式：
  这个问题纠结了我很久，最终我决定不再纠结，而是实现健壮性和鲁棒性
  数据格式之标准，用于储存的（mysql）、用于页面展示的，应该实现相互转换。

## 组件
  是否可以先依赖ivew组件

  | id | name | 进度 |
  | -  | -    | -   |
  | 1  | 搜索引擎组件   | 99% |
  | 2  | 箭头icon组件  | 99% |
  | 3  | 自定义折叠版面 | 90% |

## 安全
  * 解决target="_blank"漏洞 √

## 数据库
  * 此版本先做整体数据保存：增删改时，把整个修改后的json覆盖数据库

## api
  * 尝试解决跨域问题

## 简单的账户系统
  * 后台session记录登录，全站鉴权（判断过于简陋）√
  * 部分路由（页面）无须鉴权 √
  * 单页应用内跳转页面不刷新页面，要做vue-router跳转时的鉴权。 √

# 日志（unitbii）
================
## 2019.2.14
  抛弃缓存数据
