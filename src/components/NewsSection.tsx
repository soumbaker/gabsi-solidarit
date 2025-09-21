import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Users, MapPin } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      date: "15 Mars 2024",
      title: "Distribution de vivres à Abobo",
      excerpt: "Plus de 100 familles ont bénéficié de notre programme d'aide alimentaire dans le quartier d'Abobo.",
      category: "Action humanitaire",
      location: "Abobo, Abidjan"
    },
    {
      date: "10 Mars 2024",
      title: "Inauguration de la mosquée de Koumassi",
      excerpt: "Cérémonie d'inauguration de notre 8ème mosquée construite grâce à vos généreuses contributions.",
      category: "Infrastructure",
      location: "Koumassi, Abidjan"
    },
    {
      date: "5 Mars 2024",
      title: "Campagne de bourses scolaires 2024",
      excerpt: "Lancement de notre programme annuel de bourses pour soutenir l'éducation des jeunes musulmans.",
      category: "Éducation",
      location: "Abidjan"
    }
  ];

  const events = [
    {
      date: "25 Mars 2024",
      time: "14h00",
      title: "Assemblée Générale Annuelle",
      description: "Présentation du bilan annuel et élection des nouveaux membres du bureau.",
      location: "Siège GABSIH, Cocody"
    },
    {
      date: "30 Mars 2024",
      time: "09h00",
      title: "Journée de sensibilisation environnementale",
      description: "Action de reboisement et sensibilisation à la protection de l'environnement.",
      location: "Forêt du Banco"
    }
  ];

  return (
    <section id="actualites" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Actualités & Événements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Restez informés de nos dernières actions, projets en cours et événements à venir. 
            Ensemble, construisons une communauté plus forte et plus solidaire.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent News */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary">Dernières Actualités</h3>
              <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                Voir toutes les actualités
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="space-y-6">
              {news.map((article, index) => (
                <Card key={index} className="card-islamic overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                    </div>

                    <h4 className="font-bold text-xl mb-3 text-card-foreground hover:text-primary transition-colors cursor-pointer">
                      {article.title}
                    </h4>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {article.location}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                        Lire la suite
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Événements à Venir</h3>
            
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card key={index} className="card-islamic">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary text-primary-foreground rounded-lg p-3 text-center min-w-[60px]">
                        <div className="text-sm font-medium">
                          {event.date.split(' ')[0]}
                        </div>
                        <div className="text-xs opacity-90">
                          {event.date.split(' ')[1]}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-sm text-accent font-medium mb-1">
                          {event.time}
                        </div>
                        <h4 className="font-semibold text-lg mb-2 text-card-foreground">
                          {event.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3 mr-1" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Subscribe to Newsletter */}
              <Card className="card-islamic bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-lg mb-3">Restez Informés</h4>
                  <p className="text-sm mb-4 opacity-90">
                    Abonnez-vous à notre newsletter pour recevoir nos dernières actualités.
                  </p>
                  <Button 
                    className="bg-accent text-accent-foreground hover:bg-accent-light w-full"
                  >
                    S'abonner à la newsletter
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="card-islamic border-primary">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-bold text-lg mb-3 text-card-foreground">
                    Rejoignez-nous
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Devenez membre de GABSIH et participez activement à nos actions.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                  >
                    Devenir membre
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;