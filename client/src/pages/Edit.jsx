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
  useEffect(() => {
    getTask(id).then((data) => setTask(data));
  }, []);

  if (!task) return "error fetching data";
  return (
    <div className="container">
      <div className="edit">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await axios.patch(`http://localhost:5000/api/v1/tasks/${id}`, {
                description: text,
              });
              setText("");
              navigate("/");

              console.log("submitted");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <input
            type="text"
            defaultValue={task?.description}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="submit" value="Edit Task" />
        </form>
        <Link to="/">Go to Tasks</Link>
      </div>
    </div>
  );
}

export default Edit;
