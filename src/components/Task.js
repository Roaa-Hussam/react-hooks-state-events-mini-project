import React from "react";

function Task({ text, category, handleDeleteTask }) {

  function delteTask() {

    handleDeleteTask(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={delteTask}>X</button>
    </div>
  );
}

export default Task;