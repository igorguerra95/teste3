import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Vocês aceitam convênios médicos ou planos de saúde?',
      answer:
        'Trabalhamos no sistema de consulta particular com emissão de Nota Fiscal e Relatório Médico contendo código TUSS para reembolso pelo seu plano de saúde. A grande maioria dos convênios (Bradesco, SulAmérica, Amil, Care Plus, Porto Seguro, Unimed, etc.) oferece reembolso de 70% a 100% do valor da consulta.',
    },
    {
      question: 'Quanto tempo dura a primeira consulta?',
      answer:
        'A primeira consulta tem duração de 60 a 75 minutos. Esse tempo é fundamental para entender detalhadamente sua rotina, hábitos familiares, histórico de saúde, preferências de paladar, relação com a comida e realizar a avaliação de bioimpedância clínica (ou protocolo de medidas se a consulta for online).',
    },
    {
      question: 'O cardápio é entregue na hora ou depois?',
      answer:
        'A base da sua estratégia alimentar é construída em conjunto com você durante a consulta. O plano completo, com os cálculos detalhados de macronutrientes, opções variadas de substituição para cada refeição e lista de compras automatizada, é disponibilizado em até 24 horas no aplicativo exclusivo do paciente.',
    },
    {
      question: 'Como funciona o suporte pelo WhatsApp entre as consultas?',
      answer:
        'Você terá acesso direto ao canal de WhatsApp da Dra. Camila. Teve dúvida no supermercado sobre um produto? Está num restaurante e não sabe o que pedir? Teve imprevisto na rotina? Basta mandar uma mensagem. Esse acompanhamento constante é o principal diferencial para que você não desista do processo.',
    },
    {
      question: 'Moro fora de São Paulo ou no exterior. A teleconsulta tem a mesma eficácia?',
      answer:
        'Sim! A consulta online acontece por vídeochamada em plataforma segura e tem exatamente o mesmo tempo, profundidade e entrega da consulta presencial. Atendemos pacientes em diversos estados do Brasil e brasileiros residentes nos EUA, Europa e outros países.',
    },
    {
      question: 'Preciso levar exames de sangue recentes?',
      answer:
        'Se você tiver exames laboratoriais realizados nos últimos 6 meses, pode levá-los ou enviá-los em PDF. Caso não tenha, na primeira consulta avaliamos a necessidade e fornecemos o pedido médico para realização no laboratório de sua preferência.',
    },
    {
      question: 'Tenho restrições como intolerância à lactose, glúten ou sigo dieta vegetariana?',
      answer:
        'Absolutamente! O plano respeita totalmente suas escolhas éticas, crenças e necessidades clínicas. Planejamos combinações para garantir o aporte correto de ferro, B12, cálcio, zinco e proteínas de alto valor biológico sem nenhum desconforto gastrointestinal.',
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider text-emerald-900 uppercase mb-3">
            Tire Suas Dúvidas
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Perguntas frequentes sobre a consulta e acompanhamento
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
            Transparência total sobre prazos, reembolso do plano e método de atendimento.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-emerald-900 transition-colors text-sm sm:text-base cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-emerald-800' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
