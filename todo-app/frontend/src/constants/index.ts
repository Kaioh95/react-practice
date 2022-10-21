
export const URL = "http://localhost:3003/api"

export const initialState = {
    description: '',
    todoList: [],
}

export const todoActions = {
    DESCRIPTION_CHANGED: "DESCRIPTION_CHANGED",
    TODO_SEARCH: "TODO_SEARCH",
    ADD_TODO_ITEM: "ADD_TODO_ITEM",
    TODO_CLEAR: "TODO_CLEAR",
    REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
    MARK_ITEM_AS_DONE: "MARK_ITEM_AS_DONE",
    MARK_ITEM_AS_PENDING: "MARK_ITEM_AS_PENDING",
}