import React, { useState } from 'react';
import { Menu, X, Heart, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-primary">GABSIH</h1>
              <p className="text-xs text-muted-foreground">Solidarité & Humanitaire</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#a-propos" className="text-foreground hover:text-primary transition-colors">
              À propos
            </a>
            <a href="#actions" className="text-foreground hover:text-primary transition-colors">
              Nos actions
            </a>
            <a href="#actualites" className="text-foreground hover:text-primary transition-colors">
              Actualités
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Users className="w-4 h-4 mr-2" />
              Devenir membre
            </Button>
            <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
              Faire un don
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <a href="#accueil" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Accueil
              </a>
              <a href="#a-propos" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                À propos
              </a>
              <a href="#actions" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Nos actions
              </a>
              <a href="#actualites" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Actualités
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors px-2 py-1">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  Devenir membre
                </Button>
                <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Faire un don
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;