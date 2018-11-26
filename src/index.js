import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import './assets/base.scss'
import './assets/body.scss'
import './assets/antd-mobile.css'
// 路由引入
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

// 引入axios
import axios from 'axios'



// import App from './App'

// redux引入
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
// import globalCode from '../constants/globalCode'; 
import { Toast } from 'antd-mobile';
import {createHashHistory} from 'history';
// import commonInfo from '../common/CommonInfo';


// 父组件
import Home from './pages/Home/Home'


import Search from './pages/Search/Search'
import BestChoice from './pages/BestChoice/BestChoice'
import Mine from './pages/Mine/Mine'
import Detail from './pages/Detail/Detail'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import ChildrensInsurance from './pages/ChildrensInsurance/ChildrensInsurance'
import CarOrder from './pages/CarOrder/CarOrder'
// ==============
import * as serviceWorker from './serviceWorker'
React.axios = axios
// 创建仓库
const store = createStore(function (state = {
  statushome:"",
    navs: [{
      title: '推荐',
      href: '/home/Xrecommend',
      // isIndex:0,
      isShow:true,
      recommend: []
    }, {
      title: '少儿',
      href: '/home/Xchildren',
      isShow:false,
      children: []
    }, {
      title: '成人',
      href: '/home/Xadult',
      isShow:false,
      adult: []
    }, {
      title: '父母',
      href: '/home/Xparents',
      isShow:false,
      parents: []
    }, {
      title: '家庭',
      href: '/home/Xfamily',
      isShow:false,
      family: []
    }, {
      title: '旅行',
      href: '/home/Xtravel',
      isShow:false,
      travel: []
    }],
    content:[{
      idx:0,
      isContent:true
    },{
      idx:1,
      isContent:false
    },{
      idx:2,
      isContent:false
    }]
  } ,action) {
  switch (action.type) {
      case 'isActive':
      // 把仓库赋值给navs
      var  {navs}  = state
      // 遍历navs仓库，找到你要的东西
      for(var i=0;i<navs.length;i++){
        
        navs[1].children=action.children
        navs[2].adult=action.adult
        navs[3].parents=action.parents
        navs[4].family=action.family
        navs[5].travel=action.travel
        console.log(navs[1].children)
      }
        return {
            ...state,
            navs
        }
        break;
        // case 'getData':
        // // 把仓库赋值给navs
        // let {navs}  = state
        // // 遍历navs仓库，找到你要的东西
        // for(var i=0;i<navs.length;i++){
          
        //   navs[0].recommend=action.recommend
        //   console.log(navs[0].recommend)
        // }
        //   return {
        //       ...state,
        //       navs
        //   }
        //   break;
        case 'toggleNav':
        // 把仓库赋值给navs
        var  {content}  = state
        
        // 遍历navs仓库，找到你要的东西
        for(var i=0;i<content.length;i++){
          content[i].isContent=false
          content[action.idx].isContent =action.isContent
        }
        console.log(content)
          return {
              ...state,
              content
          }
          break;
          case 'sendStatus':
            return {
                ...state,
                statushome:action.statushome
            }
            break;
            // case 'transData':
            //     // 把仓库赋值给navs
            // let  {navs}  = state
            // console.log(333333)
            // // 遍历navs仓库，找到你要的东西
            // for(var i=0;i<navs.navs.length;i++){
            //   console.log(navs[0].recommend)
            //   navs[0].recommend = action.recommend
            //   // navs[0].isShow =action.isShow
            // }
            // return {
            //     ...state,
            //     navs
            // }
    default:
      return state
  }
})

axios.interceptors.request.use((config) => {
  Toast.loading('', 3,true);
	return config;
}, (err) => {
	return Promise.reject(err)

})

axios.interceptors.response.use((response) => {
	Toast.hide(); //关闭loading
	return response;
}, (err) => {
	return Promise.reject(err);

})


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className='container iphonex_padding'>
      
        <Switch>
        
        {/* console.log(this.props) */}
          <Route path='/home/' component={Home} />
          <Route path="/BestChoice/"  component={BestChoice} />
          <Route path="/Search/" component={Search} />
          <Route path="/Mine/" component={Mine} />
          <Route path="/Detail/" component={Detail} />
          <Route path="/ChildrensInsurance" component={ChildrensInsurance} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/CarOrder" component={CarOrder} />
          <Redirect from='/' exact to='/home/Xrecommend' />
        </Switch>
        
      </div>
    </Router>
  </Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
