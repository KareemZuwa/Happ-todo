import { useState } from "react";
import { mockTodos } from "../assets/mock";
import { TodoListItem, TodoListView } from "../components/_index";
import { ItemBox, StyledMain } from "../styles/styles";
import { Todo } from "../types/interfaces";

export const Main = () => {
  const [todos] = useState<Todo[]>(mockTodos);
  return (
    <StyledMain>
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
