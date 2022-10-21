
export function login(dispatch: any, name: string){
    dispatch({ type: 'login', payload: name})
}