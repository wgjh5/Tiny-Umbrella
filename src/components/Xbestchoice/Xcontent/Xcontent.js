import React, { Component } from 'react'
import './Xcontent.css'
import { connect } from 'react-redux';
import store from "../../../libs/store.js";


// import { Route } from 'react-router-dom'
class Xcontent extends Component {

  constructor (props,context) {
    console.log(props)
      
    super(props,context)
    this.props = props;

    this.state = {
        content:0
    }

  }
  
  render () {
    return (
        <div className="listcontent">
      {(()=>{
        // console.log(this.state.aa[0].idx)
        if(this.state.content==0){
            console.log(66)
            return (
                <div className="content" data-index="1">
                <a href="/insurance/detail?id=106166&amp;chn=yanxuan_h5shouye20180308" className="product_li">
                    <div className="product row middle">
                        <div className="pro_img">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/product/adult1.png" alt="" />
                            <p className="pro_type">
                                <span>1</span>.意外险</p>
                        </div>
                        <div className="pro_de col">
                            <p className="pro_de_tit">小雨伞成人意外险</p>
                            <p className="pro_de_subtit">建议保额50万 | 0免赔 | 100%报销</p>
                            <div className="pro_de_foot row middle">
                                <p className="pro_de_foot_price col">
                                    <span className="price">60</span>元起</p>
                                <span className="pro_de_foot_btn">立即购买</span>
                            </div>
                        </div>
                    </div>
                    <div className="product_comment row middle">
                        <span className="au"></span>
                        <div className="comment_head">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/head/derrick.png" alt="" className="img" />
                        </div>
                        <p className="comment_name">精算师Derrick</p>
                        <p className="comment_text col">
                            <span className="quo"></span>独家定制的意外险，极致性价比旨在以小博大解决保险刚需。
                            <span className="quo"></span>
                        </p>
                    </div>
                </a>
                <a href="https://www.xiaoyusan.com/insurance/detail?id=132837&amp;chn=yanxuan_h5shouye20180308" className="product_li">
                    <div className="product row middle">
                        <div className="pro_img">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1504857293.jpg" alt="" />
                            <p className="pro_type">
                                <span>2</span>.重疾险</p>
                        </div>
                        <div className="pro_de col">
                            <p className="pro_de_tit">小雨伞-百年康惠保重疾险（旗舰版）</p>
                            <p className="pro_de_subtit">保障155种高发疾病 | 多次赔不分组 | 患轻/中症后免交后续保费</p>
                            <div className="pro_de_foot row middle">
                                <p className="pro_de_foot_price col">
                                    <span className="price">259</span>元起</p>
                                <span className="pro_de_foot_btn">立即购买</span>
                            </div>
                        </div>
                    </div>
                    <div className="product_comment row middle">
                        <span className="au"></span>
                        <div className="comment_head">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/head/judsen.png" alt="" className="img" />
                        </div>
                        <p className="comment_name">精算师Judsen</p>
                        <p className="comment_text col">
                            <span className="quo"></span>保障全面，100种重疾+20种中症+35种轻症，灵活选择保障至70岁/终身，重病无忧
                            <span className="quo"></span>
                        </p>
                    </div>
                </a>
                <a href="https://www.xiaoyusan.com/insurance/detail?id=129412&amp;chn=yanxuan_h5shouye20180308" className="product_li">
                    <div className="product row middle">
                        <div className="pro_img">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1520238443.jpg" alt="" />
                            <p className="pro_type">
                                <span>3</span>.医疗险</p>
                        </div>
                        <div className="pro_de col">
                            <p className="pro_de_tit">小雨伞钢铁侠百万医疗险</p>
                            <p className="pro_de_subtit">5年期保障不停售不涨价 | 100%报销 | 癌症双倍赔</p>
                            <div className="pro_de_foot row middle">
                                <p className="pro_de_foot_price col">
                                    <span className="price">133</span>元起</p>
                                <span className="pro_de_foot_btn">立即购买</span>
                            </div>
                        </div>
                    </div>
                    <div className="product_comment row middle">
                        <span className="au"></span>
                        <div className="comment_head">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/head/vicki.png" alt="" className="img" />
                        </div>
                        <p className="comment_name">精算师Vicki</p>
                        <p className="comment_text col">
                            <span className="quo"></span>线上唯一5年期百万医疗险，5年不涨价不停售，100%报销，不限社保，不限疾病
                            <span className="quo"></span>
                        </p>
                    </div>
                </a>
                <a href="https://www.xiaoyusan.com/insurance/detail?id=132957&amp;chn=yanxuan_h5shouye20180308" className="product_li">
                    <div className="product row middle">
                        <div className="pro_img">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/product/adult3.jpg" alt="" />
                            <p className="pro_type">
                                <span>4</span>.寿险</p>
                        </div>
                        <div className="pro_de col">
                            <p className="pro_de_tit">小雨伞擎天柱定期寿险2号</p>
                            <p className="pro_de_subtit">可附加投/被保人豁免（独家）| 风控定价更便宜 | 保障身故和全残</p>
                            <div className="pro_de_foot row middle">
                                <p className="pro_de_foot_price col">
                                    <span className="price">37</span>元起</p>
                                <span className="pro_de_foot_btn">立即购买</span>
                            </div>
                        </div>
                    </div>
                    <div className="product_comment row middle">
                        <span className="au"></span>
                        <div className="comment_head">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/head/derrick.png" alt="" className="img" />
                        </div>
                        <p className="comment_name">精算师Derrick</p>
                        <p className="comment_text col">
                            <span className="quo"></span>独家可附加投/被保人豁免，家庭经济支柱必备保障，支撑房贷、赡养老人、抚养孩子等压力！
                            <span className="quo"></span>
                        </p>
                    </div>
                </a>
            </div>
            )
        }else if(this.state.content==1){
            console.log(77)
            return (
                <div className="content " data-index="2">
                <a href="https://www.xiaoyusan.com/insurance/detail?id=124930&amp;chn=yanxuan_h5shouye20180308" className="product_li">
                    <div className="product row middle">
                        <div className="pro_img">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/product/child1.png" alt="" />
                            <p className="pro_type">
                                <span>1</span>.意外险</p>
                        </div>
                        <div className="pro_de col">
                            <p className="pro_de_tit">小雨伞小顽童少儿意外险</p>
                            <p className="pro_de_subtit">首份必备保障 | 自费项目100%报销 | 0免赔</p>
                            <div className="pro_de_foot row middle">
                                <p className="pro_de_foot_price col">
                                    <span className="price">60</span>元起</p>
                                <span className="pro_de_foot_btn">立即购买</span>
                            </div>
                        </div>
                    </div>
                    <div className="product_comment row middle">
                        <span className="au"></span>
                        <div className="comment_head">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/head/harry.png" alt="" className="img" />
                        </div>
                        <p className="comment_name">精算师Harry</p>
                        <p className="comment_text col">
                            <span className="quo"></span>宝宝活泼好动导致意外风险的概率大，意外险优先配置，含意外医疗保障全。
                            <span className="quo"></span>
                        </p>
                    </div>
                </a>
                <a href="https://www.xiaoyusan.com/insurance/detail?id=133820&amp;chn=yanxuan_h5shouye20180308" className="product_li">
                    <div className="product row middle">
                        <div className="pro_img">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1542604242.jpg" alt="" />
                            <p className="pro_type">
                                <span>2</span>.重疾险</p>
                        </div>
                        <div className="pro_de col">
                            <p className="pro_de_tit">小雨伞大黄蜂少儿重疾险2号</p>
                            <p className="pro_de_subtit">保额5%复利增长 | 保150种疾病 | 特定重疾保额“翻倍”</p>
                            <div className="pro_de_foot row middle">
                                <p className="pro_de_foot_price col">
                                    <span className="price">109</span>元起</p>
                                <span className="pro_de_foot_btn">立即购买</span>
                            </div>
                        </div>
                    </div>
                    <div className="product_comment row middle">
                        <span className="au"></span>
                        <div className="comment_head">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/head/vicki.png" alt="" className="img" />
                        </div>
                        <p className="comment_name">精算师Vicki</p>
                        <p className="comment_text col">
                            <span className="quo"></span>保额会随年龄“长大”，保150种疾病，含投保人豁免，呵护宝宝至成年
                            <span className="quo"></span>
                        </p>
                    </div>
                </a>
                <a href="https://www.xiaoyusan.com/insurance/detail?id=121667&amp;chn=yanxuan_h5shouye20180308" className="product_li">
                    <div className="product row middle">
                        <div className="pro_img">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1520238428.jpg" alt="" />
                            <p className="pro_type">
                                <span>3</span>.医疗险</p>
                        </div>
                        <div className="pro_de col">
                            <p className="pro_de_tit">小雨伞钢铁侠百万医疗险（少儿版）</p>
                            <p className="pro_de_subtit">5年期保障不停售不涨价 | 100%报销 | 癌症双倍赔</p>
                            <div className="pro_de_foot row middle">
                                <p className="pro_de_foot_price col">
                                    <span className="price">133</span>元起</p>
                                <span className="pro_de_foot_btn">立即购买</span>
                            </div>
                        </div>
                    </div>
                    <div className="product_comment row middle">
                        <span className="au"></span>
                        <div className="comment_head">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/head/vicki.png" alt="" className="img" />
                        </div>
                        <p className="comment_name">精算师Vicki</p>
                        <p className="comment_text col">
                            <span className="quo"></span>线上唯一5年期百万医疗险，5年不涨价不停售，100%报销，不限社保，不限疾病
                            <span className="quo"></span>
                        </p>
                    </div>
                </a>
            </div>
            )
        }else if(this.state.content==2){
            console.log(88)
            return (
                <div className="content" data-index="3">
                <a href="/insurance/detail?id=101723&amp;chn=yanxuan_h5shouye20180308" className="product_li">
                    <div className="product row middle">
                        <div className="pro_img">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/product/parent1.png" alt="" />
                            <p className="pro_type">
                                <span>1</span>.意外险</p>
                        </div>
                        <div className="pro_de col">
                            <p className="pro_de_tit">小雨伞父母意外险</p>
                            <p className="pro_de_subtit">覆盖66-85岁 | 保额20万 | 多次理赔有津贴</p>
                            <div className="pro_de_foot row middle">
                                <p className="pro_de_foot_price col">
                                    <span className="price">85</span>元起</p>
                                <span className="pro_de_foot_btn">立即购买</span>
                            </div>
                        </div>
                    </div>
                    <div className="product_comment row middle">
                        <span className="au"></span>
                        <div className="comment_head">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/head/judsen.png" alt="" className="img" />
                        </div>
                        <p className="comment_name">精算师Judsen</p>
                        <p className="comment_text col">
                            <span className="quo"></span>贴心扩展到85岁，承保更高年龄父母，保障所有常见意外。
                            <span className="quo"></span>
                        </p>
                    </div>
                </a>
                <a href="https://www.xiaoyusan.com/insurance/detail?id=131780&amp;chn=yanxuan_h5shouye20180308" className="product_li">
                    <div className="product row middle">
                        <div className="pro_img">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/m_index/article/h5item_1510046788.jpg" alt="" />
                            <p className="pro_type">
                                <span>2</span>.防癌险</p>
                        </div>
                        <div className="pro_de col">
                            <p className="pro_de_tit">小雨伞-安心安享一生癌症医疗险</p>
                            <p className="pro_de_subtit">三高糖尿病可买 | 所有癌都赔 | 0-70岁可投保 | 保额200万0免赔</p>
                            <div className="pro_de_foot row middle">
                                <p className="pro_de_foot_price col">
                                    <span className="price">5</span>元起/月</p>
                                <span className="pro_de_foot_btn">立即购买</span>
                            </div>
                        </div>
                    </div>
                    <div className="product_comment row middle">
                        <span className="au"></span>
                        <div className="comment_head">
                            <img src="https://sslstatic.xiaoyusan.com/h5/img/yanxuan/head/harry.png" alt="" className="img" />
                        </div>
                        <p className="comment_name">精算师Harry</p>
                        <p className="comment_text col">
                            <span className="quo"></span>父母年纪大了，因为身体原因很难买到健康险，这款产品健康告知宽松，性价比也超高
                            <span className="quo"></span>
                        </p>
                    </div>
                </a>
            </div>
        

            )
        }
      })()}
   
            
            
            {/* =========== */}
           
            {/* ========== */}
            </div>
    )
   
  }

//   componentWillReceiveProps (nextProps){
//     nextProps.content !== this.props.content && this.setState({
//         content:nextProps.content
//     },() => {
//     //   this.state.content:nextProps //将state更新为nextProps,在setState的第二个参数（回调）可以打印出新的state
//     console.log(this.state.content)
//   })



    componentDidMount(){
        store.on("show",(data)=>{
            console.log(data);
            this.setState({
                content:data
            })
        })
    
    }
}

export default connect((state)=>{
    return state
},(dispatch) => {
    return{}

})(Xcontent)
