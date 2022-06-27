// make a functional component for indexing the bugs

import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "react-dropdown-select";

const roleOptions = [
  { value: "manager", label: "Manager" },
  { value: "qa", label: "Qa" },
  { value: "developer", label: "Developer" },
];



const initialValues = Object.freeze({
  email: "",
  password: "",
  password_confirmation: "",
  role: ''
});

export default function Register(props) {
  const [inputData, setInputData] = useState(initialValues);
  const [userRole, setUserRole] = useState();

  // form handlers
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `/api/v1/signup`,
        { ...inputData, role: userRole },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          console.log("response: ", response.data);
          alert("Register successfull!");
        }
      })
      .then(() => {
        window.location = "http://localhost:3000/";
      })
      .catch((error) => console.log("registration error", error));
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h3 className="font-weight-normal mb-5">Register</h3>
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
                <label htmlFor="password_confirmation">Confirm Password</label>
                <input
                  type="password"
                  name="password_confirmation"
                  id="RegRePass"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Role: </label>
                <Select
                  name="role"
                  id="userROle"
                  className="form-control"
                  required
                  onChange={(e) => setUserRole(e.value)}
                  options={roleOptions}
                />
              </div>

              <button type="submit" className="btn btn-success mt-3">
                Register
              </button>
              <p>
                Have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
