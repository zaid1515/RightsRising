const nodemailer = require('nodemailer');


const generateOtp = () => {
    return Math.floor(1000 + Math.random()*9000).toString();
}

const sendOtp = async(email) => {
    const otp = generateOtp();

    const transporter = nodemailer.createTransport({
        service : 'Gmail',
        auth : {
            user : "karanadwani.official@gmail.com",
            pass : "ku2kyr3@aj"
        },
    });

    // vedwar13official@gmail.com.
    const mailOptions = {
        from : "gmail here",
        to : email,
        subject : 'Otp for verification.',
        text : `your Otp for authentication is ${otp}`,
    };

    try{
        await transporter.sendMail(mailOptions);
        return otp; 
    } catch(err){
        console.log(`Error sending otp : ${err}`);
        throw new Error('Failed to send OTP.');
    }
}