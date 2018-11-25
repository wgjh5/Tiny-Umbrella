import React, { Component } from 'react'
import './XheaderBar.css'
// 引入组件



import { Link } from 'react-router-dom'
import cookie from '../../../libs/cookie.js'
// import store from '../../../libs/store.js'
class XheaderBar extends Component {
  constructor (props) {
    super(props)
    this.props = props;
    this.state = {
        name:"",
        m:props.status
    }
  
  }
  getName(){
 
    if(cookie.getCookie("name") != undefined){
        let a = cookie.getCookie("name").slice(0,2);
        let b = cookie.getCookie("name").slice(6);
        let c = a+"****"+b


        this.setState({
            name:c,
            m:"mined"
        })
    }else if(cookie.getCookie("name") == undefined){
        return;
    }
  }
  toggleheader(){

    // store.on("toggleheader","mined")
    // store.on("toggleheader",(data)=>{
    //     console.log(data);
    //     this.setState({
    //         m:data
    //     })
    // })

    
    
   

}
componentWillMount(){
    this.toggleheader()
}
  componentDidMount(){
      this.getName()
      
  }
  render () {
   return( <div>
    {(()=>{
      if (this.props.status=="home") {
                return (
                      <div className="headBar clearfix">
                        <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index_v2/logo.png?t=20180302" alt="" style={{width:"168px",height:"18px"}}/>
                        <a className="bd-img" data-track="shouye_topbar_service" id="consultBtn">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index_v2/index_consult.png" />
                        </a>
                      </div>
                )
          }else if(this.props.status=="bestchoice"){
           return( <div className="banner">
            <div className="header row middle">
                <div className="logo">
                    <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/logo.png" alt="" />
                </div>
                <div className="col"></div>
                <a href="/" className="goindex">进入首页&gt;</a>
            </div>
            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/banner3.jpg" alt="" />
        </div>
           )
          }else if(this.state.m == "mine"){
            return (
              <div>
              <div className="head grid middle">
            <div className="head_img">
                <a href="https://www.xiaoyusan.com/UserProfile/index/home/main">
                    <img src="//sslstatic.xiaoyusan.com/h5/img/my/top_logo.jpg" alt="" />
                </a>
            </div>
            <div className="col-1" style={{width:"80%"}}>
                <p className="head_txt" style={{display: "none"}}></p>
                <Link className="head_link" to={"/Register"}>登录
                    <span style={{left: "3rem"}}></span>
                </Link>
                <a className="menber_privilege" href="/privilege/index?from=my" data-track="my_vip" style={{display: "none"}}>
                    <b>V</b>会员专属特权&gt;</a>
            </div>
            <a className="to_store row" href="/score">
                <div>积分商城</div>
                <div className="score" style={{display: "none"}}>我的积分
                    <span></span>
                </div>
            </a>
        </div>
                <div className="headArc">
                <img src="//sslstatic.xiaoyusan.com/h5/img/my/headArc.jpg" alt="" />
            </div>
            </div>
            )
          }else if(this.props.status == "detail"){
               return (
                <div>
                    <div className="banner lazyload">
                        <img src="https://sslstatic.xiaoyusan.com/h5/img/insurance/main_133820.jpg?t=1541139989" alt="" className="img" />
                    </div>
                </div>
               )
          }else if(this.props.status == "children"){
            return(
            <div className="headBar clearfix">
                <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/logo.png?t=20180302" alt="" style={{width:"168px",height:"18px"}}/>
                <Link to="/" className="head_link" data-track="pindao_topbar_shouye">首页
                    <span></span>
                </Link>
            </div>
            )
          }else if(this.state.m == "mined"){
            return (
                <div className="head grid middle">
                
                <div className="head_img">
                    <a href="https://www.xiaoyusan.com/UserProfile/index/home/main">
                        <img src="//sslstatic.xiaoyusan.com/h5/img/my/top_logo.jpg" alt="" />
                    </a>
                </div>
                <div className="col-1"  style={{width:"80%"}}>
                    <p className="head_txt" >{this.state.name}</p>
                    <a className="head_link"></a>
                    <a className="menber_privilege" href="/privilege/index?from=my" data-track="my_vip">
                        <b>V1</b>会员专属特权&gt;</a>
                </div>
                <a className="to_store row" href="/score">
                    <div>积分商城</div>
                    <div className="score" >我的积分
                        <span>0</span>
                    </div>
                </a>
               
            </div>
            )
          }
    })()}
      
  </div> )   
  }
}

export default XheaderBar
