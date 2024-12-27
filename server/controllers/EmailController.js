import sendEmail from "../helpers/sendEmail.js";

export const sendEmailToMe = async (req, res) => {
    try {
        const { email, name, message } = req.body;
        // console.log("Email data", req.body);

        await sendEmail({
            email: email,
            subject: `New Message from ${name}`,
            html: `
                <h1>You have a new message from ${name}</h1>
                <h3>Email: ${email}</h3>
                <p>     ${message}</p>
            `
        });

        res.status(200).json({ 
            success: true,
            message: "Email sent successfully" 
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false,
            message: "Internal server error" 
        });
        
    }
};