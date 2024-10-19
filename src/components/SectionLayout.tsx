"use client";

import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import styled from "styled-components";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});

type SectionProps = {
  children: ReactNode;
};

const Section = styled.section`
  display: flex;
  align-items: center;

  gap: 20px;
  padding: 20px;

  background-color: #fff;

  max-width: 1200px;
  margin: 0 auto;

  height: 100vh;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 700px;
`;

export default function SectionLayout({ children }: Readonly<SectionProps>) {
  return <Section className={montserrat.className}>{children}</Section>;
}
