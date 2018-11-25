import React, { Component } from 'react'
import './Xrecommend.css'
import {Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Xtravel from '../Xtravel/Xtravel';




// 引入组件


class Xrecommend extends Component {
  constructor (props) {
    console.log(props)
    super(props)
    // this.props = props;
    
    this.state = {
        someThings: this.props.navs[0].isShow,
        data:[]
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props)
    console.log(66)
    
   this.setState({
       someThings: nextProps.navs[0].isShow
    });
}
getSome(){
    React.axios.get('http://localhost:3001/users/home').then((response) => {
        console.log(response.data)
        let recommend = response.data.slice(0,6)
        let children = response.data.slice(7,12)
        console.log(children)
       this.setState({
           data:recommend
       })
    }).catch(function (error) {
        console.log(error)
    })
}
componentDidMount(){
    this.getSome()
    
    console.log(this.state.data)
}
  render () {
    return (
        <div>
          
          {
              
  
              (()=>{
                 return this.state.data.map((item,index)=>{
                      console.log(item)
                    return (
                        <Link to={`/Detail/${item._id}`}  key={index} className="article row">
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

export default connect((state)=>{
    return state    
} , (dispatch) => {
    return {
        isActive(){
           React.axios.get('http://localhost:3001/users/home').then((response) => {
               console.log(response.data)
               let children = response.data.slice(7,12)
               let adult = response.data.slice(12)
               let parents = response.data.slice(0,6)
               let family = response.data.slice(0,6)
               let travel = response.data.slice(7,12)
               dispatch({
                   type:"isActive",
                   children:children,
                   adult:adult,
                   parents:parents,
                   family:family,
                   travel:travel

                 })


           }).catch(function (error) {
               console.log(error)
           })
          
             dispatch({
               type:"sendStatus",
               statushome:"home"
             })
       }
    }
})(Xrecommend)
