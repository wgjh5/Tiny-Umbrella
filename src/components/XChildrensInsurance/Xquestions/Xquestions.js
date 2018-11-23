import React, { Component } from 'react'
import './Xquestions.scss'

// 引入组件

// import { Route } from 'react-router-dom'
class Xquestions extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div className='question'>
        <div className='classroom' id='classroom'>
          <div className='classroom_hd row middle'>
            <div className='classroom_head icon'></div>
            <div className='classroom_introduce col'>
              <h2>陈老师(小雨伞保险首席精算师)</h2>
              <div className='classroom_hua'>
                深度解析少儿保险怎么买才不会错
              </div>
            </div>
          </div>
          <ul className='classroom_bd'>
            <li>
              <a href='https://www.xiaoyusan.com/article/content/articleid/35432933' className='classroom_link' data-track='pindao_chenlaoshi_link'>
                <p> 1.儿童身故保额最高20万，买多浪费？ </p><span className='arrow icon'></span></a>
            </li>
            <li>
              <a href='https://www.xiaoyusan.com/article/content/articleid/35432862' className='classroom_link' data-track='pindao_chenlaoshi_link'>
                <p> 2.6分钟搞懂香港保险的门门道道 </p><span className='arrow icon'></span></a>
            </li>
            <li>
              <a href='https://www.xiaoyusan.com/article/content/articleid/35432812' className='classroom_link' data-track='pindao_chenlaoshi_link'>
                <p> 3.重疾险附加轻症划算吗？ </p><span className='arrow icon'></span></a>
            </li>
            <li>
              <a href='https://www.xiaoyusan.com/article/content/articleid/10692030' className='classroom_link' data-track='pindao_chenlaoshi_link'>
                <p> 4.要买少儿重疾险的家长这么买就赚了 </p><span className='arrow icon'></span></a>
            </li>
            <li>
              <a href='https://www.xiaoyusan.com/article/content/articleid/6884741' className='classroom_link' data-track='pindao_chenlaoshi_link'>
                <p> 5.解析国内少儿门诊类保险稀缺原因 </p><span className='arrow icon'></span></a>
            </li>
          </ul>
          <div className='classroom_ft'>
            <a href='//www.xiaoyusan.com/act/lesson?chn=pindao_chenlaoshi' data-track='pindao_chenlaoshimore'>查看更多问题 ></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Xquestions
