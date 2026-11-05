import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Calculator, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToCalculator }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="topo" className="pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split Hero Layout with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Value Proposition & CTAs (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet Editorial Kicker with typographic separator (NO PILLS) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-900 uppercase mb-4">
              <span>Nutrição Clínica & Esportiva</span>
              <span aria-hidden="true">·</span>
              <span>CRN-3 48.291</span>
              <span aria-hidden="true">·</span>
              <span>São Paulo & Online</span>
            </div>

            {/* Display Headline with balanced text wrap */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-stone-900 tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
              Nutrição baseada em ciência que cabe na sua rotina real, sem radicalismos.
            </h1>

            {/* Body Description */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-8">
              Planos alimentares sob medida para emagrecimento consciente, saúde hormonal e performance esportiva. Com cardápio pelo aplicativo e suporte direto no WhatsApp para tirar dúvidas no seu dia a dia.
            </p>

            {/* Action Buttons: 1 Primary CTA + 1 Secondary Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 active:scale-98 transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Consulta Rápida</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
              </button>

              <button
                type="button"
                onClick={onScrollToCalculator}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200/80 active:scale-98 rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-emerald-800" />
                <span>Calcular Metas Nutricionais</span>
              </button>
            </div>

            {/* Trust and Clinical Safeguards (Unboxed text with subtle checkmarks) */}
            <div className="pt-6 border-t border-stone-200/70 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Recibo com código TUSS para reembolso do convênio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Acompanhamento direto via WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Presencial em SP ou Teleconsulta para todo o país</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (col-span-5) */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="relative w-full aspect-4/3 lg:aspect-auto lg:h-full min-h-[380px] lg:min-h-[490px] rounded-2xl overflow-hidden bg-stone-200 border border-stone-200 shadow-sm">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_nutritionist_clinic_1793894060581.jpg"
                  alt="Dra. Camila Siqueira em consultório de nutrição moderno e iluminado"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <div className="w-full h-full bg-linear-to-br from-emerald-950 via-stone-900 to-emerald-900 flex flex-col items-center justify-center p-8 text-center text-white">
                  <div className="w-16 h-16 rounded-full bg-emerald-800/40 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Dra. Camila Siqueira</h3>
                  <p className="text-sm text-stone-300 max-w-xs">
                    Nutrição baseada em evidências, acolhimento e resultados duradouros.
                  </p>
                </div>
              )}

              {/* Discreet Editorial Caption Card at bottom corner */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-stone-200/90 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Dra. Camila Siqueira</p>
                    <p className="text-xs text-stone-500">Graduada pela USP · Pós-graduada em Nutrição Clínica & Esportiva</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                      CRN-3 48.291
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Clinical KPI Strip in a full-width row below the hero split */}
        <div className="mt-14 pt-8 border-t border-stone-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono tabular-nums tracking-tight">
              +1.450
            </div>
            <div className="text-sm text-stone-500 mt-1">Pacientes acompanhados com sucesso</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono tabular-nums tracking-tight">
              98%
            </div>
            <div className="text-sm text-stone-500 mt-1">Taxa de adesão sem dietas punitivas</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono tabular-nums tracking-tight">
              24h
            </div>
            <div className="text-sm text-stone-500 mt-1">Prazo de envio do cardápio completo no app</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-stone-900 font-mono tabular-nums tracking-tight">
              4.9/5
            </div>
            <div className="text-sm text-stone-500 mt-1">Avaliação média nos atendimentos</div>
          </div>
        </div>
      </div>
    </section>
  );
};
