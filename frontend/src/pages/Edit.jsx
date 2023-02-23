import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTask } from "../util/getTask";
import axios from "axios";

function Edit() {
  const [task, setTask] = useState({});
  const [text, setText] = useState("");
  const [check, setCheck] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getTask(id).then((data) => setTask(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:5000/api/v1/tasks/${id}`, {
        description: text,
        completed: check,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="edit">
      <form onSubmit={handleSubmit} className="form-edit">
        {id}
        <div className="form-col">
          <p>Task:</p>
          <input
            type="text"
            id="task"
            name=""
            aria-label="edit text"
            className="text-input"
            defaultValue={task?.description}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-col">
          <label htmlFor="task">Completed:</label>
          <input
            type="checkbox"
            id="task"
            name=""
            aria-label="edit text"
            className=""
            defaultChecked={task?.completed}
            onChange={(e) => setCheck(e.target.checked)}
          />
        </div>
        <input
          type="submit"
          value="Edit Task"
          className="edit-btn"
          aria-label="edit task button"
        />
      </form>
      <Link to={"/"}>Tasks</Link>
    </div>
  );
}

export default Edit;
