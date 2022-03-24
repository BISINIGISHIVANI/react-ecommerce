import "../authentication.css";
export default function ForgotPage() {
  return (
    <div className="loginbox-align">
      <div className="login-box">
        <h2>Forgot Password</h2>
        <form>
          <div className="user-box">
            <input type="email" name="useremail" />
            <label>Email address </label>
          </div>
          <div className="user-box">
            <input type="password" name="password" />
            <label>Create Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" />
            <label>Retype Password</label>
          </div>
          <div className="password-box">
            <button type="submit" className="login-submit">
              Login
            </button>
            <button className="create-account">Create New Account </button>
          </div>
        </form>
      </div>
    </div>
  );
}
