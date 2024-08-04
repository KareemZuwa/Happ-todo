import styled from "styled-components";
import { FormProps } from "../types/interfaces";

const StyledForm = styled.form<{ $row?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.$row ? "row" : "column")};
  justify-content: space-between;
  align-items: ${(props) => !props.$row && "center"};
  gap: 2rem;
`;
export const Form = ({ children, onSubmit, row }: FormProps) => (
  <StyledForm onSubmit={onSubmit} $row={row}>
    {children}
  </StyledForm>
);
