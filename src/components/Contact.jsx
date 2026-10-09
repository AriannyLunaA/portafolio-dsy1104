import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setEnviado(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: '650px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Contacto</h2>
          <p className="text-muted">Déjame un mensaje para colaboraciones o consultas técnicas</p>
        </div>

        {enviado && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            Mensaje registrado correctamente.
            <button
              type="button"
              className="btn-close"
              onClick={() => setEnviado(false)}
              aria-label="Close"
            ></button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card p-4 border-0 shadow-sm">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}