import './App.css';
import {Routes, Route} from 'react-router-dom'
import LoginView from './View/login/LoginView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </div>
  );
}

export default App;
