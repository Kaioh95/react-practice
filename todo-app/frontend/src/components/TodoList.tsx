import { TodoResp } from './Todo'
import { TodoContext } from '../contexts/TodoContext'
import { useContext } from 'react'

interface TodoListProps{
    list?: Array<TodoResp>
    handleRemove?: (todo: TodoResp) => void
    handleMarkAsDone?: (todo: TodoResp) => void
    handleMarkAsPending?: (todo: TodoResp) => void
}

export default function TodoList(props: TodoListProps){
    const context = useContext(TodoContext)
    const {markItemAsDone, markItemAsPending, removeTodoItem} = context

    function renderRows(){
        const list = context.todoList || []

        return list.map((todo, i) => (
            <tr key={todo._id} className="border-b-2">
                <td className={`p-2 ${todo.done ? 'line-through text-gray-500' : ''}`}>{todo.description}</td>
                <td className='w-28'>
                    { !todo.done ?
                    <button className={`w-8 h-8 mx-1 rounded-md bg-green-500
                        text-white hover:bg-green-700`}
                        onClick={() => markItemAsDone?.(todo)}>
                            <i className="fa fa-check"></i>
                    </button> : null}
                    { todo.done ?
                    <button className={`w-8 h-8 mx-1 rounded-md bg-orange-500
                        text-white hover:bg-orange-700`}
                        onClick={() => markItemAsPending?.(todo)}>
                            <i className="fa fa-undo"></i>
                    </button> : null}
                    { todo.done ?
                    <button className={`w-8 h-8 mx-1 rounded-md bg-red-500
                        text-white hover:bg-red-700`}
                        onClick={() => removeTodoItem?.(todo)}>
                            <i className="fa fa-trash-o"></i>
                    </button> : null}
                </td>
            </tr>
        ))
    }

    return(
        <table className='w-full overflow-hidden my-2'>
            <thead className={`
                border-b-2 border-gray-400
            `}>
                <tr>
                    <th className='text-left'>Descrição</th>
                    <th className='text-left'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}