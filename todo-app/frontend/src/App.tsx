import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'
import Menu from './template/Menu';
import TodoRoutes from './pages/TodoRoutes';
import { TodoContextProvider } from './contexts/TodoContext';

function App() {
	return (
		<TodoContextProvider>
		<div className={`flex justify-center h-screen`}>
			<div className='w-4/5'>
				<Router>
					<Menu/>
					<TodoRoutes/>
				</Router>
			</div>
		</div>
		</TodoContextProvider>
	);
}

export default App;
