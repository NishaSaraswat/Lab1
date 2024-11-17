import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { DtaeTime } from "./DateTime";
import { TodoList } from "./TaskList";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const {id, content, checked} = inputValue;

    if (!content) {
      return alert("No task is entered! Please write your todo to add a task!");
    }
    const taskMatched = tasks.find((task) => task.content === content);

    if (taskMatched) {
      return alert("This Task is already added! Please enter another task!");
    }

    setTasks((prevTask) => [...prevTask, {id, content, checked}]);
  };
  // Delete task
  const handleDeleteTask = (value) => {
    const updatedTask = tasks.filter((task) => task.content !== value);
    setTasks(updatedTask);
  };

  const handleCompletedtask = (content) =>{
    const doneTask = tasks.map((task)=>{
        if(task.content === content ){
            return {...task, checked:!task.checked}
        }else{
            return task;
        }
    });
    setTasks(doneTask);
  }

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
          {tasks.map((task) => {
            return (
              <TodoList
                key={task.id}
                task={task.content}
                checked={task.checked}
                onHandleDeleteTask={handleDeleteTask}
                onHandleCheckTask ={handleCompletedtask}
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
