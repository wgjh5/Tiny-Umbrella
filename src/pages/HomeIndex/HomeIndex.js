import React, { Component } from 'react'
import './HomeIndex.css'

// 引入组件
import XheaderBar from '../../components/Xhome/XheaderBar/XheaderBar'
import XswiperContainer from '../../components/Xhome/XswiperContainer/XswiperContainer'
import Xpblink from '../../components/Xhome/Xpblink/Xpblink'
import Xnav from '../../components/Xhome/Xnav/Xnav'
import Xfooter from '../../components/Xfooter/Xfooter'

import { Route } from 'react-router-dom'
class HomeIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
       <XheaderBar />
       <XswiperContainer />
       <Xpblink />
       <Xnav />
       <Xfooter />
      </div>
    )
  }
}

export default HomeIndex
