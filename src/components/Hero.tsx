import Image from 'next/image'

export function Hero() {
  return (
    <section id="home" className="relative bg-black py-20 overflow-hidden">
      {/* Image de fond avec overlay */}
      
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[1500px] h-full  overflow-hidden z-0 border-0 ">
  <div className="relative w-full h-full">
   <Image
  src="https://images.unsplash.com/photo-1658244500543-47f32dc51dc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Background Hero"
  fill
  priority
  className="object-cover object-[10%]"
/>
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-black" />
  </div>
</div>
    

      {/* Contenu texte au-dessus */}
      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center text-white">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Carrosserie 
            <span className="text-primary block">S.aliberti</span>
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
        <div>{/* Partie droite vide ou autre contenu */}</div>
      </div>
    </section>
  );
}
