import styled from "styled-components";
import { Theme } from "../types/interfaces";

const StyledLineSvg = styled.svg`
  padding-top: 1.5rem;
`;

const StyledLine = styled.line<{ theme: Theme }>`
  fill: ${({ theme }) => theme.colors.offWhite};
  stroke: ${({ theme }) => theme.colors.offWhite};
  stroke-width: 4;
`;

export const LineSvg = () => (
  <StyledLineSvg width="100%" height="20" xmlns="http://www.w3.org/2000/svg">
    <StyledLine x1="0" y1="10" x2="100%" y2="10" />
  </StyledLineSvg>
);
