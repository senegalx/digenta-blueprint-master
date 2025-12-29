import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const sectors = [
  { value: "residential", label: "Résidentiel / Smart Home" },
  { value: "office", label: "Bureaux" },
  { value: "agriculture", label: "Agriculture" },
  { value: "banking", label: "Bancaire" },
  { value: "other", label: "Autre" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message envoyé avec succès ! Nous vous répondrons sous 24h.");
  };

  return (
    <>
      <Helmet>
        <title>Contact - DSTS | Demandez votre devis gratuit</title>
        <meta
          name="description"
          content="Contactez DSTS pour un devis gratuit. Nos experts IoT vous accompagnent dans votre projet de maison connectée ou bâtiment intelligent au Sénégal."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="hero-glow top-0 left-1/4 opacity-30" />
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-primary font-medium uppercase tracking-wider text-sm mb-4">
                Contact
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Parlons de votre <span className="text-gradient">projet</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Obtenez un devis gratuit sous 24h. Notre équipe d'experts est à votre écoute pour concrétiser votre vision.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding pt-0">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div className="card-glass rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-6">Informations</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Adresse</h4>
                        <p className="text-sm text-muted-foreground">
                          Quest Foire N° 205<br />
                          Dakar, Sénégal
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Téléphone</h4>
                        <a
                          href="tel:+221781979191"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +221 78 197 91 91
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a
                          href="mailto:admin@digentasmartsn.com"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          admin@digentasmartsn.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Horaires</h4>
                        <p className="text-sm text-muted-foreground">
                          Lun - Ven: 8h - 18h<br />
                          Sam: 9h - 14h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="card-glass rounded-2xl p-8 border border-border/50">
                  <h3 className="text-xl font-heading font-bold mb-6">Pourquoi DSTS ?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-dsts-green" />
                      <span className="text-sm">Devis gratuit sous 24h</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-dsts-green" />
                      <span className="text-sm">Experts certifiés IoT</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-dsts-green" />
                      <span className="text-sm">Support technique inclus</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-dsts-green" />
                      <span className="text-sm">Solutions sur mesure</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="card-glass rounded-2xl p-8 md:p-12 border border-border/50">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex p-4 rounded-full bg-dsts-green/20 mb-6">
                        <CheckCircle className="h-12 w-12 text-dsts-green" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-4">
                        Message envoyé !
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        Merci pour votre intérêt. Notre équipe vous contactera sous 24h.
                      </p>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                        Envoyer un autre message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-heading font-bold mb-2">
                        Demande de devis gratuit
                      </h3>
                      <p className="text-muted-foreground mb-8">
                        Remplissez le formulaire ci-dessous et recevez votre devis personnalisé.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Prénom *</Label>
                            <Input
                              id="firstName"
                              placeholder="Votre prénom"
                              required
                              className="bg-muted/50 border-border/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Nom *</Label>
                            <Input
                              id="lastName"
                              placeholder="Votre nom"
                              required
                              className="bg-muted/50 border-border/50"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="votre@email.com"
                              required
                              className="bg-muted/50 border-border/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Téléphone *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+221 XX XXX XX XX"
                              required
                              className="bg-muted/50 border-border/50"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="sector">Secteur d'activité</Label>
                          <Select>
                            <SelectTrigger className="bg-muted/50 border-border/50">
                              <SelectValue placeholder="Sélectionnez votre secteur" />
                            </SelectTrigger>
                            <SelectContent>
                              {sectors.map((sector) => (
                                <SelectItem key={sector.value} value={sector.value}>
                                  {sector.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Décrivez votre projet *</Label>
                          <Textarea
                            id="message"
                            placeholder="Parlez-nous de vos besoins en domotique, sécurité, gestion d'énergie..."
                            rows={5}
                            required
                            className="bg-muted/50 border-border/50 resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          variant="hero"
                          size="lg"
                          className="w-full sm:w-auto"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin mr-2">⏳</span>
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
                              Envoyer ma demande
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
