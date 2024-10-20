"use client";

import type { ReactNode } from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-size: 1rem;
  line-height: 2rem;

  text-align: justify;

  color: ${(props) => props.theme.descriptionColor};
`;

export default function Text({ children }: Readonly<{ children: ReactNode }>) {
  return <StyledText>{children}</StyledText>;
}
