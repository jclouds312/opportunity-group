import { BackButton } from "@/components/back-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Users } from "lucide-react"

export default function AdminUsersPage() {
  return (
    <>
      <BackButton />
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-3xl">Gestión de Usuarios</CardTitle>
          </div>
          <CardDescription>
            Aquí podrá ver, editar y gestionar los usuarios de la plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">La tabla de usuarios se implementará aquí.</p>
            <p className="text-sm text-muted-foreground">(Funcionalidad en desarrollo)</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
