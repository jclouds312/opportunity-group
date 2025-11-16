import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Seguro de Vida Digital",
    description: "Proteja el futuro de su familia con una póliza de seguro de vida flexible y accesible. Contratación 100% online.",
    price: "Desde $15/mes",
    image: PlaceHolderImages.find(p => p.id === 'product-1'),
  },
  {
    id: 2,
    name: "Seguro de Salud Personalizado",
    description: "Cobertura médica a su medida. Elija los beneficios que necesita y pague solo por ellos.",
    price: "Desde $45/mes",
    image: PlaceHolderImages.find(p => p.id === 'product-2'),
  },
  {
    id: 3,
    name: "Seguro para Auto Inteligente",
    description: "Obtenga tarifas basadas en su conducción y gestione su póliza desde nuestra app.",
    price: "Desde $25/mes",
    image: PlaceHolderImages.find(p => p.id === 'product-3'),
  },
  {
    id: 4,
    name: "Seguro de Hogar Completo",
    description: "Proteja su vivienda y sus pertenencias contra todo riesgo con nuestra cobertura integral.",
    price: "Desde $20/mes",
    image: PlaceHolderImages.find(p => p.id === 'product-4'),
  },
];


export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Catálogo de Seguros Digitales</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Encuentre la cobertura perfecta para sus necesidades. Nuestros seguros son fáciles de entender, contratar y gestionar.
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
              <Button>Contratar Ahora</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
