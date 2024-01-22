import "../login/login.css";
import { Link } from "react-router-dom";
export default function SignIn(props) {
  return (
    <div className="logInConainer">
      <div className="ring">
        <i className="lineStyle1"></i>
        <i className="lineStyle2"></i>
        <i className="lineStyle3"></i>
        <div className="login">
          <h2>Sign in</h2>

          <form className="formContainer" onSubmit={props.handleSignIn}>
            <div className="inputBx">
              <input
                onChange={props.handleChangeEmail}
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="inputBx">
              <input
                onChange={props.handleChangePassword}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="inputBx">
              <input type="submit" value="Sign in" />
            </div>
          </form>

          <div className="links">
            <a href="#">Forget Password</a>
            <Link to="/login">login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
