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

/*** TYPOGRAPHY STYLED COMPONENTS */

export const Title = styled.h1<{ theme: Theme; fontWeight?: string }>`
  font-size: 1.25rem;
  color: ${({ color, theme }) => color ?? theme.colors.offWhite};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ?? theme.fontWeights.semibold};
`;
export const Subtitle = styled.h1<{ theme: Theme; fontWeight?: string }>`
  font-size: 1rem;
  color: ${({ color, theme }) => color ?? theme.colors.offWhite};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ?? theme.fontWeights.medium};
`;

export const Paragraph = styled.p<{ theme: Theme; fontWeight?: string }>`
  font-size: 0.75rem;
  color: ${({ color, theme }) => color ?? theme.colors.offWhite};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight ?? theme.fontWeights.regular};
`;
