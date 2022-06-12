import React from "react";
import { ToDoItem } from "./TodoItem";

export const TodoList = (props) => {

  const handleTodoToggle = (id) => (isCompleted) => {
    console.log("isCompleted:", isCompleted);
    props.onTodoToggle({ id, isCompleted });
  };

  const { todoItems } = props;
  const activeTasks = todoItems.filter((task) => task.completed === false);
  const completedTasks = todoItems.filter((task) => task.completed === true);
  const finalTasks = [...activeTasks, ...completedTasks].map((item) => {
    return (
      <ToDoItem
        key={item.id}
        todo={item.todo}
        completed={item.completed}
        onToggle={handleTodoToggle(item.id)}
      />
    );
  });

  return (
    <div className="todo-list">
      <h1 className="todo-list-title">Task list</h1>
      <ol className="todo-list-ol">{finalTasks}</ol>
    </div>
  );
};
