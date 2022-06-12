import React from "react";

export const ToDoItem = (props) => {
  const handleChange = (e) => {
    const isCompleted = e.target.checked;
    props.onToggle(isCompleted);
  };

  return (
    <div className="todo-item">
      <div className="todo--item-wrapper">
        <li
          style={{ textDecoration: props.completed ? "line-through" : "none" }}
        >
          {props.todo}
        </li>
      </div>
      <div>
        <input
          className="todo-item-checkbox"
          type="checkbox"
          checked={props.completed}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
