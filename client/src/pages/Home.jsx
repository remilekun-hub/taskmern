import React, { useState } from "react";
import Input from "../components/Input";

function Home() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="container">
      <Input />
    </div>
  );
}

export default Home;
