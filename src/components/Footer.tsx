import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 px-4 mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Fa'atauturu</span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              Solidarité locale en Polynésie française
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Papeete • Faa'a • Moorea • Bora Bora
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 Fa'atauturu. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
