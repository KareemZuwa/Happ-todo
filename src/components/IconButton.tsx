import styled from "styled-components";

export interface IconButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  hoverStyle?: string;
}

const StyledIconButton = styled.button<{ $hoverStyle?: string }>`
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
    /* outline: none; Customize focus outline */
  }
`;

export const IconButton = ({
  onClick,
  children,
  hoverStyle,
}: IconButtonProps) => (
  <StyledIconButton onClick={onClick} $hoverStyle={hoverStyle}>
    {children}
  </StyledIconButton>
);
