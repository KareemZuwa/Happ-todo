import { FormEventHandler, ReactNode } from "react";
import styled from "styled-components";

export interface FormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  row?: boolean;
}

const StyledForm = styled.form<{ $row?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.$row ? "row" : "column")};
  justify-content: space-between;
  align-items: ${(props) => (!props.$row && "center")};
  gap: 2rem;
`;
export const Form = ({ children, onSubmit, row }: FormProps) => (
  <StyledForm onSubmit={onSubmit} $row={row}>
    {children}
  </StyledForm>
);
