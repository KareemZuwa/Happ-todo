import { useState } from "react";
import { Subtitle } from "../styles/styles";
import { Todo } from "../types/interfaces";
import { CheckboxIcon, DeleteIcon, EditIcon } from "./_index";
import styled from "styled-components";
export interface TodoListItemProps {
  todo: Todo;
  index: number;
  deleteTodo: (id: string) => void;
  markTodoAsDone: (id: string) => void;
}

const Box = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const TodoItemSubtitle = styled(Subtitle)<{ $isChecked: boolean }>`
  ${(props) =>
    props.$isChecked &&
    `text-decoration: line-through;
  color: #ffffff53; `}
`;

export const TodoListItem = ({
  todo,
  index,
  deleteTodo,
  markTodoAsDone,
}: TodoListItemProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleChecked = () => {
    markTodoAsDone(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  return (
    <>
      <Box>
        <Subtitle>{index + 1}.</Subtitle>
        <TodoItemSubtitle $isChecked={todo.completed}>
          {todo.title}
        </TodoItemSubtitle>
        {openDialog && <div>{todo.id && todo.title}</div>}
      </Box>

      <Box>
        <CheckboxIcon isChecked={todo.completed} onToggle={handleChecked} />
        {!todo.completed && (
          <EditIcon onEdit={() => setOpenDialog(!openDialog)} />
        )}
        <DeleteIcon onDelete={handleDelete} />
      </Box>
    </>
  );
};
