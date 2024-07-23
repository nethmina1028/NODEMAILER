const nodemailer = require('nodemailer');
require('dotenv').config();
const path = require('path');

const transporter = nodemailer.createTransport({


service : 'gmail',
host: 'smtp.gmail.com',
port: 587,
secure: false,

auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
},
});


const mailOptions = {

    from:{
    name:' web wizrd',
    address: process.env.EMAIL,
    }, // sender address

    to: ["nethmina1028@gmail.com"], //list of receivers
    subject: 'Send using nodemailer Email', // Subject line
    text: 'Hello world', // plain text body
    html: '<b>Hello world</b>', // html body
    attachments: [
        {
            filename: 'text.txt',
            path: path.join(__dirname, 'text.txt'),
            contentType: 'application/pdf'
        },
        {
            filename: 'image.png',
            path: path.join(__dirname, 'image.png'),
            contentType: 'image/png'
        },
    ]

}

const sendMail = async (transporter,mailOptions) =>{
    try{

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    }catch (error){
        console.log(error);
    }
}

sendMail(transporter, mailOptions);