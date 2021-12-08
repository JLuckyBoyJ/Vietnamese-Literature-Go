import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginView from './View/login/LoginView';
import Home from "./View/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
