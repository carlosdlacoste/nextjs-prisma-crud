"use client"
import { useRouter } from "next/navigation";

function TaskCard({task}) {
    const router = useRouter()
    return(
        <>
            <div className="bg-slate-900 p-3 hover:bg-slate-700 hover:cursor-pointer" onClick={ () => router.push("/tasks/edit/" + task.id)}>
                <h3 className="font-bold text-2xl text-pink-500 mb-2">{task.title}</h3>
                <p>{task.description}</p>
                <p>{new Date(task.createdAt).toLocaleDateString()}</p>
            </div>
        </>
    )
}

export default TaskCard