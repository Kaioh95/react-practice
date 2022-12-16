import { BrowserRouter as Router } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import MyMoneyRoutes from "./MyMoneyRoutes";
import "../styles/App.css"

export default function AppPage(){

    return(
        <>
        <Header/>
        <div className='flexRow'>
            <SideBar></SideBar>
            <div className='container'>
                <Router>
                    <MyMoneyRoutes/>
                </Router>
                <Footer/>
            </div>
        </div>
        </>
    )
}