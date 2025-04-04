import axios from 'axios';
const axiosInstance = axios.create({
    // baseURL: 'http://localhost:5000/api',
    baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
});

export const getProjects = async (category) => {
    try {
        const response = await axiosInstance.get('/project/getProjects', {
            params: {
                category: category?JSON.stringify(category):null
            }
        });
        // console.log("projects", response.data)
        return response.data;
        
    } catch (error) {
        console.error(error);
    }
};

export const updateProjects = async (id, newData) => {
    try {
        const response = await axiosInstance.get('/project/updateProject', {
            newData,
            id
        });
        return response.data;
        
    } catch (error) {
        console.error(error);
    }
};