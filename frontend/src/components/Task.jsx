import React from "react";
import { Link } from "react-router-dom";

function Task({ description, _id }) {
  return (
    <div className="task">
      <div></div>
      <p>{description}</p>
      <div>
        <Link to={`/edit/${_id}`}>Edit</Link>
      </div>
    </div>
  );
}

export default Task;
