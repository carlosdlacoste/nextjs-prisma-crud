import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma"

export async function GET({params}){
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id) 
        }
    })
    return NextResponse.json(task)
}

export async function PUT(request, {params}){
    const data = await request.json()
    const taskUpdated = await prisma.task.update({
        where:{
            id: Number(params.id)
        },
        data: data
    })
    return NextResponse.json(taskUpdated)
}

export async function DELETE({params}){
    const taskRemoved = await prisma.task.delete({
        where:{
            id: Number(params.id) 
        }
    })
    return NextResponse.json(taskRemoved)
}