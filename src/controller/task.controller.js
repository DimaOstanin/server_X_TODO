import Task from  '../models/task.model.js';


export const createTask = async (req, res) => {
    // const { title, description, assignedTo } = req.body;

    try {
        const task = await Task.create(req.body);
        await task.save();
        res.status(201).json({ message: 'Task created', task });
    } catch (error) {
        console.error('Error saving task:', error);
        res.status(500).json({ message: 'Error creating task', error });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ createdBy: req.params.id }).populate('assignedTo', 'username');
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};

