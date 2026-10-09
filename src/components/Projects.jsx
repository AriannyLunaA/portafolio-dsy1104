import ProjectCard from './ProjectCard';

export default function Projects({ projects }) {
  return (
    <section id="proyectos" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Mis Proyectos</h2>
          <p className="text-muted">Desarrollos recientes y soluciones de software</p>
        </div>
        <div className="row">
          {projects.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}