import React, { Component } from 'react'
import './Xservice.css'




class Xservice extends Component {
  constructor (props) {
    super(props)
    this.state = {
        
    }
  }
  render () {
    return (
        <div className="box">
            <div className="box_hd">特色服务</div>
            <div className="box_bd">
                <table className="table channel">
                    <tbody>
                        <tr>
                            <td width="33.33%" style={{position: "relative"}}>
                                <i className="channel_icon img1 icon_new2" data-track="faxian_highInsure"></i>
                                <a href="//www.xiaoyusan.com/pay/actPay?id=1004&amp;chn=faxian" className="channel_link" data-track="faxian_baoxianwenzhenfuwu">
                                    <i className="channel_icon img1 icon_consult" data-track="faxian_baoxianwenzhenfuwu"></i>
                                    <p className="channel_txt" data-track="faxian_baoxianwenzhenfuwu">保险问诊服务</p>
                                </a>
                            </td>
                           
                            <td width="33.33%">
                                <a href="http://b.xiaoyusan.com/?chn=faxian" className="channel_link" data-track="faxian_tuanxianyuyue">
                                    <i className="channel_icon img1 icon_yuyue" data-track="faxian_tuanxianyuyue"></i>
                                    <p className="channel_txt" data-track="faxian_tuanxianyuyue">企业团险预约</p>
                                </a>
                            </td>
                           <td>
                               <a href="/insurancedlist/index.html#/familypolicy?chn=faxian" className="channel_link">
                                   <i className="channel_icon img1 icon_fs"></i>
                                   <p className="channel_txt">家庭保单管理</p>
                               </a>
                           </td>
                        </tr>
                        <tr>
                           {/* <!-- <td className="new">
                               <a href="/diseaseRecomment/index/test?chn=faxian" className="channel_link">
                                   <i className="channel_icon icon_disease"></i>
                                   <p className="channel_txt">疾病核保推荐</p>
                               </a>
                           </td> --> */}
                           <td className="new">
                               <a href="/hebao?chn=faxian" className="channel_link">
                                   <i className="channel_icon icon_tese"></i>
                                   <p className="channel_txt">元芳核保服务</p>
                               </a>
                           </td>
                           <td>
                               <a href="javascript:;" className="channel_link">
                                   <i className="channel_icon icon_more"></i>
                                   <p className="channel_txt">敬请期待</p>
                               </a>
                           </td>
                           <td>
                               
                           </td>
                        </tr>
                        
                        {/* <!-- <tr>
                            <td width="33.33%">
                                <a href="//www.xiaoyusan.com/insurance/detail?id=101460&chn=faxian" className="channel_link" data-track="faxian_shaoerchike">
                                    <i className="channel_icon img1 icon_cike" data-track="faxian_shaoerchike"></i>
                                    <p className="channel_txt" data-track="faxian_shaoerchike">少儿齿科服务</p>
                                </a>
                            </td>
                            <td width="33.33%">
                                <a href="//www.xiaoyusan.com/insurance/detail?id=105964&chn=faxian" className="channel_link" data-track="faxian_haiwaijiuyi">
                                    <i className="channel_icon img1 icon_haiwai" data-track="faxian_haiwaijiuyi"></i>
                                    <p className="channel_txt" data-track="faxian_haiwaijiuyi">海外就医服务</p>
                                </a>
                            </td>
                            <td>
                                <a href="//www.xiaoyusan.com/pay/actpay?id=1002&chn=faxian" className="channel_link" data-track="faxian_feiyanyuyue">
                                    <i className="channel_icon img1 icon_ym" data-track="faxian_feiyanyuyue"></i>
                                    <p className="channel_txt" data-track="faxian_feiyanyuyue">肺炎疫苗预约</p>
                                </a>
                            </td> 
                            <td>
                                <div className="channel_link">
                                    <i className="channel_icon img1 icon_wait"></i>
                                    <p className="channel_txt">敬请期待</p>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <a href="//www.xiaoyusan.com/act/lesson" className="channel_link" data-track="faxian_lecture">
                                    <i className="channel_icon img1 icon_aha" data-track="faxian_lecture"></i>
                                    <p className="channel_txt" data-track="faxian_lecture">张老师课堂</p>
                                </a>
                            </td>
                            <td>
                                <a href="//www.xiaoyusan.com/pay/exchange?actid=2017052402&chn=faxian" className="channel_link" data-track="faxian_HPVyuyue">
                                    <i className="channel_icon img1 icon_xiya2" data-track="faxian_xiya2"></i>
                                    <p className="channel_txt" data-track="faxian_xiya2">超值洗牙</p>
                                </a>
                            </td>
                        </tr> --> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
  }
}

export default Xservice
