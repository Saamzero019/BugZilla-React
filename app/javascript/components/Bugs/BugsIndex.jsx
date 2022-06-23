// make a functional component for indexing the bugs

import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BugsIndex() {
  const [bugsList, setBugsList] = useState([]);

  // fetch data from /api/v1/bugs for indexing
  useEffect(() => {
    axios
      .get("/api/v1/bugs")
      .then((response) => {
        // console.log("response Data: ", response.data )
        setBugsList(response.data);
      })
      .catch((error) => console.log(error));
  }, []); // second parameter defines condition of re-render (re-render from this value)

  const allBugs = bugsList.map((bug, index) => (
    <div key={index} className="col-md-2 col-lg-3">
      <div className="card mb-4">
        <img
          className="card-img-top"
          src="https://t3.ftcdn.net/jpg/00/80/51/80/360_F_80518045_wSZnRFGkr6BX90J22yDfYY9Z9vtpZBJL.jpg"
          alt="Bug Card Image"
          height="100"
        />
        <div className="card-body">
          <h5 className="card-title">{bug.title}</h5>
          <Link to={`/bugs/${bug.id}`} className="btn btn-primary">
            View Bug
          </Link>
        </div>
      </div>
    </div>
  ));
  const noBug = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No Bug yet. Why not <Link to="/bugs/new">create one</Link>
      </h4>
    </div>
  );
  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Bugs Record for every Seconds</h1>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-right mb-3">
            <Link to="/bugs/new" className="btn btn-success">
              Create New Bug
            </Link>
          </div>
          <div className="row">{bugsList.length > 0 ? allBugs : noBug}</div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
}
