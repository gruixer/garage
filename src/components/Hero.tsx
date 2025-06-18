
import Image from 'next/image'

export function Hero() {
  return (
    <section id="home" className="relative bg-background py-20 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Services Auto
            <span className="text-primary block">Professionnels</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Mécaniciens experts offrant des services automobiles de qualité avec plus de 30 ans d&apos;expérience.
            Votre voiture mérite les meilleurs soins.
          </p>
          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Voitures Servies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Années d&apos;Expérience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Service d&apos;Urgence</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
           <div className="relative  aspect-3/2 rounded-md overflow-hidden">
    <Image
      src="/paint.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent rounded-md" />
  </div>
          {/* <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl">
            <div className="text-sm font-medium">Certifié</div>
            <div className="text-xs opacity-90">Mécaniciens ASE</div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
