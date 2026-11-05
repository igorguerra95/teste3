import React from 'react';
import { TestimonialItem } from '../types';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: 'Mariana Rezende',
      role: 'Arquiteta',
      age: 34,
      city: 'São Paulo, SP',
      resultMetric: '-11.4 kg de gordura em 5 meses',
      timeframe: '5 meses de acompanhamento',
      quote:
        'Eu achava que para emagrecer precisava zerar carboidrato e viver de frango e salada. A Camila me ensinou a comer comida de verdade, incluindo arroz e meu pão francês no café da manhã. Já mantive o peso por mais de 6 meses sem sofrer.',
    },
    {
      name: 'Felipe Albuquerque',
      role: 'Engenheiro de Software & Corredor Amador',
      age: 29,
      city: 'Campinas, SP',
      resultMetric: 'Redução de 22s/km no pace & 0 dores estomacais',
      timeframe: 'Preparação para Meia Maratona (4 meses)',
      quote:
        'Ajustamos a hidratação pré-treino e o aporte de carboidratos intra-prova. Parei de ter quedas de energia no km 14 e completei minha primeira meia maratona abaixo de 1h45 com energia de sobra.',
    },
    {
      name: 'Patrícia Mendonça',
      role: 'Advogada',
      age: 41,
      city: 'Belo Horizonte, MG (Teleconsulta)',
      resultMetric: 'Regulação do ciclo & fim do inchaço diário',
      timeframe: 'Manejo de SOP e Intestino (3 meses)',
      quote:
        'Tinha um estufamento insuportável no final da tarde e o ciclo menstrual totalmente desregulado. O protocolo alimentar e a suplementação anti-inflamatória mudaram minha rotina. O suporte pelo WhatsApp foi essencial para tirar dúvidas de mercado.',
    },
    {
      name: 'Gustavo Lins',
      role: 'Diretor Comercial',
      age: 46,
      city: 'São Paulo, SP',
      resultMetric: 'Glicemia de jejum de 118 para 89 mg/dL',
      timeframe: '3 meses com novos exames de sangue',
      quote:
        'Viajo a trabalho quase toda semana e como muito em restaurantes e aeroportos. A Camila montou um guia de escolhas para restaurantes a quilo e à la carte. Meu médico ficou impressionado com meus exames de sangue recentes.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-emerald-900 uppercase mb-3">
            Resultados Comprovados
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Histórias reais de quem transformou a saúde sem dietas malucas
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Casos documentados com bioimpedância e exames laboratoriais. Resultados alcançados com constância e acompanhamento profissional.
          </p>
        </div>

        {/* 2x2 Grid of In-Depth Real Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-stone-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Result Highlight Banner (Clean, unboxed) */}
                <div className="mb-4 pb-3 border-b border-stone-100 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-md">
                    {item.resultMetric}
                  </span>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-stone-900 text-sm">{item.name}</div>
                  <div className="text-stone-500">
                    {item.role} · {item.age} anos · {item.city}
                  </div>
                </div>
                <div className="text-right text-stone-400 font-mono text-[11px]">
                  {item.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
