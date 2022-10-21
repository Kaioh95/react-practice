
// Action Creator
export function alterarNumeroMinimo(novoNumero: number){
    return{
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumbero: number){
    return{
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumbero
    }
}