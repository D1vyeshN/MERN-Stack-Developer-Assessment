const express = require("express");
const { CreateTask, GetAllTask, UpdateTask, DeleteTask } = require("../controller/task-controller");
const { IsAuthentic, IsAuthorize } = require("../middleware/auth-middleware");

const router = express.Router();

router.post("/tasks/add", IsAuthentic, CreateTask)
    .get("/tasks", IsAuthentic, GetAllTask)
    .patch("/tasks/edit/:id", IsAuthentic, IsAuthorize, UpdateTask)
    .delete("/tasks/:id", IsAuthentic, IsAuthorize, DeleteTask)

exports.router = router;