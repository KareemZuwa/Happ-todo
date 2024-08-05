import styled from "styled-components";
import { InputFieldProps } from "../types/interfaces";
import { theme } from "../styles/theme";
import { device } from "../styles/styles";

const StyledInputField = styled.input<{ mode: string }>`
  width: ${({ mode }) => mode === "dark" && "100%"};
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
        mode === "dark" ? theme.colors.offWhite : theme.colors.darkGrey};
  }

  @media ${device.mobileL} {
    width: auto;
    margin: 0rem .3rem;
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
