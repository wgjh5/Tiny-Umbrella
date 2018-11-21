import React, { Component } from 'react'
import './Xsettlement.scss'


class Xsettlement extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
        <div>
        <div id="auto4">
            <div className="box claims_box">
                <div className="box_tit">咔嚓理赔</div>
                <div className="claims_li">
                    <div className="claims_tit">
                        <span className="serial">1</span>理赔步骤
                        <a href="https://www.xiaoyusan.com/claims/priviewClaims?groupid=133820" data-track="detail_tryclaim"
                            className="claims_link fr">查看理赔资料</a>
                    </div>
                    <div className="claims_img lazyload">
                        <img alt="" src="//sslstatic.xiaoyusan.com/h5/img/insurance/claims/xys_offline.jpg?v=2017082902" className="img"
                            style={{display: "inline"}} />
                    </div>
                </div>
                <div className="claims_li">
                    <div className="claims_tit">
                        <span className="serial">2</span>理赔案例</div>
                    <p className="box_nodata">暂无理赔案例</p>
                </div>
            </div>
        </div>
        
        </div>
    )
  }
}

export default Xsettlement
