import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTask } from "../util/getTask";
import axios from "axios";

function Edit() {
  const [task, setTask] = useState({});
  const [text, setText] = useState("");
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getTask(id).then((data) => setTask(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await axios.patch(`http://localhost:5000/api/v1/tasks/${id}`, {
        description: text,
        completed: check,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="">
      <h1>Edit Task</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="heading">
          <h2>Task ID:</h2> <p>{id}</p>
        </div>
        <div className="form-col">
          <p>Task:</p>
          <input
            type="text"
            id="task"
            aria-label="edit text"
            className="text-input"
            defaultValue={task?.description}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-col">
          <p>Completed:</p>
          <input
            type="checkbox"
            id="task"
            name=""
            aria-label="edit text"
            className="checkbox"
            defaultChecked={task?.completed}
            onChange={(e) => setCheck(e.target.checked)}
          />
        </div>
        <div>{loading && "Loading......"}</div>
        <input
          type="submit"
          value="Edit Task"
          className="edit-btn"
          aria-label="edit task button"
        />
      </form>
      <Link to={"/"}>Go To Tasks</Link>
    </div>
  );
}

export default Edit;
