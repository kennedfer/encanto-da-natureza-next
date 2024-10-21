"use client";

import texts from "@/texts/texts";
import Link from "next/link";
import styled from "styled-components";

const StyledFooter = {
  Container: styled.footer`
    display: flex;
    flex-direction: column;

    text-align: center;

    font-size: smaller;

    scroll-snap-align: center;

    bottom: 0;
    padding: 5px;

    background-color: ${({ theme }) => theme.footerBackground};
    color: ${({ theme }) => theme.footerForeground};

    width: 100%;
  `,

  Links: styled.nav`
    display: flex;
    justify-content: center;
    gap: 10px;

    & > a {
      text-decoration: none;
      color: ${({ theme }) => theme.footerForeground};
    }
  `,
};

export default function Footer() {
  return (
    <StyledFooter.Container>
      <StyledFooter.Links>
        <Link href="#home">{texts.footer.links.home}</Link>
        <Link href="#cards">{texts.footer.links.cards}</Link>
        <Link href="#gallery">{texts.footer.links.gallery}</Link>
        <Link href="#about">{texts.footer.links.about}</Link>
        <Link href="#donation">{texts.footer.links.donation}</Link>
      </StyledFooter.Links>
      <div>
        <span>{texts.footer.address}</span>
      </div>
      <div>
        <span>{texts.footer.contact}</span>
      </div>
      <small>{texts.footer.copy}</small>
    </StyledFooter.Container>
  );
}
