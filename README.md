# Portafolio Personal - Desarrollo Fullstack II (DSY1104)

Aplicación web modular construida con **React** y **Bootstrap 5**, diseñada como portafolio profesional responsivo bajo principios de desacoplamiento de datos, control de estado y accesibilidad web[cite: 3, 4, 7].

---

## 📌 Descripción del Proyecto

El proyecto consiste en una plataforma de presentación profesional que centraliza información de perfil, repositorio de proyectos técnicos, novedades del área y un canal de comunicación directo[cite: 3, 4]. Implementa una arquitectura basada en componentes reutilizables y carga de datos dinámica mediante estructuras locales en formato JSON.

### Tecnologías Utilizadas
* **Frontend:** React 18+ (gestionado mediante Vite)[cite: 2, 7]
* **Estilos y Maquetación:** Bootstrap 5, Bootstrap Icons y CSS3 personalizado
* **Persistencia Local:** Archivos JSON estructurados
* **Control de Versiones:** Git con flujo de ramas (`main`, `develop`, `feature/*`)

---

## 🏗️ Arquitectura y Estructura Modular

El código fuente sigue un patrón de diseño desacoplado que separa la capa de presentación de la capa de datos:

```text
src/
├── assets/             # Recursos estáticos locales
├── components/         # Componentes React independientes y reutilizables
│   ├── Navbar.jsx         # Navegación responsiva con estado local
│   ├── Introduction.jsx   # Hero section con datos parametrizados por props
│   ├── Projects.jsx       # Contenedor de la sección de proyectos
│   ├── ProjectCard.jsx    # Tarjeta reutilizable (Bootstrap Card)
│   ├── News.jsx           # Renderizado dinámico de noticias técnicas
│   └── Contact.jsx        # Formulario controlado con validaciones
├── data/               # Orígenes de datos en formato JSON
│   ├── projects.json      # Catálogo de desarrollos técnicos
│   └── news.json          # Registro de novedades y avances
├── App.jsx             # Componente raíz orquestador de estado y datos
├── index.css           # Variables de diseño y estilos personalizados
└── main.jsx            # Punto de entrada de la aplicación

