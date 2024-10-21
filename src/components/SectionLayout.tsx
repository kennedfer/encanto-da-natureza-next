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

  object-fit: fill;
  background-size: 20px;

  scroll-snap-align: center;

  gap: 50px;
  padding: 20px;

  max-width: 1300px;

  margin: 0 auto;

  height: 100vh;

  @media (max-aspect-ratio: 1) {
    padding: 100px;
    gap: 20px;

    & > img {
      margin-left: auto;
    }
  }

  @media (max-width: 480px) {
    gap: 0;
    flex-direction: column;
    padding: 20px;

    justify-content: center;

    overflow: scroll;

    & > img {
      display: none;
    }

    &.cards-container {
      visibility: hidden;
      padding: 0;
    }
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 700px;

  @media (max-aspect-ratio: 1) {
    & > .buttons-container {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 480px) {
    & > .buttons-container {
      display: flex;
      flex-direction: column;
    }
  }
`;

type SectionProps = {
  children: ReactNode;
  id: string;
  className?: string;
};
export default function SectionLayout({
  children,
  id,
  className,
}: Readonly<SectionProps>) {
  return (
    <Section id={id} className={montserrat.className && " " && className}>
      {children}
    </Section>
  );
}
