import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        padding: "10px",
      }}
    >
      <span style={{ marginRight: "16px" }}>{todo.todo}</span>
      <button style={{ marginRight: "16px" }} onClick={handleToggle}>
        {todo.completed ? "Mark Incomplete" : "Mark Complete"}
      </button>
      <button style={{ marginRight: "16px" }} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
