import React, { Component } from 'react'
// import '../../../assets/body.css'
import './XaboutMe.scss'
// import './XaboutMe.css'
// 引入组件


// import { Route } from 'react-router-dom'
class XaboutMe extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
        <div className="about">
            <div className="pbft_aboutus">
                <div className="pbft_aboutus_grid grid">
                    <a className="pbft_aboutus_link col-1" style={{textAlign:"center",display: "block"}}>关于我们</a>
                    <a className="pbft_aboutus_link col-1" >资质牌照</a>
                    <a className="pbft_aboutus_link col-1" >新闻报道</a>
                </div>
                <div className="pbft_aboutus_info">
                    <p>客服热线：<a href="tel:400-919-7788" style={{color:"#8c7fee",fontSize:"1.6rem"}}>400-919-7788</a> (09:00-21:00)</p>
                    {/* <!-- <p style="color:#8c7fee;font-size:1.1rem;">微信公众号：xysbaoxian</p> --> */}
                </div>
            </div>
            {/* <a id="activityBtn" className="activity_btn" >
            <img src="https://sslstatic.xiaoyusan.com/act/img/1541755778.png" alt="" /></a> */}
    </div>
    )
  }
}

export default XaboutMe
