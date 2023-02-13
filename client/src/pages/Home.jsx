import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import { getTasks } from "../../util/getTasks";
import Task from "../components/Task";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getTasks().then((data) => setTasks(data));
    setLoading(false);
  }, [tasks]);

  return (
    <div className="container">
      <Input />
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
