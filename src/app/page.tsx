import "../styles/global.css";
import Image from "next/image";

import logoImage from "../public/assets/images/sections/logo-encanto-da-natureza.webp";

import SectionTitle from "@/components/SectionTitle";
import SectionLayout, { SectionContent } from "@/components/SectionLayout";
import Text from "@/components/Text";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main>
      <SectionLayout>
        <SectionContent>
          <SectionTitle>
            <span>BOI ENCANTO</span>
            <span className="highlighted">DA NATUREZA</span>
          </SectionTitle>
          <Text>
            Através de nossa arte, reafirmamos a importância da inclusão e da
            diversidade, celebrando o folclore e suas ricas histórias. Venha nos
            conhecer e mergulhar na beleza da cultura popular.
          </Text>
          <div>
            <Button>Saiba Mais</Button>
            <Button className="ghost">Veja nossos videos</Button>
          </div>
        </SectionContent>
        <Image alt="image" width={500} src={logoImage} />
      </SectionLayout>
      <SectionLayout>
        <div>card aiaia</div>
      </SectionLayout>
    </main>
  );
}
