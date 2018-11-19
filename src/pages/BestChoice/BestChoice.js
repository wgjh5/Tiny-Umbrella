import React, { Component } from 'react'
import './BestChoice.css'
// 引入组件



import { Route } from 'react-router-dom'
import XheaderBar from '../../components/Xhome/XheaderBar/XheaderBar';
import Xnav from '../../components/Xhome/Xnav/Xnav';
import Xcontent from '../../components/Xbestchoice/Xcontent/Xcontent';
class searchChoice extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status:"bestchoice"
    }
  }
  render () {
    return (
      <div className="container iphonex_padding">
        <XheaderBar status={this.state.status}/>
        <Xnav status={this.state.status}/>
        <Xcontent />
      </div>
    )
  }
}

export default searchChoice
