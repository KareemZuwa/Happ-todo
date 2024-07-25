import { LineSvgProps } from "../../types/interfaces";
import { StyledLine, StyledLineSvg } from "./LineSvg.styles";

export const LineSvg = ({ marginLeft, marginRight }: LineSvgProps) => (
  <StyledLineSvg
    width="100%"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    marginLeft={marginLeft}
    marginRight={marginRight}
  >
    <StyledLine x1="0" y1="10" x2="100%" y2="10" />
  </StyledLineSvg>
);
