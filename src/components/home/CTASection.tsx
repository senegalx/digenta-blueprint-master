import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-dsts-navy" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(195_100%_47%/0.15),_transparent_70%)]" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 max-w-3xl mx-auto">
              Prêt à transformer votre{" "}
              <span className="text-gradient">espace</span> ?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez la révolution IoT pour un avenir connecté et durable. Demandez votre devis gratuit dès aujourd'hui.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a to="https://wa.me/message/25YLNGBPSDQHC1" target="_blanc">
                  Demander un devis gratuit
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+221781979191">
                  <Phone className="h-5 w-5" />
                  +221 78 197 91 91
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-dsts-green" />
                <span>Devis sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Installation rapide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-dsts-amber" />
                <span>Support technique inclus</span>
              </div>
            </div>
          </div>

          {/* Decorative borders */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/30 rounded-br-3xl" />
        </div>
      </div>
    </section>
  );
}
