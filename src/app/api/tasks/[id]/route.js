import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma"

//el parametro{params} siempre debe ir de segundo en los endpoints ya que request debe ir antes
export async function GET(request, {params}){
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    console.log(params.id)
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

export async function DELETE(request, {params}){
    const taskRemoved = await prisma.task.delete({
        where:{
            id: Number(params.id) 
        }
    })
    return NextResponse.json(taskRemoved)
}