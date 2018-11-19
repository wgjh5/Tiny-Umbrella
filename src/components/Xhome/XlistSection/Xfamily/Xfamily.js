import React, { Component } from 'react'
import './Xfamily.css'



// 引入组件


class Xfamily extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (

            <a className="article row" >
        <div className="section_img">
            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1539328597.jpg" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1539328597.jpg"
                alt="" className="article_img lazy" style={{display: "inline"}} />
            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static3.png" alt="" className="article_static2" style={{width:"28%"}}/>
            
        </div>
        <div className="col">
            <div className="article_tit clearfix">擎天柱定期寿险2号</div>
            <div className="article_txt">
                <div className="or icon icon2_6">
                    可附加投/被保人豁免（独家）
                    <br/>
                </div>
                <div className="or icon icon2_6">
                    保障身故和全残，智能定价更便宜
                    <br/>
                </div>
                <div className="jingjing row">
                </div>
            </div>
            <div className="article_ft row">
                <div className="article_price col">
                    <b>37</b>元起
                    <span className="article_estimate">162条评价</span>
                </div>
                <div>
                    <span className="article_btn">立即投保</span>
                </div>
            </div>
        </div>
    </a>

    )
  }
}

export default Xfamily
