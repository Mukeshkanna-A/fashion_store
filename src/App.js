import './App.css';
import Login from './pages/Login';
import NavBar from './NavBar';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Designs from './pages/Designs';
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
