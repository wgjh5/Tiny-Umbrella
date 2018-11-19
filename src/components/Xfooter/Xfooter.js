import React, { Component } from 'react'
import './Xfooter.css'
// 引入组件

import { Link } from 'react-router-dom'

class Xfooter extends Component {
  constructor (props) {
    super(props)
    this.state = {
        tab:props.tab,
        tabs:[{
            title:"首页",
            href:"home/Xrecommend",
            isActive:false,
            dataId:"tab_home",
            dataClass:"public_icon_sy"
        },{
            title:"严选",
            href:"bestchoice",
            isActive:false,
            dataId:"tab_yanxuan",
            dataClass:"public_icon_yx"
        },{
            title:"发现",
            href:"search",
            isActive:false,
            dataId:"tab_discovery",
            dataClass:"public_icon_fx"
        },{
            title:"我的",
            href:"mine",
            isActive:false,
            dataId:"tab_my",
            dataClass:"public_icon_gr"
        }]
    }
    switch (window.location.hash.slice(2)) {
        case "/home/Xrecommend":
          this.state.tab=0
          break;
          case "bestchoice":
          this.state.tab=1
          break;
          case "search":
          this.state.tab=2
          break;
          case "mine":
          this.state.tab=3
          break;
        default: this.state.tab=0
          break;
      }
  }
  toggleClass(index){
      this.setState({
        tab:index
      })
  }
  render () {
    return (
        <div  className="public_tab iphonex_padding iphonex_white" style={{display: "block"}}>
        <div className="public_tab_box">
            {(()=>{
                  return this.state.tabs.map((item,index)=>{
                        return (
                            <Link to={ {pathname:`/${item.href}` }}  replace key={index} onClick={this.toggleClass.bind(this,index)}  className={this.state.tab===index? "public_tab_item active" : "public_tab_item"} id={item.dataId}>
                                <div className="public_tab_info">
                                    <p className={`public_tab_icon ${item.dataClass}`}></p>
                                    <p>{item.title}</p>
                                </div>	
                            </Link>
                        )
                    })
            })()}
            
        </div>
    </div>
    )
  }
}

export default Xfooter
