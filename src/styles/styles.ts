import styled, { keyframes } from "styled-components";
import { theme } from "../styles/theme";

/** WRAPPER CONTAINER STYLE COMPONENTS */
export const Container = styled.div`
  color: ${theme.colors.offWhite};
  background: ${theme.colors.purpleLight};
  background: ${theme.background.gradient};
  height: 100vh;
  max-width: ${theme.breakpoints.lg};
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
  width: 100%;
  max-width: ${theme.breakpoints.md};
  flex-grow: 1;
  padding-top: 6rem;
  padding-bottom: 3rem;
`;

export const StyledFooter = styled.footer`
  flex-shrink: 0;
  padding-bottom: 3rem;
`;

export const DialogBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background: ${theme.colors.offWhite};
  padding: 1rem 1.25rem 3rem;
  border-radius: ${theme.borders.md};
  width: ${theme.breakpoints.xs};
`;

export const ItemBox = styled.article`
  background-color: rgba(234, 232, 238, 0.1);
  backdrop-filter: blur(1rem);
  border: 0.0625rem solid rgba(255, 255, 255, 0.15);
  border-radius: ${theme.borders.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 1.5rem;
  gap: 1.5rem;
`;

/*** TYPOGRAPHY STYLED COMPONENTS */
export const Title = styled.h1<{ fontWeight?: number }>`
  margin-block: 0;
  font-size: ${theme.fontSizes.large};
  color: ${({ color }) => color ?? theme.colors.offWhite};
  font-weight: ${({ fontWeight }) => fontWeight ?? theme.fontWeights.semibold};
`;
export const Subtitle = styled.h2<{ fontWeight?: number }>`
  margin-block: 0;
  font-size: ${theme.fontSizes.medium};
  color: ${({ color }) => color ?? theme.colors.offWhite};
  font-weight: ${({ fontWeight }) => fontWeight ?? theme.fontWeights.medium};
`;
export const Paragraph = styled.p<{ fontWeight?: number }>`
  margin-block: 0;
  font-size: ${theme.fontSizes.small};
  color: ${({ color }) => color ?? theme.colors.offWhite};
  font-weight: ${({ fontWeight }) => fontWeight ?? theme.fontWeights.regular};
`;

/** KEYFRAMES */
export const ping = keyframes`
0%
  {
    box-shadow: 0 0 0 0 rgba(255,255,255,.7), 0 0 0 0 rgba(255,255,255,.7);
  }
  40%
  {
    box-shadow: 0 0 0 8px rgba(255,255,255,0), 0 0 0 0 rgba(2255,255,255,.7);
  }
  80%
  {
    box-shadow: 0 0 0 8px rgba(255,255,255,0), 0 0 0 0 rgba(255,255,255,0);
  }
  100%
  {
    box-shadow: 0 0 0 0 rgba(255,255,255,0), 0 0 0 0 rgba(255,255,255,0);
  }
`;

export const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;
