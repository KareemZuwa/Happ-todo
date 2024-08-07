import { useState } from "react";
import { Todo } from "../types/interfaces";

export const useTodoFunctions = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

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
