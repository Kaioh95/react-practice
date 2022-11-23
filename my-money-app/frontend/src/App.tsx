import React from 'react';
import "./styles/App.css"
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/Header';
import { LayoutContextProvider } from './contexts/LayoutContext';
import { BrowserRouter as Router } from "react-router-dom"
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import MyMoneyRoutes from './pages/MyMoneyRoutes';
import { DashboardContextProvider } from './contexts/DashboardContext';
import { TabContextProvider } from './contexts/TabContext';
import { BillingCyclesContextProvider } from './contexts/BillingCyclesContext';

function App() {
	return (
		<div className='App'>
			<LayoutContextProvider>
			<DashboardContextProvider>
			<TabContextProvider>
			<BillingCyclesContextProvider>
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
			</BillingCyclesContextProvider>
			</TabContextProvider>
			</DashboardContextProvider>
			</LayoutContextProvider>
		</div>
	);
}

export default App;
