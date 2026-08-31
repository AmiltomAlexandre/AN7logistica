export default function About() {
  return (
    <section id="sobre" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 to-navy-900 p-8 shadow-2xl shadow-navy-900/20">
              <svg
                className="absolute right-0 top-0 h-40 w-40 opacity-20"
                viewBox="0 0 100 100"
                fill="none"
              >
                <path
                  className="animate-dash"
                  d="M5 90 C 40 90 40 20 95 10"
                  stroke="#ff6b1a"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange text-2xl">
                    🚚
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold text-white">
                      Agilidade que sua empresa precisa
                    </div>
                    <div className="text-sm text-slate-300">Atendimento próximo e responsável</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "📍", t: "Campinas e Região" },
                    { icon: "🔁", t: "Campinas ↔ SP" },
                    { icon: "⏱️", t: "Demandas urgentes" },
                    { icon: "🛡️", t: "Transporte seguro" },
                  ].map((c) => (
                    <div
                      key={c.t}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                    >
                      <div className="text-2xl">{c.icon}</div>
                      <div className="mt-2 text-sm font-medium text-white">{c.t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal" data-delay="0.15s">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
              Sobre a empresa
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl">
              Especialistas em entregas expressas para empresas
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                A <strong className="text-navy-800">AN7 Logística</strong> oferece serviços de
                coleta e entrega expressa para empresas que precisam de agilidade, responsabilidade
                e atendimento personalizado.
              </p>
              <p>
                Atuamos em <strong className="text-navy-800">Campinas e região</strong>, com
                disponibilidade para deslocamentos e operações entre{" "}
                <strong className="text-navy-800">Campinas e São Paulo</strong>.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Confiança", "Velocidade", "Segurança", "Flexibilidade"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-navy-50 px-4 py-2 text-sm font-semibold text-navy-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
