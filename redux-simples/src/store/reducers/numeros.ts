
type numerosType = {
    min: number
    max: number
}

type actionType = {
    type: string
    payload: number
}

const initialState = {
    min: 7,
    max: 31
}

export default function numeros(state: numerosType=initialState, action: actionType){
    switch(action.type){
        case 'NUM_MIN_ALTERADO':
            console.log(Object.assign(state, {min: action.payload}))
            return Object.assign(state, {min: action.payload})
        case 'NUM_MAX_ALTERADO':
            return Object.assign(state, {max: action.payload})
        default:
            return state
    }
}