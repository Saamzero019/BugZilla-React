// make a functional component for indexing the bugs

import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CommentCreate from "../Comments/CommentCreate";
import CommentIndex from "../Comments/CommentIndex";

export default function BugsShow(props) {
  const [givenBug, setGivenBug] = useState({});
  const { id } = useParams();
  // fetch data from /api/v1/bugs for indexing
  useEffect((props) => {
    axios
      .get(`/api/v1/bugs/${id}`)
      .then((response) => {
        //console.log("response Data : ", response.data )
        setGivenBug(response.data);
      })
      .catch((error) => console.log(error));
  }, []); // second parameter defines condition of re-render (re-render from this value)

  const displayBug = () => (
    <div className="col-md-2 col-lg-3">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{givenBug.title}</h5>
          <Link to={`/api/v1/bugs/${givenBug.id}`} className="btn btn-primary">
            Edit
          </Link>
          <Link to={`/api/v1/bugs/${givenBug.id}`} className="btn btn-danger">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );

  const handleDelete = (e) => {
    axios
      .delete(`/api/v1/bugs/${id}`)
      .then((response) => {
        if (response.status == 200) {
          console.log("response: ", response);
          alert("Bug deleted successfully!");
        } else throw new Error("response was not found to be successfull.");
      })
      .then((response) => {
        window.location = "http://localhost:3000/bugs";
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h2 className="display-4">{givenBug.title}</h2>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-right mb-3">
            <Link to="/api/v1/bugs/new" className="btn btn-success">
              Create New Bug
            </Link>
          </div>
          {/* Show Details  */}
          <div className="row container">
            <div className="col-md-6 black-right-border">
              <div className="row">
                <h3 className="col-md-3">Deadline:</h3>
                <h3 className="col-md-9 text-danger">
                  {givenBug.completetion_days}
                </h3>
              </div>
              <div className="row">
                <span className="col-md-3">Priority:</span>
                <span className="col-md-9 text-success">
                  {givenBug.priority}
                </span>
              </div>
              <div className="row">
                <span className="col-md-3">Description:</span>
                <span className="col-md-9 ">{givenBug.description}</span>
              </div>
              <div className="row">
                <span className="col-md-3">Created At:</span>
                <span className="col-md-9 text-primary">
                  {givenBug.created_at}
                </span>
              </div>
              <div className="row">
                <span className="col-md-3">Comments:</span>
                <span className="col-md-9 text-primary">
                  <CommentIndex bug_id = {givenBug.id} />
                </span>
              </div>
            </div>
          </div>
          <button
            to={`/api/v1/bugs/${givenBug.id}`}
            className="btn btn-primary"
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </main>
        <CommentCreate bug_id = {givenBug.id} />
      </div>
    </>
  );
}
