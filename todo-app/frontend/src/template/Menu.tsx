import { Link } from "react-router-dom";

export default function Menu(props: any){

    return(
        <nav className="bg-gray-900 rounded-md text-gray-400 px-2 py-4">
            <div className="flex">
                <div className="hover:text-gray-200">
                    <a href="/" className="mx-2">
                        <i className="fa fa-calendar-check-o">TodoApp</i>
                    </a>
                </div>

                <div id="navbar" className="w-40 mx-2">
                    <ul className="flex justify-around">
                        <li className="hover:text-gray-200"><Link to="/todos">Tarefas</Link></li>
                        <li className="hover:text-gray-200"><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}