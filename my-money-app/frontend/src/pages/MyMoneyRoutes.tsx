import { Routes, Route, Navigate} from "react-router-dom"
import BillingCycles from "./BillingCycles"
import DashBoard from "./DashBoard"


export default function MyMoneyRoutes(){

    return(
        <Routes>
            <Route path="/" element={<DashBoard/>}></Route>
            <Route path="/billingCycles" element={<BillingCycles/>}></Route>
            <Route path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
    )
}