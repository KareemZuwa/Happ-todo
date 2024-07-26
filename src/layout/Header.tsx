import { LineSvg } from "../components/LineSvg";
import { Logo } from "../components/Logo";
import { StyledHeader } from "../styles/styles";

export const Header = () => {
  return (
    <StyledHeader>
      <LineSvg />
      <Logo />
      <LineSvg />
    </StyledHeader>
  );
};
