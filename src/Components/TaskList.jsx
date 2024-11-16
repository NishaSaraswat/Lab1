import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ index, task, onHandleDeleteTask }) => {
  return (
    <li key={index} className="todo-item">
      <span>{task}</span>
      <button className="check-btn">
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTask(task)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
