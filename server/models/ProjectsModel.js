import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: [true, 'Please provide a thumbnail image']
    },
    title: {
        type: String,
        required: [true, 'Please provide a title']
    },
    category: {
        type: String,
        enum: {
            values:['Frontend', 'Backend', 'FullStack'],
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
    }
},{
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
