import React, { Component } from 'react'
import './Xpbft.scss'



// import { Route } from 'react-router-dom'
class Xpbft extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className="pb">
        <div className="pbft ">
    <div className="pbft_hd">
        <hr/>合作保险公司</div>
    <div className="pbft_bd" style={{paddingBottom:"1rem",borderBottom:"1px solid #f0f0f0"}}>
        <div className="pbft_company swiper-container-horizontal swiper-container-free-mode">
            <div className="pbft_company_wrapper swiper-wrapper">
                <div className="pbft_company_slide swiper-slide swiper-slide-active"  style={{width: "84.8571px"}}>
                    <img className="logo swiper-lazy swiper-lazy-loaded"  src="https://sslstatic.xiaoyusan.com/h5/img/logo/1.png" />
                </div>
                <div className="pbft_company_slide swiper-slide swiper-slide-next"  style={{width: "84.8571px"}}>
                    <img className="logo swiper-lazy swiper-lazy-loaded"  src="https://sslstatic.xiaoyusan.com/h5/img/logo/2.png" />
                </div>
                <div className="pbft_company_slide swiper-slide"  style={{width: "84.8571px"}}>
                    <img className="logo swiper-lazy swiper-lazy-loaded"  src="https://sslstatic.xiaoyusan.com/h5/img/logo/3.png" />
                </div>
                <div className="pbft_company_slide swiper-slide"  style={{width: "84.8571px"}}>
                    <img className="logo swiper-lazy swiper-lazy-loaded"  src="https://sslstatic.xiaoyusan.com/h5/img/logo/4.png" />
                </div>
                <div className="pbft_company_slide swiper-slide"  style={{width: "84.8571px"}}>
                    <img data-src="https://sslstatic.xiaoyusan.com/h5/img/logo/5.png" className="logo swiper-lazy" />
                </div>
                <div className="pbft_company_slide swiper-slide"  style={{width: "84.8571px"}}>
                    <img data-src="https://sslstatic.xiaoyusan.com/h5/img/logo/6.png" className="logo swiper-lazy" />
                </div>
                <div className="pbft_company_slide swiper-slide"  style={{width: "84.8571px"}}>
                    <img data-src="https://sslstatic.xiaoyusan.com/h5/img/logo/7.png" className="logo swiper-lazy" />
                </div>
                <div className="pbft_company_slide swiper-slide"  style={{width: "84.8571px"}}>
                    <img data-src="https://sslstatic.xiaoyusan.com/h5/img/logo/8.png" className="logo swiper-lazy" />
                </div>
                <div className="pbft_company_slide swiper-slide"  style={{width: "84.8571px"}}>
                    <img data-src="https://sslstatic.xiaoyusan.com/h5/img/logo/9.png" className="logo swiper-lazy" />
                </div>
                <div className="pbft_company_slide swiper-slide"  style={{width: "84.8571px"}}>
                    <img data-src="https://sslstatic.xiaoyusan.com/h5/img/logo/10.png" className="logo swiper-lazy" />
                </div>
                <div className="pbft_company_slide swiper-slide"  style={{width: "84.8571px"}}>
                    <img data-src="https://sslstatic.xiaoyusan.com/h5/img/logo/11.png" className="logo swiper-lazy" />
                </div>
                <div className="pbft_company_slide swiper-slide" style={{width: "84.8571px"}}>
                    <img data-src="https://sslstatic.xiaoyusan.com/h5/img/logo/12.png" className="logo swiper-lazy" />
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
  }
}

export default Xpbft
