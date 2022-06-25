Home 

import React from "react";
import {Link} from "react-router-dom"
import Navbar from "./Shared/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";





export default function Home() {
    const [loginStatus, setloginStatus] = useState(false)

useEffect(() => {
    axios
      .get("")
      .then((response) => {
         console.log("response Data: ", response.data )
        setloginStatus(response.data);
      })
      .catch((error) => console.log(error));
  }, []); // second parameter defines condition of re-render (re-render from this value)


return (
    <>
    <Navbar isLogin = {loginStatus} />
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
            <h1 className="display-4">BugZilla</h1>
            <p className="lead">
            Bugs are needed to be rectified 
            </p>
            <hr className="my-4" />
            <Link
            to= "/bugs"
            className="btn btn-lg custom-button"
            role="button"
            >
            View Bugs F
            </Link>
        </div>
        </div>
    </div>
    </>
);

}
