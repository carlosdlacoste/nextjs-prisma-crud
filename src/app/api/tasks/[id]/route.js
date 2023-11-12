import { NextResponse } from "next/server";
import {prisma} from "@/libs/prisma"

//el parametro{params} siempre debe ir de segundo en los endpoints ya que request debe ir antes
export async function GET(request, {params}){
    try {
        const task = await prisma.task.findUnique({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json(task)
    } catch (error) {
        return NextResponse.json(error.message)
    }
    
}

export async function PUT(request, {params}){
    try {
        const data = await request.json()
        const taskUpdated = await prisma.task.update({
        where:{
            id: Number(params.id)
        },
        data: data
        })
        return NextResponse.json(taskUpdated)
    } catch (error) {
        return NextResponse.json(error.message)
    }
    
}

export async function DELETE(request, {params}){
    try {
        const taskRemoved = await prisma.task.delete({
            where:{
                id: Number(params.id) 
            }
        })
        return NextResponse.json(taskRemoved)
    } catch (error) {
        return NextResponse.json(error.message) 
    }

}