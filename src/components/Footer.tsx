import React from 'react';
import { MessageCircle, MapPin, Mail, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info (col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xl font-bold tracking-tight text-white block">
              Dra. Camila Siqueira
            </span>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Nutrição de precisão baseada em evidências científicas, emagrecimento sustentável e performance física com acompanhamento contínuo e acolhimento humano.
            </p>
            <div className="text-xs text-stone-400 pt-2 font-mono">
              <span>Registro Profissional: </span>
              <strong className="text-stone-200">CRN-3 48.291</strong>
            </div>
          </div>

          {/* Quick Links (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Navegação
            </div>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Metodologia Clínica
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-white transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">
                  Calculadora Nutricional
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Nutricionista
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location (col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Atendimento & Contato
            </div>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Alameda Santos, 1100 · Jardins, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <a
                  href="https://wa.me/5511994829100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: (11) 99482-9100
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>contato@camilasiqueiranutri.com.br</span>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
                >
                  Agendar Consulta Rápida
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {currentYear} Dra. Camila Siqueira Nutrição Clínica e Esportiva. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Ética Profissional CFN/CRN</span>
            <span aria-hidden="true">·</span>
            <span>Termos & Privacidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
