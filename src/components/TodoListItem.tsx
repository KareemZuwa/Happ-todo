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
        <Subtitle>{todo.title}</Subtitle>
      </Box>

      <Box>
        <CheckboxIcon isChecked={isChecked} onToggle={handleChecked} />
        <EditIcon onEdit={handleEdit} />
        <DeleteIcon onDelete={handleDelete} />
      </Box>
    </>
  );
};
