import styled from "styled-components";
import { InputFieldProps } from "../types/interfaces";
import { theme } from "../styles/theme";

const StyledInputField = styled.input<{ mode: string }>`
  color: ${({ mode }) =>
    mode === "dark" ? theme.colors.offWhite : theme.colors.darkGrey};
  margin: ${({ mode }) => mode === "light" && "0rem .3rem"};
  font-size: ${theme.fontSizes.medium};
  background: none;
  padding: 0.5rem;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid
    ${({ mode }) =>
      mode === "dark" ? theme.colors.lightGrey : theme.colors.darkGrey};

  &::placeholder {
    color: ${({ mode }) =>
      mode === "dark" ? theme.colors.lightGrey : theme.colors.middleGrey};
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid
      ${({ mode }) =>
        mode === "dark" ? theme.colors.lightGrey : theme.colors.darkGrey};
  }
`;

export const InputField = ({
  placeholder,
  value,
  mode,
  onInputChange,
}: InputFieldProps) => (
  <StyledInputField
    type="text"
    autoComplete="off"
    name="todo-item"
    id="todo-item"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onInputChange(e.target.value)}
    mode={mode}
  />
);
