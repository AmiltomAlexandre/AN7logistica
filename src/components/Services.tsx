interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const iconClass = "h-7 w-7";

const services: Service[] = [
  {
    title: "Coletas empresariais",
    desc: "Retirada de materiais e mercadorias diretamente na sua empresa, com pontualidade.",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Entregas expressas",
    desc: "Transporte rápido e ágil para atender prazos apertados com total confiança.",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 3v6h6M3 12h6m-4 4h4m-2-8h2M14 7l4 4v6h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H4V9" />
      </svg>
    ),
  },
  {
    title: "Pequenos volumes",
    desc: "Especializados no transporte de cargas pequenas e itens de valor com cuidado.",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9-5-9 5m18 0l-9 5m9-5v8l-9 5m0-8L3 8m9 5v8M3 8v8" />
      </svg>
    ),
  },
  {
    title: "Documentos e materiais",
    desc: "Envio seguro de documentos importantes, contratos e materiais empresariais.",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Rotas Campinas ↔ São Paulo",
    desc: "Operações e deslocamentos regulares entre Campinas, região e São Paulo.",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.5 2 1.5-6M9 20l6-2M9 20V8m6 10l5.5 2-1.5-6M15 18V6M9 8l6-2m0 0V4" />
      </svg>
    ),
  },
  {
    title: "Demandas urgentes",
    desc: "Atendimento flexível para emergências e solicitações de última hora.",
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            Nossos serviços
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
            Soluções completas em transporte expresso
          </h2>
          <p className="mt-4 text-slate-600">
            Atendemos as necessidades logísticas da sua empresa com agilidade e profissionalismo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-navy-900/10"
              data-delay={`${i * 0.08}s`}
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-brand-orange/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-700 text-white transition-colors duration-300 group-hover:bg-brand-orange">
                {s.icon}
              </div>
              <h3 className="relative mt-5 font-display text-lg font-bold text-navy-900">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
