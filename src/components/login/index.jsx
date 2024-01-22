import "./login.css";
export default function Login() {
  return (
    <div className="logInConainer">
      <div className="ring">
        <i className="lineStyle1"></i>
        <i className="lineStyle2"></i>
        <i className="lineStyle3"></i>
        <div className="login">
          <h2>Login</h2>
          <div className="inputBx">
            <input type="text" placeholder="Username" />
          </div>
          <div className="inputBx">
            <input type="password" placeholder="Password" />
          </div>
          <div className="inputBx">
            <input type="submit" value="Sign in" />
          </div>
          <div className="links">
            <a href="#">Forget Password</a>
            <a href="#">Signup</a>
          </div>
        </div>
      </div>
    </div>
  );
}
