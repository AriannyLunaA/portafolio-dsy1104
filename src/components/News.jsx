export default function News({ newsList }) {
  return (
    <section id="noticias" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Noticias Recientes</h2>
          <p className="text-muted">Novedades y avances técnicos</p>
        </div>
        <div className="row g-4">
          {newsList.map((item) => (
            <div key={item.id} className="col-12 col-md-6">
              <div className="p-4 border rounded shadow-sm bg-light h-100">
                <span className="badge bg-secondary mb-2">{item.date}</span>
                <h4 className="fw-bold mb-3">{item.title}</h4>
                <p className="text-secondary mb-0">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}