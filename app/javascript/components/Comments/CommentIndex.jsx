// make a functional component for indexing the bugs

import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CommentIndex(params) {
  const [CommentList, setCommentList] = useState([]);
    const {id} = useParams();

  useEffect(() => {
    axios
      .get(`/api/v1/comments/${id}`)
      .then((response) => {
        console.log("response Check for Comment: ", response )
        setCommentList(response.data);
      })
      .catch((error) => console.log(error));
  }, []); // second parameter defines condition of re-render (re-render from this value)
  {console.log("CommentList: ", CommentList);}
  const allComment = CommentList.map((c, index) => (
    <li className="list-item" >
      {c.description}
    </li>
  ));
  const noComment = (
    <ul className="list-group-item">
      <li> No Comment yet </li>
    </ul>
  );
  return (
    <div className="row">
        {CommentList.length > 0 ? allComment : noComment}
        </div>
  );
}
