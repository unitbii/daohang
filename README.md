# daohang

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# git分支
  dev (开发版): 我平日用，多人和做时应各自创建分支
  alpha (内部测试版): 不常用，主要是内部封测时给封测账号用
  beta (外部测试版)： 不常用，外部测试的发布版本
  testing (开发测试版): 多人合作在这条分支联调

# 组件分类
  base：无任何依赖的底层组件，可以跨项目使用
  public：项目内通用组件，可能依赖项目内的图片、方法，有特殊样式。专为项目内复用。
  page：1级路由（非子路由）的页面组件
  project：页面组件的子组件，project下的文件夹按照页面组件的名字命名。一般来说，不复用，只分级。

# 常规建设
  y_utils：基础工具库

# 数据格式标准之间的转换
  这件事不应该难倒我，也不应该阻碍应用场景的推进。

  我目前为了数据库录入方便，使用了降维的数据结构。而数据结构对应用的实现，起到至关重要的作用。
  
  应用1：导入导出标签文件。
  应用2：页面上的增删改查操作。
  应用3：排序
  应用4：异地同步机制

  目前除了导出标签页，其他应用使用降维数据结构都可以满足。

# 组件
  1、搜索引擎组件 99%
  2、箭头icon组件 99%
  3、自定义折叠版面 90% —— 这个折叠版面可以抽象出base组件

# 需求日志
  子路由
  状态管理

# 日志（unitbii）

## 2018/8/31 
  √ 解决target="_blank"漏洞