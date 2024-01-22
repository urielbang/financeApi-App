import Login from "./login/index";
import SignIn from "./Sign in/index";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setIsLogin(!isLogin);
  };
  const handleSignIn = (e) => {
    if (!email || !password) return;
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredintal) => {
        const user = userCredintal.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredintal) => {
        const user = userCredintal.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  return (
    <div>
      <button onClick={handleClick}>click</button>
      {!isLogin ? (
        <Login
          handleLogin={handleLogin}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
        />
      ) : (
        <SignIn
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          handleSignIn={handleSignIn}
        />
      )}
    </div>
  );
}
