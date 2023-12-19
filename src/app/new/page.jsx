"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

function NewPage({params}){
    const [taskList, setTaskList] = useState({})
    const router = useRouter()
    // const [storeTask, setStoreTask] = useState({})   estado para recibir y guardar la tarea por si se decide mostrar el contenido de la tarea en el placeholder en lugar del valor del input en un futuro

    useEffect(() => {
        if(params.id){

            fetch(`/api/tasks/${params.id}`)
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setTaskList(data)
                })
        }
    }, []);

    const addNewTask = async (event, newTask) =>{
        event.preventDefault()
        if(params.id){
            const resp = await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask)
            })
            const data = await resp.json()
            console.log(data)
        }
        else{
            const resp = await fetch('/api/tasks', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTask)
            })
            const data = await resp.json()
            console.log(data)
        }
        
        router.push('/')
    }

    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <form className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2">
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