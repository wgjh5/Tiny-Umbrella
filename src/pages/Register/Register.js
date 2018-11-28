import React, { Component } from 'react'
import './Register.scss'
// 引入组件
import cookie from 'react-cookies'
// import cookie from '../../libs/cookie.js'
// import store from '../../libs/store.js'
import { Link , withRouter  } from 'react-router-dom'
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
        statusDl:false
        // aaa:cookie.load('1232')
    }
  }
  reginter(){
    var self = this;
      React.axios.post('http://localhost:3001/users/register', {
        params: {
          email: this.refs.username.value,
          password:this.refs.password.value
        }
      }).then((response) => {
        console.log(response.data)
        if(response.data=="succees"){
          console.log(222)
          this.setState({
            statusDl:true
          })
        
          // cookie.setCookie("name",self.refs.username.value)
          cookie.save('name', self.refs.username.value)
          // store.emit("toggleheader","mined")
          this.props.history.push('/home/Xrecommend')
        }
      
      }).catch(function (error) {
        console.log(error)
      })
    console.log(this.refs.username.value)
    console.log(this.refs.password.value)
  }
  // componentWillMount() {
  //   this.aaa =  { userId: cookie.load('userId') }
  // }
  componentDidMount(){
    // this.reginter()
  }
  render () {
    return (
        <div className="mod_container lo" >
        {/* <!-- 这里开始你的模块 --> */}
        <form className="form_query" >
            <h2 className="form_query_tit" style={{fontSize:"2rem"}}>验证手机号</h2>
            <Link to={"/Login"} style={{position:"absolute",right:"23px",top:"21px"}}>立即注册</Link>
            <div className="form_item grid">
                <label htmlFor="" className="col-0" style={{width:"9rem",fontSize:"1.6rem"}}>手&nbsp;&nbsp;&nbsp;机&nbsp;&nbsp;&nbsp;号：</label>
                <input className="col-1" type="tel" ref="username" id="input_phone" placeholder="请输入手机号" style={{width:"21rem",fontSize:"1.6rem"}}/>
               
            </div>
            <div className="form_item grid">
                <label htmlFor="" className="col-0" style={{width:"9rem",fontSize:"1.6rem"}}>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
                <input className="col-1" type="password" ref="password" id="input_phone1" placeholder="请输入密码" style={{width:"21rem",fontSize:"1.6rem"}}/>
               
            </div>
             {/* <div className="form_item grid" style={{position:"relative"}}>
                <label htmlFor="" className="col-0" style={{width:"9rem",fontSize:"1.6rem"}}>短信验证码：</label>
                <input className="col-1" type="tel" placeholder="请输入验证码" id="input_code" style={{width:"11rem",fontSize:"1.6rem"}}/>
                <a ass="col-0" href="javascript:;" className="btn" style={{
                    backgroundColor:"#Fff",
                    lineHeight:"23px"
    }} id="get_verify">获取验证码</a>
                <a ass="col-0" href="javascript:;" className="btn disabled" style={{display:"none"}} id="time_left">剩余59秒</a>
            </div> */}
            <a href="javascript:;" className="buy" onClick={this.reginter.bind(this)} id="query">确定</a>
        </form>
        {/* <div className="mod_tips" id="divTips" style={{display:"none"}}>
        </div> */}
   
    </div>
    )
  }
}

export default Login
