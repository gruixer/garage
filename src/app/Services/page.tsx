import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import Link from "next/link";

const services = [
  {
    title: "Carrosserie",
    description: "Réparations de pare-chocs, tôlerie, polyester et peinture complète ou partielle.",
    image: "https://images.unsplash.com/photo-1708805282695-ef186db20192?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Sur devis",
    href:"carrosserie"
  },
  {
    title: "Tuning",
    description: "Personnalisation esthétique et performance : jantes, modifications diverses et plus.",
    image: "https://images.unsplash.com/photo-1614688122129-6e6b3aa3e62c?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Sur demande",
    href:"/Services/Tuning"
  },
  {
    title: "Expertise",
    description: "Prise en charge complète des démarches d’expertise en cas de sinistre ou réparation.",
    image: "https://images.unsplash.com/photo-1583773192617-ff7374bc5844?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Inclus avec service",
    href:"expertise"
  },
  {
    title: "Pneus",
    description: "Vente de pneus toutes marques, montage, équilibrage, géométrie et stockage saisonnier.",
    image: "https://images.unsplash.com/photo-1642075191572-9992f5f290c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "À partir de 69 €",
    href:"/pneus"
  },
  {
    title: "Véhicule de Remplacement",
    description: "Mise à disposition d’un véhicule de courtoisie pendant vos réparations.",
    image: "https://images.unsplash.com/photo-1590590201828-628748b7832b?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Sur demande",
    href:"/vehicule-de-remplacement"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez l’ensemble de nos prestations, de la carrosserie au tuning, en passant par les pneus et l&apos;expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link href={service.href} key={index}>
  <Card  className="p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="w-full h-40 relative rounded-t-md overflow-hidden">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
      />
    </div>
    <CardHeader>
      <CardTitle className=" text-2xl font-bold text-primary">{service.title}</CardTitle>
      <CardDescription className="text-muted-foreground">
        {service.description}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-end">
        <button className="text-primary hover:text-primary/80 font-medium">
          En savoir plus →
        </button>
      </div>
    </CardContent>
  </Card>
  </Link>
))}
        </div>
      </div>
    </section>
  );
}
