import React, { useState } from 'react';
import { BookingFormData, ConsultationModality, NutritionGoal, ShiftPreference } from '../types';
import { MessageCircle, CheckCircle, Calendar, Clock, MapPin, Video, ArrowRight, ShieldCheck } from 'lucide-react';

interface AppointmentSectionProps {
  initialGoal?: NutritionGoal;
  initialCalculatedCalories?: number;
  onSuccess?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialGoal = 'weight_loss',
  initialCalculatedCalories,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    modality: 'presencial',
    goal: initialGoal,
    shift: 'morning',
    notes: initialCalculatedCalories ? `Gostaria de atingir a meta calculada de aprox. ${initialCalculatedCalories} kcal.` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-format Brazilian phone
  const handlePhoneChange = (val: string) => {
    const cleaned = val.replace(/\D/g, '');
    let formatted = cleaned;
    if (cleaned.length > 0) {
      formatted = `(${cleaned.substring(0, 2)}`;
      if (cleaned.length > 2) {
        formatted += `) ${cleaned.substring(2, 7)}`;
      }
      if (cleaned.length > 7) {
        formatted += `-${cleaned.substring(7, 11)}`;
      }
    }
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  const handleWhatsAppDirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Por favor, informe seu nome para prosseguir.');
      return;
    }
    if (formData.phone.replace(/\D/g, '').length < 10) {
      setErrorMsg('Por favor, informe um número de WhatsApp válido com DDD.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    const goalLabels: Record<NutritionGoal, string> = {
      weight_loss: 'Emagrecimento Consciente',
      muscle_gain: 'Hipertrofia & Nutrição Esportiva',
      maintenance: 'Reeducação Alimentar & Longevidade',
      health_gut: 'Saúde Intestinal, Digestiva ou Hormonal',
    };

    const modalityLabels: Record<ConsultationModality, string> = {
      presencial: 'Presencial (Jardins / SP)',
      online: 'Online (Vídeochamada)',
    };

    const shiftLabels: Record<ShiftPreference, string> = {
      morning: 'Manhã',
      afternoon: 'Tarde',
      evening: 'Noite / Fim de tarde',
    };

    const text = encodeURIComponent(
      `Olá, Dra. Camila! Gostaria de agendar uma consulta nutricional.\n\n` +
      `👤 Nome: ${formData.name}\n` +
      `📱 WhatsApp: ${formData.phone}\n` +
      `📍 Formato: ${modalityLabels[formData.modality]}\n` +
      `🎯 Objetivo: ${goalLabels[formData.goal]}\n` +
      `⏰ Turno de preferência: ${shiftLabels[formData.shift]}` +
      (formData.notes ? `\n📝 Detalhes: ${formData.notes}` : '')
    );

    // Nutritionist official clinic WhatsApp link (Brazil country code 55)
    const whatsappUrl = `https://wa.me/5511994829100?text=${text}`;
    
    // Open in safe new tab or redirect
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <section id="contato" className="py-20 sm:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold tracking-wider text-emerald-900 uppercase mb-3">
              Agendamento Rápido
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
              Dê o primeiro passo para o seu plano alimentar personalizado
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
              Preencha os dados abaixo e envie diretamente para o nosso WhatsApp. Respondemos em até 2 horas úteis com os horários disponíveis.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed">
                  O WhatsApp da clínica foi aberto com os seus dados de agendamento. Caso a janela não tenha aberto automaticamente, você também pode nos chamar diretamente no <strong>(11) 99482-9100</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-emerald-900 hover:underline"
                  >
                    Fazer novo agendamento
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWhatsAppDirect} className="space-y-6">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 font-medium">
                    {errorMsg}
                  </div>
                )}

                {/* Modality Choice */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Formato de Atendimento
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, modality: 'presencial' }))}
                      className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                        formData.modality === 'presencial'
                          ? 'border-emerald-800 bg-emerald-50/70 text-emerald-950 font-medium'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-stone-900">Consulta Presencial</div>
                        <div className="text-xs text-stone-500 mt-0.5">
                          Consultório nos Jardins (SP) com Bioimpedância médica InBody inclusa.
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, modality: 'online' }))}
                      className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all ${
                        formData.modality === 'online'
                          ? 'border-emerald-800 bg-emerald-50/70 text-emerald-950 font-medium'
                          : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <Video className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-stone-900">Consulta Online</div>
                        <div className="text-xs text-stone-500 mt-0.5">
                          Vídeo com a mesma duração e profundidade para qualquer cidade ou país.
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-name" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      required
                      placeholder="Ex: Mariana Silva"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-hidden focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-phone" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      placeholder="(11) 98765-4321"
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-hidden focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-all bg-white"
                    />
                  </div>
                </div>

                {/* Goal & Preferred Shift */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="booking-goal" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Objetivo Principal
                    </label>
                    <select
                      id="booking-goal"
                      value={formData.goal}
                      onChange={(e) => setFormData((prev) => ({ ...prev, goal: e.target.value as NutritionGoal }))}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-hidden focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-all bg-white"
                    >
                      <option value="weight_loss">Emagrecimento Consciente & Perda de Gordura</option>
                      <option value="muscle_gain">Hipertrofia & Nutrição Esportiva</option>
                      <option value="health_gut">Saúde Digestiva, Intestino ou SOP</option>
                      <option value="maintenance">Reeducação Alimentar & Longevidade</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="booking-shift" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                      Turno de Preferência
                    </label>
                    <select
                      id="booking-shift"
                      value={formData.shift}
                      onChange={(e) => setFormData((prev) => ({ ...prev, shift: e.target.value as ShiftPreference }))}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-hidden focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-all bg-white"
                    >
                      <option value="morning">Manhã (08h às 12h)</option>
                      <option value="afternoon">Tarde (13h às 17h)</option>
                      <option value="evening">Noite / Fim de tarde (18h às 20h)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="booking-notes" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Observações ou Histórico (Opcional)
                  </label>
                  <textarea
                    id="booking-notes"
                    rows={2}
                    placeholder="Ex: Tenho exames de sangue recentes, intolerância a lactose ou pratico corrida..."
                    value={formData.notes}
                    onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 text-stone-900 text-sm focus:outline-hidden focus:border-emerald-800 focus:ring-1 focus:ring-emerald-800 transition-all bg-white"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 active:scale-98 transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Enviar Agendamento via WhatsApp Oficial</span>
                    <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 mt-3 text-center">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                      Privacidade e sigilo médico garantidos
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>Retorno em até 2h úteis</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
