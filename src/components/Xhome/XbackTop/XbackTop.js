import React, { Component } from 'react'
import './XbackTop.css'



// import { Route } from 'react-router-dom'
class XbackTop extends Component {
  constructor (props) {
    super(props)
    this.state = {
      backT:false
    }
  }
  componentWillMount(){
    // this.back.bind(this)
    window.addEventListener("scroll",this.back.bind(this))
  }
  back(){
      window.onload = function(){
        
      // 0.获取totop元素
      var totop = document.querySelector(".scrollTop");
      // console.log(totop)
      // 1.监听滚动事件:当滚动条滚动的距离大于1000,让totop出现
      window.onscroll = function(){
        console.log(66)
          if(window.scrollY >100){
        
              totop.style.display = "block";
          }else if(window.scrollY <=100){
              totop.style.display = "none";
          
          }
      }
    }
  }
 
  backTop(){
   
    var timer = setInterval(function(){
      var currentTop = window.scrollY;
      
      console.log(window.scrollY)
              var speed = -Math.floor((currentTop-0)/5);
              currentTop += speed;
              
             window.scrollTo(0,currentTop)
            if(currentTop<=5){
              clearInterval(timer);
            }

  },30)
  }
 
  render () {
    return (
      <div>
        <div id="detail_swiper">
            <div className="detail_swiper_box" id="detail_article0"></div>
        </div>
        {/* ======backTop===== */}
        {/* style={{display:(this.state.backT==true)? "block": "none"}} */}
        <div className="scrollTop iphonex_margin" onClick={this.backTop} style={{display:"block"}}></div>
      </div>
    )
  }
}

export default XbackTop
