// import axios from "axios";
// import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Assest from "./components/Assest";
import Login from "./components/Auth";
import Favorites from "./components/Favorites";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
function App() {
  // const [apiData, setApiData] = useState([]);

  // const fetchCounriesNames = async () => {
  //   const res = await axios.get(`https://api.coincap.io/v2/assets`);
  //   const data = await res.data;
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchCounriesNames();
  // }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assest" element={<Assest />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
