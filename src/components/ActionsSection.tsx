import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, GraduationCap, Building2, Droplets, TreePine, Plane } from 'lucide-react';
import educationImage from '@/assets/education-image.jpg';
import healthcareImage from '@/assets/healthcare-image.jpg';
import charityIcon from '@/assets/charity-icon.jpg';

const ActionsSection = () => {
  const actions = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Aide aux Démunis",
      description: "Distribution de vivres, vêtements et assistance financière aux familles dans le besoin.",
      image: charityIcon,
      stats: "500+ familles aidées"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Éducation & Bourses",
      description: "Attribution de bourses d'études et soutien à l'éducation islamique et moderne.",
      image: educationImage,
      stats: "150+ bourses accordées"
    },
    {
      icon: <Building2 className="w-8 h-8 text-accent-dark" />,
      title: "Construction de Mosquées",
      description: "Construction et rénovation de lieux de culte pour renforcer la communauté musulmane.",
      image: "/placeholder.svg",
      stats: "8 mosquées construites"
    },
    {
      icon: <Droplets className="w-8 h-8 text-primary-light" />,
      title: "Accès à l'Eau Potable",
      description: "Installation de puits et systèmes d'adduction d'eau dans les zones rurales.",
      image: "/placeholder.svg",
      stats: "25 puits creusés"
    },
    {
      icon: <Heart className="w-8 h-8 text-success" />,
      title: "Santé & Soins",
      description: "Campagnes de santé, consultations gratuites et assistance médicale.",
      image: healthcareImage,
      stats: "1000+ consultations"
    },
    {
      icon: <Plane className="w-8 h-8 text-accent" />,
      title: "Organisation du Hadj",
      description: "Accompagnement des pèlerins dans l'organisation de leur voyage spirituel.",
      image: "/placeholder.svg",
      stats: "100+ pèlerins accompagnés"
    }
  ];

  return (
    <section id="actions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Actions Humanitaires
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez nos différents programmes d'aide et projets de développement qui transforment 
            la vie des communautés en Côte d'Ivoire et favorisent un développement durable.
          </p>
        </div>

        {/* Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {actions.map((action, index) => (
            <Card key={index} className="card-islamic overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={action.image} 
                  alt={action.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-primary-foreground">
                    {action.icon}
                    <span className="font-semibold">{action.stats}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-card-foreground">
                  {action.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {action.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Rejoignez Notre Mission
            </h3>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Chaque contribution compte. Ensemble, nous pouvons faire une différence dans la vie 
              de ceux qui en ont le plus besoin. Votre soutien nous permet de continuer nos actions 
              et d'étendre notre impact.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent-light shadow-accent"
              >
                <Heart className="w-5 h-5 mr-2" />
                Faire un don maintenant
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Devenir bénévole
              </Button>
            </div>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Familles aidées</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15</div>
            <div className="text-muted-foreground">Projets actifs</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8</div>
            <div className="text-muted-foreground">Mosquées construites</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">200+</div>
            <div className="text-muted-foreground">Membres actifs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionsSection;