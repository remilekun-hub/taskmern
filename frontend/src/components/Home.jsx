import React, { useState, useEffect } from "react";
import { getTasks } from "../util/getTasks";
import Task from "./Task";
import axios from "axios";

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((data) => setTasks(data));
    console.log({ tasks });
  }, []);

  return (
    <div className="wrapper">
      <h1>Task Manager</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="home-form"
      >
        <div>
          <input
            type="text"
            aria-label="task input"
            placeholder="Task here..."
            className="text-input"
          />
          <input
            type="submit"
            value="Add task"
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
