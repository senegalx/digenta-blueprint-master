import { Link } from "react-router-dom";
import { ArrowRight, Shield, Zap, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/domotique.jpeg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="hero-glow top-1/4 -left-40 opacity-40" />
        <div className="hero-glow bottom-1/4 -right-40 opacity-30" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-primary font-medium">
                Leader IoT au Sénégal
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Transformez votre{" "}
              <span className="text-gradient">espace</span> en{" "}
              <span className="text-gradient">intelligence</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 animate-slide-up leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              DSTS intègre les technologies IoT pour centraliser et automatiser le contrôle de votre environnement. Sécurité, confort et économies d'énergie à portée de main.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Demander un devis
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/solutions">Découvrir nos solutions</Link>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-border/30 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary">15-30%</div>
                <div className="text-sm text-muted-foreground mt-1">Économies d'énergie</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground mt-1">Secteurs d'expertise</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Contrôle à distance</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative animate-slide-up lg:animate-float"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Image container - z-0 to be behind badges */}
            <div className="relative z-0 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src={heroImage}
                alt="Maison connectée intelligente avec contrôle domotique"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating Cards - z-20 to be above image */}
            <div className="absolute -left-6 top-1/4 z-20 card-glass rounded-xl p-4 shadow-xl animate-float hidden md:block" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Sécurité</div>
                  <div className="text-xs text-muted-foreground">Actif 24/7</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 top-1/2 z-20 card-glass rounded-xl p-4 shadow-xl animate-float hidden md:block" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-dsts-green/20">
                  <Zap className="h-6 w-6 text-dsts-green" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Énergie</div>
                  <div className="text-xs text-muted-foreground">-25% conso</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/4 z-20 card-glass rounded-xl p-4 shadow-xl animate-float hidden md:block" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-dsts-amber/20">
                  <Home className="h-6 w-6 text-dsts-amber" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Confort</div>
                  <div className="text-xs text-muted-foreground">Automatisé</div>
                </div>
              </div>
            </div>

            {/* Glow effect behind image */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30 bg-gradient-to-r from-primary to-cyan-glow scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
}
