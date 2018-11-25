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
        recommend:[],
        dingwei:false,
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

// dingwei(){
//     console.log(window.scrollY)
//    if(window.scrollY>172){
//         this.setState({
//             dingwei:true
//         })
//    }else if(window.scrollY<172){
//     this.setState({
//         dingwei:false
//     })
//    }
    
// }
// sendStatus(){
//     console.log(666)
//     console.log(this.props)
//     dispatch({
//         type:"sendStatus",
//         statushome:"home"
//       })
// }
componentDidMount(){
    this.slide()
    // this.props.isActive(this.props.tab)
    // this.props.isActive(this.props.tab)
    // window.addEventListener("scroll",this.dingwei.bind(this))
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
        <div className="fixedwrap sticky_box">
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
             this.setState({
                isActive:index
            })
            
            console.log(this.props)
            // React.axios.get('http://localhost:3001/users/home').then((response) => {
            //     console.log(response.data)
            //     let children = response.data.slice(7,12)
            //     let adult = response.data.slice(12)
            //     let parents = response.data.slice(0,6)
            //     let family = response.data.slice(0,6)
            //     let travel = response.data.slice(7,12)
            //     dispatch({
            //         type:"isActive",
            //         children:children,
            //         adult:adult,
            //         parents:parents,
            //         family:family,
            //         travel:travel

            //       })
            //     // this.props.transData.bind(this);

            // }).catch(function (error) {
            //     console.log(error)
            // })
           
              dispatch({
                type:"sendStatus",
                statushome:"home"
              })
            //   dispatch({
            //     type:"transData",
                
            //   })
   
        },
        // getData(){
        //     console.log(77777)
        //     React.axios.get('http://localhost:3001/users/home').then((response) => {
        //        console.log(Response.data)
        //         dispatch({
        //             type:"isActive",
        //             recommend:response.data
        //           })
        //         // this.props.transData.bind(this);
        
        //     }).catch(function (error) {
        //         console.log(error)
        //     })
        // },
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
            store.emit("show",index);
        }
           
            
    }
})(Xnav);

