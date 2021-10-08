# next.js 学习笔记

pre-render: 预渲染

1. 静态化

    - 纯静态化
    - SSG: server static generation 服务端静态化
        - getStaticProps: 当渲染组件之前会运行  生成html + json

        - getStaticPaths: 当渲染组件之前会运行  解决动态路由

        - fallback: 
            false: 什么都不做，如果没有静态页面，返回404
            true: 会给[id].html

什么时候要使用静态化：

如果你的页面不是根据不同的请求而不同，则推荐使用静态化

2. SSR: server side render 服务端渲染

根据每一次请求获取数据，进行渲染