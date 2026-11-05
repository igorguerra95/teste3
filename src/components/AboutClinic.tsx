import React, { useState } from 'react';
import { Award, MapPin, Video, CheckCircle2, Building, Clock, ArrowRight } from 'lucide-react';

interface AboutClinicProps {
  onOpenBooking: () => void;
}

export const AboutClinic: React.FC<AboutClinicProps> = ({ onOpenBooking }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="sobre" className="py-20 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image of the clinic interior (col-span-5) */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden bg-stone-200 border border-stone-200 shadow-sm relative">
              {!imgError ? (
                <img
                  src="/src/assets/images/nutrition_consultation_space_1793894061923.jpg"
                  alt="Espaço da clínica de nutrição nos Jardins em São Paulo"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-stone-200 flex items-center justify-center p-6 text-xs text-stone-500">
                  Espaço clínico e consultório em São Paulo
                </div>
              )}
            </div>

            {/* Address & Modality Card */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center justify-between text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Alameda Santos, Jardins · São Paulo, SP</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-stone-900">
                <Video className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Teleconsulta Global</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Credentials (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold tracking-wider text-emerald-900 uppercase mb-3">
              Sobre a Profissional & Espaço
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight mb-6 [text-wrap:balance]">
              Ciência rigorosa combinada com empatia pela sua individualidade.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 leading-relaxed mb-8">
              <p>
                Olá, sou a <strong>Dra. Camila Siqueira</strong> (CRN-3 48.291). Acredito que um plano alimentar eficiente é aquele que respeita seu estilo de vida, seus compromissos profissionais e seus momentos de lazer. Dietas extremamente restritivas costumam fracassar porque ignoram o comportamento humano.
              </p>
              <p>
                Minha formação pela <strong>Universidade de São Paulo (USP)</strong> somada às especializações em Nutrição Clínica Funcional e Nutrição Esportiva me permite estruturar intervenções baseadas em evidências sólidas, evitando modismos e fórmulas mágicas da internet.
              </p>
            </div>

            {/* Structured Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="p-3.5 rounded-lg bg-white border border-stone-200 flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-stone-900">Graduação em Nutrição</div>
                  <div className="text-xs text-stone-500">Universidade de São Paulo (USP)</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-stone-200 flex items-start gap-3">
                <Award className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-stone-900">Pós-Graduação em Nutrição Esportiva</div>
                  <div className="text-xs text-stone-500">Fisiologia do Exercício & Hipertrofia</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-stone-200 flex items-start gap-3">
                <Building className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-stone-900">Bioimpedância Médica InBody</div>
                  <div className="text-xs text-stone-500">Avaliação precisa de massa magra e gordura</div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-stone-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-stone-900">Consultas de 60 a 75 minutos</div>
                  <div className="text-xs text-stone-500">Tempo dedicado para ouvir e construir o plano</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 active:scale-98 transition-all cursor-pointer shadow-xs"
              >
                <span>Conhecer Estrutura & Agendar Consulta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
