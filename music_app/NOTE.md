# 用react模仿qq音乐
## 目录介绍
1. router 路由

1. assets 公共
   * imgs（icon图标）

1. components组件
   *  Hedaer 头部
   *  Bandstand 底部音乐播放

4. views 视图
   * Home 主页
   * MusicClub音乐馆
       * MusicClub-banner 轮播图
       * MusicClub-nav 导航
       * MusicClub-recommend 歌曲推荐

5. index 入口文件

6. index.html 设置rem
   *  var func = () => {
            document.documentElement.style.fontSize = window.innerWidth / 750 * 100 + 'px';
        }
        (window.onload = func) && (window.onresize = func) && func;

## 项目知识点
 1. 渲染页面(map基本用法)
    * {数据.map((item,index)=>{
              return <div className="nav-item">
                          <img className="nav-item-icon" src={ item.icon } />
                           <span className="nav-item-text" >{ item.text }</span>
               </div>
       })}
2. 生命周期
   * shouldComponentUpdate 必须要有返回值，当则prop的值发生改变时，默认为true,会重新加载页面