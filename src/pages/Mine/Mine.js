import React, { Component } from 'react'
import './Mine.css'
// 引入组件

import Xfooter from '../../components/Xfooter/Xfooter'

// import { Route } from 'react-router-dom'
class mine extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        我的页面
      <Xfooter />
      </div>
    )
  }
}

export default mine
