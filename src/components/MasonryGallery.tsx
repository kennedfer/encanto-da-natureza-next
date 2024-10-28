"use client";

import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

import imageNormal1 from "../../public/assets/images/gallery/gallery-normal1.webp";
import imageNormal2 from "../../public/assets/images/gallery/gallery-normal2.webp";
import imageNormal3 from "../../public/assets/images/gallery/gallery-normal3.webp";
import imageNormal4 from "../../public/assets/images/gallery/gallery-normal4.webp";

import imageWide1 from "../../public/assets/images/gallery/gallery-wide1.webp";
import imageWide2 from "../../public/assets/images/gallery/gallery-wide2.webp";
import imageWide3 from "../../public/assets/images/gallery/gallery-wide3.webp";

import imageSquare1 from "../../public/assets/images/gallery/gallery-square1.webp";
import imageSquare2 from "../../public/assets/images/gallery/gallery-square2.webp";

import imageTall1 from "../../public/assets/images/gallery/gallery-tall1.webp";
import imageTall2 from "../../public/assets/images/gallery/gallery-tall2.webp";
import imageTall3 from "../../public/assets/images/gallery/gallery-tall3.webp";
import texts from "@/texts/texts";

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  width: 100%;
`;

const MasonryGrid = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  height: 700px;
  flex-grow: 1;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    scrollbar-width: none;

    & > div {
      min-height: 250px;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); /* 1 coluna para celulares */
  }
`;

const MasonryItem = styled.div`
  border-radius: 5px;
  overflow: hidden;

  margin: 5px;

  transition: scale ${({ theme }) => theme.transitionTime};
  position: relative;

  &:hover {
    scale: 1.02;
    cursor: pointer;
  }

  &.mi-1 {
    grid-column: 1;
    grid-row: 1;
  }

  &.mi-2 {
    grid-column: 2;
    grid-row: 1;
  }

  &.mi-3 {
    grid-column: 1 / span 2;
    grid-row: 2;
  }

  &.mi-4 {
    grid-column: 5 / span 2;
    grid-row: 1;
  }

  &.mi-5 {
    grid-row: 2 / span 2;
    grid-column: 4;
  }

  &.mi-6 {
    grid-row: 3 / span 2;
    grid-column: 1;
  }
  &.mi-7 {
    grid-row: 3 / span 3;
    grid-column: 2 / span 2;
  }

  &.mi-8 {
    grid-row: 4;
    grid-column: 4 / span 2;
  }

  &.mi-8 {
    grid-row: 2 / span 2;
    grid-column: 5 / span 2;
  }
  &.mi-9 {
    grid-row: 4 / span 2;
    grid-column: 4 / span 2;
  }
  &.mi-10 {
    grid-row: 4;
    grid-column: 6;
  }
  &.mi-11 {
    grid-row: 1 / span 2;
    grid-column: 3;
  }
  &.mi-12 {
    grid-row: 1;
    grid-column: 4;
  }

  & .image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export default function MasonryGallery() {
  return (
    <Gallery>
      <SectionTitle>GALERIA</SectionTitle>
      <MasonryGrid>
        <MasonryItem className="mi-1">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageNormal1}
          />
        </MasonryItem>
        <MasonryItem className="mi-2">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageNormal2}
          />
        </MasonryItem>
        <MasonryItem className="mi-3">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageWide2}
          />
        </MasonryItem>
        <MasonryItem className="mi-4">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageWide1}
          />
        </MasonryItem>
        <MasonryItem className="mi-5">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageTall1}
          />
        </MasonryItem>
        <MasonryItem className="mi-6">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageTall2}
          />
        </MasonryItem>
        <MasonryItem className="mi-7">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageSquare1}
          />
        </MasonryItem>
        <MasonryItem className="mi-8">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageSquare2}
          />
        </MasonryItem>
        <MasonryItem className="mi-9">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageWide3}
          />
        </MasonryItem>
        <MasonryItem className="mi-10">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageNormal3}
          />
        </MasonryItem>
        <MasonryItem className="mi-11">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageTall3}
          />
        </MasonryItem>
        <MasonryItem className="mi-12">
          <Image
            className="image"
            alt={texts.gallerySection.imageAlt}
            src={imageNormal4}
          />
        </MasonryItem>
      </MasonryGrid>
    </Gallery>
  );
}
