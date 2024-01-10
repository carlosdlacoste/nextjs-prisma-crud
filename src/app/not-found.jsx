import Link from "next/link";

function NotFound(){
    return(
        <>
            <section className="flex h-screen justify-center items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-5">Not Found</h1>
                    <Link href='/' className='text-slate-400 underline underline-offset-4'>Volver al inicio</Link>
                </div>
            </section>
        </>
    )
}

export default NotFound;