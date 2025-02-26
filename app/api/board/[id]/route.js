import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Board from "@/models/Board";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();
    const board = await Board.findOne({ _id: id });
    return NextResponse.json({ board }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Board not found"}, {status: 500})
  }
}


export async function PATCH(request, { params }) {
    try{
        const { id } = await params;
        await dbConnect();
        const { name } = await request.json()

        const existingBoard = await Board.findOne({_id:id});

        if(!existingBoard){
            return NextResponse.json({ message: "Board not found"})
        }

        existingBoard.name = name;
        await existingBoard.save()
        return NextResponse.json({message:"Board successfully updated"}, {status: 200})
    }catch (error) {
        return NextResponse.json({message: "cannot update Board"})
    }
}