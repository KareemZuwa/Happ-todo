import { LineSvg } from "../components/LineSvg/LineSvg";
import { StyledHeader } from "../styles/GlobalStyles";

export const Header = () => {
  return (
    <StyledHeader>
      <LineSvg marginRight={"3.5"} />
      <div>Header</div>
      <LineSvg marginLeft={"3.5"} />
    </StyledHeader>
  );
};
