import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Task from "@/models/Task";

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