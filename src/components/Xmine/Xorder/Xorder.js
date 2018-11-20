import React, { Component } from 'react'
import './Xorder.css'

class Xorder extends Component {
  constructor (props) {
    super(props)
    this.props = props;
    this.state = {

    }
  }
  render () {
   return( 
       <div>
    <div className="box" style={{marginTop: "0"}}>
        {/* <!-- <h2 className="box_tit">保险服务</h2> --> */}
        <ul className="lists">
            <li className="lists_li border-1px">
                <a href="/my/deallist " className="lists_item row middle" data-track="my_deallist" id="myorder">
                    <p className="newicon bg-o5"></p>
                    <div className="lists_box col">
                        <h3 className="lists_tit ">我的保单</h3>
                        {/* <!-- <p className="lists_txt">通过被保人身份信息查询保单详情</p> --> */}
                    </div>
                </a>
            </li>
            <li className="lists_li border-1px">
                <a href="/my/claimslist" className="lists_item row middle" data-track="my_claimslist" id="myclaim">
                    <p className="newicon bg-o4"></p>
                    <div className="lists_box col">
                        <h3 className="lists_tit ">我的理赔和售后</h3>
                        {/* <!-- <p className="lists_txt">保险公司官网验证小雨伞保单</p> --> */}
                    </div>
                </a>
            </li>
            <li className="lists_li hide border-1px">
                <a href="/healthConfirm/healthList" className="lists_item row middle" data-track="my_healthlist" id="myhealth">
                    <p className="newicon bg-o3"></p>
                    <div className="lists_box col">
                        <h3 className="lists_tit ">我的人工核保进度</h3>
                    </div>
                </a>
            </li>
            <li className="lists_li border-1px" style={{display: "none"}}>
                <a href="/my/couponlist" className="lists_item row middle" data-track="my_couponlist" id="mycoupon">
                    <p className="newicon bg-o2"></p>
                    <div className="lists_box col">
                        {/* <!-- <h3 className="lists_tit">我的优惠券和保险卡</h3> --> */}
                        <h3 className="lists_tit ">我的优惠券</h3>

                    </div>
                </a>
            </li>
            <li className="lists_li">
                <a href="/AwardRelease/index" className="lists_item row middle" data-track="my_couponlist" id="myaward">
                    <p className="newicon icon_xubao"></p>
                    <div className="lists_box col">
                        <h3 className="lists_tit">我的奖品和服务</h3>
                        {/* <!-- <h3 className="lists_tit">我的更多</h3> --> */}
                    </div>
                </a>
            </li>
            {/* <!-- <li className="lists_li" id="renewal">
                <a href="/renewal/my" className="lists_item grid">
                    <p className="icon icon_xubao"></p>
                    <div className="lists_box">
                        <h3 className="lists_tit">申请续保</h3>
                    </div>
                </a>
            </li> --> */}
        </ul>
    </div>
    <div className="box" style={{margin: "1rem 0 0"}}>
    <ul className="server">
        <li className="server_li">
            <a className="grid middle  border-1px " href="/renewal/myList?chn=gerenzhongxin" data-track="my_continue">
                <i className="newicon bg-q6_03"></i>
                <p className="server_li_text col-1">申请续保
                    <span style={{display: "none", width: "2.2rem", lineHeight: "1.2rem", fontSize: "1rem", borderRadius: "1.2rem", backgroundColor: "rgb(250, 54, 59)", textAlign: "center", fontFamily: "aral", color: "rgb(255, 255, 255)", verticalAlign: "0.1rem", marginLeft: "0.4rem"}}></span>
                </p>
            </a>
        </li>
        <li className="server_li border-1px">
            <a className="grid middle" href="/my/claimsdeal" data-track="my_claim">
                <i className="newicon bg-q2_03"></i>
                <p className="server_li_text col-1">申请理赔</p>
            </a>
        </li>
        <li className="server_li border-1px">
            <a className="grid middle" href="/static/page/name/license?page=section3" data-track="my_true">
                <i className="newicon bg-q5_03"></i>
                <p className="server_li_text col-1">保单验真</p>
            </a>
        </li>
        <li className="server_li border-1px">
            <a className="grid middle" href="/my/dealquery" data-track="my_dealquery">
                <i className="newicon bg-q1_03"></i>
                <p className="server_li_text col-1">证件号查保单</p>
            </a>
        </li>
        {/* <!-- <li className="server_li">
            <a className="grid middle" href="/my/insuredlist" data-track="my_insuredlist">
                <i className="myicon myicon_manage"></i>
                <p className="server_li_text col-1">被保人信息管理</p>
            </a>
        </li> --> */}
        <li className="server_li">
            <a className="grid middle" href="/insurancedlist/index.html#/familypolicy?chn=deallist" data-track="my_analyse">
                <i className="newicon bg-q4_03 "></i>
                <p className="server_li_text col-1">家庭保单管理
                    <img style={{width: "2.2rem",height: "1.1rem",marginTop: ".4rem"}} src="//sslstatic.xiaoyusan.com/h5/img/my/inew.jpg"
                        alt="" />
                </p>
            </a>
        </li>
        <li className="server_li">
            {/* <!-- 判断是否新人来展示不同的文案和入口 simba 20180901 melon需求 --> */}
            <a className="grid middle" href="//www.xiaoyusan.com/privilege/welfareV2?chn=my_newwelfare" data-track="my_question">
                <i className="newicon bg-q3"></i>
                <p className="server_li_text col-1">新人福利 </p>
            </a>

        </li>
    </ul>
</div>

</div>
   )   
  }
}

export default Xorder
