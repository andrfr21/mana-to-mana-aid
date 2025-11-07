import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Heart, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Donor = () => {
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
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <HandHeart className="h-5 w-5 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Espace Donateur</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Faites la différence aujourd'hui
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8">
            Découvrez les personnes près de chez vous qui ont besoin d'aide
          </p>

          <Button 
            size="lg"
            className="bg-card hover:bg-card/90 text-primary font-semibold shadow-soft"
          >
            Créer mon compte donateur
          </Button>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Local et Proche
              </h3>
              <p className="text-muted-foreground">
                Aidez des personnes dans votre quartier : Papeete, Faa'a, Moorea, Bora Bora...
              </p>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <Package className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Donnez ce que vous voulez
              </h3>
              <p className="text-muted-foreground">
                Vêtements, nourriture, objets, produits d'hygiène... Vous choisissez.
              </p>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Impact Direct
              </h3>
              <p className="text-muted-foreground">
                Rencontrez les personnes que vous aidez et voyez la différence immédiatement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Créez votre compte et commencez à aider dès aujourd'hui. C'est gratuit et rapide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-semibold">
              Créer mon compte
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/">En savoir plus</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const HandHeart = ({ className }: { className?: string }) => (
  <Heart className={className} />
);

export default Donor;
