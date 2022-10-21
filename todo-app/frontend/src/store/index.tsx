import { todoActions } from '../constants'
import { TodoContextType } from '../contexts/TodoContext'

/*type stateType = {
    description: string
    list: { 
        _id: string,
        description: string,
        done: boolean,
        createdAt?: string,
        updatedAt?: string
    }[]
}*/

type actionType = {
    type: string
    payload?: any
}

export function reducer(state: TodoContextType, action: actionType){
    switch(action.type){
        case todoActions.DESCRIPTION_CHANGED:
            return {...state, description: action.payload}

        case todoActions.TODO_SEARCH:
            return {...state, todoList: action.payload}

        case todoActions.ADD_TODO_ITEM:
            return {...state, description: ''}

        case todoActions.TODO_CLEAR:
            return {...state, description: ''}

        case todoActions.REMOVE_TODO_ITEM:
            return state
        
        case todoActions.MARK_ITEM_AS_DONE:
            return state
        
        case todoActions.MARK_ITEM_AS_PENDING:
            return state

        default:
            console.log("NNNNN")
            return state
    }
}
