import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../components/About';
import Todo from '../components/Todo';

export default function TodoRoutes(){

    return(
        <Routes>
            <Route path="/todos" element={<Todo/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="*" element={ <Navigate to="/todos"/> }></Route>
        </Routes>
    )
}   