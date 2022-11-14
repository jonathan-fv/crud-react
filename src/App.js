import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>View users</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
