import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { DomainsSection } from "@/components/home/DomainsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>DSTS - Digenta Smart Telecom Solution | Domotique & IoT au Sénégal</title>
        <meta
          name="description"
          content="DSTS transforme vos espaces en environnements intelligents. Solutions IoT pour maisons connectées, bureaux, agriculture et secteur bancaire. Économies d'énergie jusqu'à 30%."
        />
        <meta
          name="keywords"
          content="domotique, IoT, maison connectée, smart home, Sénégal, Dakar, sécurité, économie énergie, automatisation"
        />
        <link rel="canonical" href="https://www.digentasenegal.com" />
      </Helmet>

      <Layout>
        <HeroSection />
        <DomainsSection />
        <ServicesSection />
        <FeaturesSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
