"use client";

import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styled from "styled-components";

import bookIcon from "/public/assets/images/card-icons/book.svg";
import calendarIcon from "/public/assets/images/card-icons/calendar.svg";
import peoplesIcon from "/public/assets/images/card-icons/peoples.svg";

type CardIconsProps = { [key: string]: StaticImport };

const CardIcons: CardIconsProps = {
  book: bookIcon,
  calendar: calendarIcon,
  peoples: peoplesIcon,
};

const Card = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    user-select: none;

    flex-grow: 1;

    aspect-ratio: 1;
    width: 100px;

    background-color: ${({ theme }) => theme.cardBackground};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.125);

    padding: 30px;
    gap: 5px;

    border-radius: 10px;
    transition: box-shadow ${({ theme }) => theme.transitionTime},
      scale ${({ theme }) => theme.transitionTime};

    &:hover {
      cursor: pointer;
      scale: 1.05;
      box-shadow: 0 10px 50px rgba(0, 0, 0, 0.25);
    }
  `,

  Title: styled.span`
    display: block;
    font-weight: bolder;
    color: ${({ theme }) => theme.titleColor};
  `,

  Description: styled.p`
    text-align: center;
    color: ${({ theme }) => theme.descriptionColor};
  `,

  Icon: styled.div`
    display: grid;
    place-items: center;

    aspect-ratio: 1;

    padding: 10px;
    background-color: ${({ theme }) => theme.cardIconBackground};

    border-radius: 5px;
  `,
};

type InfosProps = {
  title: string;
  description: string;
  name: string;
  altText: string;
};

type InfoCardProps = {
  infos: InfosProps;
};

export const CardContainer = styled.div`
  display: flex;
  width: 100%;

  gap: 50px;

  @media (max-aspect-ratio: 1) {
    flex-direction: column;
    overflow: scroll;
    padding: 150px;

    height: 100vh;

    gap: 50px;
    scrollbar-width: none;

    font-size: smaller;

    & > div {
      width: auto;
      aspect-ratio: 1;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      visibility: visible;
      padding: 80px;
      gap: 20px;
    }
  }
`;

export default function InfoCard({ infos }: Readonly<InfoCardProps>) {
  return (
    <Card.Container>
      <Card.Icon>
        <Image alt={infos.altText} src={CardIcons[infos.name]} width={30} />
      </Card.Icon>
      <Card.Title>{infos.title}</Card.Title>
      <Card.Description>{infos.description}</Card.Description>
    </Card.Container>
  );
}
