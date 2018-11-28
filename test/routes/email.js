//邮箱验证码的注册
//手机验证码
//a 获取验证码
// 1.接受用户发送邮箱
// 2.生成验证码 
// 3.将验证码 和邮箱保存在缓存里
// 4.将验证码发送邮箱
// 5. 通知用户验证码发送ok‘
// 6. 5分钟超时
//b 注册
  // 1.获取用户输入的信息
  // 2.验证验证码是否ok
  // 3.插入文件系统数据库
  // 4.通知用户注册ok
  const express=require('express');
  var router = express.Router();
  const app=express();
  const bodyParser=require('body-parser')
  const email=require('./users.js')
  console.log(email)
  app.use(bodyParser.urlencoded({ extended: false }))
  let check={}
  //获取验证码
  app.post("/getCode",(req,res)=>{
    // console.log(req.body)
  let mail=req.body.mail
    if (!mail) {return res.send('参数错误')}
    let code = parseInt(Math.random(0,1)*1000)
    check[mail]=code
    //发送邮件是异步操作
     email.sendMail(mail,code,(state)=>{
            if (state) {
                res.send('验证码发送nook')
            }else{
               res.send('验证码发送ok')
            }
            
      })

  })
 // 验证码注册
 app.post("/reg",(req,res)=>{
   let {ps,mail,code}=req.body
   console.log({ps,mail,code})
   console.log(check)
   if (check[mail]==code) {
       //插入数据库
       res.send('注册ok')
   }else{
      res.send('验证码错误')
   }

 })