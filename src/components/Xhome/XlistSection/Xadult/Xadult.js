import React, { Component } from 'react'
import './Xadult.css'
import {Link } from 'react-router-dom'
import Item from '../../../../../node_modules/antd/lib/list/Item';


// 引入组件


class Xadult extends Component {
  constructor (props) {
    super(props)
    this.state = {
        data:[]
    }
  }
  getSomes(){
    console.log(32323)

  React.axios.get('http://localhost:3001/users/home').then((response) => {
      console.log(response.data)
      let recommend = response.data.slice(12)
     this.setState({
         data:recommend
     })
 
 

  }).catch(function (error) {
      console.log(error)
  })
}
componentDidMount(){
    this.getSomes()
}
  render () {
     
    return (
        <div>
            {(()=>{
                return this.state.data.map((item,index)=>{
                    return (
                        <Link to={`/Detail/${item._id}`} key={index} className="article row" >
                        <div className="section_img">
                            <img src={item.imgurl} data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1539328597.jpg"
                                alt="" className="article_img lazy" style={{display: "inline"}} />
                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static3.png" alt="" className="article_static2" style={{width:"28%"}}/>
                            
                        </div>
                        <div className="col">
                            <div className="article_tit clearfix">{item.title}</div>
                            <div className="article_txt" style={{display:"block"}}>
                                <div className="or icon icon2_6">
                                {item.describeone}
                                    <br/>
                                </div>
                                <div className="or icon icon2_6">
                                {item.describetow}
                                    <br/>
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
                                    <span className="article_btn">立即投保</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    )
                })
              
            })()}
            </div>
    )
    
  }
}

export default Xadult
