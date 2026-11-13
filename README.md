# VitaSalud — sitio web y PWA editable

## Abrir y editar
1. Descomprime la carpeta.
2. Abre `VitaSalud-Web` desde Visual Studio Code.
3. Ejecuta `index.html` con Live Server.
4. Edita `index.html` (contenido), `style.css` (diseño) y `app.js` (interacciones).

## Publicar gratis en GitHub Pages
1. En GitHub, crea un repositorio nuevo llamado `vitasalud-farmacia`.
2. Déjalo como **Public** para que los compañeros puedan ver el repositorio y la web.
3. Sube TODOS los archivos y carpetas de esta carpeta directamente a la raíz del repositorio. No subas el ZIP como único archivo.
4. En el repositorio entra a **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**.
6. Selecciona la rama `main` y la carpeta `/ (root)`, y pulsa **Save**.
7. Espera unos minutos. GitHub mostrará la dirección publicada, normalmente:
   `https://TU-USUARIO.github.io/vitasalud-farmacia/`

Cada vez que hagan `commit` y `push` a `main`, GitHub Pages actualizará la página.

## Trabajar con compañeros
- Para que solo una persona publique: los demás pueden compartir cambios como Pull Requests.
- Para que todos editen directamente: en **Settings → Collaborators** agrega sus usuarios de GitHub y dales acceso de escritura.
- Recomendación: cada persona trabaja en una rama propia y luego abre un Pull Request hacia `main`. Así pueden revisar cambios antes de publicar.

## Instalar como app (PWA)
La web incluye `manifest.json`, `service-worker.js` e `icon.svg`. Al publicarla en GitHub Pages (HTTPS), puede instalarse:
- **Android / Chrome:** abre la URL y usa el menú del navegador → Instalar aplicación / Añadir a pantalla principal.
- **PC / Chrome o Edge:** usa el icono de instalar en la barra de direcciones o el menú del navegador.
- **iPhone:** abre en Safari → Compartir → Añadir a pantalla de inicio.

El service worker guarda los archivos principales para permitir abrir la app sin conexión después de la primera visita. Los recursos externos de Google Fonts necesitan internet.

## Personalizar antes de compartir
- En `app.js`, cambia `WHATSAPP_NUMBER` por el número real en formato internacional, sin `+` ni espacios.
- En `index.html`, actualiza dirección, correo, horario y redes sociales.
- Ajusta misión, visión, valores, servicios y categorías según el proyecto.
- Los productos son categorías demostrativas, no inventario real.

## Archivos
- `index.html`: contenido.
- `style.css`: estilos adaptables.
- `app.js`: menú, filtros y formulario WhatsApp.
- `manifest.json`: configuración de instalación PWA.
- `service-worker.js`: caché y funcionamiento básico sin conexión.
- `icon.svg`: icono de la app.

No requiere instalar paquetes ni frameworks. Para publicar, GitHub Pages necesita que el repositorio sea público en cuentas gratuitas.
