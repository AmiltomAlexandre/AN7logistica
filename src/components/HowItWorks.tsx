const steps = [
  {
    n: "1",
    title: "Cliente solicita a coleta",
    desc: "Entre em contato pelo WhatsApp e informe os detalhes do transporte.",
    icon: "💬",
  },
  {
    n: "2",
    title: "Realizamos a retirada",
    desc: "Vamos até o local combinado e retiramos o material com cuidado.",
    icon: "📦",
  },
  {
    n: "3",
    title: "Transportamos com segurança",
    desc: "Levamos sua carga com responsabilidade em todo o trajeto.",
    icon: "🛣️",
  },
  {
    n: "4",
    title: "Entregamos no destino",
    desc: "Entrega concluída no endereço informado, com agilidade.",
    icon: "✅",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
            Simples, rápido e sem complicação
          </h2>
          <p className="mt-4 text-slate-600">
            Um processo direto para que você foque no seu negócio enquanto cuidamos da entrega.
          </p>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-9 hidden h-0.5 lg:block">
            <svg className="h-2 w-full" preserveAspectRatio="none" viewBox="0 0 100 2">
              <line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="#ff6b1a"
                strokeWidth="0.4"
                strokeDasharray="1.5 1.5"
              />
            </svg>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal relative flex flex-col items-center text-center"
                data-delay={`${i * 0.12}s`}
              >
                <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-4 border-white bg-navy-700 shadow-lg">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-700 text-2xl">
                    {s.icon}
                  </span>
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange font-display text-sm font-bold text-white shadow-md">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
