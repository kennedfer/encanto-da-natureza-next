"use client";

import styled from "styled-components";

import arrowIcon from "../../public/assets/images/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";

const IndicatorContainer = styled.div`
  position: absolute;

  translate: -50%;

  bottom: 20px;
  left: 50%;

  &.up {
    transform: scaleY(-1);
  }
`;

export default function ScrollIndicator({
  up,
  targetId,
}: Readonly<{ up?: boolean; targetId: string }>) {
  return (
    <IndicatorContainer className={up ? "up" : ""}>
      <Link href={"#" + targetId}>
        <Image alt="icone de seta para baixo" width={25} src={arrowIcon} />
      </Link>
    </IndicatorContainer>
  );
}
