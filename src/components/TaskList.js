import React from "react";
import Task from "./Task";


function TaskList({ tasks, setTasks, selectedCatagory }) {

  function handleDeleteTask(event) {
    let newTaskArray = tasks.filter((task) => task.text !== event)
    setTasks(newTaskArray)
  }

  return (
    <div className="tasks">
      {
        tasks.map((task, index) => {

          if (task.category === selectedCatagory || selectedCatagory === "All" || !selectedCatagory) {
            return (
              <Task
                key={index}
                text={task.text}
                category={task.category}
                handleDeleteTask={handleDeleteTask}
              />
            )
          }
        })
      }
    </div>
  );


}

export default TaskList;