import React, { Component } from 'react'
// import '../../assets/base.css'
// import '../../assets/body.css'
import './Search.scss'
// import styles from "./Search.scss";
// 引入组件
import Xfooter from '../../components/Xfooter/Xfooter';

import { Route } from 'react-router-dom'
import XInsuranceChannel from '../../components/Xserach/XInsuranceChannel/XInsuranceChannel';
import Xservice from '../../components/Xserach/Xservice/Xservice';
import Xactuary from '../../components/Xserach/Xactuary/Xactuary';
class search extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className="Search">
        <div className="container iphonex_padding">
        <XInsuranceChannel />
        <Xservice />
        <Xactuary />
        
      </div>
      <Xfooter />
      </div>
    )
  }
}

export default search
