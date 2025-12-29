import { Link } from "react-router-dom";
import { PenTool, Wrench, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import technicianImage from "@/assets/technician.jpeg";

const services = [
  {
    id: "etude",
    icon: PenTool,
    title: "Étude & Conception",
    description:
      "Analyse précise de vos besoins et élaboration d'un projet sur mesure adapté à votre infrastructure.",
    features: ["Audit complet", "Plan personnalisé", "Devis détaillé"],
  },
  {
    id: "installation",
    icon: Wrench,
    title: "Installation",
    description:
      "Mise en œuvre des capteurs, actionneurs et centrales. Configuration experte des systèmes filaires (KNX) ou sans fil.",
    features: ["Déploiement rapide", "Sans perturbation", "Formation incluse"],
  },
  {
    id: "integration",
    icon: Layers,
    title: "Intégration",
    description:
      "Connexion et interopérabilité de tous vos sous-systèmes pour un pilotage centralisé unique.",
    features: ["Unification complète", "App mobile", "Contrôle vocal"],
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4">
              Nos Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              De l'étude à <span className="text-gradient">l'intégration</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Nous vous accompagnons à chaque étape de votre projet IoT, garantissant une transition fluide vers l'intelligence de vos espaces.
            </p>

            {/* Services List */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group flex gap-6 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button variant="hero" size="lg" asChild>
                <Link to="/services">
                  Tous nos services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src={technicianImage}
                alt="Technicien DSTS en installation"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="card-glass rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex -space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm border-2 border-card">
                        D
                      </div>
                      <div className="w-10 h-10 rounded-full bg-dsts-amber flex items-center justify-center text-primary-foreground font-bold text-sm border-2 border-card">
                        S
                      </div>
                      <div className="w-10 h-10 rounded-full bg-dsts-green flex items-center justify-center text-primary-foreground font-bold text-sm border-2 border-card">
                        T
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Équipe certifiée</div>
                      <div className="text-xs text-muted-foreground">+10 experts IoT</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Installation professionnelle par des techniciens qualifiés et formés aux dernières technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -inset-4 -z-10 blur-3xl opacity-20 bg-gradient-to-br from-primary to-dsts-green" />
          </div>
        </div>
      </div>
    </section>
  );
}
