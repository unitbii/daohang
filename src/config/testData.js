﻿export default {
  repositorys: {
    1: {
      id: 1,
      name: '收藏1',
      redate: 0,
      topLine: {
        redate: 0,
        content: [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010]
      },
      content: [2002, 2003, 2004, 2005, 2006, 2007, 2008],
      // 文件夹
      folders: {
        2001: {title: '综合导航', content: []},
        2002: {title: '前端开发', content: [3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009]},
        2003: {title: '前端文章', content: [3010, 3011, 3012, 3013, 3014, 3015]},
        2004: {title: '站长导航', content: []},
        2005: {title: '交互设计', content: []},
        2006: {title: 'win软件', content: []},
        2007: {title: '英语', content: []},
        2008: {title: '生活', content: []},
        3001: {title: '学习网站', content: [4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009]},
        3002: {title: '社区门户', content: [4010, 4011, 4012, 4013, 4014, 4015, 4016, 4017, 4018, 4019]},
        3003: {title: '前端技术', content: [4020, 4021, 4022, 4023, 4024, 4025, 4026, 4027]},
        3004: {title: '前端工具', content: [4030, 4031, 4032, 4033, 4034, 4035]},
        3005: {title: '插件', content: [4040, 4041, 4042, 4043, 4044, 4045, 4046, 4047, 4048]},
        3006: {title: 'API', content: [4050, 4051, 4052, 4053, 4054]},
        3007: {title: '前端软件', content: [4060, 4061, 4062, 4063, 4064]},
        3008: {title: '文章', content: [4070, 4071, 4072]},
        3009: {title: '未分类', content: [4080, 4081, 4082]},
        3010: {title: 'html+css+js', content: [4100, 4101, 4102, 4103, 4104, 4105, 4106, 4107, 4108, 4109]},
        3011: {title: 'javascript', content: [4110, 4111, 4112, 4113, 4114, 4115, 4116, 4117, 4118, 4119, 4120, 4121]},
        3012: {title: '中级应用', content: [4122, 4123, 4124, 4125, 4126, 4127, 4128]},
        3013: {title: '优化', content: [4130, 4131, 4132, 4133, 4134, 4135, 4136]},
        3014: {title: '安全', content: [4140, 4141, 4142]},
        3015: {title: 'HTML5', content: [4150, 4151]}
      },
      // 标签
      tags: {
        1001: {title: 'AcFun', href: 'http://www.acfun.tv/', desp: '认真你就输啦 (・ω・)ノ'},
        1002: {title: '哔哩哔哩', href: 'http://www.bilibili.com/', desp: '( ゜- ゜)つロ 乾杯~'},
        1003: {title: '天猫', href: 'http://www.tmall.com/', desp: '上天猫，就够了'},
        1004: {title: '知乎', href: 'http://www.zhihu.com/', desp: '与世界分享你的知识、经验和见解'},
        1005: {title: '阿里云', href: 'https://www.aliyun.com/', desp: '为了无法计算的价值'},
        1006: {title: 'Hostinger免费空间', href: 'http://api.hostinger.com.hk/redir/17224403', desp: '免费空间，支持PHP、MySql'},
        1007: {title: '推酷', href: 'http://www.tuicool.com/', desp: 'IT人专属的个性聚合阅读社区'},
        1008: {title: 'github社区', href: 'http://github.com', desp: '全球开源社区'},
        1009: {title: 'CSDN社区', href: 'http://www.csdn.net/', desp: '不止于代码'},
        1010: {title: '阿驹技术博客', href: 'http://aju.space/', desp: '阿驹的技术博客'},
        4001: {title: '菜鸟教程', href: 'http://www.runoob.com/', desp: ''},
        4002: {title: '慕课网', href: 'http://www.imooc.com/', desp: ''},
        4003: {title: '手册网', href: 'http://www.shouce.ren/', desp: ''},
        4004: {title: 'css88', href: 'http://www.css88.com/', desp: ''},
        4005: {title: '腾讯IMWeb', href: 'http://test.imweb.io/', desp: ''},
        4006: {title: '百度前端技术学院', href: 'http://ife.baidu.com/', desp: ''},
        4007: {title: '牛客网', href: 'http://www.nowcoder.com/', desp: '专业IT笔试面试备考平台'},
        4008: {title: 'jq-school', href: 'http://www.jq-school.com/', desp: ''},
        4009: {title: 'w3school', href: 'http://www.w3school.com.cn/', desp: ''},
        4010: {title: '前端网', href: 'http://www.w3cfuns.com/', desp: ''},
        4011: {title: '前端乱炖', href: 'http://www.html-js.com/', desp: ''},
        4012: {title: '前端开发博客', href: 'http://caibaojian.com/', desp: ''},
        4013: {title: '云库网', href: 'http://yunkus.com/', desp: ''},
        4014: {title: '伯乐在线', href: 'http://web.jobbole.com/', desp: ''},
        4015: {title: '模板之家', href: 'http://www.cssmoban.com/', desp: ''},
        4016: {title: 'html5tricks', href: 'http://www.html5tricks.com/', desp: ''},
        4017: {title: '我爱水煮鱼', href: 'http://blog.wpjam.com/', desp: ''},
        4018: {title: '菜鸟团队', href: 'http://birdteam.net/', desp: ''},
        4019: {title: '知更鸟', href: 'http://zmingcx.com/', desp: ''},
        // {title: '优知',  href: 'http://zhi.ujiuye.com/', desp: ''},
        // {title: '优设',  href: 'http://www.uisdc.com/', desp: 'UI设计方案'},
        // {title: '懒人建站',  href: 'http://www.51xuediannao.com/', desp: '站长建站'},
        4020: {title: 'ES6', href: 'http://es6.ruanyifeng.com/', desp: 'ECMAScript6 中文入门'},
        4021: {title: 'TypeScript', href: 'https: //www.tslang.cn/', desp: 'TypeScript中文网'},
        4022: {title: 'nodeJS', href: 'http://nodejs.cn/', desp: 'nodeJS中文网'},
        4023: {title: 'webpack', href: 'http://www.css88.com/doc/webpack2/', desp: 'webpack2.2 中文文档'},
        4024: {title: 'vue.js', href: 'http://vuejs.org/', desp: 'vue官网'},
        4025: {title: 'bootstrap', href: 'http://www.bootcss.com', desp: 'bootstrap中文网'},
        4026: {title: 'gulp', href: 'http://www.gulpjs.com.cn', desp: 'gulp中文网'},
        4027: {title: 'wordpress', href: 'https: //zh-cn.wordpress.com/', desp: ''},
        4030: {title: 'CDN加速服务', href: 'http://www.bootcdn.cn/', desp: 'Bootstrap中文网免费CDN加速服务'},
        4031: {title: '在线工具', href: 'http://tool.lu/', desp: '程序员的工具箱'},
        4032: {title: '正则表达式测试', href: 'http://tool.oschina.net/regex', desp: '开源中国社区'},
        4033: {title: 'web端兼容性测试', href: 'http://www.responsinator.com/', desp: ''},
        4034: {title: 'IcoMoon', href: 'http://icomoon.io/', desp: '字体图标'},
        4035: {title: '阿里巴巴矢量图标库', href: 'http://www.iconfont.cn/', desp: 'Iconfont'},
        4040: {title: 'jQuery插件库', href: 'http://www.jq22.com/', desp: ''},
        4041: {title: 'clipboard.js 复制到剪贴板', href: 'https: //clipboardjs.com/', desp: '将文本复制到剪贴板的现代方法'},
        4042: {title: 'Validform 表单验证', href: 'http://validform.rjboy.cn/document.html', desp: '一行代码搞定整站的表单验证'},
        4043: {title: 'laydate 日期控件', href: 'https: //www.layui.com/laydate/', desp: 'js日期控件与时间插件'},
        4044: {title: 'iscroll5', href: 'http://cubiq.org/iscroll-5', desp: '移动端滑动插件'},
        4045: {title: 'iscroll5中文DEMO', href: 'http://be-fe.github.io/iSlider/demo/index_chinese.html', desp: ''},
        4046: {title: 'TouchSlide', href: 'http://www.superslide2.com/', desp: ''},
        4047: {title: 'Swiper', href: 'http://www.swiper.com.cn/', desp: '移动端滑动插件'},
        4048: {title: '推荐 50个Bootstrap插件', href: 'http://www.oschina.net/news/56950/jquery-bootstrap-plugins-for-your-next-projects', desp: ''},
        4050: {title: '百度地图', href: 'http://lbsyun.baidu.com/', desp: ''},
        4051: {title: '高德地图', href: 'http://lbs.amap.com/', desp: ''},
        4052: {title: 'QQ推广', href: 'http://shang.qq.com/v3/', desp: ''},
        4053: {title: '开放平台集合', href: 'http://www.shouce.ren/api/open', desp: '手册网'},
        4054: {title: '微信JS-SDK说明文档', href: 'http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html', desp: ''},
        4060: {title: '前端网工具库', href: 'http://www.w3cfuns.com/tools', desp: ''},
        4061: {title: 'Sublime', href: 'http://www.sublimetext.com/', desp: '轻量级编辑神器'},
        4062: {title: 'picpick', href: 'http://ngwin.com/picpick', desp: '功能强大的色彩工具'},
        4063: {title: 'chrome插件网', href: 'http://chromecj.com/', desp: ''},
        4064: {title: 'FeHelper：WEB前端助手', href: 'http://www.baidufe.com/fehelper', desp: 'Chrome浏览器插件'},
        4070: {title: 'Sublime3常用插件介绍', href: 'http://www.cnblogs.com/hykun/p/sublimeText3.html', desp: ''},
        4071: {title: 'webpack优秀文章', href: 'https: //github.com/webpack-china/awesome-webpack-cn', desp: ''},
        4072: {title: 'vue专栏', href: 'http://www.html-js.com/article/column/99', desp: '尤小右'},
        4080: {title: '浏览器市场份额', href: 'http://tongji.baidu.com/data/browser', desp: '百度统计流量研究学院'},
        4081: {title: '思维导图 MindManager', href: 'http://www.mindmanager.cc/', desp: '思维导图中文网'},
        4082: {title: '廖雪峰', href: 'http://www.liaoxuefeng.com', desp: ''},
        4100: {title: 'div+css 让层自适应屏幕高度', href: 'http://blog.sina.com.cn/s/blog_66de2abc0100ueo3.html', desp: ''},
        4101: {title: 'transform 兼容问题', href: 'http://wnworld.com/archives/170.html', desp: ''},
        4102: {title: '中文字体的英文名称', href: 'http://www.xwbetter.com/font-family/', desp: ''},
        4103: {title: ': target 伪类使用技巧', href: 'http://www.css88.com/archives/6256', desp: ''},
        4104: {title: '解决谷歌浏览器input黄色框', href: 'http://blog.csdn.net/zhaoshuang1010/article/details/52353131', desp: ''},
        4105: {title: 'css3：border-image边框图像详解', href: 'https: //www.qianduan.net/css3border-image-bian-kuang-tu-xiang-xiang-jie/', desp: ''},
        4106: {title: '移动端使用position: fixed问题总结', href: 'http://blog.csdn.net/ly2983068126/article/details/49306427', desp: ''},
        4107: {title: '兼容各浏览器的CSS倒影效果', href: 'http://blog.csdn.net/afeiqiang/article/details/8441618', desp: ''},
        4108: {title: '兼容各浏览器的CSS倒影效果', href: 'http://blog.csdn.net/afeiqiang/article/details/8441618', desp: ''},
        4109: {title: 'CSS选择器的浏览器支持', href: 'http://www.cnblogs.com/aaronjs/p/3845242.html', desp: ''},
        4110: {title: 'js：实现记录滚动条位置', href: 'http://www.cnblogs.com/WarBlog/p/5802056.html', desp: ''},
        4111: {title: 'js：获取节点的兄弟，父级，子级元素', href: 'http://blog.csdn.net/duanshuyong/article/details/7562423', desp: ''},
        4112: {title: 'js：mouseover和mouseout多次触发(非冒泡)', href: 'http://blog.csdn.net/ltx851201/article/details/6800553', desp: ''},
        4113: {title: 'js：得到元素的子元素集合注意事项', href: 'http://www.cnblogs.com/phonefans/archive/2008/09/04/1283739.html', desp: ''},
        4114: {title: 'js：检测移动端横竖屏', href: 'http://www.jb51.net/article/85438.htm', desp: ''},
        4115: {title: 'js：实现复制（Copy）', href: 'http://www.jb51.net/article/51321.htm', desp: ''},
        4116: {title: 'js：事件冒泡详解和捕获、阻止方法', href: 'http://www.jb51.net/article/48935.htm', desp: ''},
        4117: {title: 'js,jquery获取各种屏幕的宽度和高度', href: 'http://www.cnblogs.com/xiaopin/archive/2012/03/26/2418152.html', desp: ''},
        4118: {title: '移动端js小技巧', href: 'http://blog.sina.com.cn/s/blog_3f1fc8950101g8rh.html', desp: ''},
        4119: {title: 'JQuery 实时监听input输入的变更', href: 'http://www.myexception.cn/jquery/1870116.html', desp: ''},
        4120: {title: 'Zepto 使用中的一些注意点(转)', href: 'http://www.360doc.com/content/15/1023/10/9200790_507747828.shtml', desp: ''},
        4121: {title: 'zepto和jquery的不同使用8条小结', href: 'http://blog.csdn.net/kongjiea/article/details/42522305', desp: ''},
        4122: {title: 'pageResponse：移动适配方案', href: 'http://www.cnblogs.com/PeunZhang/p/4517864.html', desp: ''},
        4123: {title: 'web端点击手机号码直接拨号', href: 'http://blog.sina.com.cn/s/blog_7eef675d0101fhly.html', desp: ''},
        4124: {title: 'JS代码：设为首页，加入收藏', href: 'http://blog.sina.com.cn/s/blog_439248a101016q44.html', desp: ''},
        4125: {title: '内置搜索引擎', href: 'http://blog.csdn.net/onestepend/article/details/6718751', desp: ''},
        4126: {title: '使用ajax和history.pushState无刷新改变页面href', href: 'http://blog.csdn.net/oyiboy/article/details/44258477', desp: ''},
        4127: {title: '解决微信浏览器返回上一页面强制刷新的问题', href: 'http://www.tuicool.com/articles/NnUZ3iE', desp: ''},
        4128: {title: '获取网站标签Icon', href: 'http://www.tuicool.com/articles/zQnY3m', desp: ''},
        4130: {title: 'jQuery 效率提升建议', href: 'http://www.cnblogs.com/caseast/p/5845046.html', desp: ''},
        4131: {title: 'JQuery 执行效率问题', href: 'http://www.cnblogs.com/solove/archive/2011/10/12/2208293.html', desp: ''},
        4132: {title: '专题：移动网站性能优化技巧荟萃', href: 'http://mobile.51cto.com/web-410291.htm', desp: ''},
        4133: {title: '移动端web前端的那些坑', href: 'http://blog.csdn.net/u013022210/article/details/51312255', desp: ''},
        4134: {title: '手机端Web开发中遇到的那些问题', href: 'http://developer.51cto.com/art/201609/517935.htm', desp: ''},
        4135: {title: '如何对移动端的图片流量进行优化', href: 'http://mobile.51cto.com/app-show-517223.htm', desp: ''},
        4136: {title: '使用高斯模糊的效果逐步加载图片', href: 'http://developer.51cto.com/art/201608/516608.htm', desp: ''},
        4140: {title: 'target="blank"安全漏洞', href: 'http://www.cnblogs.com/zqifa/p/html-target-1.html', desp: ''},
        4141: {title: 'Web攻击与防护', href: 'http://liuwanlin.info/webgong-ji-yu-fang-hu/', desp: ''},
        4142: {title: '说说JSON和JSONP，也许你会豁然开朗', href: 'http://kb.cnblogs.com/page/139725/', desp: ''},
        4150: {title: 'HTML5 视频直播（一）', href: 'https://imququ.com/post/html5-live-player-1.html', desp: ''},
        4151: {title: 'HTML5 录制录音实例使用websocket', href: 'http://blog.csdn.net/joyhen/article/details/24505411', desp: ''}
      }
    }
  }
}
