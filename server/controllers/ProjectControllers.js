import Project from "../models/ProjectsModel.js";

export const createProject = async (req, res) => {
    try {
        const file = req.file;
        // console.log('file', file);

        if (!file) {
            return res.status(400).json({
                message: "Please upload a file"
            });
        }

        const projectData = req.body;
        projectData.thumbnail = file?.path;
        // console.log('projectData', projectData);

        if (!projectData) {
            return res.status(400).json({
                success: false,
                message: 'Project data is required',
            });
        }

        const project = new Project(projectData);
        await project.save();

        res.status(201).json({
            success: true,
            data: project,
            message: "Project created successfully",
        });
    } catch (error) {
        console.error('Error creating project:', error.message);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

export const getProjects = async (req, res) => {
    try {
        let { category } = req.query;
        if (category) {
            category = JSON.parse(category);
        }


        // console.log('category', category);
        const filter = category?.length ? { category: { $in: category } } : {};
        const projects = await Project.find(filter)
            .sort({ startDate: -1, createdAt: -1 })
            // .select('title startDate endDate createdAt');

        res.status(200).json({
            success: true,
            data: projects,
            message: 'Projects fetched successfully',
        });
    } catch (error) {
        console.error('Error fetching projects:', error.message);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
}

export const updateProject = async (req, res) => {
    try {
        const id = req.query.id;
        // console.log('id', id);
        const file = req.file;
        // console.log('file', file);

        const newData  = req.body || {};

        if (file) {
            newData.thumbnail = file?.path;
        }
        // console.log('newData', newData);


        if (!id || !newData) {
            return res.status(400).json({
                success: false,
                message: 'Project ID and new data are required',
            });
        }

        const project = await Project.findByIdAndUpdate(id, newData, { new: true });
        if (!project) {
            return res.status(404).json({
                success: false,
                message: 'Project not found',
            });
        }

        res.status(200).json({
            success: true,
            data: project,
            message: 'Project updated successfully',
        });

    } catch (error) {
        console.error('Error updating project:', error.message);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};


