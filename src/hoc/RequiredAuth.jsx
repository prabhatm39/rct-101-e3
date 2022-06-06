import React from "react";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const {isAuth} = useContext(AuthContext);
 const navigate = useNavigate()
  if(isAuth){
    return (
      navigate("/products")
    );
  }
  else{
    return (
    navigate("/login")
    );
  }
 
};

export default RequiredAuth;
