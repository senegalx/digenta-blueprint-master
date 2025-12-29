import { Smartphone, Shield, Zap, Thermometer, Camera, Clock } from "lucide-react";
import smartPanelImage from "@/assets/smart-panel.jpeg";

const features = [
  {
    icon: Smartphone,
    title: "Contrôle Mobile",
    description: "Pilotez tout depuis votre smartphone, où que vous soyez.",
  },
  {
    icon: Shield,
    title: "Sécurité Renforcée",
    description: "Alarmes intelligentes et surveillance 24/7.",
  },
  {
    icon: Zap,
    title: "Économies d'Énergie",
    description: "Jusqu'à 30% d'économies sur vos factures.",
  },
  {
    icon: Thermometer,
    title: "Confort Automatisé",
    description: "Climatisation et chauffage intelligents.",
  },
  {
    icon: Camera,
    title: "Vidéosurveillance",
    description: "Visualisez votre espace en temps réel.",
  },
  {
    icon: Clock,
    title: "Automatisation",
    description: "Scénarios de vie personnalisés.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src={smartPanelImage}
                alt="Panneau de contrôle domotique intelligent"
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-dsts-amber/30 rounded-2xl -z-10" />

            {/* Glow */}
            <div className="absolute inset-0 -z-20 blur-3xl opacity-20 bg-gradient-to-r from-primary to-dsts-amber scale-110" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4">
              Fonctionnalités
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Le <span className="text-gradient">contrôle total</span> au bout des doigts
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Interfaces intuitives, contrôle vocal et automatisation avancée. Vérifiez l'état de votre maison depuis n'importe où.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
