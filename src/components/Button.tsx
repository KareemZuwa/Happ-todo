import styled from "styled-components";
import { theme } from "../styles/theme";
import { ButtonProps } from "../types/interfaces";

const StyledButton = styled.button<{
  mode: string;
}>`
  white-space: nowrap;
  padding: 0rem 5rem;
  height: 2.75rem;
  cursor: pointer;
  border-style: hidden;
  border-radius: ${theme.borders.md};
  box-shadow: ${theme.shadows.shade1};
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${theme.fontSizes.medium};
  color: ${({ mode }) =>
    mode === "add" ? theme.colors.purpleLight : theme.colors.offWhite};
  background-color: ${({ mode }) =>
    mode === "add" ? theme.colors.offWhite : theme.colors.mainGreen};
  &:hover {
    color: ${({ mode }) => mode === "add" && theme.colors.offWhite};
    background-color: ${({ mode }) =>
      mode === "add" ? theme.colors.purpleLight : theme.colors.darkGreen};
  }
`;

export const Button = ({ title, onClick, type, mode }: ButtonProps) => (
  <StyledButton type={type} onClick={onClick} mode={mode}>
    {title}
  </StyledButton>
);
