import React, { useState } from 'react';
import { Sparkles, Activity, Heart, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface SpecialtiesProps {
  onSelectSpecialty: (specialtyTitle: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectSpecialty }) => {
  const [imgError1, setImgError1] = useState(false);
  const [imgError2, setImgError2] = useState(false);

  return (
    <section id="especialidades" className="py-20 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-emerald-900 uppercase mb-3">
              Áreas de Atuação
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
              Especialidades clínicas planejadas para a sua necessidade individual
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-sm leading-relaxed">
            Abordagem integrada para tratar a raiz metabólica e comportamental de cada objetivo, sem generalizações.
          </p>
        </div>

        {/* Bento Grid: Asymmetric Layout with High-Fidelity Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Emagrecimento Consciente (col-span-7) with Image */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
            <div className="p-7 sm:p-9">
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-900 mb-4">
                <span>Composição Corporal</span>
                <span aria-hidden="true">·</span>
                <span>Foco em Queima de Gordura</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 tracking-tight mb-3">
                Emagrecimento Consciente & Redução de Gordura
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
                Perca peso preservando massa muscular magra e metabolismo ativo. Desenvolvemos estratégias de saciedade, densidade nutricional e gestão de vontade de doces sem proibir alimentos do seu convívio.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Déficit calórico inteligente sem fome constante</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Substituições práticas para jantares e finais de semana</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Manutenção pós-dieta contra o efeito sanfona</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Exames de controle metabólico periódicos</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectSpecialty('Emagrecimento Consciente')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-900 hover:text-emerald-950 transition-colors"
              >
                <span>Saber mais sobre este protocolo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Embedded Visual Asset */}
            <div className="h-56 sm:h-64 w-full overflow-hidden bg-stone-100 border-t border-stone-100">
              {!imgError1 ? (
                <img
                  src="/src/assets/images/nutrition_fresh_ingredients_1793894060547.jpg"
                  alt="Ingredientes mediterrâneos frescos, abacate, azeite e folhas verdes"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError1(true)}
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-stone-200 flex items-center justify-center text-xs text-stone-500">
                  Ingredientes frescos e funcionais
                </div>
              )}
            </div>
          </div>

          {/* Card 2: Nutrição Esportiva & Performance (col-span-5) with Image */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
            <div className="p-7 sm:p-9">
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-900 mb-4">
                <span>Performance & Hipertrofia</span>
                <span aria-hidden="true">·</span>
                <span>Corrida & Musculação</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 tracking-tight mb-3">
                Nutrição Esportiva & Ganho de Força
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Crononutrição e periodização nutricional para atletas amadores e praticantes de atividade física. Otimização de pré e pós-treino, hidratação estratégica e suplementação com respaldo científico comprovado.
              </p>

              <div className="space-y-2 mb-6 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Protocolo para hipertrofia sem ganho excessivo de gordura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Estratégia para provas de corrida, ciclismo e CrossFit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Prescrição segura de creatina, beta-alanina e whey</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectSpecialty('Nutrição Esportiva')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-900 hover:text-emerald-950 transition-colors"
              >
                <span>Planejar rotina de treinos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Embedded Visual Asset */}
            <div className="h-56 sm:h-64 w-full overflow-hidden bg-stone-100 border-t border-stone-100">
              {!imgError2 ? (
                <img
                  src="/src/assets/images/nutrition_sports_health_1793894061559.jpg"
                  alt="Preparo de marmitas saudáveis, shaker e nutrição para treinos esportivos"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError2(true)}
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-stone-200 flex items-center justify-center text-xs text-stone-500">
                  Nutrição esportiva e alta energia
                </div>
              )}
            </div>
          </div>

          {/* Card 3: Saúde da Mulher & Hormônios (col-span-6) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-7 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-900">
                  <span>Equilíbrio Hormonal</span>
                  <span aria-hidden="true">·</span>
                  <span>Saúde Feminina</span>
                </div>
                <Heart className="w-5 h-5 text-rose-500" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mb-3">
                Saúde da Mulher, SOP & Climatério
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Manejo nutricional focado na redução da resistência à insulina, controle de inflamação e equilíbrio hormonal para condições como Síndrome dos Ovários Policísticos (SOP), endometriose, sintomas de TPM e transição da menopausa.
              </p>

              <div className="space-y-2 text-xs text-stone-700 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Alimentação anti-inflamatória rica em fitoquímicos e ômega-3</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Melhora de acne hormonal, retenção hídrica e oscilações de humor</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectSpecialty('Saúde da Mulher & Hormônios')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-900 hover:text-emerald-950 transition-colors pt-2"
            >
              <span>Consultar protocolo feminino</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Saúde Gastrointestinal & Microbiota (col-span-6) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200 p-7 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-900">
                  <span>Microbiota & Digestão</span>
                  <span aria-hidden="true">·</span>
                  <span>FODMAPs & Intolerâncias</span>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mb-3">
                Saúde Digestiva, Intestino & Intolerâncias
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                Recuperação da integridade da barreira intestinal e alívio de estufamento crônico, refluxo, constipação e Síndrome do Intestino Irritável (SII). Protocolos estruturados em fases (eliminação, reintrodução e estabilização).
              </p>

              <div className="space-y-2 text-xs text-stone-700 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Dieta Low FODMAP monitorada com reintrodução segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Modulação de microbiota com prebióticos e fibras selecionadas</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onSelectSpecialty('Saúde Digestiva & Intestinal')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-900 hover:text-emerald-950 transition-colors pt-2"
            >
              <span>Consultar protocolo digestivo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
