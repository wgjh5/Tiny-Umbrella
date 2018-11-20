import React, { Component } from 'react'
import './Xnav.css'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// 引入store
import store from "../../../libs/store.js";

class Xnav extends Component {
  constructor (props) {
    super(props);
    this.props = props;
    console.log(this.props)
    this.state = {
        isActive:this.props.tab,
        n:0,
        nav:[{
            title:"成人",
            isNav:true
        },{
            title:"少儿",
            isNav:false
        },{
            title:"父母",
            isNav:false
        }]
       
    }
  }
//   sendShow(e){
//     // 发送数据
//     store.emit("show",e.target.value);
//     //console.log(e.target.value);
//     this.setState({
//         searchValue:e.target.value
//     })
// }
  render () {
    return (
        <div>
        {(()=>{
            if (this.props.tab>=0){
                return (
                    <div id="sticky" className="sticky_box">
                    <div className="fiexdhead">
                        <div className="nav grid middle">
                            <div className="swiper-container col-1 swiper-container-horizontal swiper-container-free-mode" id="nav" style={{paddingBottom:"0"}}>
                                <div className="swiper-wrapper" style={{transform: "[translate3d(0px, 0px, 0px)]"}}>
                                {(()=>{
                                    return this.props.navs.map((item,index) => {
                                        return ( <Link to={{pathname:`${item.href}`}} replace onClick={this.props.isActive.bind(this,index)}  key={index} className={
                                            this.state.isActive===index? "swiper-slide active swiper-slide-active" : "swiper-slide"
                                        } >{item.title}</Link>)
                                    })
                                })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }else if(this.props.status=="bestchoice"){
                return (
                     <nav className="listnav row" style={{marginTop:"0"}}>
                        {(()=>{
                    return this.state.nav.map((item,index)=>{
                             return ( <div href="javascript:;" onClick={this.props.toggleNav.bind(this,index)} key={index} className={
                                 this.state.n==index?"navitem col active" : "navitem col"}>{item.title}</div>
                                 )
                            })
                        })()}
                    </nav>
                )
            }
        })()}
   </div>

    )
  }
}

export default connect((state)=>{
    return state    
} , (dispatch) => {
    return {
        isActive(index){
            console.log(this.props)
            this.setState({
                isActive:index
            })
            dispatch({
                type:"isActive",
                index: index,
                isShow:true
              })
        },
        toggleNav(index,e){
            this.setState({
                n:index
            })
            dispatch({
                type:"toggleNav",
                idx: index,
                isContent:true
              })
              // 发送数据
            //   console.log(e)
            store.emit("show",index);
        }
    }
})(Xnav);

