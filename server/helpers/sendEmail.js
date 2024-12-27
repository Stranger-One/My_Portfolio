import nodemailer from 'nodemailer'

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: `My Portfolio <${options.email}>`,
        to: process.env.MY_EMAIL,
        subject: options.subject,
        html: options.html
    };

    await transporter.sendMail(mailOptions);
}

export default sendEmail;

// await sendEmail({
//     email: user.email,
//     subject: "Account varification",
//     html: `Your Account is verified successfully. you can start messaging now`
// })