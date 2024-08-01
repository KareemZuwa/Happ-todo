import { FormEvent, useState } from "react";
import {
  AddFormView,
  Button,
  Form,
  InputField,
  TodoListItem,
  TodoListView,
} from "../components/_index";
import { ItemBox, StyledMain } from "../styles/styles";
import { Todo } from "../types/interfaces";

export const Main = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  console.log(todos);

  /*******************************FUNCTIONALITY */
  //ADD TODO
  const addTodo = (title: string) => {
    if (title.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  //MARK AS DONE
  const markTodoAsDone = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //EDIT TODO---- fix edit diaalog later
  // const editTodo = (id: string, newTitle: string) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, title: newTitle } : todo
  //     )
  //   );
  // };

  //DELETE TODO
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /*******************************FUNCTIONALITY */

  //Submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
    // Process form data and store it in localStorage or context
    // setFormData(event.target);
  };
  return (
    <StyledMain>
      <AddFormView>
        <Form onSubmit={handleSubmit} row>
          <InputField
            value={newTodo}
            onInputChange={setNewTodo}
            mode={"dark"}
            placeholder={"Add a task"}
          />
          <Button type={"submit"} title={"Add Task"} mode={"add"} />
        </Form>
      </AddFormView>
      <TodoListView>
        {todos.map((todo, index: number) => (
          <ItemBox key={todo.id}>
            <TodoListItem
              todo={todo}
              index={index}
              deleteTodo={deleteTodo}
              markTodoAsDone={markTodoAsDone}
            />
          </ItemBox>
        ))}
      </TodoListView>
    </StyledMain>
  );
};
