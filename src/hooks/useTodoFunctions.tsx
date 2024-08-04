import { useState } from "react";
import { Todo } from "../types/interfaces";

// Define the hook
export const useTodoFunctions = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Tvätta lakan", completed: false },
    { id: "2", title: "Hämta cykeln", completed: false },
    { id: "3", title: "Ring facket", completed: false },
  ]);

  // Add a new todo
  const addTodo = (title: string) => {
    if (title.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Mark a todo as completed
  const markTodoAsCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit a todo
  const editTodo = (id: string, newTitle: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    markTodoAsCompleted,
    editTodo,
    deleteTodo,
  };
};
