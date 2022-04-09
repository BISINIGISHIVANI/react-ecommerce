import "./signup.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/context/auth-context";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function SignupPage() {
  const navigate=useNavigate();
  const {authDispatch}=useAuth();
  const [user,setUser]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  })
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }
  const SignUpHandler=async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post("/api/auth/signup", user);
        if (response.status === 201) {
  
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem("user", JSON.stringify(response.data.createdUser));
  
          authDispatch({ type: "SIGNUP", payload: { user: response.data.createdUser, token: response.data.encodedToken } })  
          navigate("/");
        }
        else if (response.status === 422) {
          alert("account alerady exists");
        }
        else if (response.status === 500) {
          alert("Server Error");
        }
      }
      catch (error) {
        console.log(error);
      }
  }
  return (
    <div className="loginbox-align">
      <div className="login-box">
        <h2>SignUp</h2>
        <h4>Please fill in this form to create an account.</h4>
        <form>
        <div className="user-box">
            <input 
            type="text" 
            name="firstName" 
            value={user.firstName}
            onChange={changeHandler}
            />
            <label>FirstName</label>
          </div>
          <div className="user-box">
            <input 
            type="text" 
            name="lastName"
            value={user.lastName}
            onChange={changeHandler}
            />
            <label>LastName</label>
          </div>
          <div className="user-box">
            <input 
            type="email"
            name="email" 
            value={user.email}
            onChange={changeHandler}
            />
            <label>Gmail</label>
          </div>
          <div className="user-box">
            <input 
            type="password"
            name="password"
            value={user.password}
            onChange={changeHandler}
            />
            <label>Create Password</label>
          </div>
          <p className="form-terms">
            <input type="checkbox" />
            By creating an account you agree to{" "}
            <a href="sample.com">our Terms</a> & Privacy.
          </p>
          <button 
          type="submit" 
          className="signup-btn"
          onClick={SignUpHandler}
          >
            SignUp
          </button>
          <Link to="/login">
          <button className="already-account">Already have an account </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
