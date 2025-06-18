import Link from "next/link";
import { Button } from "./ui/button";



export function Hero() {
  return (
    <section id="home" className="relative bg-background py-20 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Services de Réparation Auto
            <span className="text-primary block">Professionnels</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Mécaniciens experts offrant des services automobiles de qualité avec plus de 20 ans d&apos;expérience.
            Votre voiture mérite les meilleurs soins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8"
              
            >
                <Link href="/reviews">Planifier un Service</Link>
              
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8"
              
            >
                <Link href="/reviews">Réparations d&apos;Urgence</Link>
              
            </Button>
          </div>
          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Voitures Servies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Années d&apos;Expérience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Service d&apos;Urgence</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          PHOTO ICI
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl">
            <div className="text-sm font-medium">Certifié</div>
            <div className="text-xs opacity-90">Mécaniciens ASE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
