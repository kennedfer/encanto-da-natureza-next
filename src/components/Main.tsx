"use client";

import styled from "styled-components";

const Main = styled.main`
  background: ${({ theme }) => theme.background};
  max-height: 100vh;
  overflow-y: auto;

  /* SCROLL OPTIONS */
  scroll-snap-type: y mandatory;
  scrollbar-width: thin;

  --scroll-behavior: smooth !important;
  scroll-behavior: smooth !important;

  @media (prefers-reduced-motion: reduce) {
    & {
      scroll-behavior: auto;
    }
  }
`;

export default Main;
