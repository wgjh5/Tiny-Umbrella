
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    // create reusable transporter object using the default SMTP transport
    service: 'qq',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user:'854453495@qq.com', // 发送方的邮箱
        pass: 'vrtjembbhfcmbegj' // smtp 的授权码
    }
});

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" 854453495@qq.com', // sender address
        to: '854453495@qq.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
// });