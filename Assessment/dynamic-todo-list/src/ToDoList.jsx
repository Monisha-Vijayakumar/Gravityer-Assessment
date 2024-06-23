import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleTodo={() => toggleTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
