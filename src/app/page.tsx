'use client'
import Image from 'next/image'

import { Hero } from "../components/Hero";



export default function HomePage() {
  return (
    <main>
      <Hero />
      
      {/* Section À Propos */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Services Auto de Confiance Depuis 1994
              </h2>
              <p className="text-muted-foreground text-lg">
                Sébastiano Aliberti, aujourd&apos;hui patron de la Carrosserie Aliberti, a repris les rênes de l’ancienne Carrosserie Schaer en août 1994, après y avoir travaillé pendant dix ans depuis 1984.

Son parcours débute à la Carrosserie du Relais, suivi d’une expérience à la Carrosserie Nocera à Yverdon, avant de rejoindre la Carrosserie Schaer à Cuarny, où se trouve désormais son propre atelier.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Mécaniciens Certifiés</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Service d&apos;Urgence 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Garantie Sur Tous Les Travaux</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Devis Gratuits</span>
                </div>
              </div>
            </div>
            
          
         <div className="relative aspect-3/2 rounded-md overflow-hidden">
  <Image
    src="/index.jpg"
    width={500}
    height={500}
    alt="Picture of the author"
    className="object-cover w-full h-full"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent rounded-md" />
</div>
              {/* <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Client</div>
              </div> */}
            
          </div>
        </div>
      </section>
    </main>
  );
}
