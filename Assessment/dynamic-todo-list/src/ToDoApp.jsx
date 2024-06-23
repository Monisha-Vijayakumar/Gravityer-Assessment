import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import FilterToDo from "./FilterToDo";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  // Fetching the To-Do list data from API endpoint for user 105 - on component mounting
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(null);
      try {
        const response = await fetch("https://dummyjson.com/todos/user/105");
        if (!response.ok) {
          throw new Error("Error while fetching the data");
        }
        const data = await response.json();
        setTodos(data.todos);
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // saving the tasks to local storage on initial load and on changes of adding task and updating it.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // add a new task
  const addTodo = (text) => {
    const postData = async () => {
      setIsLoading(true);
      setIsError(null);
      try {
        const response = await fetch("https://dummyjson.com/todos/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            todo: text,
            completed: false,
            userId: 105, // Adding task to user 105
          }),
        });
        if (!response.ok) {
          throw new Error("Error while posting the data");
        }
        const data = await response.json();
        setTodos([...todos, data]); // concatenating the new data with the existing todo list
        setIsLoading(false);
      } catch (error) {
        setIsError(error.message);
        setIsLoading(false);
      }
    };
    postData();
  };

  // to mark the task as complete or not completed
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // delete task
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // filter tasks
  const filteredTodos =
    todos.length > 0 &&
    todos.filter((todo) => {
      if (filter === "all") return true;
      return filter === "completed" ? todo.completed : !todo.completed;
    });

  // updating the filter value
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="App">
      <h1>Dynamic To-Do List</h1>
      {isLoading && <p>Loading To-Do's...</p>}
      {isError && <p>Error: {isError}</p>}
      {!isLoading && !isError && todos.length > 0 && (
        <>
          <FilterToDo filter={filter} onFilterChange={handleFilterChange} />
          <ToDoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </>
      )}
      {todos.length === 0 && !isLoading && (
        <p>No ToDo's found. Please add a ToDo task</p>
      )}
      <AddToDo addTodo={addTodo} />
    </div>
  );
};

export default ToDoApp;
