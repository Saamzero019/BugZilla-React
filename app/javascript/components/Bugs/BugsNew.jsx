// make a functional component for indexing the bugs

import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

const initialValues = Object.freeze({
  title: "something to test",
  priority: "its initial value",
  completetion_days: 0,
  description: "",
  assign_to: "its value fron initial ",
});

const options = [{ value: "admin@gmail.com", label: "Admin" }];
const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

export default function BugsShow(props) {
  const [newBug, setNewBug] = useState(initialValues);
  const [selectedVal, setSelectedVal] = useState();
  const [prioritySelected1, setPrioritySelected1] = useState();

  useEffect(() => {
    axios
      .get("/api/v1/users")
      .then((response) => {
        //setUserList(response.data);
        response.data.map((u) => {
          options.push({ value: u.email, label: u.email });
        });
      })
      .catch((error) => console.log(error));
  }, []); // second parameter defines condition of re-render (re-render from this value)

  // form handlers
  const handleChange = (e) => {
    setNewBug({ ...newBug, [e.target.name]: e.target.value });
  };

  const handleSelect = (e) => {
    setSelectedVal(e.value);
  };
  const prioritySelected = (e) => {
    setPrioritySelected1(e.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/api/v1/bugs`, {
        ...newBug,
        assign_to: selectedVal,
        priority: prioritySelected1,
      })
      .then((response) => {
        if (response.status == 200) {
          // console.log("response: ", response);
          alert("Bug created successfully!");
        } else throw new Error("response was not found to be 200.");
      })
      .then((response) => {
        window.location = "http://localhost:3000/bugs";
      })
      .catch((error) => console.log(error));
  };
  
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h3 className="font-weight-normal mb-5">
              Create a new Bug to direct your laziness
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="recipeName">Bug Title</label>
                <input
                  type="text"
                  name="title"
                  id="bugTitle"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="assign_to">Priority</label>
                <Select
                  name="assign_to"
                  id="bugAssignTo"
                  className="form-control"
                  required
                  onChange={prioritySelected}
                  options={priorityOptions}
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipeIngredients">Bug Deadline</label>
                <input
                  type="number"
                  name="completetion_days"
                  id="bugCompletetion_days"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipeIngredients">Bug description</label>
                <textarea
                  name="description"
                  id="bugdescription"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="assign_to">Assign_to</label>
                <Select
                  name="assign_to"
                  id="bugAssignTo"
                  className="form-control"
                  required
                  onChange={handleSelect}
                  options={options}
                />
              </div>

              <button type="submit" className="btn btn-success mt-3">
                Create Bug
              </button>
              <Link to="/bugs" className="btn btn-link mt-3">
                Back to Index
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
