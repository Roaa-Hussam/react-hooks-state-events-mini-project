import React, { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {

  const [tasks, setTasks] = useState(TASKS)

  const [selectedCatagory, setSelectedCatagory] = useState('All')

  function handleCatagory(event) {
    setSelectedCatagory(event)
  }

  function onTaskFormSubmit(newItem) {
    setTasks([...tasks, newItem])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCatagory={selectedCatagory} handleCatagory={handleCatagory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} setTasks={setTasks} selectedCatagory={selectedCatagory} />
    </div>
  );
}

export default App;