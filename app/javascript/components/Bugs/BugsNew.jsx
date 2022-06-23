// make a functional component for indexing the bugs

import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const initialValues = Object.freeze({
  title: "something to test",
  priority: 0,
  completetion_days: 0,
  description: "",
});

export default function BugsShow(props) {
  const [newBug, setNewBug] = useState(initialValues);

  // form handlers

  const handleChange = (e) => {
    setNewBug({ ...newBug, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("newBug: ", newBug);

    axios
      .post(`/api/v1/bugs`, newBug)
      .then((response) => {
        if (response.status == 200)
        {
            console.log("response: ", response);
            alert("Bug created successfully!");
        }
        else 
            throw new Error("response was not found to be 200.");
      })
      .then ((response=> {window.location = 'http://localhost:3000/bugs'}))
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
                <label htmlFor="recipeIngredients">Bug Priority</label>
                <input
                  type="number"
                  name="priority"
                  id="bugPriority"
                  className="form-control"
                  required
                  onChange={handleChange}
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
