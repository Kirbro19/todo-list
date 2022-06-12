import React, { useState } from "react";
import { AddForm } from "./components/AddForm";
import { TodoList } from "./components/TodoList";

export const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleFormSubmit = (newTodoItem) => {
    setTodoItems([newTodoItem, ...todoItems]);
  };

  const handleTodoToggle = ({ id, isCompleted }) => {
    const index = todoItems.findIndex((item) => item.id === id);
    let newTodoItems = [...todoItems];
    newTodoItems[index].completed = isCompleted;
    setTodoItems(newTodoItems);
  };

  console.log("todoItems:", todoItems);

  return (
    <div className="app">
      <h1 className="app-title">To-do list</h1>
      <AddForm onSubmit={handleFormSubmit} />
      <TodoList todoItems={todoItems} onTodoToggle={handleTodoToggle} />
    </div>
  );
};
