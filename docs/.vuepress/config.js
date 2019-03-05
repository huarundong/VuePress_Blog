module.exports = {
  title: '花茶也是茶',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    // 顶部导航栏
    nav:[
      // 单项 text：显示文字，link：指向链接
      // 这里的'/' 指的是 docs文件夹路径
      // [以 '/' 结尾的默认指向该路径下README.md文件]
      {text: 'VUE', link: '/VUE/' },
      {
        text: 'Java', 
        items: [
          { text: 'SpringBoot', link: '/Java/SpringBoot/' },
          { text: 'Mybatis', link: '/Java/Mybatis/' }
        ]
      },
      // 多项，下拉形式
      {
        text: 'Concat',
        items: [
          // link：指向链接也可以是外网链接
          { text: 'Segmentfault', link: 'https://segmentfault.com/u/mulander' },
        ]
      },
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub首页', link: 'https://github.com/huarundong' },
          { text: 'Island', link: 'https://mulander-j.github.io/island/code/html/index.html' },
          { text: 'TimeWaster', link: 'https://mulander-j.github.io/timeWaster/demo/index.html#/' },
        ]
      },
    ],
    // sidebar: 'auto', // 侧边栏配置
    // 侧边栏菜单( 一个模块对应一个菜单形式 )
    sidebar:{
      // 打开VUE主页链接时生成下面这个菜单
      '/VUE/':[
        //多级菜单形式
        {
          // 菜单名
          title: 'vueJS',
          // 子菜单
          children: [
            // ['','']=>[路径,标题]
            // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
            // 不以 '/' 结尾的就是指向.md文件 
            ['/VUE/vueJS/export','export'], // '/FAQ/DigestionHeap/Digested.md'文件
            ['/VUE/vueJS/Promise初步详解','Promise初步详解'],
            ['/VUE/vueJS/export_import_exportdefault', 'export_import_exportdefault']
          ]
        },
        {
          title: 'elementUI',
          children: [
            ['/VUE/elementUI/elementUI文件上传组件','elementUI文件上传组件']
          ]
        },
        {
          title: 'iView',
          children: [
            ['/VUE/iView/PDF-js_Viewer-js预览PDF','PDF-js_Viewer-js预览PDF'],
            ['/VUE/iView/文件上传Upload','文件上传Upload']
          ]
        }
      ],
      '/Java/SpringBoot/':[
        {
          title: 'SpringBoot',
          collapsable: true,
          children: [
            ['/Java/SpringBoot/swagger2登录','swagger2登录']
          ]
        }
      ],
      '/Java/Mybatis/':[
        {
          title: 'Mybatis',
          collapsable: true,
          children: [
            // ['/Java/Mybatis/swagger2登录','swagger2登录（springboot+swagger2+springSecurity）']
          ]
        }
      ]
    },
    sidebarDepth: 4, // 侧边栏显示2级
  }
};