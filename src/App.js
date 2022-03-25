import { Routes, Route, BrowserRouter } from "react-router-dom";
import Candidates from "./components/Candidates/Candidates";
import About from "./components/About/About";
import HomePage from "./components/HomePages/HomePage";
import Navbar from "./components/Navbar";
//import './App.css'

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="candidates/*" element={<Candidates />} />
          <Route path="aboutus" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
