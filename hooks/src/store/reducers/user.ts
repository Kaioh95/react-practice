
export default function userReducer(state: any, action: any){
    switch(action.type){
        case 'login':
            return {...state, user: {name: action.payload}}
        default:
            return state
    }
}