import dbConnect from "@/lib/db";
import Board from "@/models/Board";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {name} = await request.json();
    await dbConnect();
    await Board.create({name});
    return NextResponse.json({message: 'Board created successfully'}, {status: 201})
  } catch (error) {
    return NextResponse.json({message: 'failed to create board'}, {status:500})
  }
}


export async function GET(request) {
    try{
        await dbConnect();
        const board = await Board.find();
        return NextResponse.json(board,{status:200});
    }catch (error) {
        return NextResponse.json({message: 'no board found'}, {status:500})
    }
}