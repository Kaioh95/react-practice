import axios from "axios"
import { toast } from "react-toastify"
import { createContext, ReactNode, useContext, useReducer} from "react"
import { billingCyclesActions, URL } from "../constants"
import { billingCyclesReducer, INITIAL_STATE } from "../store/BillingCyclesReducer"
import { TabContext } from "./TabContext"

export interface BcRequestType{
    _id?: string
    name: string
    month: string
    year: string
    credits?: Array<{[key: string]: string}>
    debts?: Array<{[key: string]: string}>
    createdAt?: string
    updatedAt?: string
    __v?: string
}

export interface BillingCyclesContextType{
    list: Array<BcRequestType>
    bcToUpdate: BcRequestType
    getList?: () => void
    create?: (values: BcRequestType) => void
    update?: (values: BcRequestType) => void
    remove?: (values: BcRequestType) => void
    showUpdate?: (billingCycle: BcRequestType) => void
    showDelete?: (billingCycle: BcRequestType) => void
    init?: () => void
}

interface BillingCyclesContextProps{
    children: ReactNode
}

export const BillingCyclesContext = createContext({} as BillingCyclesContextType)

export const BillingCyclesContextProvider = ({ children }: BillingCyclesContextProps) => {
    const [state, dispatch] = useReducer(billingCyclesReducer, INITIAL_STATE)
    const tabContext = useContext(TabContext)
    const list = state.list
    const bcToUpdate = state.bcToUpdate 

    const getList = () => {
        axios.get(`${URL}/billingCycle`)
            .then(resp => dispatch({ type: billingCyclesActions.BILLING_CYCLES_FETCHED, payload: resp.data.billingCycles}))
    }

    const create = (values: BcRequestType)=>{
        submit(values, 'post', 'submitted')
    }

    const update = (values: BcRequestType) => {
        submit(values, 'patch', 'updated')
    }

    const remove = (values: BcRequestType) => {
        submit(values, 'delete', 'deleted')
    }

    type Methods = "put" | "post" | "patch" | "delete" | "get";

    function submit(values: BcRequestType, method: Methods, msg: string){
        const id = values._id? values._id : ''
        axios[method](`${URL}/billingCycle/${id}`, values)
            .then(resp => {
                toast.success(`Billing Cycle successfully ${msg}!`)
            })
            .then(resp => {
                init()
            })
            .catch(err => {
                console.log(err)
                toast.error(`Billing cycle failed to ${msg}!`)
                return err.response
            })
    }

    const showUpdate = (billingCycle: BcRequestType) => {
        tabContext.showTabs?.('tabUpdate')
        tabContext.selectTab?.('tabUpdate')
        dispatch({type: billingCyclesActions.BC_UPDATE, payload: billingCycle})
    }

    const showDelete = (billingCycle: BcRequestType) => {
        tabContext.showTabs?.('tabDelete')
        tabContext.selectTab?.('tabDelete')
        dispatch({type: billingCyclesActions.BC_UPDATE, payload: billingCycle})
    }

    const init = () => {
        tabContext.showTabs?.('tabList', 'tabCreate')
        tabContext.selectTab?.('tabList')
        getList()
        
        const initialValues = {name: '', month: '', year: ''} 
        dispatch({type: billingCyclesActions.BC_UPDATE, payload: initialValues})
    }

    return(
        <BillingCyclesContext.Provider
            value={{
                list,
                bcToUpdate,
                getList,
                create,
                update,
                remove,
                showUpdate,
                showDelete,
                init
            }}
        >
            {children}
        </BillingCyclesContext.Provider>
    )
}