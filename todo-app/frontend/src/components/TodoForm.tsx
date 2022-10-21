import React, { ChangeEvent, useContext, useEffect } from "react"
import { TodoContext } from "../contexts/TodoContext"

interface TodoFormProps{
    description?: string
    handleAdd?: () => void
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
    handleSearch?: () => void
    handleClear?: () => void
}

export default function TodoForm(props: TodoFormProps){
    const context = useContext(TodoContext)
    const {description, descriptionChange, search, addTodoItem, clear} = context

    const keyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            e.shiftKey ? search?.(description) : addTodoItem?.(description)
        }
        else if(e.key === "Escape"){
            clear?.()
        }
    }

    useEffect(() => {
        search?.()
    }, [])

    return(
        <div role="form" className="flex flex-wrap gap-4 mb-10">
            <div className="w-full sm:w-full md:w-8/12 lg:w-9/12">
                <input id="description" 
                    className="w-full h-8 border-2 rounded-md px-2"
                    placeholder="Adicione uma tarefa"
                    value={description}
                    onChange={(e) => descriptionChange?.(e.target.value)}
                    onKeyUp={keyHandler}
                />
            </div>

            <div className="w-full sm:w-full md:w-3/12 lg:w-2/12">
                <button className={`w-8 h-8 mr-2
                    rounded-md bg-blue-500
                    text-white hover:bg-blue-700`}
                    onClick={() => addTodoItem?.(description)}>
                        <i className="fa fa-plus"></i>
                </button>
                <button className={`w-8 h-8 mr-2
                    rounded-md bg-cyan-500
                    text-white hover:bg-cyan-700`}
                    onClick={() => search?.(description)}>
                        <i className="fa fa-search"></i>
                </button>
                <button className={`w-8 h-8 mr-2
                    rounded-md bg-zinc-600
                    text-white hover:bg-zinc-900`}
                    onClick={clear}>
                        <i className="fa fa-close"></i>
                </button>
            </div>
        </div>
    )
}