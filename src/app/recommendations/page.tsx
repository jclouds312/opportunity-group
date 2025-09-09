import { RecommendationsForm } from "@/components/recommendations-form";

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Asesor de Inversiones con IA</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Utilice nuestra herramienta de inteligencia artificial para recibir recomendaciones de inversión personalizadas basadas en su perfil único.
        </p>
      </div>
      <RecommendationsForm />
    </div>
  );
}
