import express from 'express'
import { getAllUsers} from "../controller/users.controlles.js";


const router = express.Router();

router.get("/getAllUsers", getAllUsers);


export default router;