import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './pasta/Home'
import Login from './pasta/Login'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <div className="App">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Home" element={<Home />} />
            </Routes>
       
        </div>
        </Router>
      </header>
    </div >
  );
}

export default App;