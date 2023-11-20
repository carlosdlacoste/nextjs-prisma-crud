import { prisma } from "@/libs/prisma";

async function loadTasks() {
  return await prisma.task.findMany()
}

export default async function HomePage(){
  const tasks = await loadTasks()
  return (
    <>
      <section className="container mx-auto lg:w-10/12 sm:w-11/12">
        <div className="grid grid-cols-3 gap-3 mt-10">
          {tasks.map((task) => (
            <div key={task.id} className="bg-slate-900 p-3 hover:bg-slate-700 hover:cursor-pointer">
              <h3 className="font-bold text-2xl text-pink-500 mb-2">{task.title}</h3>
              <p>{task.description}</p>
              <p>{new Date(task.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}