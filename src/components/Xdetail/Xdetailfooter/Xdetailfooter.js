import React, { Component } from 'react'
import './Xdetailfooter.scss'



// import { Route } from 'react-router-dom'
class Xdetailfooter extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
        <div className="bottom_btn_group iphonex_padding iphonex_white">
            <div className="bottom_btn_row row">
                <a href="javascript:;" data-track="detail_askol" className="bottom_btn zhiCustomBtn">
                    <div data-track="detail_askol" className="new_consult"></div>
                    <span className="new_consult_unread"></span>
                    <p data-track="detail_askol" style={{color: "rgb(140, 127, 238)"}}>在线咨询</p>
                </a>
                <a href="tel:400-919-7788" data-track="detail_askphone" className="bottom_btn">
                    <i data-track="detail_askphone" className="bottom phone"></i>
                    <p data-track="detail_askphone">电话咨询</p>
                </a>
                
                <a href="javascript:;" data-track="detail_buy" className="bottom_btn col buy_btn">立即投保</a>
            </div>
        </div>
    )
  }
}

export default Xdetailfooter
