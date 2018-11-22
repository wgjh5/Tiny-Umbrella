import React, { Component } from 'react'
import './ChildrensInsurance.scss'
import XheaderBar from '../../components/Xhome/XheaderBar/XheaderBar'
import Xnav from '../../components/Xhome/Xnav/Xnav';
import Xrecommend from '../../components/Xhome/XlistSection/Xrecommend/Xrecommend';


class XChildrensInsurance extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
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
          <Xrecommend />
        </div>
    )
        
        
  }
}

export default XChildrensInsurance
