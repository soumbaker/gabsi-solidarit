import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Heart className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl">GABSIH</h3>
                <p className="text-sm opacity-80">Solidarité & Humanitaire</p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              Le Groupe Al Baraka pour la Solidarité Islamique et Humanitaire œuvre 
              pour un monde plus juste et solidaire, guidé par les valeurs islamiques.
            </p>

            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:text-accent">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:text-accent">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 text-primary-foreground hover:text-accent">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <a href="#accueil" className="text-sm opacity-90 hover:text-accent transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#a-propos" className="text-sm opacity-90 hover:text-accent transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#actions" className="text-sm opacity-90 hover:text-accent transition-colors">
                  Nos actions
                </a>
              </li>
              <li>
                <a href="#actualites" className="text-sm opacity-90 hover:text-accent transition-colors">
                  Actualités
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm opacity-90 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-sm opacity-90">Aide aux démunis</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Bourses d'études</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Construction mosquées</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Soins de santé</span>
              </li>
              <li>
                <span className="text-sm opacity-90">Organisation Hadj</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm opacity-90">
                    Cocody, Riviera Golf<br />
                    Abidjan, Côte d'Ivoire
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-sm opacity-90">+225 27 22 XX XX XX</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-sm opacity-90">contact@gabsih.org</p>
              </div>
            </div>

            <div className="mt-6">
              <Button 
                size="sm" 
                className="bg-gradient-accent text-accent-foreground hover:opacity-90"
              >
                Faire un don
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm opacity-90">
                © 2024 GABSIH - Groupe Al Baraka pour la Solidarité Islamique et Humanitaire
              </p>
              <p className="text-xs opacity-75 mt-1">
                Tous droits réservés. Organisation Non Gouvernementale - Côte d'Ivoire
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-xs opacity-75">
              <a href="#" className="hover:text-accent transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Statuts PDF
              </a>
            </div>
          </div>

          {/* Islamic Quote */}
          <div className="text-center mt-8 p-4 bg-primary/20 rounded-lg">
            <p className="text-accent font-arabic text-lg mb-2">
              وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا
            </p>
            <p className="text-sm opacity-90">
              "Et quiconque sauve une vie, c'est comme s'il avait sauvé l'humanité entière" - Coran 5:32
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;