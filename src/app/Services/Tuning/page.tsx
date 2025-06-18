import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';

const tuningPackages = [
  {
    title: 'Réglage Stage 1',
    description:
      "Reprogrammation de l'ECU pour améliorer la puissance et le couple",
    features: [
      'Flash ECU',
      'Amélioration du Filtre à Air',
      'Analyse de Performance',
    ],
    powerGain: '+25-35 CV',
    torqueGain: '+30-50 lb-pi',
    price: 'À partir de 599 €',
    image:
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Réglage Stage 2',
    description: 'Forfait complet de mise à niveau de la performance',
    features: [
      'Réglage ECU + TCU',
      "Admission d'Air Froid",
      "Système d'Échappement",
      "Amélioration de l'Intercooler",
    ],
    powerGain: '+50-75 CV',
    torqueGain: '+70-100 lb-pi',
    price: 'À partir de 1,299 €',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Réglage Stage 3',
    description:
      'Performance maximale avec améliorations turbo/suralimentation',
    features: [
      'Amélioration Turbo/SC',
      'Gestion Complète du Moteur',
      'Amélioration du Système de Carburant',
      'Internes Forgés',
    ],
    powerGain: '+100-200 CV',
    torqueGain: '+150-250 lb-pi',
    price: 'À partir de 3,999 €',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

const featuredBuilds = [
  {
    title: 'Construction BMW M3 F80',
    specs: '650 CV / 580 lb-pi',
    mods: 'Conversion Turbo Simple, Moteur Forgé, Réglage Personnalisé',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Audi RS6 Avant',
    specs: '750 CV / 720 lb-pi',
    mods: 'Turbos Hybrides, Injection de Methanol, Réglage Stage 3+',
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Subaru WRX STI',
    specs: '450 CV / 420 lb-pi',
    mods: 'Turbo Garrett, Bloc Moteur Construit, Réglage E85',
    image:
      'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

export default function TuningPage() {
  return (
    <main className="pt-20">
      {/* Section Hero */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Optimisation de <span className="text-primary">Performance</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Libérez le véritable potentiel de votre véhicule avec nos services
            de réglage professionnels. De la reprogrammation de l&apos;ECU aux
            constructions de performance complètes, nous délivrons des résultats
            qui dépassent les attentes.
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">
                Voitures Réglées
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">
                Gain Moyen en CV
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">
                Taux de Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forfaits de Réglage */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Forfaits de Réglage
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choisissez le forfait de performance parfait pour votre véhicule
              et votre style de conduite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tuningPackages.map((pkg, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">IMAGE ICI</div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                    <Badge variant="secondary">{pkg.price}</Badge>
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="font-bold text-primary">
                        {pkg.powerGain}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Gain de Puissance
                      </div>
                    </div>
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <div className="font-bold text-primary">
                        {pkg.torqueGain}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Gain de Couple
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Comprend :</h4>
                    <ul className="space-y-1">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full">Obtenir un Devis</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Constructions en Vedette */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Constructions en Vedette
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez certaines de nos constructions de performance et
              transformations les plus impressionnantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBuilds.map((build, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden relative">
                  IMAGE ICI
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{build.title}</h3>
                    <p className="text-sm opacity-90">{build.specs}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{build.mods}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Libérer le Potentiel de Votre Voiture ?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Nos experts en réglage sont prêts à transformer votre véhicule en la
            machine que vous avez toujours voulu. Planifiez une consultation
            aujourd&apos;hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8">
              Planifier une Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Voir les Résultats du Dyno
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
