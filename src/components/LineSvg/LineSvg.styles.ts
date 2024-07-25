import styled from "styled-components";
import { Theme } from "../../types/interfaces";

export const StyledLineSvg = styled.svg<{
  theme: Theme;
  marginLeft?: string;
  marginRight?: string;
}>`
  margin-left: ${(props) => props.marginLeft ?? 0}rem;
  margin-right: ${(props) => props.marginRight ?? 0}rem;
`;

export const StyledLine = styled.line<{
  theme: Theme;
}>`
  fill: ${({ theme }) => theme.colors.offWhite};
  stroke: ${({ theme }) => theme.colors.offWhite};
  stroke-width: 4;
`;
