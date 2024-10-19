"use client";

import Image from "next/image";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.span`
  aicalica
`;

export default function InfoCard() {
  return (
    <CardContainer>
      <Image src="https://encantodanatureza.onrender.com/assets/icons/calendar.svg" />
    </CardContainer>
  );
}
