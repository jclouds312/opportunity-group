import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const investments = [
  {
    id: 1,
    title: "Fondo de Crecimiento Tecnológico",
    description: "Invierta en un portafolio diversificado de empresas tecnológicas de alto crecimiento con potencial disruptivo.",
    roi: "15-20% anual proyectado",
    risk: "Alto",
    image: PlaceHolderImages.find(p => p.id === 'investment-1'),
  },
  {
    id: 2,
    title: "Bonos de Energía Verde",
    description: "Apoye proyectos de energía renovable y obtenga un rendimiento estable y predecible.",
    roi: "5-7% anual",
    risk: "Bajo",
    image: PlaceHolderImages.find(p => p.id === 'investment-2'),
  },
  {
    id: 3,
    title: "Inversión Inmobiliaria Fraccionada",
    description: "Sea dueño de una parte de propiedades de alto valor con una inversión inicial baja.",
    roi: "8-12% anual + apreciación",
    risk: "Medio",
    image: PlaceHolderImages.find(p => p.id === 'investment-3'),
  },
  {
    id: 4,
    title: "Fondo de Venture Capital",
    description: "Acceda a startups en etapa temprana seleccionadas por expertos con un potencial de crecimiento exponencial.",
    roi: "25%+ potencial",
    risk: "Muy Alto",
    image: PlaceHolderImages.find(p => p.id === 'investment-4'),
  },
];

export default function InvestmentsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Oportunidades de Inversión</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Explore nuestra selección de oportunidades de inversión diseñadas para ayudarle a alcanzar sus metas financieras.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {investments.map((investment) => (
          <Card key={investment.id} className="flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full md:w-1/3 h-48 md:h-auto">
              {investment.image && (
                <Image
                  src={investment.image.imageUrl}
                  alt={investment.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={investment.image.imageHint}
                />
              )}
            </div>
            <div className="w-full md:w-2/3 flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">{investment.title}</CardTitle>
                <CardDescription>{investment.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-2">
                <div><span className="font-semibold">ROI Proyectado:</span> {investment.roi}</div>
                <div><span className="font-semibold">Nivel de Riesgo:</span> {investment.risk}</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90">Investir</Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
