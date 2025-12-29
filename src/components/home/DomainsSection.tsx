import { Link } from "react-router-dom";
import { Shield, Building2, Briefcase, Sprout, Landmark, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const domains = [
  {
    id: "securite",
    title: "Sécurité",
    description: "Protection des biens et personnes avec alarmes intelligentes et surveillance en temps réel.",
    icon: Shield,
    href: "/solutions/securite",
    color: "primary",
  },
  {
    id: "immobilier",
    title: "Immobilier",
    description: "Améliorez le confort et optimisez l'énergie avec des solutions non-intrusives et fiables.",
    icon: Building2,
    href: "/solutions/immobilier",
    color: "cyan-glow",
  },
  {
    id: "bureaux",
    title: "Bureaux",
    description: "Optimisation de l'espace de travail pour la productivité et les économies d'échelle.",
    icon: Briefcase,
    href: "/solutions/bureaux",
    color: "dsts-amber",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    description: "Outils robustes pour optimiser les ressources et sécuriser les exploitations agricoles.",
    icon: Sprout,
    href: "/solutions/agriculture",
    color: "dsts-green",
  },
  {
    id: "bancaire",
    title: "Bancaire",
    description: "Exigence maximale pour la sécurité et la gestion des infrastructures sensibles.",
    icon: Landmark,
    href: "/solutions/bancaire",
    color: "primary",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "group-hover:border-primary/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(195_100%_47%/0.2)]",
  },
  "cyan-glow": {
    bg: "bg-cyan-glow/10",
    text: "text-cyan-glow",
    border: "group-hover:border-cyan-glow/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(195_100%_60%/0.2)]",
  },
  "dsts-amber": {
    bg: "bg-dsts-amber/10",
    text: "text-dsts-amber",
    border: "group-hover:border-dsts-amber/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(45_100%_50%/0.2)]",
  },
  "dsts-green": {
    bg: "bg-dsts-green/10",
    text: "text-dsts-green",
    border: "group-hover:border-dsts-green/50",
    glow: "group-hover:shadow-[0_0_30px_hsl(142_70%_45%/0.2)]",
  },
};

export function DomainsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow top-0 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Nos Domaines
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Solutions adaptées à <span className="text-gradient">chaque secteur</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            De la résidence privée aux infrastructures critiques, nous déployons des écosystèmes IoT sur mesure.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const colors = colorClasses[domain.color];
            return (
              <Link
                key={domain.id}
                to={domain.href}
                className={cn(
                  "group relative card-glass rounded-2xl p-8 border border-border/50 transition-all duration-500",
                  colors.border,
                  colors.glow,
                  index === 4 && "lg:col-start-2"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={cn("inline-flex p-4 rounded-xl mb-6", colors.bg)}>
                  <domain.icon className={cn("h-8 w-8", colors.text)} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                  {domain.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {domain.description}
                </p>

                {/* Arrow */}
                <div className={cn("flex items-center gap-2 font-medium", colors.text)}>
                  <span>En savoir plus</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
