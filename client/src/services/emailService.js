import axios from 'axios';
const axiosInstance = axios.create({
    // baseURL: 'http://localhost:5000/api',
    baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
});

export const sendEmail = async (options) => {
    try {
        const response = await axiosInstance.post('/email/send', options);
        // console.log("Email sent", response.data);
        return response.data;
        
    } catch (error) {
        console.error(error);
        return null;
        
    }
};