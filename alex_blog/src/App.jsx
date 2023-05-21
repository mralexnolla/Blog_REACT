import BlogsDetails from "./components/BlogsDetails";
import Create from "./components/Create";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NotFound from "./components/NotFound";


function App() {
  
       //const person = {name:"Catherine", age:"30"}
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="content"><Home /></div>} />
          <Route path="/create" element={<div className="content"><Create /></div>} />
          <Route path="/blogs/:id" element={<div className="content"><BlogsDetails /></div>} />
          <Route path="*" element={<div className="content"><NotFound /></div>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App
