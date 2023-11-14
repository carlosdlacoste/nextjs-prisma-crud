"use client"
import { useState } from "react";

function NewPage(){
    const [task, setTask] = useState({})
    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <form className="bg-slate-800 p-10 w-1/4">
                    <label htmlFor="title" className="font-bold text-sm">Titulo de Tarea</label>
                    <input type="text" id="title" placeholder="Titulo" className="border border-gray-400 p-2 mt-1 mb-4 w-full text-black" />
                    <label htmlFor="description" className="font-bold text-sm">Descripcion detallada de la tarea</label>
                    <textarea rows="3" id="description" placeholder="Describe tu tarea" className="border border-gray-400 p-2 mb-4 mt-1 w-full text-black"></textarea>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear</button>
                </form>
            </div>
        </>
    )
}

export default NewPage;