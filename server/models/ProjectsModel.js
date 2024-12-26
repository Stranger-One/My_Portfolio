import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        default:"https://res.cloudinary.com/dolamani-cloudinary/image/upload/v1735233495/My_Portfolio/images/Project%20Default%20Background-1735233490598.jpg" 
    },
    title: {
        type: String,
        required: [true, 'Please provide a title']
    },
    category: {
        type: String,
        enum: {
            values: ['Frontend', 'Backend', 'FullStack'],
            message: 'Category must be Frontend, Backend or FullStack'
        },
        required: [true, 'Please provide a category']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description']
    },
    features: {
        type: [String],
        required: [true, 'Please provide features']
    },
    techStack: {
        type: [String],
        required: [true, 'Please provide a tech stack']
    },
    githubLink: {
        type: String,
        required: [true, 'Please provide a GitHub link']
    },
    liveLink: {
        type: String,
        required: [true, 'Please provide a live link']
    },
    startDate: { type: Date },
    endDate: { type: Date }
}, {
    timestamps: true
});

// Middleware to convert dates
projectSchema.pre('save', function (next) {
    if (this.startDate) {
        this.startDate = new Date(this.startDate);
    }
    if (this.endDate) {
        this.endDate = new Date(this.endDate);
    }
    next();
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
