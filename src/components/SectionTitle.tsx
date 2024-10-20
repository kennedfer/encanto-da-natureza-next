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

  @media (max-aspect-ratio: 1) {
    font-size: 2.3rem;
    line-height: 2.5rem;

    .highlighted {
      font-size: inherit;
    }
  }

  @media (max-width: 480px) {
    text-align: center;
    font-size: 2.25rem;
    line-height: normal;

    .highlighted {
      font-size: inherit;
    }
  }
`;

export default SectionTitle;
