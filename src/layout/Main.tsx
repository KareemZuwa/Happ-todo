import { FormEvent, useState } from "react";
import { mockTodos } from "../assets/mock";
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
  const [todos] = useState<Todo[]>(mockTodos);
  const [newTodo, setNewTodo] = useState<string>("");
  console.log(newTodo);

  //Submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
            <TodoListItem todo={todo} index={index} />
          </ItemBox>
        ))}
      </TodoListView>
    </StyledMain>
  );
};
