import { Users, Heart, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Créez votre profil",
    description: "Inscrivez-vous en quelques minutes. Indiquez si vous souhaitez donner ou recevoir de l'aide.",
  },
  {
    icon: Heart,
    title: "Partagez vos besoins ou vos dons",
    description: "Personnes dans le besoin : listez ce dont vous avez besoin. Donateurs : proposez ce que vous pouvez offrir.",
  },
  {
    icon: Calendar,
    title: "Connectez-vous localement",
    description: "Trouvez des personnes près de chez vous. Planifiez un rendez-vous en toute sécurité.",
  },
  {
    icon: CheckCircle,
    title: "Faites la différence",
    description: "Remettez ou recevez les dons en main propre. Créez des liens solidaires dans votre communauté.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4" id="comment-ca-marche">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processus simple en 4 étapes pour créer de la solidarité locale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-soft transition-smooth h-full border border-border">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-soft">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 pt-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/30">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 16H26M26 16L20 10M26 16L20 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
