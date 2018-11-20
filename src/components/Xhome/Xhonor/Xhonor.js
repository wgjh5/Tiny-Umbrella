import React, { Component } from 'react'
import './Xhonor.scss'
import { Carousel } from 'antd'

// import { Route } from 'react-router-dom'
class Xhonor extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className="honor">
      <div className='pbft grid'>
        <div className='pbft_hd col-0'>
          <hr style={{
 marginTop: '-0.6rem'
 }} /> 公司荣誉
        </div>
        <div className='pbft_bd col-1'>
          <div className='pbft_honor swiper-container-vertical swiper-container-free-mode'>

              <Carousel vertical='true' autoplay style={{width:"228px"}}>
                <li className='pbft_honor_li swiper-slide swiper-no-swiping swiper-slide-duplicate' data-swiper-slide-index='9' style={{height: "40px"}}>
                  <a href='//www.xiaoyusan.com/article/h5newsdetail/articleid/35432796' className='pbft_honor_link' data-track='foot_rongyu'>
                  <span className='pbft_honor_icon'></span>2017全球最具价值金融科技250强<span className='pbft_honor_arrow'></span></a>
                </li>
                <li className='pbft_honor_li swiper-slide swiper-no-swiping swiper-slide-duplicate' data-swiper-slide-index='9' style={{height: "40px"}}>
                  <a href='//www.xiaoyusan.com/article/h5newsdetail/articleid/35432796' className='pbft_honor_link' data-track='foot_rongyu'>
                  <span className='pbft_honor_icon'></span>2017全球最具价值金融科技250强<span className='pbft_honor_arrow'></span></a>
                </li>
                <li className='pbft_honor_li swiper-slide swiper-no-swiping swiper-slide-duplicate' data-swiper-slide-index='9' style={{height: "40px"}}>
                  <a href='//www.xiaoyusan.com/article/h5newsdetail/articleid/35432796' className='pbft_honor_link' data-track='foot_rongyu'>
                  <span className='pbft_honor_icon'></span>2017全球最具价值金融科技250强<span className='pbft_honor_arrow'></span></a>
                </li>
                <li className='pbft_honor_li swiper-slide swiper-no-swiping swiper-slide-duplicate' data-swiper-slide-index='9' style={{height: "40px"}}>
                  <a href='//www.xiaoyusan.com/article/h5newsdetail/articleid/35432796' className='pbft_honor_link' data-track='foot_rongyu'>
                  <span className='pbft_honor_icon'></span>2017全球最具价值金融科技250强<span className='pbft_honor_arrow'></span></a>
                </li>
              </Carousel>

          </div>
        </div>
      </div>
      </div> 
      //     <div classNameName="pbft grid">
      //     <div classNameName="pbft_hd col-0">
      //         <hr style={{marginTop: "-0.6rem"}}/>公司荣誉</div>
      //     <div classNameName="pbft_bd col-1">
      //         <div classNameName="pbft_honor swiper-container-vertical swiper-container-free-mode">
      //             <ul classNameName="pbft_honor_ul swiper-wrapper" style={{transitionDuration: '0ms', transform: 'translate3d(0px, -360px, 0px)'}}>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping swiper-slide-duplicate" data-swiper-slide-index="9"
      //                     style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432796" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>2017全球最具价值金融科技250强
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping" data-swiper-slide-index="0" style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432860" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>InsurStar-最具创新力企业奖
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping" data-swiper-slide-index="1" style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432856" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>入选NBI金融科技领域新锐企业TOP5
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping" data-swiper-slide-index="2" style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432857" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>荣登2017金融科技企业TOP30榜单
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping" data-swiper-slide-index="3" style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432844" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>深圳木成林科技获国家高新技术企业认证
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping" data-swiper-slide-index="4" style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432805" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>Xtecher2017中国FinTech创业公司TOP 50
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping" data-swiper-slide-index="5" style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432816" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>创业邦2017中国年度创新成长企业100强
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping" data-swiper-slide-index="6" style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432818" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>大粤网2017创新模式先锋机构
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping swiper-slide-prev" data-swiper-slide-index="7" style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432819" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>亿欧2017年中国金融产业十大创新力企业
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping swiper-slide-active" data-swiper-slide-index="8" style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432798" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>中国保险风云榜优秀互联网保险创新平台
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping swiper-slide-next" data-swiper-slide-index="9" style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432796" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>2017全球最具价值金融科技250强
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //                 <li classNameName="pbft_honor_li swiper-slide swiper-no-swiping swiper-slide-duplicate" data-swiper-slide-index="0" style="height: 40px;">
      //                     <a href="//www.xiaoyusan.com/article/h5newsdetail/articleid/35432860" classNameName="pbft_honor_link" data-track="foot_rongyu">
      //                         <span classNameName="pbft_honor_icon"></span>InsurStar-最具创新力企业奖
      //                         <span classNameName="pbft_honor_arrow"></span>
      //                     </a>
      //                 </li>
      //             </ul>
      //         </div>
      //     </div>
      // </div>
      
    )
  }
}

export default Xhonor
