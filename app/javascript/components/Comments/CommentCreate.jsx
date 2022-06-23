// make a functional component for indexing the bugs

import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const initialValues = Object.freeze({
  bug_id: -1,
  description: "",
});

export default function CommentCreate(props) {
  const [newComment, setNewComment] = useState(initialValues);

  // form handlers
  const handleChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
      bug_id: props.bug_id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("newComment in submit: ", newComment);

    axios
      .post(`/api/v1/comments/create`, newComment)
      .then((response) => {
        if (response.status == 200) {
          // console.log("response: ", response);
          alert("Comment created successfully!");
        } else throw new Error("response was not found to be 200.");
      })
      .then((response) => {
        window.location = `http://localhost:3000/bugs/${newComment.bug_id}`;
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="CommentName">Add a Comment </label>
          <textarea
            type="text"
            name="description"
            id="CommentDescription"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="BugId"
            id="CommentBugID"
            className="form-control"
            value={newComment.bug_id}
            required
            readOnly
            hidden
          />
        </div>

        <button type="submit" className="btn btn-success mt-3">
          Create Comment
        </button>
      </form>
    </>
  );
}
