import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  tasks: [{ type: Array, ref: "Task" }],
});

const User = mongoose.model("User", UserSchema);

export default User;
