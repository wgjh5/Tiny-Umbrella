import React, { Component } from 'react'
import './Home.css'



// 引入组件
import HomeIndex from '../HomeIndex/HomeIndex'
import Search from '../Search/Search'
import BestChoice from '../BestChoice/BestChoice'
import Mine from '../Mine/Mine'
import Xfooter from '../../components/Xfooter/Xfooter'

import { Route } from 'react-router-dom'
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Route path="/home/HomeIndex"  component={HomeIndex} />
        <Route path="/home/BestChoice"  component={BestChoice} />
        <Route path="/home/Search" component={Search} />
        <Route path="/home/Mine" component={Mine} />
      <Xfooter />
      </div>
    )
  }
}

export default Home
