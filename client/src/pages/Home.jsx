import React, { useState, useEffect } from "react";
import { getTasks } from "../../util/getTasks";
import Task from "../components/Task";
import axios from "axios";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getTasks().then((data) => setTasks(data));

    setLoading(false);
  }, [tasks]);

  return (
    <div className="container">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            if (!text) return;
            await axios.post("http://localhost:5000/api/v1/tasks", {
              description: text,
            });
            getTasks().then((data) => setTasks(data));
            setText("");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <textarea
          name="description"
          value={text}
          placeholder="Task...."
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input
          type="submit"
          value="Add Task"
          className="submit-btn"
          aria-label="submit button"
        />
      </form>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>Loading...</div>
      ) : (
        <div className="task-container">
          {tasks?.map((task) => (
            <Task key={task._id} {...task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
