import React, { Component } from 'react'
import './CarOrder.scss'
// 引入组件


class CarOrder extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
        <div className="g-wrap">

        <div className="header-nav row">
            <a href="javascript:;" className="active col"><span>全部</span></a>
            <a href="javascript:;" className="col"><span>待付款<em></em></span></a>
            <a href="javascript:;" className="col"><span>待生效<em></em></span></a>
            <a href="javascript:;" className="col"><span>待评价<em></em></span></a>
        </div>
      
        <ul className="list">
                {/* <div className="section_img">
                            <img src={item.imgurl} data-original={item.imgurl}
                                alt="" className="article_img lazy" style={{display: "inline"}} />
                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static3.png" alt="" className="article_static2" style={{width:"28%"}}/>
                    
                        </div>
                        <div className="col">
                            <div className="article_tit clearfix">{item.title}</div>
                            <div className="article_txt" style={{display:"block"}}> 
                                <div className="or icon icon2_6" >
                                   {item.describeone}
                                    <br />
                                </div>
                                <div className="or icon icon2_6">
                                {item.describetow}
                                    <br />
                                </div>
                                <div className="jingjing row">
                                </div>
                            </div>
                            <div className="article_ft row">
                                <div className="article_price col">
                                    <b>{item.price}</b>元起
                                    <span className="article_estimate">{item.evaluate}条评价</span>
                                </div>
                                <div>
                                    <span className="article_btn">立即投保</span>
                                </div>
                            </div>
                        </div> */}
        </ul>


    </div>
      
    )
  }
}

export default CarOrder
