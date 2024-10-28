"use client";

import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import styled from "styled-components";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});

const StyledMain = styled.main`
  background: ${({ theme }) => theme.background};
  max-height: 100vh;
  overflow-y: auto;

  background-image: url("/assets/images/patterns/section-pattern.webp");
  background-size: 175px;
  background-blend-mode: multiply;

  /* SCROLL OPTIONS */
  scroll-snap-type: y mandatory;
  scrollbar-width: thin;

  scroll-behavior: smooth !important;

  transition: scroll-behavior 200s ease;
`;

export default function Main({ children }: Readonly<{ children: ReactNode }>) {
  return <StyledMain className={montserrat.className}>{children}</StyledMain>;
}
