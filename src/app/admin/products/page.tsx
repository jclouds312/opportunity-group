import { BackButton } from "@/components/back-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"

export default function AdminProductsPage() {
  return (
    <>
      <BackButton />
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-3xl">Gestión de Productos</CardTitle>
          </div>
          <CardDescription>
            Aquí podrá añadir, editar y eliminar los productos digitales de la tienda.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">La tabla de productos se implementará aquí.</p>
            <p className="text-sm text-muted-foreground">(Funcionalidad en desarrollo)</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
