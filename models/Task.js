import { Schema, Types, model, models } from "mongoose";

const TaskSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    subTask: [{type: String}],
    board: {type: Schema.Types.ObjectId, ref: 'Board'}
})

const Task = models.Task || models("Task", TaskSchema);

export default Task;