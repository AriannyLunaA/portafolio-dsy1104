export default function ProjectCard({ title, description, technologies, image, link }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <img
          src={image}
          className="card-img-top"
          alt={`Captura del proyecto ${title}`}
          style={{ height: '180px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold text-dark">{title}</h5>
          <p className="card-text text-secondary flex-grow-1">{description}</p>
          <div className="mb-3 d-flex flex-wrap gap-1">
            {technologies.map((tech, idx) => (
              <span key={idx} className="badge bg-light text-dark border">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mt-auto"
          >
            Ver Proyecto <i className="bi bi-box-arrow-up-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}