import React, { Component } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios';
import Swiper from '_swiper@4.3.5@swiper/dist/js/swiper.min';
import 'swiper/dist/css/swiper.min.css';
import './MusicClub.css';

class MusicClub extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songList:[]
        }

    }

    //歌单推荐数据
    Recommend(){
        console.log("获取数据")
        axios.get('https://www.easy-mock.com/mock/5b3cb3c1eaf38c457dee35c6/example/qqMusic')
        .then(res=>{
            this.setState({
                songList:res.data.data.recommend
            })
        })
        // fetch('https://www.easy-mock.com/mock/5b3cb3c1eaf38c457dee35c6/example/qqMusic')
        // .then(res=>res.json())
        // .then(body=>{
        //     this.setState({
        //         songList:body.data
        //     })
        // })
      
    }

    componentDidMount() {//组件挂载完成
         //请求数据
         this.Recommend();
        //swiper实例
        this.swiper = new Swiper('.MusicClub-banner', {
            // loop: true,
            //自动轮播
            autoplay: true,
            //分页器
            pagination: {
                el: '.MusicClub-page'
              }
        })
    }

    render() {
        //icon图标数据
        const menuList = [
            {
                icon: require('../../assets/imgs/icon-grid-singer.png'),
                text: '歌手'
            },
            {
                icon: require('../../assets/imgs/icon-grid-rank.png'),
                text: '排行'
            },
            {
                icon: require('../../assets/imgs/icon-grid-categories.png'),
                text: '分类歌单'
            },
            {
                icon: require('../../assets/imgs/icon-grid-radio.png'),
                text: '电台'
            },
            {
                icon: require('../../assets/imgs/icon-grid-video.png'),
                text: '视频MV'
            },
            
        ];
        // if(!this.state.songList.length){
        //    return false;
        // }
        return (
            <div className="Music-MusicClub">
              {/* 轮播图 */}
               <div className="swiper-container MusicClub-banner">
                    <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/315156.jpg?max_age=2592000" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316398.jpg?max_age=2592000" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/316282.png?max_age=2592000" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/315512.jpg?max_age=2592000" alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src="https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/315576.jpg?max_age=2592000" alt=""/>
                            </div>
                    </div>    
                    <div className="swiper-pagination MusicClub-page"></div>
                </div> 
                {/* 导航 */}
                <div className="MusicClub-nav">
                   {/* 导航渲染 */}
                    {menuList.map((item,index)=>{
                         return <div className="nav-item" key={index}>
                                <img className="nav-item-icon" src={item.icon} alt=""/>
                                <span className="nav-item-text" >{item.text}</span>
                         </div>
                    })}
                </div>
                {/* 歌曲推荐 */}
                <div className="MusicClub-recommend">
                      <p className="recommend-title">为你推荐歌单<i className="icon-right"></i></p>
                       <ul className="recommend-list">
                         {this.state.songList.map((item,index)=>{
                             return <li className="recommend-item" key={index}>
                                 <div className="image">
                                     <img src={item.image} alt=""/>
                                     <span className="image-text">{item.amount}</span>
                                     <img className="image-icon" src={require('../../assets/imgs/icon-music-link.png')} alt=""/>
                                 </div>
                                 <p>{item.text}</p>
                             </li>
                         })}
                       </ul>
                </div>
               
            </div>
        )
    }
}

MusicClub.propTypes = {
    songList:PropTypes.array
}
MusicClub.defaultProps={
    songList:[]
}

export default MusicClub