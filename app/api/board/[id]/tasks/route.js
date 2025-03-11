import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Task from "@/models/Task";

export async function GET(request, {params}){
    try{
        await dbConnect();

        const {id} = await params;

        const tasks = await Task.find({board: id});

        return NextResponse.json(tasks, {status:200})
    }catch(error){
        return NextResponse.json({message: "tasks not found"})
    }
}