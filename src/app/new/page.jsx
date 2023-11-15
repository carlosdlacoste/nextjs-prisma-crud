"use client"
import { useState } from "react";

function NewPage(){
    const [taskList, setTaskList] = useState({})

    const addNewTask = async (event, newTask) =>{
        event.preventDefault()
        const resp = await fetch('api/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask)
        })
        const data = await resp.json()
        console.log(data)
        return data;
    }

    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <form className="bg-slate-800 p-10 w-1/4">
                    <label htmlFor="title" className="font-bold text-sm">Titulo de Tarea</label>
                    <input type="text" id="title" placeholder="Titulo" className="border border-gray-400 p-2 mt-1 mb-4 w-full text-black" onChange={(event) => setTaskList({...taskList, title: event.target.value})} value={taskList.title || ''}/>
                    <label htmlFor="description" className="font-bold text-sm">Descripcion detallada de la tarea</label>
                    <textarea rows="3" id="description" placeholder="Describe tu tarea" className="border border-gray-400 p-2 mb-4 mt-1 w-full text-black" onChange={(event) => setTaskList({...taskList, description: event.target.value})} value={taskList.description || ''}></textarea>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(event) => addNewTask(event, taskList)}>Crear</button>
                </form>
            </div>
        </>
    )
}

export default NewPage;