import express from 'express';
import { createProject, getProjects, updateProject } from '../controllers/ProjectControllers.js';
import { upload } from '../helpers/cloudinary.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to the MERN Stack API',
    });
});

router.post('/create', upload.single('thumbnail'), createProject);
router.get('/getProjects', getProjects);
router.put('/update', updateProject);

export default router;
