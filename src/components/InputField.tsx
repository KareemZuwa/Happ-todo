import styled from "styled-components";
import { theme } from "../styles/theme";

interface InputFieldProps {
  value: string;
  onInputChange: (value: string) => void;
  placeholder?: string;
  mode: "dark" | "light";
}

const StyledInputField = styled.input<{ mode: string }>`
  color: ${({ mode }) =>
    mode === "dark" ? theme.colors.offWhite : theme.colors.darkGrey};
  font-size: ${theme.fontSizes.medium};
  background: none;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid
    ${({ mode }) =>
      mode === "dark" ? theme.colors.lightGrey : theme.colors.darkGrey};
  padding: 0.5rem;
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
