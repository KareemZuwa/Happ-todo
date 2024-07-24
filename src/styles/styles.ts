import styled from "styled-components";

/** WRAPPER CONTAINER STYLE */
export const Container = styled.div`
  background: #5d4692;
  background: linear-gradient(
    137deg,
    rgba(239, 136, 187, 1) 0%,
    rgba(41, 24, 80, 1) 100%
  );
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

/** LAYOUT STYLE */
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
