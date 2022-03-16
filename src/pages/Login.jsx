import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/men");
  };

  return (
    <div className="container text-center mt-5">
      <img src="/assets/animate.gif" alt="Goku animation" />
      <h1 className="my-3">Click on the button below to Login</h1>
      <button className="btn btn-primary btn-lg" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
