import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";

const services = [
  {
    title: "Changements d'Huile",
    description: "Changements d'huile réguliers pour que votre moteur fonctionne parfaitement",
    icon: "🔧",
    price: "À partir de 39 €"
  },
  {
    title: "Service de Freins",
    description: "Inspection complète des freins, remplacement des plaquettes et entretien des rotors",
    icon: "🛠️",
    price: "À partir de 99 €"
  },
  {
    title: "Diagnostics du Moteur",
    description: "Diagnostics informatiques avancés pour identifier les problèmes de moteur",
    icon: "🔍",
    price: "À partir de 129 €"
  },
  {
    title: "Service de Transmission",
    description: "Changement de fluides de transmission et réparations majeures",
    icon: "⚙️",
    price: "À partir de 149 €"
  },
  {
    title: "Réparation de la Climatisation",
    description: "Diagnostic et services de réparation du système de climatisation",
    icon: "❄️",
    price: "À partir de 89 €"
  },
  {
    title: "Service des Pneus",
    description: "Installation, équilibrage, rotation et alignement des pneus",
    icon: "🛞",
    price: "À partir de 69 €"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous offrons des services automobiles complets pour que votre véhicule fonctionne au mieux.
            Tous nos travaux sont garantis satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <button className="text-primary hover:text-primary/80 font-medium">
                    En savoir plus →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
