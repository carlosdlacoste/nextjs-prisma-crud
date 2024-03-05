import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/taskCard";
import { Component } from "react";


/**
 * Esta funcion carga todas las tareas almacenadas en la base de datos.
 * @returns {Object} Objeto o JSON con la informacion de todas las tareas almacenadas en la bd.
 */
async function loadTasks() {
  return await prisma.task.findMany()
}

/**
 * Esta variable de NextJS permite renderizar los cambios en tiempo real.
 * @type {String} 
 */

export const dynamic = 'force-dynamic';

/**
 * Este componente renderiza todas las tareas almacenadas en la bd en la pagina principal de la app.
 * @component HomePage
 * @returns {Component}
 */

export default async function HomePage(){

  /**
   * Esta variable recibe todas las tareas almacenadas en la bd para poder renderizarlas posteriormente en HomePage
   * @type {Object}
   */
  const tasks = await loadTasks()
  
  return (
    <>
      <section className="container mx-auto lg:w-10/12 sm:w-11/12">
        <div className="grid grid-cols-3 gap-3 mt-10">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id}/>
          ))}
        </div>
      </section>
    </>
  )
}