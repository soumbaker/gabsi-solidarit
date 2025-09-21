import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contactez-Nous
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question, 
            suggestion ou pour rejoindre notre mission de solidarité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Informations de Contact
              </h3>
              
              <div className="space-y-6">
                <Card className="card-islamic border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-card-foreground">
                          Adresse du Siège
                        </h4>
                        <p className="text-muted-foreground">
                          Cocody, Riviera Golf<br />
                          Abidjan, Côte d'Ivoire
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-islamic border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-card-foreground">
                          Téléphones
                        </h4>
                        <p className="text-muted-foreground">
                          +225 27 22 XX XX XX<br />
                          +225 07 XX XX XX XX
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-islamic border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-card-foreground">
                          Email
                        </h4>
                        <p className="text-muted-foreground">
                          contact@gabsih.org<br />
                          info@gabsih.org
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-islamic border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-card-foreground">
                          Horaires d'Ouverture
                        </h4>
                        <p className="text-muted-foreground">
                          Lundi - Vendredi : 8h00 - 17h00<br />
                          Samedi : 8h00 - 12h00<br />
                          Dimanche : Fermé
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="card-islamic overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Carte interactive à venir
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="card-islamic">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Envoyez-nous un Message
                </h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Prénom *
                      </label>
                      <Input 
                        placeholder="Votre prénom"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom *
                      </label>
                      <Input 
                        placeholder="Votre nom"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="votre.email@exemple.com"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Téléphone
                    </label>
                    <Input 
                      placeholder="+225 XX XX XX XX"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Sujet *
                    </label>
                    <Input 
                      placeholder="Objet de votre message"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Votre message..."
                      rows={5}
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Champs obligatoires. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Devenir Membre
              </Button>
              <Button 
                size="lg"
                className="bg-gradient-accent text-accent-foreground hover:opacity-90"
              >
                Faire un Don
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;