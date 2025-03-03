import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Task, { TaskStatus } from "@/models/Task";

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const task = await Task.findById(id).populate("board");

    if (!task) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    return NextResponse.json({ task }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function PATCH(request, { params }) {
    const { title, description, subTask, } = await request.json();
    const { id } = await params;

    try{
        const existingTask = await Task.findById({_id:id})

        existingTask.title = title,
        existingTask.description = description,
        existingTask.subTask = subTask,

        existingTask.save();
        return NextResponse.json({message: "Task successfully Updated" }, { status: 200 });

    }catch (error) {
        return NextResponse.json({message: "cannot update board"})
    }
}

export async function PUT(request, {params}){
    const { status } = await request.json();
    const { id } = await params;

    try{
        if(!Object.values(TaskStatus).includes(status)){
            return NextResponse.json({message: "Invalid status value"})
        }

        const existingState = await Task.findByIdAndUpdate( id ,
            {status},
            { new: true, runValidators: true }
        );

        // if(existingState.state !== "TODO" || existingState.state !== "DOING" || existingState.state !== "DONE"){
        //     return NextResponse.json({message: "todo state has to be either TODO, DOING, or DONE"});
        // }

        existingState.save();
        return NextResponse.json({message: " task state has been updated successfully"}, {status: 200});
    }catch(error){
        return NextResponse.json({message: "cannot update task"})
    }
}

export async function DELETE(request, {params}){
    try {
        await dbConnect(); // ✅ Ensure database connection
    
        const { id } = await params; // ✅ No need to await
    
        if (!id) {
          return NextResponse.json({ message: "Task ID is required" }, { status: 400 });
        }
    
        const deletedTask = await Task.findByIdAndDelete(id); // ✅ Delete the task
    
        if (!deletedTask) {
          return NextResponse.json({ message: "Task not found" }, { status: 404 });
        }
    
        return NextResponse.json({ message: "Task deleted successfully" }, { status: 200 });
    
      } catch (error) {
        console.error("Error deleting task:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
      }

}