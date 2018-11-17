import React, { Component } from 'react'
import './Xnav.css'

import { connect } from 'react-redux';
import Item from '../../../../node_modules/antd/lib/list/Item';


class Xnav extends Component {
  constructor (props) {
    super(props);
    this.props = props;
    console.log(this.props)
    this.state = {
        isActive:0
       
    }
  }
  render () {
    return (

   <div id="sticky" className="sticky_box">
        <div className="fiexdhead">
            <div className="nav grid middle">
                <div className="swiper-container col-1 swiper-container-horizontal swiper-container-free-mode" id="nav" style={{paddingBottom:"0"}}>
                    <div className="swiper-wrapper" style={{transform: "[translate3d(0px, 0px, 0px)]"}}>
                    {/* {(()=>{
                        return this.props.navs.map((item,index) => {
                            return ( <a href="javascript:;" className="swiper-slide active swiper-slide-active" >{item.title}</a>)
                        })
                    })()} */}
                        
                        {/* <a href="javascript:;" className="swiper-slide swiper-slide-next" >少儿</a>
                        <a href="javascript:;" className="swiper-slide" >成人</a>
                        <a href="javascript:;" className="swiper-slide" >父母</a>
                        <a href="javascript:;" className="swiper-slide" >家庭</a>
                        <a href="javascript:;" className="swiper-slide" >旅行</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
  }
}

export default connect((state)=>{
    return state    
} , (dispatch) => {
    return {}
})(Xnav);
