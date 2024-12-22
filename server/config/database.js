import dotenv from 'dotenv';
import mongoose from 'mongoose';


// Load environment variables
dotenv.config();

// MongoDB connection function
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the application if connection fails
  }
};

