import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Suite de Productividad Pro",
    description: "Un conjunto completo de herramientas para optimizar su flujo de trabajo y aumentar la eficiencia.",
    price: "$49.99",
    image: PlaceHolderImages.find(p => p.id === 'product-1'),
  },
  {
    id: 2,
    name: "Curso de Marketing Digital Avanzado",
    description: "Aprenda estrategias de vanguardia para hacer crecer su negocio en línea de la mano de expertos de la industria.",
    price: "$99.99",
    image: PlaceHolderImages.find(p => p.id === 'product-2'),
  },
  {
    id: 3,
    name: "Colección de Ebooks de Inversión",
    description: "Una biblioteca de conocimientos sobre estrategias de inversión, análisis de mercado y gestión de riesgos.",
    price: "$29.99",
    image: PlaceHolderImages.find(p => p.id === 'product-3'),
  },
  {
    id: 4,
    name: "Software de Análisis de Datos IA",
    description: "Visualice sus datos y obtenga información procesable con el poder de la inteligencia artificial.",
    price: "$149.99",
    image: PlaceHolderImages.find(p => p.id === 'product-4'),
  },
];


export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Catálogo de Productos Digitales</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Explore nuestra selección de productos y servicios digitales de alta calidad, diseñados para potenciar su vida y negocio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48">
              {product.image && (
                <Image
                  src={product.image.imageUrl}
                  alt={product.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={product.image.imageHint}
                />
              )}
            </div>
            <CardHeader>
              <CardTitle className="font-headline">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="text-lg font-bold text-primary">{product.price}</div>
              <Button>Comprar Ahora</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
