import { Schema, model, models } from "mongoose";

const SubTaskSchema = new Schema({
    title: {type : String}
})

const SubTask = models.SubTask || model("SubTask", SubTaskSchema);

export default SubTask;