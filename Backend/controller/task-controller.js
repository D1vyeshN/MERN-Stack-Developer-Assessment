const { Task } = require("../models/task-model");


// --------------------
// Create New Task
// --------------------
exports.CreateTask = async (req, res) => {
    try {
        const task = new Task({ ...req.body, user: req.user._id.toString() })
        const doc = await task.save()

        res.status(200).json({ msg: "task created", doc })
    } catch (error) {
        console.log(error);
    }
}


// --------------------
// Update/Edit Task
// --------------------
exports.UpdateTask = async (req, res) => {
    const { id } = req.params
    try {
        const task = await Task.findOneAndUpdate({ _id: id }, req.body)
        const doc = await task.save()

        res.status(200).json({ msg: "task updated", doc })
    } catch (error) {
        console.log(error);
    }
}


// --------------------
// Delete Task
// --------------------
exports.DeleteTask = async (req, res) => {
    const { id } = req.params

    try {
        const task = await Task.deleteOne({ _id: id })
        res.status(200).json({ msg: "task Deleted" })
    } catch (error) {
        console.log(error);
    }
}


// --------------------
// Get all Tasks
// --------------------
exports.GetAllTask = async (req, res) => {
    try {
        const id = req.user._id.toString()
        const task = await Task.find({ user: id })

        res.status(200).json({ msg: "all task", task })
    } catch (error) {
        console.log(error);
    }
}




