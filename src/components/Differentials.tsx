const items = [
  {
    title: "Veículo próprio",
    desc: "Frota própria garantindo disponibilidade e comprometimento total com cada entrega.",
  },
  {
    title: "Compromisso com prazos",
    desc: "Pontualidade rigorosa para que sua operação nunca fique parada.",
  },
  {
    title: "Atendimento personalizado",
    desc: "Contato direto e próximo, entendendo a necessidade específica de cada cliente.",
  },
  {
    title: "Flexibilidade operacional",
    desc: "Adaptamos rotas e horários conforme a demanda da sua empresa.",
  },
  {
    title: "Segurança no transporte",
    desc: "Cuidado e responsabilidade em todo o trajeto, do embarque à entrega.",
  },
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      {/* decorative dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              Por que escolher
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Diferenciais que fazem a entrega acontecer
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-300">
              Somos uma empresa especializada e focada em oferecer um serviço próximo,
              confiável e sob medida para cada cliente.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <span className="text-3xl">⚡</span>
              <div className="text-sm text-slate-200">
                <div className="font-semibold text-white">Velocidade + Confiança</div>
                O equilíbrio ideal para sua logística
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it, i) => (
              <div
                key={it.title}
                className="reveal flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-brand-orange/40 hover:bg-white/[0.07]"
                data-delay={`${i * 0.08}s`}
              >
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-orange text-white">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white">{it.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
