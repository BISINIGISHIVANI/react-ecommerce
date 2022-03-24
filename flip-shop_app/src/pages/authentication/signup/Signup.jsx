import "./signup.css";
export default function SignupPage() {
  return (
    <div className="loginbox-align">
      <div className="login-box">
        <h2>SignUp</h2>
        <h4>Please fill in this form to create an account.</h4>
        <form>
          <div className="user-box">
            <input type="email" name="gmail" />
            <label>Gmail</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" />
            <label>Create Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" />
            <label>Re-Enter Password</label>
          </div>
          <p className="form-terms">
            <input type="checkbox" />
            By creating an account you agree to{" "}
            <a href="sample.com">our Terms</a> & Privacy.
          </p>
          <button type="submit" className="signup-btn">
            SignUp
          </button>
          <button className="already-account">Already have an account </button>
        </form>
      </div>
    </div>
  );
}
