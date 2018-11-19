import React, { Component } from 'react'
import './Home.css'

import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

// 引入组件

// import Xfooter from '../../components/Xfooter/Xfooter'
import XheaderBar from '../../components/Xhome/XheaderBar/XheaderBar'
import XswiperContainer from '../../components/Xhome/XswiperContainer/XswiperContainer'
import Xpblink from '../../components/Xhome/Xpblink/Xpblink'
import Xnav from '../../components/Xhome/Xnav/Xnav'
import Xrecommend from '../../components/Xhome/XlistSection/Xrecommend/Xrecommend'
import Xchildren from '../../components/Xhome/XlistSection/Xchildren/Xchildren'
import Xadult from '../../components/Xhome/XlistSection/Xadult/Xadult'
import Xparents from '../../components/Xhome/XlistSection/Xparents/Xparents'
import Xfamily from '../../components/Xhome/XlistSection/Xfamily/Xfamily'
import Xtravel from '../../components/Xhome/XlistSection/Xtravel/Xtravel'

import XbackTop from '../../components/Xhome/XbackTop/XbackTop';
import Xpbft from '../../components/Xhome/Xpbft/Xpbft';
import Xhonor from '../../components/Xhome/Xhonor/Xhonor';
import Xfooter from '../../components/Xfooter/Xfooter';
import XaboutMe from '../../components/Xhome/XaboutMe/XaboutMe';

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
        togolleClass:0,
        status:"home"
    }

    // 根据路径给togoleclass赋值
     switch (props.location.pathname) {
      case "/home/Xrecommend":
      this.state.togolleClass=0
        break;
        case "/home/Xchildren":
      this.state.togolleClass=1
        break;
        case "/home/Xadult":
      this.state.togolleClass=2
        break;
        case "/home/Xparents":
      this.state.togolleClass=3
        break;
    case "/home/Xfamily":
      this.state.togolleClass=4
        break;
    case "/home/Xtravel":
      this.state.togolleClass=5
        break;
      default:
        this.state.togolleClass=0
        break;
    }
  }
  
 
  render () {
    return (
      <div>
        
        <XheaderBar status={this.state.status}/>
        <XswiperContainer />
        <Xpblink />
        <Xnav tab={this.state.togolleClass}/>
        <div className="section" id="list_section">
        <div className='section_item' id='article_0'>
          <Route path='/home/Xrecommend' component={Xrecommend} />
          <Route path="/home/Xchildren"  component={Xchildren} />
          <Route path="/home/Xadult" component={Xadult} />
          <Route path="/home/Xparents" component={Xparents} />
          <Route path="/home/Xfamily" component={Xfamily} />
          <Route path="/home/Xtravel" component={Xtravel} />
        </div>
          <XbackTop />
          <Xpbft />
          <Xhonor />
          <XaboutMe />
          </div>
        <Xfooter />
      </div>
    )
  }
  // componentDidMount(){
  //   this.togolle();
  // }
}

export default Home
