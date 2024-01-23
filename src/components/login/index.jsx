import "./login.css";

export default function Login(props) {
  const handleClaik = () => {
    props.setIsLogin(true);
  };
  return (
    <div className="logInConainer">
      <div className="ring">
        <i className="lineStyle1"></i>
        <i className="lineStyle2"></i>
        <i className="lineStyle3"></i>
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={props.handleLogin} className="formContainer">
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
              <input type="submit" value="Log in" />
            </div>
          </form>
          <div className="links">
            <a href="#">Forget Password</a>
            <p className="logInToggle" onClick={handleClaik}>
              Sign in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
