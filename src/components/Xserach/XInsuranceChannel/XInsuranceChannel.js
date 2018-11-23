import React, { Component } from 'react'
import './XInsuranceChannel.css'
// 引入组件


import { Link } from 'react-router-dom'
class XInsuranceChannel extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
    // <div>
    //     <div className="mod_tips" style={{display:"none"}}>
    //         <p className="mod_tips_txt">当前已是最版</p>
    //     </div>
        <div className="box">
            <div className="box_hd">保险频道</div>
            <div className="box_bd">
                <table className="table channel">
                    <tbody>
                        <tr>
                            <td width="33.33%">
                                <Link to="/ChildrensInsurance" className="channel_link" data-track="faxian_shaoer"> 
                                    <i className="channel_icon img1 icon_shaor" data-track="faxian_shaoer"></i>
                                    <p className="channel_txt" data-track="faxian_shaoer">少儿保险</p>
                                </Link>
                            </td>
                            <td width="33.33%">
                                <Link to="/ChildrensInsurance" className="channel_link" data-track="faxian_chengren"> 
                                    <i className="channel_icon img1 icon_chenren" data-track="faxian_chengren"></i>
                                    <p className="channel_txt" data-track="faxian_chengren">成人保险</p>
                                </Link>
                            </td>
                            <td width="33.33%">
                                <Link to="/ChildrensInsurance" className="channel_link" data-track="faxian_fumu">
                                    <i className="channel_icon img1 icon_laoren" data-track="faxian_fumu"></i>
                                    <p className="channel_txt" data-track="faxian_fumu">父母保险</p>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td width="33.33%">
                                <Link to="/ChildrensInsurance" className="channel_link" data-track="faxian_jiating">
                                    <i className="channel_icon img1 icon_jiating" data-track="faxian_jiating"></i>
                                    <p className="channel_txt" data-track="faxian_jiating">家庭保险</p>
                                </Link>
                            </td>
                            <td width="33.33%">
                                <Link to="/ChildrensInsurance" className="channel_link" data-track="faxian_lvxing">
                                    <i className="channel_icon img1 icon_lvyou" data-track="faxian_lvxing"></i>
                                    <p className="channel_txt" data-track="faxian_lvxing">旅行保险</p>
                                </Link>
                            </td>
                            <td width="33.33%" style={{position: "relative"}}>
                                <Link to="/ChildrensInsurance" className="channel_link" data-track="faxian_highInsure">
                                    <i className="channel_icon img1 icon_highInsure" data-track="faxian_highInsure"></i>
                                    <p className="channel_txt" data-track="faxian_highInsure">高保额保险</p>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    // </div>
    )
  }
}

export default XInsuranceChannel
