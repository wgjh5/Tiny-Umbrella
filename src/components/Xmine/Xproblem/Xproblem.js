import React, { Component } from 'react'
import cookie from 'react-cookies';
import './Xpropblem.css'
// import store from '../../../libs/store'
import { Link} from 'react-router-dom'
class Xpropblem extends Component {
  constructor (props) {
    super(props)
    this.props = props;
    console.log(this.props)
    this.state = {

    }
  }
  delCookie(){
    console.log(666)
    // cookie.countdown(7)
    cookie.remove("name",{ path: '/' })
    // store.emit("toggleheader","mine")
    // this.props.router.push('/home/Xrecommend')
  }
  render () {
    return (
        <div className="add_question">
        <a className="add_lc_pro" href="/question/faq">常见问题 &gt;</a>
        <span className="add_lc_l"></span>
        <a className="add_lc_sol" href="/question/adviceAndComplain">投诉建议 &gt;</a>
        <Link to={"/home/Xrecommend"} onClick={this.delCookie.bind(this)} style={{color:"#8c7fee",position:"absolute",right:"6%",bottom:"10%",fontWeight:"bold",border:"1px solid #ccc",padding:"5px"}}>退出登录</Link>
    </div>
    )
  }
}

export default Xpropblem
