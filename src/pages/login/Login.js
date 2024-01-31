import { useContext, useRef } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
// import { CircularProgress } from '@mui/material';
import axios from "axios";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    async function abc(){
      dispatch({ type: "LOGIN_START" });
      try {
        // const res = await axios.post("https://facebookapii.herokuapp.com/api/auth/login", { email: email.current.value, password: password.current.value });

        const res = await axios.post("https://facebook-api-theta.vercel.app/api/auth/login", { email: email.current.value, password: password.current.value });
        
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        console.log(res)
      } catch (err) {  
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      }      
    }
    abc() 
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                "Loading"
              ) : (
                "Log In"
              )}
            </button>

            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                "Loading"
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
