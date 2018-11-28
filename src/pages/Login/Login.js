import React, { Component } from 'react'
import './Login.scss'
// 引入组件


import { Link } from 'react-router-dom'
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
        require:false,
        showTime:59
    }
  }
  email(){
    React.axios.post('http://localhost:3001/users/email', {
      params: {
        email: this.refs.username.value
      }
    }).then((response) => {
      console.log(response.data)
      if(response.data=="success"){
        this.setState({
          require:true
        })
        console.log(this.refs.aa)
        this.refs.aa.style.display = "none"
        this.refs.bb.style.display = "block"
        let timer = setInterval(()=>{
          this.setState({
            showTime:--this.state.showTime
          })
          if(this.state.showTime<="0"){
            clearInterval(timer)
            this.setState({
              showTime:59
            })
            this.refs.bb.style.display = "none"
            this.refs.aa.style.display = "block"
          }
        },1000)
        console.log(this.state.showTime)
      
      }
     
    }).catch(function (error) {
      console.log(error)
    })
    console.log(this.refs.email,this.refs.username.value)
  }
  login(){
      
      if(this.state.require==true){
        console.log(666)
        React.axios.post('http://localhost:3001/users/login', {
          params: {
            email: this.refs.username.value,
            code:this.refs.email.value,
            password: this.refs.password.value
          }
        }).then((response) => {
          console.log(response)
          // this.setState({
          //   song:this.state.song.concat(response.data.song_list)
          // })
        }).catch(function (error) {
          console.log(error)
        })
      }
   
    console.log(this.refs.username.value)
    console.log(this.refs.password.value)
  }
  componentDidMount(){
    // this.email()
  }

  render () {
    return (
        <div className="mod_container lo" >
        {/* <!-- 这里开始你的模块 --> */}
        <form className="form_query" >
            <h2 className="form_query_tit" style={{fontSize:"2rem"}}>验证手机号</h2>
           <Link to={"/Register"} style={{position:"absolute",right:"23px",top:"21px"}}>立即登录</Link>
            <div className="form_item grid">
                <label htmlFor="" className="col-0" style={{width:"9rem",fontSize:"1.6rem"}}>手&nbsp;&nbsp;&nbsp;机&nbsp;&nbsp;&nbsp;号：</label>
                <input className="col-1" type="tel"  ref="username" id="input_phone" placeholder="请输入手机号" style={{width:"21rem",fontSize:"1.6rem"}}/>
               
            </div>
            <div className="form_item grid">
                <label htmlFor="" className="col-0" style={{width:"9rem",fontSize:"1.6rem"}}>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
                <input className="col-1"  ref="password" type="password" id="input_phone1" placeholder="请输入密码" style={{width:"21rem",fontSize:"1.6rem"}}/>
               
            </div>
             <div className="form_item grid" style={{position:"relative"}}>
                <label htmlFor="" className="col-0" style={{width:"9rem",fontSize:"1.6rem"}}>邮箱验证码</label>
                <input className="col-1" type="tel" ref="email" placeholder="请输入验证码" id="input_code" style={{width:"11rem",fontSize:"1.6rem"}}/>
                <a ass="col-0" href="javascript:;" onClick={this.email.bind(this)} ref="aa" className="btn" style={{
                    backgroundColor:"#Fff",
                    lineHeight:"23px"
                }} id="get_verify">获取验证码</a>
                <a ass="col-0" href="javascript:;" className="btn disabled" style={{display:"none",lineHeight: "2rem"}} ref="bb" id="time_left">剩余{this.state.showTime}秒</a>
            </div>
            <a href="javascript:;" className="buy" onClick={this.login.bind(this)} id="query">确定</a>
        </form>
        <div className="mod_tips" id="divTips" style={{display:"none"}}>
        </div>
   
    </div>
    )
  }
}

export default Login
