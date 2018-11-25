import React, { Component } from 'react'
import './Xresponsibility.scss'

class Xresponsibility extends Component {
  constructor (props) {
    super(props)
    this.props = props;
    console.log(props.arr)
    this.state = {
        isShow:false
    }
  }
  showItem(){
      this.setState({
        isShow:!this.state.isShow
      })
  }
  render () {
    return (
        <div>
        {(()=>{
            if(this.props.arr!=""){
                
           return (
            <div id="auto1">
            <div className="box species">
                <div className="specielist nobt">
                    <div data-index="12050" className="content">
                        <div className="specie_head clearfix">
                            <p className="fl">保障责任</p>
                            <p className="fr">保额</p>
                        </div>
                        <div className="specie_range">
                            <div className={this.state.isShow==true?"range_item showdetail" :"range_item"} ref='item1'>
                                <div className="range_tit row">
                                    <p className="col">100种重大疾病

                                    </p>
                                    <span data-version="12050"  onClick={this.showItem.bind(this)} data-index="0" className="range_detail">最高80万（5%复利递增10次）
                                        <span data-version="12050" data-index="0" className="arrow"></span>
                                    </span>
                                </div>
                                <div className="range_text">
                                    <span data-tit="等待期" className="noun">等待期</span>90天，前11年保额按照每年5%复利递增，每年保额=上年保额×1.05，连增10年，第11年及以后保额为重疾基本保额的162%，重疾基本保额=第一年投保时选择的重疾保额</div>
                            </div>
                            <div className={this.state.isShow==true?"range_item showdetail" :"range_item"} ref='item2'>
                                <div className="range_tit row">
                                    <p className="col">12种少儿特定疾病保险金（含白血病等）

                                    </p>
                                    <span data-version="12050"  onClick={this.showItem.bind(this)} data-index="1" className="range_detail">18岁前额外赔付基本保额
                                        <span data-version="12050" data-index="1" className="arrow"></span>
                                    </span>
                                </div>
                                <div className="range_text">等待期90天，18岁前12种少儿特定疾病除赔付重疾保险金外，额外给付重疾基本保额</div>
                            </div>
                            <div className={this.state.isShow==true?"range_item showdetail" :"range_item"} ref='item3'>
                                <div className="range_tit row">
                                    <p className="col">附加50种轻症（最多赔3次）

                                    </p>
                                    <span data-version="12050" onClick={this.showItem.bind(this)} data-index="2" className="range_detail">重疾基本保额的30%
                                        <span data-version="12050" data-index="2" className="arrow"></span>
                                    </span>
                                </div>
                                <div className="range_text">等待期90天，累计最多给付三次，不分组，无间隔期</div>
                            </div>
                            <div className={this.state.isShow==true?"range_item showdetail" :"range_item"} ref='item4'>
                                <div className="range_tit row">
                                    <p className="col">附加投保人豁免

                                    </p>
                                    <span data-version="12050"  onClick={this.showItem.bind(this)} data-index="3" className="range_detail">豁免未交保费
                                        <span data-version="12050" data-index="3" className="arrow"></span>
                                    </span>
                                </div>
                                <div className="range_text">等待期90天，投保人发生身故、全残，或罹患100种重疾，20种中症，35种轻症中的任意一种情况豁免后续未交保费，被保险人保障继续有效</div>
                            </div>
                            <div className={this.state.isShow==true?"range_item showdetail" :"range_item"} ref='item5'>
                                <div className="range_tit row">
                                    <p className="col">身故全残保险金

                                    </p>
                                    <span className="range_detail">退还主险所交保费</span>
                                </div>
                                <div className="range_text"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="specie_price row middle">
                    <div className="price col">
                        <p>
                            <span>￥
                                <span className="current">{this.props.arr.price}</span>起</span>

                        </p>

                    </div>
                    <a href="javascript:;" data-track="detail_trail" className="calculate">
                        <span className="calculate_arrow">保费试算</span>
                    </a>
                </div>
            </div>
            <div className="box notice_sp">
                <a data-track="detail_promise" className="notice_foot clearfix">
                    <div className="notice_foot_tit">小雨伞为您提供</div>
                    <div className="notice_foot_row">
                        <p className="notice_foot_item">
                            <i className="hook"></i>支持人工核保</p>
                        <p className="notice_foot_item">
                            <i className="hook"></i>提供电子发票</p>
                        <p className="notice_foot_item">
                            <i className="hook"></i>可犹豫期退保</p>
                        <div className="arrow"></div>
                    </div>
                </a>
            </div>
            <div className="box discount">
                <a href="https://www.xiaoyusan.com/act/newactivity?chn=zsdhf-tuijian#/bumblebee" className="discount_item row">
                    <div className="discount_tag">
                        <p>新品有礼</p>
                    </div>
                    <div className="discount_de col">
                        <p className="discount_tit">购大黄蜂2号送医生健康服务</p>
                        <p className="discount_text">购买大黄蜂2号，送宝宝健康守护年卡，分享好友还可抽奖赢50元京东卡！</p>
                        <span className="arrow"></span>
                    </div>
                </a>
                <a href="https://www.xiaoyusan.com/insurance/detail?id=119956&amp;chn=tuijian" className="discount_item row">
                    <div className="discount_tag">
                        <p>关联产品</p>
                    </div>
                    <div className="discount_de col">
                        <p className="discount_tit">大黄蜂少儿重疾险1号</p>
                        <p className="discount_text">与大黄蜂2号的区别在于：大黄蜂1号可附加45种重疾的长期医疗险；大黄蜂2号有保额5%复利递增，特定重疾保额“翻倍”，可附加投保人豁免。点击查看大黄蜂1号&gt;</p>
                        <span className="arrow"></span>
                    </div>
                </a>
            </div>
            <div className="box notice">
                <div className="box_tit">投保须知</div>
                <div className="noticelist">
                    <div className="notice_item row">
                        <p className="notice_name">保障时间</p>
                        <p className="notice_text col">20年/30年/至50岁/至60岁</p>
                    </div>
                    <div className="notice_item row">
                        <p className="notice_name">适用人群</p>
                        <p className="notice_text col">28天到17周岁</p>
                    </div>
                    <div className="notice_item row">
                        <p className="notice_name">可投保城市</p>
                        <p className="notice_text col">湖北、河北、辽宁、北京、河南、黑龙江、安徽、山东、江苏、四川、福建、陕西、内蒙古、吉林、江 西、浙江、山西、广东、重庆</p>
                    </div>
                    <div className="notice_item row">
                        <p className="notice_name">犹豫期</p>
                        <p className="notice_text col">15天</p>
                    </div>
                    <div className="notice_item row">
                        <p className="notice_name">交费年限</p>
                        <p className="notice_text col">一次交清/5年/10年/20年/30年</p>
                    </div>

                </div>
                <div className="noticeBar">更多请查看
                    <a data-url="https://sslstatic.xiaoyusan.com/needkown_307604.html?t=1542681506" data-track="detail_noticemore" className="noticeBarItem">《更多投保须知》</a>、
                    <a data-track="detail_term" className="noticeBarItem">《保险条款及告知》</a>、
                    <a data-track="detail_health" className="noticeBarItem">《健康告知》</a>


                </div>
            </div>
        </div>
           )
        }

            })()}
            </div>
    )
  }
}

export default Xresponsibility
