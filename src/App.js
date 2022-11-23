import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Headers from './components/Headers';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Sidebar/>
      
      <Outlet/>
    </div>
  );
}

export default App;
