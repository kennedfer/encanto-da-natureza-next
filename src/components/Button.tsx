"use client";

import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.primaryColor};
  box-shadow: 0 0 30px ${({ theme }) => theme.primaryColor};

  transition: box-shadow ${({ theme }) => theme.transitionTime},
    scale ${({ theme }) => theme.transitionTime};

  padding: 15px 35px;
  border: none;
  border-radius: 30px;
  font-weight: 700;

  &:active {
    box-shadow: 0 0 30px ${({ theme }) => theme.primaryColor};
    scale: 1;
  }

  &:hover {
    box-shadow: 0 0 50px ${({ theme }) => theme.primaryColor};
    scale: 1.05;
    cursor: pointer;
  }

  &.ghost {
    background-color: transparent;
    box-shadow: none;

    color: ${({ theme }) => theme.primaryColor};
  }

  @media (max-aspect-ratio: 1) {
    width: 100%;
  }
`;

export default Button;
