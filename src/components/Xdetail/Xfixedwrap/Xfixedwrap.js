import React, { Component } from 'react'
import './Xfixedwrap.scss'
import store from "../../../libs/store.js";
import Item from '../../../../node_modules/antd/lib/list/Item';
class Xfixedwrap extends Component {
  constructor (props) {
    super(props)
    this.state = {
        isBlock:false,
        idx:"0",
        detailArr:[{
            title:"保障方案",
            aClass:"auto_version",
            iClass:"icon1"
        },{
            title:"产品介绍",
            aClass:"auto_intro",
            iClass:"icon2"
        },{
            title:"用户评价",
            aClass:"auto_comment",
            iClass:"icon3"
        },{
            title:"理赔服务",
            aClass:"auto_claims",
            iClass:"icon4"
        }]
    }
  }
  componentWillMount(){
        window.addEventListener('scroll', this.handleScroll.bind(this));	
    }
        
    handleScroll(){
        if(window.scrollY>=150){
            // document.querySelector(".fixedwrap").style.display="block"
            this.setState({
                idx:"0",
                isBlock:true
            })
             if(window.scrollY>=1157){
                console.log(777777777)
                this.setState({
                    idx:"1"
                })
               if(window.scrollY>=4805){
                this.setState({
                    idx:"2"

                })
                if(window.scrollY>=5100){
                    this.setState({
                        idx:"3"
    
                    })
                   }
               }
            }
        }else if(window.scrollY<180){
            console.log(55555555555)
            this.setState({
                isBlock:false

            })
            // document.querySelector(".fixedwrap").style.display="none"
        }
        console.log(window.scrollY)
        
    }
    findlocation(index){
      
        // y -= 100;

        
       var timer1 = setInterval(function(){
        var currentTop1 = window.scrollY;
        var speed1 = Math.floor((160-currentTop1)/10);
        currentTop1 += speed1;
        //  =========
       
        // ============
        
        // ============
     
            if(index==0){
                window.scrollTo(0,currentTop1);
                if(window.scrollY<=160){
                    clearInterval(timer1);
                }
                
            }
        },30)
        var timer2 = setInterval(function(){
            var currentTop2 = window.scrollY;
            var speed2 = Math.floor((1160-currentTop2)/10);
            currentTop2 += speed2;
            if(index==1){
                window.scrollTo(0,currentTop2)
                if(window.scrollY<=1160){
                    clearInterval(timer2);
                }
            }
        },30)
        var timer3 = setInterval(function(){
            var currentTop3 = window.scrollY;
        var speed3 = Math.floor((4810-currentTop3)/10);
        currentTop3 += speed3;
        if(index==2){

            window.scrollTo(0,currentTop3)
            if(window.scrollY<=4810){
                clearInterval(timer3);
            }
        } 
        },30)
        var timer4 = setInterval(function(){
            var currentTop4 = window.scrollY;
            var speed4 = Math.floor((5100-currentTop4)/10);
            currentTop4 += speed4;
                console.log(666)
            if(index==3){
                window.scrollTo(0,currentTop4)
                if(window.scrollY<=5102){
                    clearInterval(timer4);
                }
            }
        })
          
        
        // if(index==0){
        //     window.scrollTo(0,160)
        // }else if(index==1){
        //     window.scrollTo(0,1160)
        // }else if(index==2){
        //     window.scrollTo(0,4810)
        // }else if(index==3){
        //     window.scrollTo(0,5100)

        // }
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll.bind(this)) 
    }
  render () {
      
    //   style={{display:"none"}}
    return ( 
      <div className='fixedwrap' style={{display: (this.state.isBlock==true) ? "block" : "none"}}>
        <div className='fiexdhead'>
          <div className='fiexdhead_box row' >
                {(()=>{
                    return this.state.detailArr.map((item,index)=>{
                        return (
                            <a href='javascript:;' key={index} onClick={this.findlocation.bind(this,index)}  className={this.state.idx==index?`col fiexd_item active ${item.aClass} `:`col fiexd_item ${item.aClass}`}>
                                <i  className={`fiexd_icon fixednav ${item.iClass}`}></i>
                                <p  className='fiexd_p'> {item.title} </p>
                            </a>
                        )
                    })
                })()}
                      
                 {/* <a href='javascript:;'  className={this.state.idx==="1"? "col fiexd_item auto_intro active": "col fiexd_item auto_intro"} >
                    <i className='fiexd_icon fixednav icon2'></i> 
                    <p className="fiexd_p"> 产品介绍 </p>
                 </a>     
                  <a href='javascript:;'  className={this.state.idx=="2"?"col fiexd_item auto_comment active":"col fiexd_item auto_comment"}>
                    <i className='fiexd_icon fixednav icon3'></i> 
                    <p className='fiexd_p'> 用户评价 </p>
                  </a>      
                  <a href='javascript:;'  className={this.state.idx=="3"? "col fiexd_item auto_claims active":"col fiexd_item auto_claims"}>
                    <i className='fiexd_icon fixednav icon4'></i> 
                    <p className='fiexd_p'> 理赔服务 </p>
                  </a> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Xfixedwrap
