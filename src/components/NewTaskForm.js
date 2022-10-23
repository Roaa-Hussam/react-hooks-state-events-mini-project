import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [newTask, setNewTask] = useState('')
  const [newCatagory, setNewCatagory] = useState('Code')

  function submitData(event) {
    event.preventDefault()
    let newItem = {
      text: newTask,
      category: newCatagory,
    }
    onTaskFormSubmit(newItem)
  }

  function handleData(event) {
    setNewTask(event.target.value)
  }

  function handleCatagory(event) {
    setNewCatagory(event.target.value)
    console.log(event.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={submitData} >
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={handleData} />
      </label>

      <label>
        Category
        <select name="category" onChange={handleCatagory} value={newCatagory}>
          {/* render <option> elements for each category here */}
          {categories.map((option) => {
            if (option != "All") {
              return (<option key={option}>{option}</option>)
            }
          })}
        </select>

      </label>

      <input type="submit" value="Add task" />

    </form>
  );
}

export default NewTaskForm;