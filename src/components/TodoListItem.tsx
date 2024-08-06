import { Subtitle, device } from "../styles/styles";
import { TodoListItemProps } from "../types/interfaces";
import { CheckboxIcon, DeleteIcon, EditIcon } from "./_index";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  gap: 1.5rem;
  place-self: flex-start;
  text-align: start;

  @media ${device.mobileL} {
    gap: 0.5rem;
  }
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
  markTodoAsCompleted,
  handleEditClick,
}: TodoListItemProps) => {
  const toggleTodoCompletion = () => {
    markTodoAsCompleted(todo.id);
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
      </Box>

      <Box>
        <CheckboxIcon
          isChecked={todo.completed}
          onToggle={toggleTodoCompletion}
        />
        {!todo.completed && (
          <EditIcon onEdit={() => handleEditClick(todo.id, todo.title)} />
        )}
        <DeleteIcon onDelete={handleDelete} />
      </Box>
    </>
  );
};
