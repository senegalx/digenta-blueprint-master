import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Cpu, Users, Lightbulb, Award } from "lucide-react";
import logo from "@/assets/logo-dsts.png";
import homeControlImage from "@/assets/home-control.jpeg";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous adoptons les dernières technologies IoT pour des solutions avant-gardistes.",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Une équipe locale à votre écoute, disponible et réactive.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Des standards élevés pour chaque installation et intégration.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>À Propos - DSTS | Notre mission et vision IoT</title>
        <meta
          name="description"
          content="Découvrez DSTS, entreprise sénégalaise spécialisée dans l'intégration IoT. Notre mission : transformer chaque bâtiment en espace intelligent, sécurisé et économique."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="hero-glow top-0 right-0 opacity-30" />
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4">
                  À Propos
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Pionniers de <span className="text-gradient">l'IoT</span> au Sénégal
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Digenta Smart Telecom Solution est une entreprise spécialisée dans l'intégration de technologies visant à centraliser et automatiser le contrôle de votre environnement.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous opérons à la croisée de l'informatique, de l'électronique et du bâtiment pour créer des écosystèmes interconnectés, que ce soit pour l'habitat résidentiel (Smart Home) ou les bâtiments professionnels.
                </p>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                  <img
                    src={homeControlImage}
                    alt="Contrôle domotique intelligent DSTS"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -inset-4 -z-10 blur-3xl opacity-20 bg-gradient-to-br from-primary to-cyan-glow" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="card-glass rounded-2xl p-8 md:p-12 border border-border/50">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4">Notre Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Transformer chaque bâtiment en un espace intelligent, sécurisé et économique, au service de ses occupants. Nous rendons la technologie accessible pour améliorer votre quotidien.
                </p>
              </div>

              {/* Vision */}
              <div className="card-glass rounded-2xl p-8 md:p-12 border border-border/50">
                <div className="inline-flex p-4 rounded-xl bg-dsts-amber/10 mb-6">
                  <Eye className="h-8 w-8 text-dsts-amber" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4">Notre Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Devenir le leader de référence en solutions IoT en Afrique de l'Ouest, en accompagnant particuliers et entreprises vers un avenir plus connecté et durable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4">
                Nos Valeurs
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Ce qui nous <span className="text-gradient">anime</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-2xl hover:bg-muted/30 transition-colors"
                >
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4">
                  Notre Expertise
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                  À la croisée des <span className="text-gradient">technologies</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Notre force réside dans notre capacité à maîtriser l'intersection de trois domaines clés : l'informatique, l'électronique et le bâtiment.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-1">Informatique</h4>
                      <p className="text-sm text-muted-foreground">
                        Développement d'applications mobiles, interfaces de contrôle et intégration cloud.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-dsts-amber/10">
                      <Lightbulb className="h-6 w-6 text-dsts-amber" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-1">Électronique</h4>
                      <p className="text-sm text-muted-foreground">
                        Capteurs, actionneurs, systèmes KNX et protocoles sans fil.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-dsts-green/10">
                      <Award className="h-6 w-6 text-dsts-green" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold mb-1">Bâtiment</h4>
                      <p className="text-sm text-muted-foreground">
                        Intégration architecturale non-intrusive et installation professionnelle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="card-glass rounded-3xl p-12 border border-border/50">
                    <img src={logo} alt="DSTS Logo" className="w-48 h-auto mx-auto" />
                    <div className="text-center mt-8">
                      <div className="text-2xl font-heading font-bold text-gradient">
                        DIGENTA SMART
                      </div>
                      <div className="text-muted-foreground">Telecom Solution</div>
                    </div>
                  </div>
                  <div className="absolute -inset-4 -z-10 blur-3xl opacity-30 bg-gradient-to-br from-primary to-dsts-amber" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Prêt à collaborer avec nous ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et découvrons ensemble comment transformer votre espace.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contactez-nous
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
}
