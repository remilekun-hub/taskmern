import React, { useState, useEffect } from "react";
import { getTasks } from "../util/getTasks";
import Task from "../components/Task";
import axios from "axios";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getTasks().then((data) => setTasks(data));
  }, [tasks]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/tasks", {
        description: text,
      });
      setText("");
    } catch (error) {
      console.log(error);
    } finally {
      setText("");
    }
  };
  return (
    <div className="wrapper">
      <h1>Task Manager</h1>
      <form onSubmit={submitHandler} className="home-form">
        <div>
          <input
            type="text"
            aria-label="task input"
            placeholder="Task here..."
            className="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="submit"
            value="Add"
            aria-label="submit task"
            className="submit"
          />
        </div>
      </form>
      {tasks?.map((task) => (
        <Task key={task._id} {...task} />
      ))}
    </div>
  );
}

export default Home;
