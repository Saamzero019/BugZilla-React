
// make a functional component for indexing the bugs

import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const initialValues = Object.freeze({
  email:"",
  password: "",
  confirm_password:""
});

export default function Register(props) {
  const [inputData, setInputData] = useState(initialValues);

  // form handlers

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("input: ", inputData);

    axios
      .post(``, inputData)
      .then((response) => {
        if (response.status == 200)
        {
            console.log("response: ", response);
            alert("Login successfull!");
        }
        else 
            throw new Error("response was not found to be 200.");
      })
      //.then ((response=> {window.location = 'http://localhost:3000/home'}))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h3 className="font-weight-normal mb-5">
              Register
            </h3>
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
              <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  id="RegRePass"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
        
              <button type="submit" className="btn btn-success mt-3">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

