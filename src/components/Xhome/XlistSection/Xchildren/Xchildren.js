import React, { Component } from 'react'
import './Xchildren.css'
import {Link } from 'react-router-dom'

import { connect } from 'react-redux';
import store from '../../../../libs/store'


// 引入组件


class Xchildren extends Component {
  constructor (props) {
    super(props)
    this.props=props;
    this.state = {
        children:0,
        home:"",
        homeshow:false,
        data:[]
    }

  }
  getSomes(){
      console.log(889989)
    React.axios.get('http://localhost:3001/users/home').then((response) => {
        console.log(response.data)
        let recommend = response.data.slice(7,12)
        console.log(recommend)
       this.setState({
           data:recommend
       })
       console.log(this.state.data)
    }).catch(function (error) {
        console.log(error)
    })
}

  render () {
    return (
        <div>
            {(()=>{
                if(this.props.statushome=="home"){
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
                
                }else if(this.props.status=="children"){
  
                        if(this.state.children==0){
                            return (
                                <div className="section" id="section">

                                <div className="section_item" id="article_0">
                    
                                    <Link to={"/Detail"} className="article row"
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1542681368.jpg" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1542681368.jpg"
                                                alt="" className="article_img lazy false" style={{display: "inline"}} />
                    
                                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static3.png" alt="" className="article_static2" />
                    
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">大黄蜂少儿重疾险2号</h2>
                                            <div className="article_txt">
                    
                                                <div className="or">
                                                    保额5%复利增长，最高赔210万
                                                    <br/>
                                                </div>
                    
                                                <div className="or">
                                                    保150种疾病，含投保人豁免
                                                    <br/>
                                                </div>
                    
                    
                                                <div className="jingjing row">
                    
                    
                    
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">109</b>元起
                    
                                                    <span className="article_estimate">24条评价</span>
                    
                    
                                                </div>
                    
                                                <div className="article_btn">立即投保</div>
                    
                                            </div>
                                        </div>
                                    </Link>
                    
                    
                    
                                    <Link to={"/Detail"} className="article row" 
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1524897249.jpg" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1524897249.jpg"
                                                alt="" className="article_img lazy false" style={{display: "inline"}} />
                    
                                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static2.png?t=20180502" alt="" className="article_static2" />
                    
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">小顽童少儿意外险</h2>
                                            <div className="article_txt">
                    
                                                <div className="or">
                                                    可报销狂犬病疫苗费用
                                                    <br/>
                                                </div>
                    
                                                <div className="or">
                                                    自费项目也100%报销0免赔
                                                    <br/>
                                                </div>
                    
                    
                                                <div className="jingjing row">
                    
                                                    <p className="jingjing_type">
                                                        <i className="jingjing_icon"></i>闪赔</p>
                    
                    
                    
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">60</b>元起
                    
                                                    <span className="article_estimate">3013条评价</span>
                    
                    
                                                </div>
                    
                                                <div className="article_btn">立即投保</div>
                    
                                            </div>
                                        </div>
                                    </Link>
                    
                    
                    
                                    <Link to={"/Detail"} className="article row" 
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1517541014.jpg" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1517541014.jpg"
                                                alt="" className="article_img lazy false" style={{display: "inline"}} /> 
                    
                                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static2.png?t=20180502" alt="" className="article_static2" />
                    
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">钢铁侠百万医疗险（少儿版）</h2>
                                            <div className="article_txt">
                    
                                                <div className="or">
                                                    大小病住院都可报销
                                                    <br/>
                                                </div>
                    
                                                <div className="or">
                                                    保额200万，癌症400万，不限社保
                                                    <br/>
                                                </div>
                    
                    
                                                <div className="jingjing row">
                    
                    
                    
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">133</b>元起
                    
                                                    <span className="article_estimate">214条评价</span>
                    
                    
                                                </div>
                    
                                                <div className="article_btn">立即投保</div>
                    
                                            </div>
                                        </div>
                                    </Link>
                    
                    
                    
                                    <Link to={"/Detail"} className="article row" 
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1513663517.jpg" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1513663517.jpg"
                                                alt="" className="article_img lazy false" style={{display: "inline"}} />
                    
                                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static2.png?t=20180502" alt="" className="article_static2" />
                    
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">少儿住院万元护2018</h2>
                                            <div className="article_txt">
                    
                                                <div className="or">
                                                    可报销注射疫苗发生不良反应产生的住院费用
                                                    <br/>
                                                </div>
                    
                                                <div className="or">
                                                    0免赔，报销社保范围费用和自费药
                                                    <br/>
                                                </div>
                    
                    
                                                <div className="jingjing row">
                    
                                                    <p className="jingjing_type">
                                                        <i className="jingjing_icon"></i>闪赔</p>
                    
                    
                    
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">100</b>元起
                    
                                                    <span className="article_estimate">2269条评价</span>
                    
                    
                                                </div>
                    
                                                <div className="article_btn">立即投保</div>
                    
                                            </div>
                                        </div>
                                    </Link>
                    
                    
                    
                                    <Link to={"/Detail"} className="article row" 
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1535712243.jpg" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1535712243.jpg"
                                                alt="" className="article_img lazy false" style={{display: "inline"}} />
                    
                                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static2.png?t=20180502" alt="" className="article_static2" />
                    
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">少儿门诊护小保2018</h2>
                                            <div className="article_txt">
                    
                                                <div className="or">
                                                    保额高，门急诊加住院一共3.5万元
                                                    <br/>
                                                </div>
                    
                                                <div className="or">
                                                    可报销注射疫苗发生不良反应产生的住院费用
                                                    <br/>
                                                </div>
                    
                    
                                                <div className="jingjing row">
                    
                                                    <p className="jingjing_type">
                                                        <i className="jingjing_icon"></i>闪赔</p>
                    
                    
                    
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">658</b>元起
                    
                                                    <span className="article_estimate">1787条评价</span>
                    
                    
                                                </div>
                    
                                                <div className="article_btn">立即投保</div>
                    
                                            </div>
                                        </div>
                                    </Link>
                    
                    
                    
                                    <Link to={"/Detail"} className="article row" 
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1536836242.png" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1536836242.png"
                                                alt="" className="article_img lazy false"  style={{display: "inline"}} />
                    
                                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static3.png" alt="" className="article_static2" />
                    
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">小黄蜂少儿重疾险（一年期）</h2>
                                            <div className="article_txt">
                    
                                                <div className="or">
                                                    最高保额可达50万
                                                    <br/>
                                                </div>
                    
                                                <div className="or">
                                                    支持人工核保，投保更方便
                                                    <br/>
                                                </div>
                    
                    
                                                <div className="jingjing row">
                    
                    
                    
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">53</b>元起
                    
                                                    <span className="article_estimate">903条评价</span>
                    
                    
                                                </div>
                    
                                                <div className="article_btn">立即投保</div>
                    
                                            </div>
                                        </div>
                                    </Link>
                    
                    
                    
                                    <Link to={"/Detail"} className="article row" 
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1527767323.jpg" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1527767323.jpg"
                                                alt="" className="article_img lazy false"  style={{display: "inline"}} />
                    
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">小雨伞常春藤教育金</h2>
                                            <div className="article_txt">
                    
                                                <div className="or">
                                                    可附加投/被保人豁免，抵御风险
                                                    <br/>
                                                </div>
                    
                                                <div className="or">
                                                    大品牌，专款专用，可月交
                                                    <br/>
                                                </div>
                    
                    
                                                <div className="jingjing row">
                    
                    
                    
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">100</b>元起
                    
                                                    <span className="article_estimate">5条评价</span>
                    
                    
                                                </div>
                    
                                                <div className="article_btn">立即投保</div>
                    
                                            </div>
                                        </div>
                                    </Link>
                    
                    
                    
                                    <Link to={"/Detail"} className="article row" 
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1506567772.jpg" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1506567772.jpg"
                                                alt="" className="article_img lazy false"  style={{display: "inline"}} />
                    
                                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static2.png?t=20180502" alt="" className="article_static2" />
                    
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">少儿白血病险</h2>
                                            <div className="article_txt">
                    
                                                <div className="or">
                                                    白血病治愈率高，搭配重疾获双重赔付
                                                    <br/>
                                                </div>
                    
                                                <div className="or">
                                                    最高赔30万，A期轻症可额外给付30%
                                                    <br/>
                                                </div>
                    
                    
                                                <div className="jingjing row">
                    
                    
                    
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">30</b>元起
                    
                                                    <span className="article_estimate">717条评价</span>
                    
                    
                                                </div>
                    
                                                <div className="article_btn">立即投保</div>
                    
                                            </div>
                                        </div>
                                    </Link>
                    
                    
                    
                                    <Link to={"/Detail"} className="article row" 
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1453716515.jpg" data-original="//sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1453716515.jpg"
                                                alt="" className="article_img lazy false"  style={{display: "inline"}} />
                    
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">少儿手足口病险</h2>
                                            <div className="article_txt">
                    
                                                <div className="or">
                                                    手足口病高发期，宝宝需要专业保障
                                                    <br/>
                                                </div>
                    
                                                <div className="or">
                                                    高性价比减轻家长经济负担
                                                    <br/>
                                                </div>
                    
                    
                                                <div className="jingjing row">
                    
                                                    <p className="jingjing_type">
                                                        <i className="jingjing_icon"></i>闪赔</p>
                    
                    
                    
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">30</b>元起
                    
                                                    <span className="article_estimate">638条评价</span>
                    
                    
                                                </div>
                    
                                                <div className="article_btn">立即投保</div>
                    
                                            </div>
                                        </div>
                                    </Link>
                    
                    
                    
                                    <Link to={"/Detail"} className="article row" 
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1468815307.jpg" data-original="//sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1468815307.jpg"
                                                alt="" className="article_img lazy false"  style={{display: "inline"}} />
                    
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">少儿疱疹性咽颊炎病险</h2>
                                            <div className="article_txt">
                    
                                                <div className="or">
                                                    幼儿园小宝必备，5岁以下幼儿常见病
                                                    <br/>
                                                </div>
                    
                                                <div className="or">
                                                    精选保障，补贴门诊住院费
                                                    <br/>
                                                </div>
                    
                    
                                                <div className="jingjing row">
                    
                    
                    
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">40</b>元起
                    
                                                    <span className="article_estimate">477条评价</span>
                    
                    
                                                </div>
                    
                                                <div className="article_btn">立即投保</div>
                    
                                            </div>
                                        </div>
                                    </Link>
                    
                    
                    
                                    <Link to={"/Detail"} className="article row" 
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1453716262.jpg" data-original="//sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1453716262.jpg"
                                                alt="" className="article_img lazy false"  style={{display: "inline"}} />
                    
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">少儿麻疹险</h2>
                                            <div className="article_txt">
                    
                                                <div className="or">
                                                    保障少儿高发传染疾病
                                                    <br/>
                                                </div>
                                                <div className="or">
                                                    住院伙食、家长陪护津贴补偿
                                                    <br/>
                                                </div>
                                                <div className="jingjing row">
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">15</b>元起
                    
                                                    <span className="article_estimate">215条评价</span>
                    
                    
                                                </div>
                    
                                                <div className="article_btn">立即投保</div>
                    
                                            </div>
                                        </div>
                                    </Link>
                    
                                </div>
                                <div className="section_item" id="article_1"></div>
                                <div className="section_item" id="article_2"></div>
                                <div className="section_item" id="article_3"></div>
                                <div className="section_item" id="article_4"></div>
                                <div className="section_item" id="article_5"></div>
                                <div className="section_item" id="article_6"></div>
                                <div className="section_item" id="article_9"></div>
                                </div>
                            )
                        }else if(this.state.children=="1"){
                            return (
                                <div className="section_item" id="article_2" style={{display: "block"}}>
                                    <Link to={"/Detail"} className="article row" 
                                        data-track="pindao_detail_buy">
                                        <div className="section_img">
                                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1542681368.jpg" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1542681368.jpg"
                                                alt="" className="article_img lazy false" style={{display: "inline"}} /> 
                                            <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static3.png" alt="" className="article_static2" />
                                        </div>
                                        <div className="col">
                                            <h2 className="article_tit clearfix">大黄蜂少儿重疾险2号</h2>
                                            <div className="article_txt">
                                                <div className="or">
                                                    保额5%复利增长，最高赔210万
                                                    <br/>
                                                </div>
                                                <div className="or">
                                                    保150种疾病，含投保人豁免
                                                    <br/>
                                                </div>
                                                <div className="jingjing row">
                                                </div>
                                            </div>
                                            <div className="row article_ft">
                                                <div className="article_price col">
                                                    <b data-track="shouye_detail_buy1">109</b>元起
                                                    <span className="article_estimate">24条评价</span>
                                                </div>
                                                <div className="article_btn">立即投保</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }else if(this.state.children=="2"){
                            return (
                                <div className="section_item" id="article_3" style={{display: "block"}}>
                                <Link to={"/Detail"} className="article row" 
                                    data-track="pindao_detail_buy">
                                    <div className="section_img">
                                        <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1542681368.jpg" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1542681368.jpg"
                                            alt="" className="article_img lazy false" style={{display: "inline"}} /> 
                                        <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static3.png" alt="" className="article_static2" />
                                    </div>
                                    <div className="col">
                                        <h2 className="article_tit clearfix">大黄蜂少儿重疾险2号</h2>
                                        <div className="article_txt">
                                            <div className="or">
                                                保额5%复利增长，最高赔210万
                                                <br/>
                                            </div>
                                            <div className="or">
                                                保150种疾病，含投保人豁免
                                                <br/>
                                            </div>
                                            <div className="jingjing row">
                                            </div>
                                        </div>
                                        <div className="row article_ft">
                                            <div className="article_price col">
                                                <b data-track="shouye_detail_buy1">109</b>元起
                                                <span className="article_estimate">24条评价</span>
                                            </div>
                                            <div className="article_btn">立即投保</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            )
                        }else if(this.state.children=="3"){
                            return (
                                <div className="section_item" id="article_4" style={{display: "block"}}>
                                <Link to={"/Detail"} className="article row" 
                                    data-track="pindao_detail_buy">
                                    <div className="section_img">
                                        <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1542681368.jpg" data-original="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1542681368.jpg"
                                            alt="" className="article_img lazy false" style={{display: "inline"}} /> 
                                        <img src="//sslstatic.xiaoyusan.com/h5/img/m_index_v2/article_static3.png" alt="" className="article_static2" />
                                    </div>
                                    <div className="col">
                                        <h2 className="article_tit clearfix">大黄蜂少儿重疾险2号</h2>
                                        <div className="article_txt">
                                            <div className="or">
                                                保额5%复利增长，最高赔210万
                                                <br/>
                                            </div>
                                            <div className="or">
                                                保150种疾病，含投保人豁免
                                                <br/>
                                            </div>
                                            <div className="jingjing row">
                                            </div>
                                        </div>
                                        <div className="row article_ft">
                                            <div className="article_price col">
                                                <b data-track="shouye_detail_buy1">109</b>元起
                                                <span className="article_estimate">24条评价</span>
                                            </div>
                                            <div className="article_btn">立即投保</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            )
                        }
      
                }
            })()}
         

        
            </div>

    )
  }
  componentDidMount(){
    // if(this.props.statushome=="home"){
    //     this.hanshu()
    // }
    this.getSomes();
    store.on("toggleChildren",(data)=>{
        console.log(data);
        this.setState({
            children:data
        })
    })
    // store.on("togglehome",(data1)=>{
    //     console.log(data1);
    //     this.setState({
    //         home:data1
    //     })
    //     console.log(this.state.home)
    // })
    // store.on("togglehome",(data)=>{
    //     console.log(data);
    //     this.setState({
    //         home:data
    //     })
    // })

}
}

export default connect((state)=>{
    return state
},(dispatch)=>{
    return {}
})(Xchildren)
