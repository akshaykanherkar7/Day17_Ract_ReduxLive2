import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CounterApp from './Pages/CounterApp';
import TodoApp from './Pages/TodoApp';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<CounterApp/>}></Route>
        <Route path="/todos" element={<TodoApp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
