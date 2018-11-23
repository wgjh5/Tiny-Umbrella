import React, { Component } from 'react'
import './Xelse.scss'




// import { Route } from 'react-router-dom'
class Xelse extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
        <div className="commont">
            <div className="commont_hd"><hr/>其他保险频道</div>
            <div className="other">
                <a href="/className/itemlist?id=1&amp;chn=otherchannel" className="other_item hide_1" data-track="pindao_otherchannels" style={{display: "none"}}>
                    <p className="icon_shaoer icon"></p>
                    <p className="other_txt">少儿保险</p>
                </a>
                <a href="/className/itemlist?id=2&amp;chn=otherchannel" className="other_item hide_2" data-track="pindao_otherchannels" style={{display: "inline"}}>
                    <p className="icon_chengren icon"></p>
                    <p className="other_txt">成人保险</p>
                </a>
                <a href="/className/itemlist?id=3&amp;chn=otherchannel" className="other_item hide_3" data-track="pindao_otherchannels" style={{display: "inline"}}>
                    <p className="icon_laoren icon"></p>
                    <p className="other_txt">父母保险</p>
                </a>
                <a href="/className/itemlist?id=8&amp;chn=otherchannel" className="other_item hide_8" data-track="pindao_otherchannels" style={{display: "inline"}}>
                    <p className="icon_jiating icon"></p>
                    <p className="other_txt">家庭保险</p>
                </a>
               {/* <!--  <a href="http://www.xiaoyusan.com/className/itemlist?id=9" className="other_item hide_9" data-track="pindao_otherchannels">
                    <p className="icon_long icon"></p>
                    <p className="other_txt">长期保险</p>
                </a> --> */}
                <a href="/className/itemlist?id=5&amp;chn=otherchannel" className="other_item hide_5" data-track="pindao_otherchannels" style={{display: "inline"}}>
                    <p className="icon_lvyou icon"></p>
                    <p className="other_txt">旅行保险</p>
                </a>
                <a href="/className/highInsure?chn=otherchannel" className="other_item hide_10" data-track="pindao_otherchannels" style={{display: "inline"}}>
                    <p className="icon_gaobaoe icon"></p>
                    <p className="other_txt">高保额保险</p>
                </a>
            </div>
        </div>
    )
  }
}

export default Xelse
