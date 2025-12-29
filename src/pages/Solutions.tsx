import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { DomainsSection } from "@/components/home/DomainsSection";
import { CTASection } from "@/components/home/CTASection";
import heroDashboard from "@/assets/hero-dashboard.jpeg";

export default function Solutions() {
  return (
    <>
      <Helmet>
        <title>Solutions IoT - DSTS | Sécurité, Immobilier, Bureaux, Agriculture</title>
        <meta
          name="description"
          content="Découvrez nos solutions IoT adaptées à chaque secteur : sécurité, immobilier, bureaux, agriculture connectée et secteur bancaire. Solutions sur mesure au Sénégal."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="hero-glow top-0 left-1/4 opacity-30" />
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4">
                  Nos Solutions
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Des solutions <span className="text-gradient">IoT</span> pour chaque besoin
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  De la résidence privée aux infrastructures critiques, nous déployons des écosystèmes IoT sur mesure adaptés à votre secteur d'activité. Sécurité, confort et performance garantis.
                </p>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                  <img
                    src={heroDashboard}
                    alt="Dashboard de contrôle IoT intelligent"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -inset-4 -z-10 blur-3xl opacity-20 bg-gradient-to-br from-primary to-dsts-amber" />
              </div>
            </div>
          </div>
        </section>

        <DomainsSection />
        <CTASection />
      </Layout>
    </>
  );
}
