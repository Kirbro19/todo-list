import React from "react";

export const ToDoItem = (props) => {
  const handleChange = (e) => {
    const isCompleted = e.target.checked;
    props.onToggle(isCompleted);
  };

  return (
    <div className="todo-item">
      <div className="todo-wrapper">
        <li
          style={{ textDecoration: props.completed ? "line-through" : "none" }}
        >
          {props.todo}
        </li>
      </div>
      <div>
        <input
          type="checkbox"
          checked={props.completed}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
