import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getTask } from "../../util/getTask";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    getTask(id).then((data) => setTask(data));
  }, []);

  if (!task) return "error fetching data";
  return (
    <div className="container">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await axios.patch(`http://localhost:5000/api/v1/tasks/${id}`, {
              description: text,
              completed: check,
            });
            setText("");
            navigate("/");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <textarea
          type="text"
          defaultValue={task?.description}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div>
          <label htmlFor="completed">Complete: </label>
          <input
            name="completed"
            type="checkbox"
            defaultChecked={task?.completed}
            aria-label="completed"
            onChange={(e) => setCheck(e.target.checked)}
          />
        </div>

        <input
          type="submit"
          id="complete"
          value="Edit Task"
          aria-label="submit button"
          className="edit"
        />

        <Link to="/" className="go">
          Go to Tasks
        </Link>
      </form>
    </div>
  );
}

export default Edit;
