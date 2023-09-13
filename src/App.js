import "./App.css";
// import { ReactDOM } from "react";
import {
 
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import About from "./Component/About";
import Users from "./Component/Users";
import File from "./Component/File";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<File />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
