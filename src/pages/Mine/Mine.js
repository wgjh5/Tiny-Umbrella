import React, { Component } from 'react'
import './Mine.scss'
// 引入组件
import Xfooter from '../../components/Xfooter/Xfooter';
import XheaderBar from '../../components/Xhome/XheaderBar/XheaderBar';
import Xorder from '../../components/Xmine/Xorder/Xorder';
import Xpropblem from '../../components/Xmine/Xproblem/Xproblem';

// import { Route } from 'react-router-dom'
class mine extends Component {
  constructor (props) {
    super(props)
    this.state = {
        mine:"mine"
    }
  }
  render () {
    return (
      <div className="m" style={{height: "100%"}}>
        <div className="mod_container iphonex_padding" >
            <XheaderBar status="mine"/>
            <Xorder />
            <Xpropblem />
            <Xfooter />
            <div style={{height: "17.5rem"}}>
              </div>
        </div>
        
      </div>
    )
  }
}

export default mine
