import React from "react";
import { useState } from "react";
import axios from "axios";

function Input() {
  const [text, setText] = useState("");
  return (
    <div className="input-container">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            if (!text) return;
            await axios.post("http://localhost:5000/api/v1/tasks", {
              description: text,
            });
            setText("");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <textarea
          name="description"
          value={text}
          placeholder="text here"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input type="submit" value="Add Task" className="submit-btn" />
      </form>
    </div>
  );
}

export default Input;
