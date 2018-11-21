import React, { Component } from 'react'
import './Xintroduce.scss'
import store from "../../../libs/store.js";
class Xintroduce extends Component {
  constructor (props) {
    super(props)
    this.state = {
        active:false
    }
  }

  render () {
    return (
        <div id="auto2">
            <div className="box prointro">
                <div className="box_tit">产品介绍</div>
                <div className="introlist">
                    <div>
                        <div className="intro_img lazyload">
                            <img data-original="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_01_1541560129.jpg?t=1541560129"
                                src="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_01_1541560129.jpg?t=1541560129" className="img" />
                        </div>
                        
                    </div>
                    <div>
                        <div className="intro_img lazyload">
                            <img data-original="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_02_1541560136.jpg?t=1541560136"
                                src="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_02_1541560136.jpg?t=1541560136" className="img" />
                        </div>
                        <div className="intro_btn_grp">
                            <a href="javascript:;" data-index="1" data-extit="查看12种特定重疾" data-exurl="https://sslstatic.xiaoyusan.com/exinfo/exinfo_133820_2.html?t=1542603092"
                                className="intro_btn exbtn">查看12种特定重疾</a>
                        </div>
                    </div>
                    <div>
                        <div className="intro_img lazyload">
                            <img data-original="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_03_1541140012.jpg?t=1541140012"
                                src="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_03_1541140012.jpg?t=1541140012" className="img" />
                        </div>
                        <div className="intro_btn_grp">
                            <a href="javascript:;" data-index="2" data-extit="查看疾病种类" data-exurl="https://sslstatic.xiaoyusan.com/exinfo/exinfo_133820_3.html?t=1542709221"
                                className="intro_btn exbtn">查看疾病种类</a>
                        </div>
                    </div>
                    <div>
                        <div className="intro_img lazyload">
                            <img data-original="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_04_1541140037.jpg?t=1541140037"
                                src="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_04_1541140037.jpg?t=1541140037" className="img" />
                        </div>
                        
                    </div>
                    <div>
                        <div className="intro_img lazyload">
                            <img data-original="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_05_1541140043.jpg?t=1541140043"
                                src="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_05_1541140043.jpg?t=1541140043" className="img" />
                        </div>
                        
                    </div>
                    <div>
                        <div className="intro_img lazyload">
                            <img data-original="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_06_1541560153.jpg?t=1541560153"
                                src="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_06_1541560153.jpg?t=1541560153" className="img" />
                        </div>
                        
                    </div>
                    <div>
                        <div className="intro_img lazyload">
                            <img data-original="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_07_1542339272.jpg?t=1542339272"
                                src="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_07_1542339272.jpg?t=1542339272" className="img" />
                        </div>
                        
                    </div>
                    <div>
                        <div className="intro_img lazyload">
                            <img data-original="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_08_1541576732.jpg?t=1541576732"
                                src="https://sslstatic.xiaoyusan.com/h5/img/insurance/youshi_133820_08_1541576732.jpg?t=1541576732" className="img" />
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="box question_box clearfix">
                <div className="box_tit">常见问题</div>
                <div className="questionlist">
                    <div className="question_item">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">可购买区域是指什么？是否全国通赔？如果购买后去了不属于购买区域的地区出险了是否可以理赔？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col">可购买的区域指的是页面上列明的可购买本产品的区域，投保人的长期居住地/工作地属于本产品的可购买区域就能够购买本产品。本产品是全国通赔的，部分地区暂时没有保险公司分支机构，理赔时邮寄材料至附近的分支机构。</p>
                        </div>
                    </div>
                    <div className="question_item">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">买了百年康惠保还能买百年大黄蜂2号吗？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col">您好，如果您买了百年康惠保，可以再投保大黄蜂2号，但是两个产品的累计保额不超过80万。但是如果先买了大黄蜂2号50万及以上，则无法再购买百年康惠保。如果您投保的是康惠宝旗舰版50万，然后附加了少儿特定疾病，那么风险保额就是52.25万（因为少儿特定疾病也算风险保额），那么最多还能买大黄蜂2号20万。</p>
                        </div>
                    </div>
                    <div className="question_item hide">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">之前已经购买过大黄蜂重疾险，还能购买大黄蜂重疾险2号吗？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col"> 可以购买的，大黄蜂的承保公司是和谐健康，大黄蜂2号的承保公司是百年人寿，两者互不影响。如果出险，符合保险责任可以叠加赔付。</p>
                        </div>
                    </div>
                    <div className="question_item hide">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">之前买过大黄蜂重疾险，能升级到大黄蜂重疾险2号吗？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col">不能自动升级，保单即为保险合同，各种保障责任在购买保险时就已经确定了，以后不能更改。所以，以前购买的大黄蜂重疾险不能自动升级为大黄蜂重疾险2号。如果对大黄蜂2号感兴趣，可以给孩子购买这款产品，加保重疾保额，两者互不影响，重疾险是确诊给付的保险，出险的时候向两家保险公司索赔，如果符合保险责任，可以获得两家公司的赔偿。</p>
                        </div>
                    </div>
                    <div className="question_item hide">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">12种少儿特定疾病是什么意思，如果患了这12种疾病种的一种怎么理赔？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col">12种少儿特定疾病包含：白血病、重症手足口病、严重脑损伤、严重Ⅲ度烧伤、重型再生障碍性贫血、严重原发性心肌病、严重脊髓灰质炎、骨髓纤维化、自体造血干细胞移植、斯蒂尔病（全身型幼年类风湿性关节炎）、严重骨髓增生异常综合症、婴儿进行性脊肌萎缩症。如果被保险人罹患了重症手足口病，那么除了赔偿重大疾病保险金，还会赔偿特定疾病保险金。特定疾病保险金=投保时的重大疾病保险金。</p>
                        </div>
                    </div>
                    <div className="question_item hide">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">这款重大疾病保险是否保白血病？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col">这款产品保障的重疾和轻症包括白血病，A期程度慢性淋巴细胞白血病属于轻症，按照基本保额的30%赔偿。A期以上的白血病属于重疾中的恶性肿瘤，则在被保险人18岁可以获得基本保额（投保时的保额）+特定疾病保额（等于基本保额）+随着保单年度复利增长的保额。</p>
                        </div>
                    </div>
                    <div className="question_item hide">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">附加投保人豁免，这个可以介绍下吗？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col">这个附加险如果投保了，则投保人发生身故或全残，或者罹患了合同约定的100种重疾，20种中症，35种轻症其中的任意一种情况，则被保险人（就是小孩）的保费不用再交了，但是保障继续有效。这个附加险的作用是防止大人发生意外或者严重的疾病导致收入损失，不能继续帮小孩子缴费导致保单失效。</p>
                        </div>
                    </div>
                    <div className="question_item hide">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">外籍人士能买么？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col">您好，这款产品不支持外籍人士投保。</p>
                        </div>
                    </div>
                    <div className="question_item hide">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">受益人能指定么？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col">这款产品的重大疾病保险金的受益人是被保险人本人。身故保险金是按照出险时累计已交的保险费进行给付，受益人可以指定。</p>
                        </div>
                    </div>
                    <div className="question_item hide">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">这款重大疾病保险购买后有犹豫期吗？如何退保？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col">这款产品有15天的犹豫期，如需申请退保，可通过【个人中心】-【我的保单】-拉到最下选择【申请售后】-【犹豫期退保】或【退保】，按页面指引提交资料。犹豫期过后，可以联系工作人员或者保险公司，需要人工线下办理退保，但会有保费损失。</p>
                        </div>
                    </div>
                    <div className="question_item hide">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">电子保单有效力吗？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col">根据《中华人民共和国合同法》第十一条规定，数据电文是合法的合同表现形式，电子保单与纸质保单具有同等法律效力。完成购买后，我们会把电子保单发到您的邮箱。</p>
                        </div>
                    </div>
                    <div className="question_item hide">
                        <div className="question_tit row">
                            <span className="tag">Q:</span>
                            <p className="col">我想买投保人豁免，我的宝宝符合健康告知，但是我不符合健康告知，我还能买投保人豁免吗？</p>
                        </div>
                        <div className="question_text row">
                            <span className="tag">A:</span>
                            <p className="col">您好，如果您不符合健康告知，可以让您的配偶作为投保人投保，但是如果两位都不符合健康告知，则无法购买投保人豁免，真是不好意思。</p>
                        </div>
                    </div>
                </div>
                <div data-track="detail_qamore" className="question_more">查看更多
                    <span data-track="detail_qamore" className="arrow"></span>
                </div>
            </div>
        </div>
    )
  }
  componentDidMount(){
    store.on("activeChange",(data)=>{
        console.log(data);
        if(data==1){
            this.setState({
                active:true
            })
        }
       
    })
  }
}

export default Xintroduce
