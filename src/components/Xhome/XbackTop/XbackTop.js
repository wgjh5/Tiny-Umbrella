import React, { Component } from 'react'
import './XbackTop.css'



// import { Route } from 'react-router-dom'
class XbackTop extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <div id="detail_swiper">
            <div className="detail_swiper_box" id="detail_article0"></div>
        </div>
        {/* ======backTop===== */}
        <div className="scrollTop iphonex_margin" style={{display: "block"}}></div>
      </div>
    )
  }
}

export default XbackTop
