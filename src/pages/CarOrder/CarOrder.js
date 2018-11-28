import React, { Component } from 'react'
import './CarOrder.scss'
// 引入组件
import { Link} from 'react-router-dom'
import cookie from '../../libs/cookie.js'

class CarOrder extends Component {
  constructor (props) {
    super(props)
    console.log(this)
    this.state = {
        car:[],
        t:0,
        showRender:false,
        tab:[{
            title:"全部"
        },{
            title:"待付款"
        },{
            title:"待生效"
        },{
            title:"待评价"
        }]
    }
  }
  componentDidMount(){
    this.getCar()
}
  getCar(){
      console.log(232323)
    var self = this;
    React.axios.post('http://localhost:3001/users/findcar', {
        params: {
            name: cookie.getCookie("name")
        }
      }).then((response) => {
        console.log(response.data)
        if(response.data != "fail"){
            self.setState({
                car:response.data,
                showRender:true
            })
        }
       
       console.log(this.state.car)
      }).catch(function (error) {
        console.log(error)
      })
    }
    tabclass(index){
        this.setState({
            t:index
        })
    }
    goback(){
        this.props.history.goBack()  
    }
  render () {
    return (
        <div style={{background:"#fff"}}>
        <div className="g-wrap" style={{marginBottom:"1rem"}}>

        <div className="header-nav row" >
        <a onClick={this.goback.bind(this)} style={{color:"#8c7fee",position:"absolute",left:"1%",bottom:"-2%",fontWeight:"bold",fontSize:"2rem"}}>{"<"}</a>
        
        {(()=>{
           
            return this.state.tab.map((item,index)=>{
                return (
                    <a href="javascript:;" key={index} onClick={this.tabclass.bind(this,index)} className={this.state.t==index?"active col":"col"}><span>{item.title}</span></a>
                )
            })
        })()}
            {/* <a href="javascript:;" className="col"><span>待付款<em></em></span></a>
            <a href="javascript:;" className="col"><span>待生效<em></em></span></a>
            <a href="javascript:;" className="col"><span>待评价<em></em></span></a> */}
        </div>
        </div>
         
            {(()=>{
                console.log(this.state.showRender)
                 if(this.state.showRender){
                    return this.state.car.map((item,index)=>{
                        return (
                            <a key={index} className="article row" >
                            <div className="section_img">
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
                                        <span className="article_btn">立即付款</span>
                                    </div>
                                </div>
                            </div>
                            </a>
                        )
                    })
                }
              
            })()}
                
        

            </div>
    
      
    )
  }

}

export default CarOrder
