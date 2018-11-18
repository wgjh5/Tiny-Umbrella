import React, { Component } from 'react'
import './BestChoice.css'
// 引入组件

import Xfooter from '../../components/Xfooter/Xfooter'

import { Route } from 'react-router-dom'
class searchChoice extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        严选页面
      <Xfooter />
      </div>
    )
  }
}

export default searchChoice
