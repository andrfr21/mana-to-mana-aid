import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthProvider";
import { Heart, MapPin, PlusCircle } from "lucide-react";

export default function Donor() {
  const { user } = useAuth();
  const role = (user?.user_metadata?.role as "donor" | "beneficiary" | undefined) ?? undefined;

  return (
    <div className="min-h-screen">
      {/* Hero compact */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,hsl(var(--primary)/0.15),hsl(var(--secondary)/0.15))]" />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card/60 backdrop-blur px-3 py-1 text-sm mb-4">
              <Heart className="h-4 w-4" />
              Espace Donateur
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Aidez concrètement près de chez vous.
            </h1>
            <p className="text-muted-foreground mt-3">
              Découvrez les besoins locaux et proposez une aide en quelques clics.
            </p>

            {!user && (
              <div className="mt-6 flex gap-3">
                <Button asChild>
                  <Link to="/login">Se connecter</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/signup">Créer un compte</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contenu connecté */}
      {user ? (
        role === "donor" ? (
          <section className="container mx-auto px-4 py-10">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Carte 1 */}
              <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Besoins proches</h3>
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Parcourez les dernières demandes dans votre zone.
                </p>
                <Button asChild className="mt-4 w-full">
                  <Link to="/dashboard">Voir les demandes</Link>
                </Button>
              </div>

              {/* Carte 2 */}
              <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Proposer une aide</h3>
                  <PlusCircle className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Publiez une offre (logistique, matériel, temps…).
                </p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <Link to="/dashboard">Créer une offre</Link>
                </Button>
              </div>

              {/* Carte 3 */}
              <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
                <h3 className="font-semibold">Votre impact</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Suivez vos actions et l’impact généré dans la communauté.
                </p>
                <div className="mt-4 rounded-xl border bg-muted/60 p-4 text-sm text-muted-foreground">
                  Bientôt : stats, historique, badges 🏅
                </div>
              </div>
            </div>
          </section>
        ) : (
          // Connecté mais pas Donor
          <section className="container mx-auto px-4 py-10">
            <div className="rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="font-semibold">Compte non donateur</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Vous êtes connecté en tant que <span className="font-medium">Bénéficiaire</span>. 
                Cette page est optimisée pour les Donateurs.
              </p>
              <Button asChild className="mt-4">
                <Link to="/dashboard">Aller au tableau de bord</Link>
              </Button>
            </div>
          </section>
        )
      ) : null}
    </div>
  );
}
