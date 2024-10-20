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
            <Button>{texts.homeSection.seeAbout}</Button>
            <Button className="ghost">{texts.homeSection.seeOurVideos}</Button>
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
        <ScrollIndicator up targetId="home" />
      </SectionLayout>
    </Main>
  );
}
