import React, { Component } from 'react'
import './Xnav.css'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


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
                    {(()=>{
                        return this.props.navs.map((item,index) => {
                            return ( <Link to={{pathname:`/home/homeIndex/${item.href}`}} replace onClick={this.props.isActive.bind(this,index)}  key={index} className={
                                this.state.isActive===index? "swiper-slide active swiper-slide-active" : "swiper-slide"
                            } >{item.title}</Link>)
                        })
                    })()}
                        
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
    return {
        isActive(index){
            console.log(index)
            this.setState({
                isActive:index
            })
            dispatch({
                type:"isActive",
                index: index,
                isShow:true
              })
        }
    }
})(Xnav);

