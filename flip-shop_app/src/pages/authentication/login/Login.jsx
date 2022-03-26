import "../authentication.css";
import { Link } from "react-router-dom";
export default function loginPage() {
  return (
    <div className="loginbox-align">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="email" name="useremail" />
            <label>Email address </label>
          </div>
          <div className="user-box">
            <input type="password" name="password" />
            <label>Password</label>
          </div>
          <div className="password-box">
            <div className="div-inline">
              <div className="password-save">
                <input type="checkbox" name="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <Link to="/forgot-password">
              <div className="forgot-pwd">
                <span className="forgot-label">forgot password ?</span>
              </div>
              </Link>
            </div>
            <button type="submit" className="login-submit">
            Add Guest credentials
            </button>
            <button type="submit" className="login-submit">
              Login
            </button>
            <Link to="/signup">
            <button className="create-account">Create New Account </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
