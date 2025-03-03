import { Schema, Types, model, models } from "mongoose";

 export const TaskStatus = {
    TODO: "TODO",
    DOING: "DOING",
    DONE: "DONE",
}

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  subTask: [{ type: String }],
  board: { type: Schema.Types.ObjectId, ref: "Board" },
  status: {
    type: String,
    enum: Object.values(TaskStatus),
    default: TaskStatus.TODO,
  },
});

const Task = models.Task || model("Task", TaskSchema);

export default Task;
