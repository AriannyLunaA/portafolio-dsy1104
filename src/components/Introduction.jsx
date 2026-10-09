export default function Introduction({ name, role, bio, githubUrl }) {
  return (
    <section id="inicio" className="py-5 text-center bg-primary text-white">
      <div className="container">
        <div className="mb-4">
          <img
            src="https://picsum.photos/160/160?random=10"
            alt={`Foto de perfil de ${name}`}
            className="rounded-circle border border-3 border-white shadow"
            width="160"
            height="160"
          />
        </div>
        <h1 className="display-5 fw-bold">{name}</h1>
        <p className="fs-5 text-light mb-2">{role}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-decoration-underline d-inline-block mb-3"
        >
          {githubUrl}
        </a>
        <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
          {bio}
        </p>
        <div className="d-flex justify-content-center gap-3 fs-4 mt-3">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}