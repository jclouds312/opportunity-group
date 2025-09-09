import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Landmark, ShoppingCart, Sparkles, Star, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const productFeatureImage = PlaceHolderImages.find(p => p.id === 'product-feature');
  const investmentFeatureImage = PlaceHolderImages.find(p => p.id === 'investment-feature');
  const aiFeatureImage = PlaceHolderImages.find(p => p.id === 'ai-feature');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover -z-10"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              Opportunity Group
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Su puerta de entrada a productos digitales e inversiones inteligentes, impulsado por IA.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/products">
                Empezar a Explorar <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Descubra un mundo de oportunidades con nuestra selección de productos, inversiones y recomendaciones personalizadas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <ShoppingCart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Productos Digitales</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                {productFeatureImage && (
                  <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                    <Image
                      src={productFeatureImage.imageUrl}
                      alt={productFeatureImage.description}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={productFeatureImage.imageHint}
                    />
                  </div>
                )}
                <CardDescription className="text-sm mb-4 flex-grow">
                  Explore un catálogo seleccionado de software de vanguardia, cursos en línea y más, todo verificado para su seguridad y calidad.
                </CardDescription>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="outline" className="w-full">
                  <Link href="/products">Ver Productos</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Landmark className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Inversiones Inteligentes</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                {investmentFeatureImage && (
                  <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                    <Image
                      src={investmentFeatureImage.imageUrl}
                      alt={investmentFeatureImage.description}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={investmentFeatureImage.imageHint}
                    />
                  </div>
                )}
                <CardDescription className="text-sm mb-4 flex-grow">
                  Diversifique su cartera con nuestra gama de opciones de inversión, diseñadas para diferentes perfiles de riesgo y objetivos financieros.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/investments">Explorar Inversiones</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Recomendaciones con IA</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                {aiFeatureImage && (
                  <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                    <Image
                      src={aiFeatureImage.imageUrl}
                      alt={aiFeatureImage.description}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={aiFeatureImage.imageHint}
                    />
                  </div>
                )}
                <CardDescription className="text-sm mb-4 flex-grow">
                  Nuestro motor de IA analiza su perfil para sugerir productos e inversiones que se alinean perfectamente con sus intereses y metas.
                </CardDescription>
              </CardContent>
               <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/recommendations">Obtener Recomendaciones</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

       <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Lo que dicen nuestros clientes</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Descubra por qué los inversores y emprendedores confían en Opportunity Group.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Rodríguez',
                title: 'Inversor Tecnológico',
                quote: 'La plataforma me dio acceso a oportunidades de inversión que no habría encontrado en ningún otro lugar. ¡Mi cartera nunca ha estado mejor!',
                avatarSeed: 'carlos-rodriguez'
              },
              {
                name: 'Laura Gómez',
                title: 'Emprendedora Digital',
                quote: 'Gracias a las recomendaciones de la IA, pude elegir los productos digitales perfectos para lanzar mi nuevo negocio. ¡Un servicio invaluable!',
                avatarSeed: 'laura-gomez'
              },
              {
                name: 'Alejandro Torres',
                title: 'Consultor Financiero',
                quote: 'Opportunity Group ha simplificado mi proceso de diversificación. La interfaz es intuitiva y el soporte al cliente es de primera clase.',
                avatarSeed: 'alejandro-torres'
              }
            ].map((testimonial) => (
              <Card key={testimonial.name} className="bg-card p-6 flex flex-col items-center text-center">
                 <Image
                  src={`https://picsum.photos/seed/${testimonial.avatarSeed}/100/100`}
                  alt={`Avatar de ${testimonial.name}`}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <CardContent className="p-0 flex-grow">
                  <Quote className="w-8 h-8 text-primary/50 mb-4 mx-auto" />
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex justify-center text-yellow-500 mb-2">
                      <Star className="w-5 h-5" />
                      <Star className="w-5 h-5" />
                      <Star className="w-5 h-5" />
                      <Star className="w-5 h-5" />
                      <Star className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold font-headline">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
