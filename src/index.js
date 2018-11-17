import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/base.css';
import './assets/body.css';
// 路由引入
import { HashRouter  as Router, Route , Redirect ,Switch} from 'react-router-dom'
// import { Redirect } from 'react-router'
// import { HashRouter , Route , Redirect } from 'react-router-dom'
// 


// import App from './App';
import * as serviceWorker from './serviceWorker';



// redux引入
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

//父组件
import Home from './pages/Home/Home'

// 创建仓库
const store = createStore(function(state={
    navs:[{
        title:"推荐",
        recommend:[]
    },{
        title:"少儿",
        recommend:[]
    },{
        title:"成人",
        recommend:[]
    },{
        title:"父母",
        recommend:[]
    },{
        title:"家庭",
        recommend:[]
    },{
        title:"旅行",
        recommend:[]
    }]
},action){

    // switch (action.type) {
    //   case 'toggleSheet':
    //     return {
    //         ...state,
    //         isShowActionSheet:action.isShowActionSheet
    //     }
    //   default:
    //     return state
    // }
})
ReactDOM.render(
    <Provider store={store}>
    <Router>
    <div className="container iphonex_padding">
    <Switch>
    <Route path="/home/" component={Home} />
    <Redirect from="/" exact  to="/home/HomeIndex" />
    </Switch>
    </div>
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
