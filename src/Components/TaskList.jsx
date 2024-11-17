import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({task, checked, onHandleDeleteTask, onHandleCheckTask }) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{task}</span>
      <button className="check-btn" onClick={() => onHandleCheckTask(task)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTask(task)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
