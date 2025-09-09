# Opportunity Group - Firebase Studio

Esta es una aplicación Next.js creada con Firebase Studio.

## Primeros Pasos

Para comenzar a desarrollar, eche un vistazo a `src/app/page.tsx`.

## Funcionalidades

*   **Autenticación de Usuarios:** Sistema de registro e inicio de sesión seguro utilizando Firebase Authentication (correo/contraseña y Google).
*   **Gestión de Roles:** Diferenciación entre usuarios `admin` y `client`. El rol de administrador se asigna basado en el correo electrónico en el archivo `src/lib/users.json`.
*   **Panel de Administración:** Una ruta protegida `/admin` a la que solo los usuarios administradores pueden acceder.
*   **Tema Claro/Oscuro:** Interruptor de tema para una mejor experiencia de usuario.
*   **Generación de Recomendaciones con IA:** Una página dedicada para que los usuarios obtengan recomendaciones de inversión personalizadas generadas por IA.

### Usuario Administrador de Prueba

Para acceder al panel de administración, primero debe registrar un usuario con el siguiente correo electrónico:

*   **Email:** `mateo@hurtado.com`
*   **Contraseña:** La que usted elija durante el registro.

Una vez registrado e iniciada la sesión, verá el enlace "Panel Admin" en el menú de usuario.

## Despliegue

Este proyecto está listo para ser desplegado en plataformas como Vercel o Netlify.

### Despliegue en Vercel

1.  **Subir a GitHub:** Suba el código de este proyecto a un repositorio de GitHub.
2.  **Importar en Vercel:** Inicie sesión en su cuenta de Vercel y cree un nuevo proyecto, importando el repositorio de GitHub que acaba de crear.
3.  **Configurar Variables de Entorno:** Vercel detectará que es un proyecto Next.js y lo configurará automáticamente. No se requieren variables de entorno especiales para la configuración básica de Firebase, ya que la configuración está incluida en el código fuente (lo cual es seguro para las configuraciones de cliente de Firebase).
4.  **Desplegar:** Haga clic en el botón "Deploy". Vercel construirá y desplegará su aplicación.

## Scripts Disponibles

En el directorio del proyecto, puede ejecutar:

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo.
Abra [http://localhost:9002](http://localhost:9002) para verlo en su navegador.

La página se recargará si realiza modificaciones.
También verá cualquier error de lint en la consola.

### `npm run build`

Construye la aplicación para producción en la carpeta `.next`.
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

### `npm run start`

Inicia la aplicación en modo de producción. Debe ejecutar `npm run build` primero.
