import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);

  // Validación de campos
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingrese un formato de correo válido (ej: usuario@dominio.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje no puede estar vacío.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe contener al menos 10 caracteres.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Limpia el mensaje de error del campo mientras se escribe
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    // Si existen errores, no envía y actualiza el estado
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setEnviado(false);
      return;
    }

    setErrors({});
    setEnviado(true);
    setFormData({ name: '', email: '', message: '' });
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
            Mensaje enviado correctamente. Nos pondremos en contacto pronto.
            <button
              type="button"
              className="btn-close"
              onClick={() => setEnviado(false)}
              aria-label="Cerrar"
            ></button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="card p-4 border-0 shadow-sm" noValidate>
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          {/* Correo Electrónico */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
              placeholder="nombre@ejemplo.com"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Mensaje */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-semibold">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}