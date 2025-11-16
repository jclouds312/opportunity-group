'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Landmark, ShieldCheck, Sparkles, Star, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
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
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              {t('description')}
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/products">
                Discover Products <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Discover a world of opportunities with our selection of digital products, investments, and personalized recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Digital Products</CardTitle>
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
                  Protect what matters most with our range of digital products. Easy to purchase, manage, and without paperwork.
                </CardDescription>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="outline" className="w-full">
                  <Link href="/products">View Products</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Landmark className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">Smart Investments</CardTitle>
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
                  Diversify your portfolio with our range of investment options, designed for different risk profiles and financial goals.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/investments">Explore Investments</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">AI-Powered Advice</CardTitle>
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
                   Our AI engine analyzes your profile to suggest the products and investments that best suit your needs and goals.
                </CardDescription>
              </CardContent>
               <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/recommendations">Get Recommendations</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

       <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Find out why customers trust Venta Digital Segura for their financial security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Rodríguez',
                title: 'Satisfied Customer',
                quote: 'Purchasing my car insurance was incredibly easy and fast. The entire process was 100% digital and hassle-free!',
                avatarSeed: 'carlos-rodriguez'
              },
              {
                name: 'Laura Gómez',
                title: 'Protected Family',
                quote: 'Thanks to the AI recommendations, I found the perfect life insurance for my family. I feel calm and secure.',
                avatarSeed: 'laura-gomez'
              },
              {
                name: 'Alejandro Torres',
                title: 'Smart Investor',
                quote: 'Venta Digital Segura not only helped me secure my assets, but also offered me excellent options to grow them.',
                avatarSeed: 'alejandro-torres'
              }
            ].map((testimonial) => (
              <Card key={testimonial.name} className="bg-card p-6 flex flex-col items-center text-center">
                 <Image
                  src={`https://picsum.photos/seed/${testimonial.avatarSeed}/100/100`}
                  alt={`Avatar of ${testimonial.name}`}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <CardContent className="p-0 flex-grow">
                  <Quote className="w-8 h-8 text-primary/50 mb-4 mx-auto" />
                  <p className="text-muted-foreground italic mb-4">\"{testimonial.quote}\"</p>
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
