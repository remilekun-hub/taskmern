import React from "react";
import { Link } from "react-router-dom";
import { deleteTask } from "../../util/deleteTask";

function Task({ _id, description, completed }) {
  return (
    <div className={`task ${completed ? "completed-task" : ""}`}>
      <p className={`${completed ? "completed" : ""}`}>{description}</p>

      <div className="innerdiv">
        <Link to={`/edit/${_id}`}>Edit</Link>

        <div onClick={() => deleteTask(_id)}>Delete</div>
      </div>
    </div>
  );
}

export default Task;
