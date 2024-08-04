import styled from "styled-components";
import { ReactNode } from "react";

export interface TodoListViewProps {
  children: ReactNode;
}

const TodoListViewBox = styled.section``;

const TodoListUL = styled.ul`
  padding-inline-start: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const TodoListView = ({ children }: TodoListViewProps) => (
  <TodoListViewBox>
    <TodoListUL>{children}</TodoListUL>
  </TodoListViewBox>
);
