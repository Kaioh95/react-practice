import PageHeader from "../template/PageHeader"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

export interface TodoResp{
    _id: string
    description: string
    done: boolean
    createdAt?: string
    updatedAt?: string
}

interface TodoProps{
    text?: string
}

export default function Todo(props: TodoProps){

    return(
        <div>
            <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
            <TodoForm/>
            <TodoList/>
        </div>
    )
}