'use client'
import Image from 'next/image'

import { useState } from "react";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";


const categories = ["Tous", "Réparations", "Réglage", "Restauration", "Personnalisation"];

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=721&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Réfection du Moteur",
    category: "Réparations",
    description: "Révision complète du moteur sur BMW M4 2018"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Échappement Performance",
    category: "Réglage",
    description: "Installation d'un système d'échappement en titane sur mesure"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Restauration de Voiture Classique",
    category: "Restauration", 
    description: "Projet de restauration complète d'une Mustang 1967"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Installation Turbo",
    category: "Réglage",
    description: "Amélioration turbo Garrett GT2860RS"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Amélioration du Système de Freins",
    category: "Réparations",
    description: "Installation d'un kit de freins Brembo de grande taille"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Kit Large Personnalisé",
    category: "Personnalisation",
    description: "Modification de carrosserie large faite à la main"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Réglage de Suspension",
    category: "Réglage",
    description: "Installation de suspensions réglables et alignement"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Correction de Peinture",
    category: "Personnalisation",
    description: "Correction professionnelle de peinture et revêtement céramique"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1486326658981-ed68abe5868e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Revival Porsche Vintage",
    category: "Restauration",
    description: "Restauration d'une Porsche 911 de 1973 aux spécifications d'origine"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Préparation de Voiture de Course",
    category: "Personnalisation",
    description: "Modifications prêtes pour la piste et équipements de sécurité"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Réfection de Transmission",
    category: "Réparations",
    description: "Révision complète de transmission manuelle"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Restauration de Muscle Car",
    category: "Restauration",
    description: "Restauration complète sur châssis d'un Camaro SS de 1969"
  }
];

export default function PhotoPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "Tous" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <main className="">
      {/* Section Hero */}
      <section className="pb-20 pt-33 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Notre Travail</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Jetez un œil à certains de nos meilleurs travaux automobiles. De l&apos;entretien de routine aux 
            restaurations complètes et constructions de haute performance, chaque projet bénéficie de notre
            attention complète aux détails.
          </p>
        </div>
      </section>

      {/* Boutons de Filtre */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille de Galerie */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden relative">
                  
                        <Image
                          src={image.src}
                          alt={image.description}
                          fill
                          className="object-cover"
                        />
                      
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="secondary">{image.category}</Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-semibold">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fenêtre Modale Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
              <Image
                          src={selectedImage.src}
                          alt={selectedImage.description}
                          fill
                          className="object-cover"
                        />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
                <Badge variant="secondary">{selectedImage.category}</Badge>
              </div>
              <p className="text-white/80">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Section Statistiques */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projets Complétés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Années d&apos;Expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Client</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Prix Remportés</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
