import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      // Create a new todo object with all required properties
      const newTodo = {
        id: Date.now(), // Generate unique ID
        content: inputValue.trim(),
        checked: false,
      };
      onAddTodo(newTodo);
      setInputValue("");
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
            placeholder="Enter your task"
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};
