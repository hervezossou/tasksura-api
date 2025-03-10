import { Request, Response } from "express";
import { getAllTasks, createTask, updateTask, deleteTask, getTaskById } from "../services/taskService.js";
import { validateTask } from "../validators/taskValidators.js";

// Create a task
export const createTaskController = async (req: Request, res: Response): Promise<void> => {
    try {
        const validationResult = validateTask(req, res, () => {});
        if (!validationResult) {
            return;
        }

        // call to createTask service
        const newTask = await createTask(req.body);
        res.status(201).json({ message: "Task created successfully", task: newTask });
    } catch(error: any) {
        res.status(500).json({ error: "Failed to create task", details: error.message });
    }
};

// Update a task
export const updateTaskController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { title, description, status, priority } = req.body;
    
        const updatedTask = await updateTask(parseInt(id), { title, description, status, priority });
        if (!updatedTask) {
          res.status(404).json({ error: "Task not found" });
          return;
        }
    
        res.status(200).json({ message: "Task updated successfully", task: updatedTask });
    } catch (err: any) {
        res.status(500).json({ error: "Error updating task", details: err.message });
    }
};

// Delete a task
export const deleteTaskController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const result = await deleteTask(parseInt(id));
        if (result === null) {
            res.status(404).json({ error: "Task not found" });
            return;
        }
        res.status(200).json({ message: "Task deleted successfully" });
    } catch(error: any) {
        res.status(500).json({ error: "Failed to delete task", details: error.message });
    }
};

// Get all tasks
export const getAllTasksController = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await getAllTasks();
        res.status(200).json({ tasks });
    } catch (err: any) {
        res.status(500).json({ error: "Error fetching tasks", details: err.message });
    }
}

// Get a task by id
export const getTaskByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
      const { taskId } = req.params;
      const task = await getTaskById(parseInt(taskId));
      if (!task) {
        res.status(404).json({ error: "Task not found" });
        return;
      }
      res.status(200).json({ task });
    } catch (err: any) {
      res.status(500).json({ error: "Error fetching task", details: err.message });
    }
  };
