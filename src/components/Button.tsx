"use client";

import styled from "styled-components";

const Button = styled.button`
  color: #fff;
  background-color: #52a5a5;
  box-shadow: 0 0 30px #52a5a5;
  transition: 0.25s;

  padding: 15px 35px;
  border: none;
  border-radius: 30px;
  font-weight: 700;

  &.ghost {
    background-color: transparent;
    box-shadow: none;

    color: #52a5a5;
  }
`;

export default Button;
