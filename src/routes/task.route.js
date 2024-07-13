import express from 'express'
import { createTask, getTasks } from "../controller/task.controller.js";
// import  authMiddleware  from '../utils/authMiddleware.js';


const router = express.Router();


router.post('/createTask',  createTask);
router.get('/getTasks',  getTasks);


export default router