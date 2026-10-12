import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import News from './components/News';
import Contact from './components/Contact';

// Fuentes de datos locales
import initialProjects from './data/projects.json';
import initialNews from './data/news.json';

export default function App() {
  // Manejo de estado exigido por la pauta
  const [projects, setProjects] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Carga de datos JSON al montar el componente
    setProjects(initialProjects);
    setNews(initialNews);
  }, []);

  const profile = {
    name: "Luna",
    role: "Ingeniería en Informática | Backend & Data",
    bio: "Bienvenida a mi portafolio personal donde comparto mis proyectos de desarrollo de software, arquitecturas y últimas noticias técnicas.",
    githubUrl: "https://github.com",
    avatar: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=500&auto=format&fit=crop&q=80"
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Introduction
          name={profile.name}
          role={profile.role}
          bio={profile.bio}
          githubUrl={profile.githubUrl}
          avatar={profile.avatar}
        />
        <Projects projects={projects} />
        <News newsList={news} />
        <Contact />
      </main>
      <footer className="py-3 bg-dark text-white text-center">
        <small>&copy; {new Date().getFullYear()} Luna. Todos los derechos reservados.</small>
      </footer>
    </div>
  );
}