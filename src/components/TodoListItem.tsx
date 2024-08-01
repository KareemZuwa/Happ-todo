import { useState } from "react";
import { Subtitle } from "../styles/styles";
import { Todo } from "../types/interfaces";
import { CheckboxIcon, DeleteIcon, EditIcon } from "./_index";
import styled from "styled-components";
export interface TodoListItemProps {
  todo: Todo;
  index: number;
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

export const TodoListItem = ({ todo, index }: TodoListItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleEdit = () => console.log("editing");

  const handleDelete = () => console.log("deleting");
  return (
    <>
      <Box>
        <Subtitle>{index + 1}.</Subtitle>
        <TodoItemSubtitle $isChecked={isChecked}>{todo.title}</TodoItemSubtitle>
      </Box>

      <Box>
        <CheckboxIcon isChecked={isChecked} onToggle={handleChecked} />
        {!isChecked && <EditIcon onEdit={handleEdit} />}
        <DeleteIcon onDelete={handleDelete} />
      </Box>
    </>
  );
};
