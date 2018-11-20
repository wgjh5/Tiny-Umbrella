import React, { Component } from 'react'
import './BestChoice.css'
// 引入组件

import Xfooter from '../../components/Xfooter/Xfooter';

import { Route } from 'react-router-dom'
import XheaderBar from '../../components/Xhome/XheaderBar/XheaderBar';
import Xnav from '../../components/Xhome/Xnav/Xnav';
import Xcontent from '../../components/Xbestchoice/Xcontent/Xcontent';
import Xmore from '../../components/Xbestchoice/Xmore/Xmore';
import XaboutMe from '../../components/Xhome/XaboutMe/XaboutMe';
class searchChoice extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status:"bestchoice"
    }
  }
  render () {
    return (
      <div>
      <div className="container iphonex_padding">
        <XheaderBar status={this.state.status}/>
        <Xnav status={this.state.status}/>
        <Xcontent />
        <Xmore />
        <XaboutMe />
      </div>
      <Xfooter />
      </div>
    )
  }
}

export default searchChoice
