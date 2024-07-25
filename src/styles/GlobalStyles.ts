import styled from "styled-components";
import { Theme } from "../types/interfaces";

/** WRAPPER CONTAINER STYLE COMPONENTS */
export const Container = styled.div<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.offWhite};
  background: #5d4692;
  background: ${({ theme }) => theme.background.gradient};
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  text-align: center;
  overflow-y: auto;
`;

/** LAYOUT STYLE COMPONENTS*/
export const StyledHeader = styled.header`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding-top: 4rem;
`;

export const StyledMain = styled.main`
  margin: 0 auto;
  max-width: 768px;
  flex-grow: 1;
  padding-top: 6rem;
  padding-bottom: 3rem;
`;

export const StyledFooter = styled.footer`
  flex-shrink: 0;
  padding-bottom: 3rem;
`;

