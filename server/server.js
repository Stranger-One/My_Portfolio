import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import ProjectRouter from './routes/ProjectRouter.js';
import EmailRouter from './routes/EmailRouter.js';   

dotenv.config();

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());


// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the MERN Stack API');
});

app.use('/api/project', ProjectRouter)
app.use('/api/email', EmailRouter)



// Start the server
const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});