import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CTASection } from "@/components/home/CTASection";
import { Shield, Zap, Smartphone, AlertTriangle, Droplets, Camera } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Alarmes intelligentes",
    description: "Systèmes d'alarme connectés avec alertes smartphone instantanées.",
  },
  {
    icon: Camera,
    title: "Vidéosurveillance",
    description: "Caméras HD et détecteurs de mouvements pour une surveillance active.",
  },
  {
    icon: AlertTriangle,
    title: "Sécurité technique",
    description: "Détecteurs de fumée, inondation et fuites de gaz connectés.",
  },
  {
    icon: Droplets,
    title: "Simulation de présence",
    description: "Contrôle d'éclairage intelligent pour dissuader les intrusions.",
  },
];

const energyFeatures = [
  {
    icon: Zap,
    title: "Thermostats intelligents",
    description: "Régulation automatique du chauffage et de la climatisation.",
  },
  {
    icon: Smartphone,
    title: "Prises connectées",
    description: "Contrôle et suivi de consommation de vos appareils.",
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services - DSTS | Étude, Installation & Intégration IoT</title>
        <meta
          name="description"
          content="Nos services IoT complets : étude et conception sur mesure, installation professionnelle, intégration de systèmes. Économies d'énergie de 15-30% garanties."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="hero-glow top-0 right-1/4 opacity-30" />
          <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4">
              Nos Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              De l'étude à <span className="text-gradient">l'excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un accompagnement complet pour transformer votre espace en environnement intelligent. Étude personnalisée, installation experte et intégration parfaite.
            </p>
          </div>
        </section>

        <ServicesSection />

        {/* Security Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4">
                Sécurité
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Protection <span className="text-gradient">intelligente</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Les systèmes intelligents renforcent la sécurité des biens et des personnes via plusieurs dispositifs intégrés.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="card-glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Energy Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4">
                  Gestion de l'Énergie
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                  Économisez jusqu'à <span className="text-gradient">30%</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  La gestion de l'énergie en domotique optimise la consommation en automatisant et en centralisant le contrôle du chauffage, de l'éclairage et des appareils électroménagers via des objets connectés.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {energyFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-dsts-green/10">
                        <feature.icon className="h-5 w-5 text-dsts-green" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-glass rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-heading font-bold mb-6">Économies estimées</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Chauffage / Climatisation</span>
                      <span className="font-bold text-dsts-green">-25%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-dsts-green w-[75%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Éclairage</span>
                      <span className="font-bold text-dsts-green">-30%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-dsts-green w-[70%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Appareils en veille</span>
                      <span className="font-bold text-dsts-green">-15%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-dsts-green w-[85%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection />
        <CTASection />
      </Layout>
    </>
  );
}
