import Login from "../components/login/index";
import SignIn from "../components/Sign in/index";
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
    e.target[0].value = "";
    e.target[1].value = "";
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
    e.target[0].value = "";
    e.target[1].value = "";
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => setPassword(e.target.value);
  return (
    <div className="logInSignInConatiner">
      {!isLogin ? (
        <Login
          setIsLogin={setIsLogin}
          handleLogin={handleLogin}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
        />
      ) : (
        <SignIn
          setIsLogin={setIsLogin}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          handleSignIn={handleSignIn}
        />
      )}
    </div>
  );
}
