import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prenez Contact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Prêt à planifier votre service ? Contactez-nous dès aujourd&apos;hui pour un devis gratuit
            ou des réparations d&apos;urgence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span>Visitez notre atelier</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>123 Rue Principale</p>
                <p>Quartier Automobile</p>
                <p>Votre Ville, ST 12345</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <span>Appelez-nous</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-xl font-semibold text-primary">(555) 123-CARS</p>
                <p>Urgence : (555) 911-AUTO</p>
                <p className="text-sm text-muted-foreground">Disponible 24/7 pour les urgences</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <span className="text-2xl">🕒</span>
                  <span>Horaires</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi :</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi :</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche :</span>
                  <span>Urgence uniquement</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
                    <Input id="name" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Téléphone</label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" type="email" placeholder="votre@email.com" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Requis</label>
                  <Input id="service" placeholder="par ex., Vidange, réparation des freins" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Parlez-nous de votre véhicule et des problèmes que vous rencontrez..."
                    rows={4}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <iframe
            title="Localisation sur Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.2623199093707!2d6.6900805!3d46.7692609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478dd1f6dc31babb%3A0x283fd4e8f01160f9!2sAliberti%20Sebastiano!5e0!3m2!1sfr!2sch!4v1718700000000!5m2!1sfr!2sch"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
