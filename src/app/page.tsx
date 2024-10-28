import "../styles/global.css";
import Image from "next/image";

import logoImage from "../../public/assets/images/sections/logo-encanto-da-natureza.webp";
import dancerImage from "../../public/assets/images/sections/ricardo-encantodanatureza.webp";
import qrcodeImage from "../../public/assets/images/sections/qrcode.png";

import SectionTitle from "@/components/SectionTitle";
import SectionLayout, { SectionContent } from "@/components/SectionLayout";
import Text from "@/components/Text";
import Button from "@/components/Button";
import InfoCard, { CardContainer } from "@/components/InfoCard";
import texts from "@/texts/texts";
import Main from "@/components/Main";
import ScrollIndicator from "@/components/ScrollIndicator";
import MasonryGallery from "@/components/MasonryGallery";
import Link from "next/link";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: texts.headTags.title,
    description: texts.headTags.description,
    url: "https://encantodanatureza.site",
    siteName: texts.headTags.title,
    images: [
      {
        url: "https://encantodanatureza.site/assets/images/preview/open-graph-preview.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function Home() {
  return (
    <Main>
      <SectionLayout id="home">
        <SectionContent>
          <SectionTitle>
            <span>{texts.homeSection.firstTitle}</span>
            <span className="highlighted">{texts.homeSection.lastTitle}</span>
          </SectionTitle>
          <Text>{texts.homeSection.description}</Text>
          <div className="buttons-container">
            <Link href="#about">
              <Button>{texts.homeSection.seeAbout}</Button>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/encanto_da_naturezaofc/"
            >
              <Button className="ghost">
                {texts.homeSection.seeOurVideos}
              </Button>
            </Link>
          </div>
        </SectionContent>
        <Image
          alt={texts.homeSection.imageAlt}
          width={500}
          src={logoImage}
          priority
        />
        <ScrollIndicator targetId="cards" />
      </SectionLayout>
      <SectionLayout className="cards-container" id="cards">
        <CardContainer>
          <InfoCard infos={texts.cards.historyCard} />
          <InfoCard infos={texts.cards.peoplesCard} />
          <InfoCard infos={texts.cards.bookCard} />
        </CardContainer>
        <ScrollIndicator targetId="gallery" />
      </SectionLayout>
      <SectionLayout id="gallery">
        <MasonryGallery />
        <ScrollIndicator targetId="about" />
      </SectionLayout>

      <SectionLayout id="about">
        <Image
          alt={texts.aboutSection.imageAlt}
          width={500}
          src={dancerImage}
        />
        <SectionContent>
          <SectionTitle>
            <span className="highlighted">{texts.aboutSection.title}</span>
          </SectionTitle>
          <Text>{texts.aboutSection.description}</Text>
        </SectionContent>

        <ScrollIndicator targetId="donation" />
      </SectionLayout>
      <SectionLayout id="donation">
        <SectionContent>
          <SectionTitle>
            <span className="highlighted">{texts.donationSection.title}</span>
          </SectionTitle>
          <Text>{texts.donationSection.description}</Text>
        </SectionContent>
        <Image
          style={{
            marginLeft: "auto",
          }}
          alt={texts.donationSection.imageAlt}
          width={400}
          src={qrcodeImage}
        />
      </SectionLayout>
      <Footer />
    </Main>
  );
}
