import React, { Component } from 'react'
import './Search.css'
// 引入组件
import Xfooter from '../../components/Xfooter/Xfooter'

import { Route } from 'react-router-dom'
class search extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        发现页
      <Xfooter />
      </div>
    )
  }
}

export default search
