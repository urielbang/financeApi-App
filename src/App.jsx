import NavBar from "./components/NavBar";
import Assest from "./pages/Assest";
import Auth from "./pages/Auth";
import Favorites from "./pages/Favorites";
import HomePage from "./pages/HomePage";
import SignIn from "./components/Sign in";
import Login from "./components/login";
import DataPage from "./components/DataPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { useState, useEffect } from "react";

function App() {
  const auth = getAuth();
  const [currentsUser, setIsHasUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userState) => {
      if (useState) {
        setIsHasUser(userState);
        return;
      }
      setIsHasUser(null);
    });
    return () => unSubscribe();
  }, []);

  return (
    <BrowserRouter>
      {currentsUser ? <NavBar /> : null}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/assest" element={<Assest />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/datas/:id" element={<DataPage />} />
        {currentsUser ? (
          <Route path="/" element={<HomePage />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
