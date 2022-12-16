
const userKey = '_mymoney_user'

export const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)!),
    validToken: false
}

export const authActions={
    TOKEN_VALIDATED: 'TOKEN_VALIDATED',
    USER_FETCHED: 'USER_FETCHED'
}

type actionAuth = {
    type: string,
    payload: any
}

export default (state = INITIAL_STATE, action: actionAuth) => {
    switch (action.type){
        case authActions.TOKEN_VALIDATED:
            if(action.payload){
                return {...state, validToken: true }
            }
            else{
                localStorage.removeItem(userKey)
                return {...state, validToken: false, user: null}
            }
        case authActions.USER_FETCHED:
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return {...state, user: action.payload, validToken: true}
        default:
            return state
    }
}