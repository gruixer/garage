import Link from 'next/link';

export function Footer() {

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AG</span>
              </div>
              <span className="font-bold">AutoGarage Pro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Services automobiles professionnels avec plus de 20 ans d&apos;expérience.
              Votre partenaire de confiance pour toute la maintenance et les réparations de véhicules.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/general-repairs">Réparations Générales</Link></li>
              <li><Link href="/services/performance-tuning">Optimisation des Performances</Link></li>
              <li><Link href="/services/engine-diagnostics">Diagnostics du Moteur</Link></li>
              <li><Link href="/services/transmission">Transmission</Link></li>
              <li><Link href="/services/ac-repair">Réparation de la Climatisation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about">À Propos de Nous</Link></li>
              <li><Link href="/our-work">Notre Travail</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/careers">Carrières</Link></li>
              <li><Link href="/reviews">Avis</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Informations de Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <p>Carrosserie Aliberti</p>
              <p>Le Grand Nouz</p>
              <p>1404 Cuarny</p>
              <li>carro.aliberti@bluewin.ch</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 AutoGarage Pro. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy">
              Politique de Confidentialité
            </Link>
            <Link href="/terms-of-service">
              Conditions d&apos;Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
