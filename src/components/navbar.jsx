import Link from "next/link";

function NavBar(){
    return(
        <>
            <nav className="bg-slate-900">
                <div className="container mx-auto flex justify-between items-center py-3 lg:w-10/12 sm:w-11/12">
                    <h3 className="font-bold text-3xl">
                        NextCrud
                    </h3>
                    <ul className="flex gap-x-2 text-lg font-bold text-pink-500">
                        <li>
                            <Link href='/' className="hover:text-slate-200">Tasks</Link>
                        </li>
                        <li>
                            <Link href='/new' className="hover:text-slate-200">New</Link>
                        </li>
                        <li>
                            <Link href='/about' className="hover:text-slate-200">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;