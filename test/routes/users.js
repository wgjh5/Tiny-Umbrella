var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');
var email = require('./sendEmail.js');
var mongoose = require('mongoose');
console.log(email)
router.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// 发送验证码，获取邮箱地址
let check = {}
router.post('/email', function(req, res, next) {
    console.log(req.body.params)
    let mail = req.body.params.email
    if (!mail) { return res.send('参数错误') }
    let code = parseInt(Math.random(0, 1) * 10000)
    check[mail] = code
    console.log(check)
    //发送邮件
    email.sendMail(mail, code, (state) => {
        if (state) {
            res.send('fail')
        } else {
            res.send('success')
        }

    })


});
// 注册，插入数据库
router.post('/login', function(req, res, next) {
    console.log(check)
    for (var key in check) {
        console.log(key, check[key])
        if (req.body.params.email == key && Number(req.body.params.code) == check[key]) {
            console.log(2222)
            db.query(function(db) { //这里要用函数
                db.collection("login").insert([{
                    "email": req.body.params.email,
                    "password": req.body.params.password
                }], function(err, result) {
                    res.send('succees');
                });
            })
        }
    }


    console.log(req.body.params)



});
// 登录，查找数据库
router.post('/register', function(req, res, next) {
    db.query(function(db) {
        db.collection("login").find({ "email": req.body.params.email }).toArray(function(err, result) {

            if (result.length <= 0) {
                // db.close();
                res.send("fail");
            }
            if (result.length > 0) {
                if (req.body.params.password == result[0].password) {
                    // db.close();
                    res.send("succees");
                } else {
                    // db.close();
                    res.send("fail");
                }
            }
        });
    });



});

// 请求首页数据

router.get('/home', function(req, res, next) {
    db.query(function(db) {
        db.collection("home").find({}).toArray(function(err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            console.log(result);
            res.send(result)
        });
    });


});

router.post('/detail', function(req, res, next) {
    console.log(req.body.params.id)
    let id = mongoose.Types.ObjectId(req.body.params.id);
    db.query(function(db) {
        db.collection("home").find({ "_id": id }).toArray(function(err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            res.send(JSON.stringify(result))
            console.log(result);
        });
    });


});
router.post('/car', function(req, res, next) {
    console.log(req.body)
    
     db.query(function(db) { //这里要用函数
                db.collection("car").insert([{
                    name: req.body.params.name,
                    imgurl:req.body.params.imgurl,
                    price:req.body.params.price,
                    describetow:req.body.params.describetow
                }], function(err, result) {
                    res.send('succees');
                });
            })


});
router.post('/findcar', function(req, res, next) {
    console.log(req.body)
    
      db.query(function(db) {
        db.collection("car").find({ "name": req.body.params.name }).toArray(function(err, result) {

            if (result.length <= 0) {
                // db.close();
                res.send("fail");
            }
            if (result.length > 0) {
              res.send(result)
               console.log(result)
            }
        });
    });


});
module.exports = router;