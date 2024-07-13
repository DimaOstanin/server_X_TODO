import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRouter from "../src/routes/task.route.js";
import authRouter from "../src/routes/auth.route.js";
import { PORT } from "../src/utils/config.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello Xioma!");
})



mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });


app.use('/api/task', taskRouter);
app.use('/api/auth', authRouter);