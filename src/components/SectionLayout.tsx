"use client";

import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import styled from "styled-components";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});

const Section = styled.section`
  display: flex;
  align-items: center;

  position: relative;

  background-image: "../../public/assets/images/patterns/section-pattern.webp";
  object-fit: fill;
  background-size: 20px;

  scroll-snap-align: center;

  gap: 50px;
  padding: 20px;

  max-width: 1300px;

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

type SectionProps = {
  children: ReactNode;
  id: string;
};
export default function SectionLayout({
  children,
  id,
}: Readonly<SectionProps>) {
  return (
    <Section id={id} className={montserrat.className}>
      {children}
    </Section>
  );
}
