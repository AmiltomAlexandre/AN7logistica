import { WHATSAPP_LINK, WhatsAppIcon } from "./WhatsAppButton";

const heroImg = "/images/hero.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Carro e moto de entregas expressas da AN7 Logística"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-800/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40" />
      </div>

      {/* Route decorative SVG */}
      <svg
        className="pointer-events-none absolute right-0 top-1/3 hidden w-1/2 opacity-30 lg:block"
        viewBox="0 0 400 200"
        fill="none"
      >
        <path
          className="animate-dash"
          d="M10 180 C 120 180, 120 40, 230 40 S 360 30, 390 20"
          stroke="#ff6b1a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="10" cy="180" r="6" fill="#ff6b1a" />
        <circle cx="390" cy="20" r="6" fill="#ffffff" />
      </svg>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-32 lg:px-8">
        <div className="max-w-2xl">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-orange" />
            Campinas • Região • São Paulo
          </span>

          <h1
            className="reveal mt-6 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            data-delay="0.1s"
          >
            Coletas e entregas{" "}
            <span className="text-brand-orange">expressas</span> para empresas
          </h1>

          <p
            className="reveal mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg"
            data-delay="0.2s"
          >
            Soluções rápidas e confiáveis em transporte para pequenas cargas,
            documentos e materiais empresariais em Campinas e região.
          </p>

          <div className="reveal mt-9 flex flex-col gap-4 sm:flex-row sm:items-center" data-delay="0.3s">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-orange px-7 py-4 text-base font-semibold text-white shadow-xl shadow-brand-orange/30 transition-all hover:bg-brand-orange-dark hover:shadow-2xl"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar atendimento pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Conheça os serviços
            </a>
          </div>

          {/* Trust badges */}
          <div className="reveal mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6" data-delay="0.4s">
            {[
              { k: "Veículo", v: "Próprio" },
              { k: "Prazos", v: "Cumpridos" },
              { k: "Atendimento", v: "Personalizado" },
            ].map((b) => (
              <div key={b.k}>
                <div className="font-display text-lg font-bold text-white">{b.v}</div>
                <div className="text-xs uppercase tracking-wider text-slate-400">{b.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
