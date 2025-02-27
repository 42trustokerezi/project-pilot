import { Schema, Types, model, models } from "mongoose";

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  subTask: [{ type: String }],
  board: { type: Schema.Types.ObjectId, ref: "Board" },
  state: {
    type: String,
    enum: ["TODO", "DOING", "DONE"],
    default: "TODO",
  },
});

const Task = models.Task || model("Task", TaskSchema);

export default Task;
