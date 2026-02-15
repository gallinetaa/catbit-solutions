================================================================================
                    CATBIT SOLUTIONS - GUIA DE INSTALACION
                Soluciones tecnológicas con instinto felino 🐱
================================================================================

ESTRUCTURA DEL PROYECTO:
------------------------
catbit-solutions/
├── package.json              ← Dependencias del proyecto
├── next.config.ts            ← Configuracion de Next.js
├── tailwind.config.ts        ← Configuracion de Tailwind CSS
├── tsconfig.json             ← Configuracion de TypeScript
├── postcss.config.mjs        ← Configuracion de PostCSS
├── eslint.config.mjs         ← Configuracion de ESLint
│
├── public/
│   ├── cats/                 ← Fotos reales de los gatos del equipo
│   │   ├── gato1.jpg         ← Gris - Especialista UX
│   │   ├── gato2.jpg         ← Rayo - Desarrollador Senior
│   │   ├── gato3.jpg         ← Nyx - QA Testing
│   │   ├── gato4.jpg         ← Extra
│   │   └── gato5.jpg         ← Extra
│   │
│   └── illustrations/        ← Ilustraciones personalizadas
│       ├── catbit-team.jpg   ← Ilustración principal del equipo
│       ├── tech-workspace.jpg ← Workspace con gatos
│       ├── full-team.jpg     ← Equipo completo "Davincho Tech"
│       ├── logo-art.png      ← Logo artístico
│       ├── 404-cats.jpg      ← Página 404 con gatos
│       └── chill-cat.jpg     ← Gato relajado
│
└── src/
    ├── app/
    │   ├── page.tsx          ← Pagina principal
    │   ├── layout.tsx        ← Layout general
    │   ├── globals.css       ← Estilos globales y animaciones
    │   └── not-found.tsx     ← Página 404 personalizada con gatos
    │
    └── components/
        ├── Navigation.tsx        ← Menu de navegacion
        ├── Hero.tsx              ← Seccion principal con ilustracion
        ├── CircuitBackground.tsx ← Fondo animado con circuitos brillantes
        ├── Services.tsx          ← Seccion de servicios con ilustracion
        ├── Team.tsx              ← Seccion del equipo (NUEVO)
        ├── Portfolio.tsx         ← Galeria de trabajos
        ├── Blog.tsx              ← Articulos del blog
        ├── Contact.tsx           ← Formulario de contacto
        ├── Store.tsx             ← Tienda con planes de precios
        └── Footer.tsx            ← Pie de pagina

================================================================================
                          NOVEDADES DE ESTA VERSION
================================================================================

🎨 ILUSTRACIONES PERSONALIZADAS:
- Nueva ilustración principal del equipo en Hero
- Ilustración del workspace tech en Services
- Ilustración del equipo completo en Team
- Página 404 personalizada con gatos jugando

👨‍💻 NUEVA SECCION "EQUIPO":
- Cards de cada gato con skills
- Fotos reales + ilustraciones
- Efectos hover animados
- Datos curiosos felinos

✨ EFECTOS MEJORADOS:
- Glow effects en imágenes
- Animaciones en hover
- Paw prints flotantes
- Transiciones suaves

📄 PÁGINA 404:
- Ilustración personalizada
- Mensaje divertido
- Botones de navegación

================================================================================
                          PASO A PASO - INSTALACION
================================================================================

REQUISITOS PREVIOS:
-------------------
1. Node.js 18 o superior instalado
   - Descargar de: https://nodejs.org/
   - Verificar: node --version

2. Bun (recomendado) o npm
   - Instalar Bun: https://bun.sh/
   - Verificar: bun --version

================================================================================

PASO 1: CREAR EL PROYECTO
-------------------------
Abri una terminal y ejecuta:

    npx create-next-app@latest catbit-solutions

