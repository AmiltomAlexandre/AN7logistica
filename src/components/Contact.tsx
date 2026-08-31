import { WHATSAPP_LINK, WhatsAppIcon } from "./WhatsAppButton";

export default function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <svg
        className="pointer-events-none absolute -right-10 top-10 w-1/3 opacity-20"
        viewBox="0 0 300 200"
        fill="none"
      >
        <path
          className="animate-dash"
          d="M10 180 C 120 180, 120 40, 290 20"
          stroke="#ff6b1a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="10" cy="180" r="6" fill="#ff6b1a" />
        <circle cx="290" cy="20" r="6" fill="#fff" />
      </svg>

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 to-navy-800 shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Left content */}
            <div className="p-8 sm:p-12">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                Contato
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Vamos agilizar sua entrega?
              </h2>
              <p className="mt-4 leading-relaxed text-slate-300">
                Fale com a AN7 Logística e receba um atendimento rápido e personalizado
                para a sua necessidade.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-slate-400">
                      WhatsApp
                    </span>
                    <span className="block font-display text-lg font-bold text-white">
                      (19) 98857-7188
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-orange text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-slate-400">
                      Localização
                    </span>
                    <span className="block font-display text-lg font-bold text-white">
                      Campinas - SP
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col justify-center gap-6 bg-brand-orange p-8 sm:p-12">
              <div>
                <h3 className="font-display text-2xl font-extrabold text-white">
                  Solicite seu atendimento agora
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  Resposta rápida pelo WhatsApp. Coletas, entregas expressas e transporte de
                  pequenos volumes.
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-base font-bold text-navy-800 shadow-lg transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                Solicitar atendimento
              </a>
              <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                Atendimento para demandas urgentes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
