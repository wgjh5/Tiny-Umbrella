import React, { Component } from 'react'
import './Xpblink.css'

// 引入组件

import { Route } from 'react-router-dom'
class Xpblink extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <div className='pblink row'>
          <a  className='col row middle'>
            <div className='pblink_item'>
              <div className='pblink_icon pblink_icon1'></div>
              <div className='pblink_text'> 小雨伞严选 </div>
            </div>
          </a>
          <a  className='col row middle'>
            <div className='pblink_item'>
              <div className='pblink_icon pblink_icon3'></div>
              <div className='pblink_text'> 静静智能顾问 </div>
            </div>
          </a>
          <a  className='col row middle'>
            <div className='pblink_item'>
              <div className='pblink_icon pblink_icon2'></div>
              <div className='pblink_text'> 成人保障方案 </div>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default Xpblink
