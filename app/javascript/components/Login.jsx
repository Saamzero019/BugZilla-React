// make a functional component for indexing the bugs

import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const initialValues = Object.freeze({
  email: "",
  password: "",
});

export default function Login(props) {
  const [inputData, setInputData] = useState(initialValues);

useEffect((props)=> 
{
    axios
      .get("/api/v1/override/logged_in", { withCredentials: true })
      .then(response => {
       // console.log("login respoense: ", response);
      })
      .catch(error => {
        console.log("login error", error);
      });

}, []);

  // form handlers
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/v1/login`, inputData, {withCredentials: true})
      .then((response) => {
        if (response.data.logged_in && response.data.user ) {
          console.log("response data in true: ", response.data);
          props.handleSuccessfulAuth(response.data);
          //console.log("response function: ", response.data);
        } else 
        {
          props.handleOtherSuccessfulAuth(response.data);
        }
      })
      .catch((error) => console.log("login error",error));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h3 className="font-weight-normal mb-5">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="RegEmail"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="RegPass"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-success mt-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
