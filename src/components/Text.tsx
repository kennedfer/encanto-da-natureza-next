"use client";

import type { ReactNode } from "react";
import styled from "styled-components";

const StyledText = styled.p`
  font-size: 1rem;
  line-height: 2rem;
  color: #9c9c9c;
`;

export default function Text({ children }: Readonly<{ children: ReactNode }>) {
  return <StyledText>{children}</StyledText>;
}
