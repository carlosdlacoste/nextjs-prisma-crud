"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";

/**
 * Componente NewPage que renderiza el formulario para agregar una nueva tarea o el formulario para actualizar una determinada tarea segun sea el caso
 * @component NewPage
 * @param {Object} [params] Objeto con la informacion detallada de la tarea selecionada (id, title, description)
 * @returns {void}
 */


function NewPage({params}){

    /**
     * @typedef {Object} taskList
     * @property {Number} id | El id de la tarea, el cual es generado automaticamente por la bd
     * @property {String} title | El titulo o nombre que el usuario le ha asignado a la tarea
     * @property {String} description | La descripccion de la tarea que el usuario le ha asignado 
     */
    const [taskList, setTaskList] = useState({})
    const router = useRouter()
    // const [storeTask, setStoreTask] = useState({})   estado para recibir y guardar la tarea por si se decide mostrar el contenido de la tarea en el placeholder en lugar del valor del input en un futuro

    useEffect(() => {
        //se comprueba al cargar la pagina si se obtiene el objeto de la tarea seleccionada para actualizar y asi poder guardar la informacion correspondiente en el state taskList
        if(params.id){

            fetch(`/api/tasks/${params.id}`)
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setTaskList(data)
                })
        }
    }, []);

    /**
     * Esta funcion valida inicialmente si el usuario esta tratando de crear una nueva tarea o en su defecto actualizarla, para luego registrar la informacion de la tarea en la base de datos.
     * @param {Event} event Evento que se produce inmediatamente despues de hacer click en el boton Crear.
     * @param {useState} newTask Hook de tipo useState. En este estado estamos guardando toda la informacion correspondiente asignada por el usuario a la nueva tarea o la tarea existente segun sea el caso.
     * @returns {void}
     */

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
        router.refresh()
        router.push('/')
    }

    /**
     * Esta funcion elimina una tarea seleccionada por el usuario de la base de datos.
     * @return {void}
     */

    const deleteTask = async () => {
        const resp = await fetch(`/api/tasks/${params.id}`, {
            method: "DELETE",
        })
        const data = await resp.json()
        console.log(data)
        router.refresh()
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
                    <div className="flex justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(event) => addNewTask(event, taskList)}>Crear</button>
                        {
                            params.id && (
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={deleteTask}>Delete</button>
                            )
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewPage;