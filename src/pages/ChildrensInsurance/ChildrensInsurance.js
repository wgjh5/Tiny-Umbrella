import React, { Component } from 'react'
import './ChildrensInsurance.scss'
import XheaderBar from '../../components/Xhome/XheaderBar/XheaderBar'
import Xnav from '../../components/Xhome/Xnav/Xnav';
// import Xrecommend from '../../components/Xhome/XlistSection/Xrecommend/Xrecommend';
import Xchildren from '../../components/Xhome/XlistSection/Xchildren/Xchildren';
import Xquestions from '../../components/XChildrensInsurance/Xquestions/Xquestions';
import Xelse from '../../components/XChildrensInsurance/Xelse/Xelse';
import Xpbft from '../../components/Xhome/Xpbft/Xpbft';

import Xhonor from '../../components/Xhome/Xhonor/Xhonor';
import XaboutMe from '../../components/Xhome/XaboutMe/XaboutMe';
class XChildrensInsurance extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
        <div className="ccc"> 
        <div className="mod_container">
        <XheaderBar status="children"/>
            <div className="banner" id="banner">
                <img src="//sslstatic.xiaoyusan.com/h5/img/class/bannerV3/banner_1.jpg?v=20161117" alt="" className="w100" />
            </div>
            <div className="new_fl" id="new_fl">
              <div className="new_flbd clearfix">
                  <a href="//www.xiaoyusan.com/privilege/welfareV2?chn=item_children" className="new_link" data-track="item_children"></a>
              </div>
          </div>
          <Xnav status="children"/>
     
          <Xchildren status="children"/>
          <div className="ad" id="ad" style={{display: "block"}}></div>
          <Xquestions />
          <Xelse />
          <Xpbft />
          <Xhonor />
          <XaboutMe />
        </div>
        </div>
    )
        
        
  }
}

export default XChildrensInsurance
