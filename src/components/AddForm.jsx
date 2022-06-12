import React, { useState } from "react";
import _ from "lodash";

export const AddForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  // const [inputError, setInputError] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodoItem = {
      todo: inputValue,
      id: _.uniqueId(),
      completed: false,
    };
    props.onSubmit(newTodoItem);
    setInputValue("");
    console.log("new todo item", newTodoItem);
  };


  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="add-form-input-wrapper">
        <label className="add-form-label" htmlFor="add-form-input">
          Add todo:
        </label>
        <input
          id="add-form-input"
          className="add-form-input"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />

        <input className="add-form-button" type="submit" value="+" />
      </div>
      {/* <div className="add-form-error">{inputError}</div> */}
    </form>
  );
};
