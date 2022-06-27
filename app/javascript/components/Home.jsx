Home 

import React from "react";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './Shared/Navbar'

import Login from "./Login";

import { useNavigate } from "react-router-dom";
export default function Home(props) {
    const [loginStatus, setloginStatus] = useState(props.loggedInStatus)
  const navigate = useNavigate();

  useEffect(()=>{
    console.log("props in effect: ", props)
  },[])


  const handleSuccessfulAuth = (data) =>
  {
    props.handleLogin(data);
    setloginStatus(data.logged_in)
    navigate("/bugs/new");
  }

return (
    <>
     <Navbar  handleLogout = {props.handleLogout}  />
        <div>
        <h1>Home</h1>
        <h1>Status: {loginStatus}</h1>
        <Login handleSuccessfulAuth={handleSuccessfulAuth}
        />
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </>
);

}
