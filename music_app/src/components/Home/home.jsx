import React, { Component } from 'react'

//引入组件
//头部
import Header from '../Header/Header'
//播放器
import Bandstand from '../../components/Bandstand/Bandstand';
//音乐馆
import MusicClub from '../MusicClub/MusicClub';



//样式
import Swiper from '_swiper@4.3.5@swiper/dist/js/swiper.min';
import 'swiper/dist/css/swiper.min.css';
import './home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="Music-home">
               {/* 头部组件 */}
               <Header className="Music-home-header" current={this.state.current}/>
               <div className="swiper-container Music-home-body">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">我的</div>
                        <div className="swiper-slide"><MusicClub/></div>
                        <div className="swiper-slide">发现</div>
                    </div>
                </div> 
               <Bandstand/>
            </div>
        )
    }
    constructor(props){
        super(props)
        this.state={
            current: 0, // 表示当前选择tab， 0表示我的，1表示音乐，2 表示发现
            play: true, // true表示播放，false表示暂停
        }
    }
    componentDidMount(){  //组件挂载完成
        //swiper实例
        let that = this;
        this.swiper = new Swiper('.Music-home-body', {
            // loop: true,
            // autoplay: true,
            on: {
                slideChangeTransitionEnd: function(){
                  console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                    that.setState({
                        current: this.activeIndex
                    })
                },
              },
        })
    }

}
