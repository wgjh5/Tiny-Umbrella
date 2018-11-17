import React, { Component } from 'react'
import './XheaderBar.css'
// 引入组件



// import { Route } from 'react-router-dom'
class XheaderBar extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
       <div>
        <div className="headBar clearfix">
        <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index_v2/logo.png?t=20180302" alt="" />
        <a className="bd-img" data-track="shouye_topbar_service" id="consultBtn">
            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index_v2/index_consult.png" />
        </a>
    </div>
       
       </div> 
    )
  }
}

export default XheaderBar
