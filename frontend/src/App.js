import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginView from './View/login/LoginView';
import Home from "./View/home/Home";
import Location from "./View/Location";
import Setting from './View/Setting'
import Me from "./View/Me";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/location" element={<Location />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/me" element={<Me/>}/>
      </Routes>
    </div>
  );
}

export default App;
