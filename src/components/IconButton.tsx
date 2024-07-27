import styled from "styled-components";
import { IconButtonProps } from "../types/interfaces";

const StyledIconButton = styled.button<{
  $hoverStyle?: string;
  $focusStyle?: string;
}>`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  color: inherit;
  cursor: pointer;
  place-self: end;

  &:hover {
    ${(props) => props.$hoverStyle}
  }

  &:focus {
    ${(props) => props.$focusStyle}
  }
`;

export const IconButton = ({
  onClick,
  children,
  hoverStyle,
  focusStyle,
}: IconButtonProps) => (
  <StyledIconButton
    onClick={onClick}
    $hoverStyle={hoverStyle}
    $focusStyle={focusStyle}
  >
    {children}
  </StyledIconButton>
);
