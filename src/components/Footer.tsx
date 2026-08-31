import Logo from "./Logo";
import { WHATSAPP_LINK, WhatsAppIcon } from "./WhatsAppButton";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy-900 py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Coletas e entregas expressas para empresas em Campinas e região. Agilidade,
              segurança e atendimento personalizado.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {[
                { l: "Sobre", h: "#sobre" },
                { l: "Serviços", h: "#servicos" },
                { l: "Diferenciais", h: "#diferenciais" },
                { l: "Como funciona", h: "#como-funciona" },
                { l: "Área de atendimento", h: "#atendimento" },
              ].map((i) => (
                <li key={i.h}>
                  <a href={i.h} className="transition-colors hover:text-brand-orange">
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>📍 Campinas - SP</li>
              <li>🔁 Campinas ↔ São Paulo</li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-orange"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  (19) 98857-7188
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {year} AN7 Logística. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
