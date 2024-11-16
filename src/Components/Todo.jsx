import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { DtaeTime } from "./DateTime";
import { TodoList } from "./TaskList";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) {
      return alert("No task is entered! Please write your todo to add a task!");
    }

    if (tasks.includes(inputValue)) {
      return alert("This Task is already added! Please enter another task!");
    }

    setTasks((prevTask) => [...prevTask, inputValue]);
  };
  // Delete task
  const handleDeleteTask = (value) => {
    const updatedTask = tasks.filter((task) => task !== value);
    setTasks(updatedTask);
  };

  // Handle clear all tasks
  const handleClearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="todo-container">
      <header>
        <h1>To Do List</h1>
        <DtaeTime />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />

      <div className="myUnOrdList">
        <ul>
          {tasks.map((task, index) => {
            return (
              <TodoList
                key={index}
                task={task}
                onHandleDeleteTask={handleDeleteTask}
              />
            );
          })}
        </ul>
      </div>
      <div>
        <button className="clear-btn" onClick={handleClearAllTasks}>
          Clear all
        </button>
      </div>
    </div>
  );
};
