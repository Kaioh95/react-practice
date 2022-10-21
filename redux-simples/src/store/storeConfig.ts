import { createStore, combineReducers} from "redux"
import numerosReducer from './reducers/numeros'

type nomesType = []

const reducers = combineReducers({
    numeros: numerosReducer,  
    // Por algum motivo o combineReducer funciona apenas com mais de um reducer
    // Dummy reducer abaixo
    nomes: function(state: nomesType, action){
        console.log("Reducer de Nomes...")
        console.log(state, ' ', action)
        return[
            'Ana',
            'Bia',
            'Maki'
        ]
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig 