"use client";

import styled from "styled-components";

const SectionTitle = styled.h1`
  font-size: 4.75rem;
  line-height: 5rem;
  font-weight: 900;

  color: ${({ theme }) => theme.titleColor};

  & span {
    display: block;
  }

  & .highlighted {
    font-size: 5rem;
  }
`;

export default SectionTitle;
