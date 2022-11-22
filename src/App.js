import './App.css';
import Home from './pages/Home';
import Framework from './pages/Framework';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
    <div className = 'pages'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/framework" element={<Framework />}>
          </Route>
       </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
