import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/taskCard";

async function loadTasks() {
  return await prisma.task.findMany()
}

export const dynamic = 'force-dynamic';

export default async function HomePage(){
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