import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Task from "@/models/Task";

export async function POST(request) {
  try {
    const { title, description, subTask, board } = await request.json();

    await dbConnect();

    await Task.create({ title, description, subTask, board });

    // const newTask = new Task({
    //     title,
    //     description,
    //     board: boardId,
    //     subTask,
    // })

    return NextResponse.json(
      { message: "task created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "error creating task",
      error: error.message,
    });
  }
}

export async function GET(request) {
  try {
    await dbConnect();
    const tasks = await Task.find().populate("board");
    return NextResponse.json({ tasks }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "task not found",
      error: error.message,
    });
  }
}
