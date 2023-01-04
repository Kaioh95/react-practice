import { BrowserRouter as Router } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import MyMoneyRoutes from "./MyMoneyRoutes";

export default function AppPage(){

    return(
        <div className="AppLayout">
            <Header className="header"/>
            <SideBar className="sidebar"/>
            <main className="content">
                <Router>
                    <MyMoneyRoutes/>
                </Router>
            </main>
            <Footer className="footer"/>
        </div>
    )
}