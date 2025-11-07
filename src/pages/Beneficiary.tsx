import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Beneficiary = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth">
            <ArrowLeft className="h-5 w-5" />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary-light py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-secondary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Users className="h-5 w-5 text-secondary-foreground" />
            <span className="text-sm font-medium text-secondary-foreground">Espace Bénéficiaire</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
            Vous n'êtes pas seul
          </h1>
          
          <p className="text-xl text-secondary-foreground/90 mb-8">
            Notre communauté est là pour vous aider à traverser cette période difficile
          </p>

          <Button 
            size="lg"
            className="bg-card hover:bg-card/90 text-secondary font-semibold shadow-soft"
          >
            Créer mon profil
          </Button>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Un espace sécurisé et respectueux
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Votre dignité et votre vie privée sont notre priorité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Confidentialité Totale
              </h3>
              <p className="text-muted-foreground">
                Vous contrôlez ce que vous partagez. Vos informations personnelles sont protégées.
              </p>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Communauté Bienveillante
              </h3>
              <p className="text-muted-foreground">
                Des personnes locales qui veulent vraiment vous aider, sans jugement.
              </p>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Contact Direct
              </h3>
              <p className="text-muted-foreground">
                Échangez directement avec les donateurs pour organiser les rendez-vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Request */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            De quoi avez-vous besoin ?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Vêtements et chaussures",
              "Nourriture et repas",
              "Produits d'hygiène",
              "Objets du quotidien",
              "Aide temporaire pour logement",
              "Articles pour enfants",
            ].map((item) => (
              <div 
                key={item}
                className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-soft"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            N'ayez pas peur de demander
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tout le monde a besoin d'aide à un moment ou un autre. C'est gratuit, confidentiel et sans jugement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-semibold">
              Créer mon profil
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beneficiary;
