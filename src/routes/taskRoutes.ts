import express from "express";
import { getAllTasksController, createTaskController, updateTaskController, deleteTaskController, getTaskByIdController } from "../controllers/taskController.js";
import { validateTask } from "../validators/taskValidators.js";

const router = express.Router();

router.get("/tasks", getAllTasksController);

router.post("/tasks", createTaskController);

router.put("/tasks/:id", updateTaskController);

router.delete("/tasks/:id", deleteTaskController);

router.get("/tasks/:id", getTaskByIdController);

export default router;
