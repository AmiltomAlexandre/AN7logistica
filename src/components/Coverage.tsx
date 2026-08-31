const areas = [
  {
    title: "Campinas - SP",
    desc: "Atendimento completo em toda a cidade de Campinas.",
    icon: "🏙️",
  },
  {
    title: "Região Metropolitana",
    desc: "Cobertura nas cidades da Região Metropolitana de Campinas.",
    icon: "🗺️",
  },
  {
    title: "Campinas ↔ São Paulo",
    desc: "Deslocamentos e operações regulares entre Campinas e São Paulo.",
    icon: "🔁",
  },
];

export default function Coverage() {
  return (
    <section id="atendimento" className="relative overflow-hidden bg-navy-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            Área de atendimento
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
            Onde levamos a sua entrega
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {areas.map((a, i) => (
            <div
              key={a.title}
              className="reveal group relative overflow-hidden rounded-2xl bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              data-delay={`${i * 0.1}s`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-50 text-3xl transition-colors group-hover:bg-brand-orange/10">
                {a.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
