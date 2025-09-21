import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Building } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Solidarité",
      description: "Nous croyons en l'entraide et la fraternité islamique pour bâtir une société plus juste."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Mission claire",
      description: "Promouvoir l'islam, aider les démunis et construire des infrastructures communautaires."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Transparence",
      description: "Nous nous engageons à une gestion transparente et responsable de vos contributions."
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Développement",
      description: "Nous œuvrons pour le développement durable et l'autonomisation des communautés."
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            À propos de GABSIH
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Le Groupe Al Baraka pour la Solidarité Islamique et Humanitaire est une organisation 
            non gouvernementale basée à Abidjan, dédiée à la promotion des valeurs islamiques 
            et à l'action humanitaire.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Notre Histoire</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fondée avec la vision de créer un monde plus solidaire et plus juste, GABSIH s'inspire 
                des valeurs fondamentales de l'islam : la compassion, la justice et l'entraide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Depuis notre création, nous avons touché la vie de centaines de familles à travers 
                nos programmes d'aide, nos projets éducatifs et nos initiatives de développement communautaire.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Devenir une référence en matière d'action humanitaire et de promotion des valeurs islamiques 
                en Côte d'Ivoire et dans la sous-région, en contribuant à l'épanouissement spirituel, 
                social et économique des communautés.
              </p>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-islamic group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-card-foreground">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Objectives Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Nos Objectifs Statutaires
            </h3>
            <p className="text-muted-foreground">
              Selon l'Article 5 de nos statuts, voici nos domaines d'intervention prioritaires :
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Promotion et enseignement de l'islam",
              "Aide aux populations démunies",
              "Construction et rénovation de mosquées",
              "Attribution de bourses d'études",
              "Protection de l'environnement",
              "Assistance sanitaire et sociale",
              "Organisation du pèlerinage (Hadj)",
              "Développement communautaire durable"
            ].map((objective, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">{objective}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Governance Structure */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            Structure de Gouvernance
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Assemblée Générale</h4>
              <p className="text-sm text-muted-foreground">
                Organe suprême de décision regroupant tous les membres
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Bureau Exécutif</h4>
              <p className="text-sm text-muted-foreground">
                Gestion quotidienne et mise en œuvre des décisions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Commissariat aux Comptes</h4>
              <p className="text-sm text-muted-foreground">
                Contrôle et audit de la gestion financière
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;