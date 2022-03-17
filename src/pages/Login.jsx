import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    dispatch({ type: "login" });
    navigate("/");
  };

  return (
    <div className="container text-center mt-5">
      <img src="/assets/animate.gif" alt="Goku animation" className="mt-5 animation" />
      <h1 className="my-5">Click on the button below to Login</h1>
      <button className="btn btn-primary btn-lg" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
