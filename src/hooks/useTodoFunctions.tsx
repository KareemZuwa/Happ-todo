import { useEffect, useState } from "react";
import { Todo } from "../types/interfaces";

export const useTodoFunctions = () => {
  const getTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? (JSON.parse(storedTodos) as Todo[]) : [];
  };

  const [todos, setTodos] = useState<Todo[]>(getTodosFromLocalStorage);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    if (title.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const markTodoAsCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: string, newTitle: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    newTodo,
    setNewTodo,
    addTodo,
    markTodoAsCompleted,
    editTodo,
    deleteTodo,
  };
};
