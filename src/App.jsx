import NavBar from "./components/NavBar";
import Assest from "./components/Assest";
import Auth from "./components/Auth";
import Favorites from "./components/Favorites";
import HomePage from "./components/HomePage";
import SignIn from "./components/Sign in";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assest" element={<Assest />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