Responde las preguntas:
    - TypeScript? SI
    - ESLint? SI
    - Tailwind CSS? SI
    - src/ directory? SI
    - App Router? SI
    - Turbopack? SI
    - Customize import alias? NO (o mantene @/*)

================================================================================

PASO 2: COPIAR LOS ARCHIVOS
---------------------------
Una vez creado el proyecto, copia los archivos de este ZIP:

    COPIAR DESDE                    →    COPIAR HACIA
    ------------------------------------------------------------------
    src/app/page.tsx                →    src/app/page.tsx
    src/app/layout.tsx              →    src/app/layout.tsx
    src/app/globals.css             →    src/app/globals.css
    src/app/not-found.tsx           →    src/app/not-found.tsx
    src/components/*.tsx (todos)    →    src/components/
    public/cats/*.jpg (todos)       →    public/cats/
    public/illustrations/* (todos)  →    public/illustrations/
    next.config.ts                  →    next.config.ts
    tailwind.config.ts              →    tailwind.config.ts

================================================================================

PASO 3: INSTALAR DEPENDENCIAS
-----------------------------
En la carpeta del proyecto, ejecuta:

    cd catbit-solutions
    bun install

    O si usas npm:
    npm install

================================================================================

PASO 4: EJECUTAR EL PROYECTO
----------------------------
Con Bun:
    bun run dev

Con npm:
    npm run dev

El servidor iniciara en: http://localhost:3000

================================================================================

                       CARACTERISTICAS DE CATBIT SOLUTIONS
================================================================================

MARCA:
------
- Nombre: CatBit Solutions
- Eslogan: "Soluciones tecnologicas con instinto felino"
- Concepto: Fusion de tecnologia + amor por los gatos

EQUIPO TECNICO (LOS GATOS):
---------------------------
🐱 Gris   - Especialista en UX (gato gris tabby tranquilo)
🐱 Rayo   - Desarrollador Senior (gato gris con blanco, ojos verdes)
🐱 Nyx    - QA Testing (gato negro elegante)

SECCIONES:
----------
1. Inicio (Hero)
   - Ilustración principal del equipo
   - Titulo con gradiente cyan
   - Botones CTA rojo coral y outline
   - Fotos reales de los gatos
   - Estadisticas

2. Servicios
   - Ilustración del workspace
   - 8 tarjetas con emojis de gatos
   - Efectos glow y hover

3. Equipo (NUEVO)
   - Cards de cada miembro
   - Skills y descripciones
   - Ilustración del equipo completo

4. Portafolio
   - 6 proyectos con imagenes
   - Badges con emojis de gatos

5. Blog
   - 3 articulos de ejemplo

6. Contacto
   - Formulario funcional
   - Info de contacto

7. Tienda
   - 3 planes: Starter, Profesional, Enterprise

8. Página 404 (NUEVO)
   - Ilustración personalizada
   - "Esta página se escondió como un gato"

COLORES:
--------
- Fondo: #0a0a1a (azul marino oscuro)
- Accent primario: #00d4ff (cyan brillante)
- Accent secundario: #a855f7 (purpura)
- CTA/Botones: #ff4757 a #ff6b6b (rojo coral)
- Texto: blanco con variaciones

================================================================================

SOLUCION DE PROBLEMAS:
----------------------

Error: "Module not found"
    → Ejecuta: bun install

Error: "Port 3000 already in use"
    → Cambia el puerto: PORT=3001 bun run dev

Las imagenes no cargan:
    → Asegurate de copiar las carpetas public/cats/ y public/illustrations/

================================================================================

PERSONALIZACION:
----------------

Cambiar fotos de los gatos:
    Reemplaza los archivos en public/cats/ con tus propias fotos

Cambiar ilustraciones:
    Reemplaza los archivos en public/illustrations/

Cambiar colores:
    Edita src/app/globals.css - variables CSS al inicio

Cambiar textos:
    Edita cada componente en src/components/

================================================================================
                    ¡Gracias por elegir CatBit Solutions! 🐱
================================================================================
