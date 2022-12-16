import React from 'react';
import "./styles/App.css"
import 'font-awesome/css/font-awesome.min.css'
import { LayoutContextProvider } from './contexts/LayoutContext';
import { DashboardContextProvider } from './contexts/DashboardContext';
import { TabContextProvider } from './contexts/TabContext';
import { BillingCyclesContextProvider } from './contexts/BillingCyclesContext';
import { AuthContextProvider } from './contexts/AuthContext';
import { ToastContainer } from "react-toastify"

import 'react-toastify/dist/ReactToastify.min.css';
import AuthOrApp from './AuthOrApp';

function App() {
	return (
		<div className='App'>
			<LayoutContextProvider>
			<DashboardContextProvider>
			<TabContextProvider>
			<AuthContextProvider>
			<BillingCyclesContextProvider>
				<ToastContainer/>
				<AuthOrApp/>
			</BillingCyclesContextProvider>
			</AuthContextProvider>
			</TabContextProvider>
			</DashboardContextProvider>
			</LayoutContextProvider>
		</div>
	);
}

export default App;
