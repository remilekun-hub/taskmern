import React from "react";
import { Link } from "react-router-dom";

function Task({ _id }) {
  return (
    <div>
      Task
      <Link to={`/edit/${_id}`}>g</Link>
    </div>
  );
}

export default Task;
