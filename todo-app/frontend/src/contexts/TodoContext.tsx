import { createContext, ReactNode, useReducer } from "react";
import { reducer } from "../store"
import { initialState, todoActions, URL } from "../constants"
import axios from "axios";

interface TodoItem{
    _id: string
    description: string
    done: boolean
    createdAt?: string
    updatedAt?: string
}

export interface TodoContextType{
    description: string
    todoList: { 
        _id: string,
        description: string,
        done: boolean,
        createdAt?: string,
        updatedAt?: string,
    }[]
    setDescription?: (desc: string) => void
    search?: (desc?: string) => void
    descriptionChange?: (desc: string) => void
    addTodoItem?: (desc: string) => void
    removeTodoItem?: (todoItem: TodoItem) => void
    clear?: () => void
    markItemAsDone?: (todoItem: TodoItem) => void
    markItemAsPending?: (todoItem: TodoItem) => void
}

interface TodoContextProviderProps{
    children: ReactNode
}

export const TodoContext = createContext({} as TodoContextType)

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const description = state.description
    const todoList = state.todoList
    const descriptionChange = (desc: string) => {
        dispatch({ type: todoActions.DESCRIPTION_CHANGED, payload: desc})
    }
    const search = (desc?: string) => {
        const searchStr = desc ? `&description__regex=${desc}` : ''

        axios.get(`${URL}/get?sort=-createdAt${searchStr}`)
            .then(resp => dispatch({type: todoActions.TODO_SEARCH, payload: resp.data.todos}))
    }
    const addTodoItem = (desc: string) => {
        axios.post(URL+"/create", {description: desc})
            .then(resp => dispatch({ type: todoActions.ADD_TODO_ITEM, payload: resp.data.todo}))
            .then(resp => search())
    }
    const removeTodoItem = (todoItem: TodoItem) => {
        axios.delete(`${URL}/delete/${todoItem._id}`)
            .then(resp => dispatch({ type: todoActions.REMOVE_TODO_ITEM, payload: resp.data}))
            .then(resp => search(state.description))
    }
    const clear = () => {
        dispatch({ type: todoActions.TODO_CLEAR })
        search()
    }
    const markItemAsDone = (todoItem: TodoItem) => {
        axios.patch(`${URL}/edit/${todoItem._id}`, {...todoItem, done:true})
            .then(resp => dispatch({ type: todoActions.MARK_ITEM_AS_DONE, payload: resp.data.data}))
            .then(resp => search(state.description))
    }
    const markItemAsPending = (todoItem: TodoItem) => {
        axios.patch(`${URL}/edit/${todoItem._id}`, {...todoItem, done:false})
            .then(resp => dispatch({ type: todoActions.MARK_ITEM_AS_PENDING, payload: resp.data.data}))
            .then(resp => search(state.description))
    }


    return(
        <TodoContext.Provider value={{description,
            todoList,
            descriptionChange,
            search,
            addTodoItem,
            removeTodoItem,
            clear,
            markItemAsDone,
            markItemAsPending,
        }}>
            {children}
        </TodoContext.Provider>
    )
}