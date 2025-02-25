import { Schema, model, models } from "mongoose";

const BoardSchema = new Schema({
    name: {type: String, required: true}
})

const Board = models.Board || model("Board", BoardSchema);

export default Board;