import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="GABSIH - Solidarité islamique et humanitaire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/70 to-transparent"></div>
        <div className="absolute inset-0 islamic-pattern opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Arabic Greeting */}
          <div className="mb-6">
            <p className="text-xl md:text-2xl font-arabic text-accent-light">
              بسم الله الرحمن الرحيم
            </p>
            <p className="text-sm md:text-base mt-2 opacity-90">
              Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Groupe Al Baraka</span>
            <span className="block text-accent">pour la Solidarité</span>
            <span className="block">Islamique & Humanitaire</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Une ONG dédiée à la promotion de l'islam, l'aide aux démunis et la construction d'un monde plus solidaire. 
            Ensemble, transformons les cœurs et changeons des vies.
          </p>

          {/* Mission Statement */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 max-w-2xl mx-auto animate-bounce-in">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-accent">
              Notre Mission
            </h2>
            <p className="text-base md:text-lg opacity-90 leading-relaxed">
              Promouvoir les valeurs islamiques, aider les démunis, construire des mosquées, 
              soutenir l'éducation et œuvrer pour un développement durable en Côte d'Ivoire et au-delà.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent-light shadow-accent text-lg px-8 py-4 group"
            >
              <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Faire un don
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 group"
            >
              <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Devenir membre
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm md:text-base opacity-80">Familles aidées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm md:text-base opacity-80">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-sm md:text-base opacity-80">Membres actifs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;