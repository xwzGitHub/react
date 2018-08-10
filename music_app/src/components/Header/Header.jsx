import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
    constructor(props){
        super(props)
        console.log(this.props.current)
     }
    render() {
        return (
            <header className={this.props.className}>
                <div className="Music-header">
                    <i></i>
                    <div>
                        <span className={this.props.current===0?'active':''}>我的</span>
                        <span className={this.props.current===1?'active':''}>音乐馆</span>
                        <span className={this.props.current===2?'active':''}>发现</span> 
                    </div>
                    <i></i>
                </div>
                <p>搜索</p>
            </header>
        )
    }
}
