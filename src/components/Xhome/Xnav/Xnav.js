import React, { Component } from 'react'
import './Xnav.css'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// 引入store
import store from "../../../libs/store.js";
import sss from "swiper"
class Xnav extends Component {
  constructor (props) {
    super(props);
    this.props = props;
    console.log(this.props)
    this.state = {
        isActive:this.props.tab,
        n:0,
        c:0,
        nav:[{
            title:"成人",
            isNav:true
        },{
            title:"少儿",
            isNav:false
        },{
            title:"父母",
            isNav:false
        }],
        children:[{
            title:"全部",
            ischildren:true
        },{
            title:"重疾险",
            ischildren:false
        },{
            title:"门诊住院险",
            ischildren:false
        },{
            title:"意外险",
            ischildren:false
        }]
       
    }
  }
  slide(){
        var mySwiper = new sss('.ss',{
    slidesPerView : 1000,
    spaceBetween : "1",
    // spaceBetween : '50%'
    })
}
toggleChildren(index){
    this.setState({
        c:index
    })
    store.emit("toggleChildren",index);
}

componentDidMount(){
    this.slide()
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
                            <div className="swiper-container ss col-1 swiper-container-horizontal swiper-container-free-mode" id="nav" style={{paddingBottom:"0"}}>
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
            }else if(this.props.status=="children"){
                return (
                    <div id="fiexdwrap" className="fixedwrap" >
                        <div className="fiexdhead">
                            <div className="fiexdhead_box">
                            {(()=>{
                               return this.state.children.map((item,index)=>{
                                    return(
                                        <a href="javascript:;" key={index} onClick={this.toggleChildren.bind(this,index)} className={this.state.c===index?"fiexd_item active":"fiexd_item"}>{item.title}</a>
                                    )
                                })
                            })()}
                                {/* <a href="javascript:;" className="fiexd_item">重疾险</a>
                                <a href="javascript:;" className="fiexd_item">门诊住院险</a>
                                <a href="javascript:;" className="fiexd_item">意外险</a> */}
                            </div>
                        </div>
                    </div>
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
        
        
              // 发送数据
            //   console.log(e)
            
    }
})(Xnav);

