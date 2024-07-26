import styled from "styled-components";
import logo from "../assets/svgs/Vectorlogo.svg";
import { Theme } from "../types/interfaces";

const LogoImage = styled.img<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.offWhite};
  width: 220px;
  height: auto;
  margin: 0 3.5rem;
`;

export const Logo = () => <LogoImage src={logo} alt="Logo" />;
