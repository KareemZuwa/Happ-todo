import styled from "styled-components";
import { ReactNode } from "react";

export interface TodoListViewProps {
  children: ReactNode;
}

const TodoListViewBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const TodoListView = ({ children }: TodoListViewProps) => (
  <TodoListViewBox>{children}</TodoListViewBox>
);
