
"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generatePersonalizedRecommendations } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Loader2, Sparkles, Clipboard, ClipboardCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  userProfile: z.string().min(10, {
    message: "El perfil de usuario debe tener al menos 10 caracteres.",
  }).describe('The user profile, including investment interests.'),
  pastPurchases: z.string().min(10, {
    message: "Las compras anteriores deben tener al menos 10 caracteres.",
  }).describe('The user past purchases.'),
});

export function RecommendationsForm() {
  const [isPending, startTransition] = useTransition();
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userProfile: "Inversor de 35 años con interés en tecnología y energías renovables. Tolerancia al riesgo media-alta. Busca crecimiento a largo plazo.",
      pastPurchases: "Acciones de Tesla (TSLA), ETF de energía solar (TAN), curso online de desarrollo de software.",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setRecommendations(null);
    setIsCopied(false);
    startTransition(async () => {
      const result = await generatePersonalizedRecommendations(values);
      if (result && result.recommendations) {
        setRecommendations(result.recommendations);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "No se pudieron generar las recomendaciones. Por favor, inténtelo de nuevo.",
        });
      }
    });
  }

  const handleCopy = () => {
    if (recommendations) {
      navigator.clipboard.writeText(recommendations).then(() => {
        setIsCopied(true);
        toast({
          title: "Copiado",
          description: "Las recomendaciones se han copiado al portapapeles.",
        });
        setTimeout(() => setIsCopied(false), 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        toast({
          variant: "destructive",
          title: "Error al copiar",
          description: "No se pudo copiar el texto al portapapeles.",
        });
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Genere sus Recomendaciones</CardTitle>
          <CardDescription>
            Complete su perfil y compras anteriores para recibir consejos de inversión personalizados por nuestra IA.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="userProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Perfil de Usuario e Intereses de Inversión</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ej: Inversor de 35 años con interés en tecnología y energías renovables..."
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describa su perfil de inversor, incluyendo edad, tolerancia al riesgo e intereses.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pastPurchases"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Compras Anteriores</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ej: Acciones de Apple, un curso de marketing digital..."
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Enumere algunas de sus inversiones o compras de productos digitales anteriores.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Obtener Recomendaciones
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card className="flex flex-col">
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <CardTitle className="font-headline text-2xl">Sus Recomendaciones Personalizadas</CardTitle>
            <CardDescription>
              Aquí se mostrarán las oportunidades de inversión sugeridas por nuestra IA.
            </CardDescription>
          </div>
          {recommendations && (
            <Button variant="ghost" size="icon" onClick={handleCopy}>
              {isCopied ? <ClipboardCheck className="h-5 w-5 text-green-500" /> : <Clipboard className="h-5 w-5" />}
            </Button>
          )}
        </CardHeader>
        <CardContent className="flex-grow">
          {isPending && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-4">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p>Analizando su perfil...</p>
            </div>
          )}
          {recommendations ? (
            <div 
              className="prose prose-sm dark:prose-invert max-w-none" 
              dangerouslySetInnerHTML={{ __html: recommendations.replace(/\n/g, '<br />') }}
            />
          ) : !isPending && (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
              <Sparkles className="h-12 w-12 mb-4" />
              <p>Sus recomendaciones aparecerán aquí.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
