import React, { Component } from 'react'


// 引入组件

// import { Route } from 'react-router-dom'
import Xrecommend from '../XlistSection/Xrecommend/Xrecommend';
class Xre extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
       <Xrecommend />
      </div>
    )
  }
}

export default Xre
