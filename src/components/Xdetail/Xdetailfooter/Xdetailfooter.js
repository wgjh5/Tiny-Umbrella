import React, { Component } from 'react'
import './Xdetailfooter.scss'



// import { Route } from 'react-router-dom'
import cookie from '../../../libs/cookie.js'
class Xdetailfooter extends Component {
  constructor (props) {
    super(props)
    this.props = props
    console.log(this.props.arr)
    this.state = {

    }
  }
  componentWillMount(){
    // if(this.props.arr!=""){
    //     console.log(56565)
    //     this.insert();
    // }
  }
  insert(){
      var self = this;
    React.axios.post('http://localhost:3001/users/car', {
        params: {
          name: cookie.getCookie("name"),
          _id:self.props.arr._id,
          imgurl:self.props.arr.imgurl,
          price:self.props.arr.price,
          describetow:self.props.arr.describetow

        }
      }).then((response) => {
        console.log(response.data)
        if(response.data=="success"){
          alert("添加成功")
        }
       
      }).catch(function (error) {
        console.log(error)
      })
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
                
                <a href="javascript:;" onClick={this.insert.bind(this)} data-track="detail_buy" className="bottom_btn col buy_btn">立即投保</a>
            </div>
        </div>
    )
  }
}

export default Xdetailfooter
