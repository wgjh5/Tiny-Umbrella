import React, { Component } from 'react'
import './XheaderBar.css'
// 引入组件



// import { Route } from 'react-router-dom'
class XheaderBar extends Component {
  constructor (props) {
    super(props)
    this.props = props;
    console.log(this.props.status)
    this.state = {

    }
  }
  render () {
   return( <div>
    {(()=>{
      if (this.props.status=="home") {
                return (
                      <div className="headBar clearfix">
                        <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index_v2/logo.png?t=20180302" alt="" style={{width:"168px",height:"18px"}}/>
                        <a className="bd-img" data-track="shouye_topbar_service" id="consultBtn">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index_v2/index_consult.png" />
                        </a>
                      </div>
                )
          }else if(this.props.status=="bestchoice"){
           return( <div className="banner">
            <div className="header row middle">
                <div className="logo">
                    <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/logo.png" alt="" />
                </div>
                <div className="col"></div>
                <a href="/" className="goindex">进入首页&gt;</a>
            </div>
            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/banner3.jpg" alt="" />
        </div>
           )
          }
    })()}
      
  </div> )   
  }
}

export default XheaderBar
