import React, { Component } from 'react'
// import './XswiperContainer.css'
import '../../../assets/antd.css'
import { Carousel } from 'antd'
// 引入组件

// import { Route } from 'react-router-dom'
class XswiperContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className='swiper-container swiper-container-horizontal' id='slider' style={{paddingBottom: '0',width: '100%'}}>
        <Carousel autoplay>
          <div className='swiper-slide swiper-slide-duplicate' style={{width: '375px'}}>
            <a href='https://www.xiaoyusan.com/insurance/detail?id=133510&amp;chn=h5banner'><img src='https://sslstatic.xiaoyusan.com/act/img/1542106508.jpg' alt='' /></a>
          </div>
          <div className='swiper-slide swiper-slide-duplicate' style={{width: '375px'}}>
            <a href='https://www.xiaoyusan.com/insurance/detail?id=133510&amp;chn=h5banner'><img src='https://sslstatic.xiaoyusan.com/act/img/1540261738.jpg' alt='' /></a>
          </div>
          <div className='swiper-slide swiper-slide-duplicate' style={{width: '375px'}}>
            <a href='https://www.xiaoyusan.com/insurance/detail?id=133510&amp;chn=h5banner'><img src='https://sslstatic.xiaoyusan.com/act/img/1542100589.png' alt='' /></a>
          </div>
          <div className='swiper-slide swiper-slide-duplicate' style={{width: '375px'}}>
            <a href='https://www.xiaoyusan.com/insurance/detail?id=133510&amp;chn=h5banner'><img src='https://sslstatic.xiaoyusan.com/act/img/1542364535.png' alt='' /></a>
          </div>
          <div className='swiper-slide swiper-slide-duplicate' style={{width: '375px'}}>
            <a href='https://www.xiaoyusan.com/insurance/detail?id=133510&amp;chn=h5banner'><img src='https://sslstatic.xiaoyusan.com/act/img/1542365660.jpg' alt='' /></a>
          </div>
        </Carousel>
        <div className='new_fl' id='new_fl'>
          <div className='new_flbd clearfix'>
            <a href='//www.xiaoyusan.com/privilege/welfareV2?chn=h5shouye20180308' className='new_link' data-track='shouye_xinrenfuli'></a>
          </div>
        </div>
      </div>

    )
  }
}

export default XswiperContainer
