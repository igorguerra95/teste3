import React from 'react';
import { ClipboardList, Smartphone, HeartHandshake, LineChart } from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Anamnese Completa & Bioimpedância',
      description:
        'Investigamos sua rotina de horários, padrão de sono, exames laboratoriais, histórico clínico e, principalmente, sua relação com a comida e preferências gastronômicas.',
      icon: ClipboardList,
      deliverables: 'Avaliação de composição corporal detalhada e análise de exames de sangue',
    },
    {
      step: '02',
      title: 'Plano Alimentar Individualizado no App',
      description:
        'Nada de cardápio de gaveta. Seu plano é desenhado com você durante a consulta, respeitando seu orçamento, rotina de trabalho e com lista de compras automatizada no aplicativo.',
      icon: Smartphone,
      deliverables: 'Opções de substituição prática para almoço fora, viagens e eventos sociais',
    },
    {
      step: '03',
      title: 'Acompanhamento Contínuo no WhatsApp',
      description:
        'A consulta não termina quando você sai do consultório. Dúvidas no supermercado, escolha no restaurante ou adaptações no cardápio são respondidas diretamente pela nutricionista.',
      icon: HeartHandshake,
      deliverables: 'Canal direto sem robôs para manter o foco e segurança durante o processo',
    },
    {
      step: '04',
      title: 'Reavaliação e Ajustes Periódicos',
      description:
        'Acompanhamos a evolução da sua massa magra, redução de gordura, níveis de energia e exames de controle. Ajustamos calorias e estratégias conforme seu corpo evolui.',
      icon: LineChart,
      deliverables: 'Relatórios comparativos de evolução para consolidar hábitos definitivos',
    },
  ];

  return (
    <section id="metodologia" className="py-20 bg-stone-100/70 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-emerald-900 uppercase mb-3">
            Metodologia Clínica
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Como funciona a consulta: do diagnóstico à autonomia alimentar
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Uma abordagem sem terrorismo nutricional, fundamentada nas mais recentes diretrizes científicas e focada em construir hábitos que você consegue manter pela vida toda.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-xl p-6 sm:p-7 border border-stone-200 shadow-xs flex flex-col justify-between hover:border-emerald-800/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-emerald-900">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-stone-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 text-xs text-stone-500 font-medium">
                  <span className="text-stone-900 font-semibold block mb-1">Entregável:</span>
                  {item.deliverables}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
