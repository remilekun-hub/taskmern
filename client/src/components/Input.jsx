import React from "react";
import { useState } from "react";

function Input() {
  const [text, setText] = useState("");
  return (
    <div className="input-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setText("");
          console.log("submited");
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
