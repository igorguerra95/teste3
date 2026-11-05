import React, { useState, useMemo } from 'react';
import { CalculatorState, CalculatorResults, ActivityLevel, NutritionGoal } from '../types';
import { Droplet, Flame, Scale, Dumbbell, ArrowRight, Info, Check } from 'lucide-react';

interface NutritionCalculatorProps {
  onApplyGoalToBooking: (goal: NutritionGoal, calculatedCalories: number, bmi: number) => void;
}

export const NutritionCalculator: React.FC<NutritionCalculatorProps> = ({ onApplyGoalToBooking }) => {
  const [state, setState] = useState<CalculatorState>({
    gender: 'female',
    age: 32,
    weight: 68,
    height: 168,
    activity: 'moderate',
    goal: 'weight_loss',
  });

  const results: CalculatorResults = useMemo(() => {
    const { gender, age, weight, height, activity, goal } = state;
    const heightInMeters = height / 100;
    const bmiRaw = weight / (heightInMeters * heightInMeters);
    const bmi = Number(bmiRaw.toFixed(1));

    let bmiClassification = 'Peso Saudável';
    let bmiBadgeColor = 'text-emerald-800 bg-emerald-50 border-emerald-200';

    if (bmi < 18.5) {
      bmiClassification = 'Abaixo do Peso';
      bmiBadgeColor = 'text-amber-800 bg-amber-50 border-amber-200';
    } else if (bmi >= 25 && bmi < 30) {
      bmiClassification = 'Sobrepeso (Leve elevação)';
      bmiBadgeColor = 'text-amber-800 bg-amber-50 border-amber-200';
    } else if (bmi >= 30) {
      bmiClassification = 'Obesidade';
      bmiBadgeColor = 'text-rose-800 bg-rose-50 border-rose-200';
    }

    const idealMin = Number((18.5 * (heightInMeters * heightInMeters)).toFixed(1));
    const idealMax = Number((24.9 * (heightInMeters * heightInMeters)).toFixed(1));

    // Mifflin-St Jeor formula for BMR
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr += gender === 'male' ? 5 : -161;

    // Activity multiplier
    const activityMultipliers: Record<ActivityLevel, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      intense: 1.725,
    };
    const tdee = Math.round(bmr * activityMultipliers[activity]);

    // Target calories based on goal
    let targetCalories = tdee;
    let proteinRecommendation = '1.6g a 2.0g por kg de peso corporal';

    if (goal === 'weight_loss') {
      targetCalories = Math.max(1200, tdee - 450); // Safe deficit
      proteinRecommendation = '1.8g a 2.2g por kg (preserva massa magra durante o emagrecimento)';
    } else if (goal === 'muscle_gain') {
      targetCalories = tdee + 300; // Moderate surplus
      proteinRecommendation = '2.0g a 2.2g por kg (suporte à síntese proteica muscular)';
    } else if (goal === 'maintenance') {
      targetCalories = tdee;
      proteinRecommendation = '1.4g a 1.6g por kg (manutenção da saúde tecidual e hormonal)';
    } else {
      targetCalories = tdee - 150;
      proteinRecommendation = '1.6g por kg com foco em fibras e anti-inflamatórios';
    }

    // Daily water: 35ml per kg of weight
    const dailyWaterMl = Math.round(weight * 35);

    return {
      bmi,
      bmiClassification,
      bmiBadgeColor,
      idealWeightRange: { min: idealMin, max: idealMax },
      dailyWaterMl,
      estimatedTdee: tdee,
      targetDailyCalories: targetCalories,
      proteinRecommendation,
    };
  }, [state]);

  const activityOptions: { value: ActivityLevel; label: string; desc: string }[] = [
    { value: 'sedentary', label: 'Sedentário', desc: 'Trabalho em mesa, pouco movimento diário' },
    { value: 'light', label: 'Leve', desc: 'Caminhadas ou treino 1 a 2x na semana' },
    { value: 'moderate', label: 'Moderado', desc: 'Musculação ou cardio 3 a 5x na semana' },
    { value: 'intense', label: 'Intenso', desc: 'Treinos intensos diários ou atleta amador' },
  ];

  const goalOptions: { value: NutritionGoal; label: string }[] = [
    { value: 'weight_loss', label: 'Emagrecimento Sustentável' },
    { value: 'muscle_gain', label: 'Hipertrofia & Ganho Muscular' },
    { value: 'maintenance', label: 'Manutenção & Disposição' },
    { value: 'health_gut', label: 'Saúde Intestinal & Hormonal' },
  ];

  return (
    <section id="calculadora" className="py-20 sm:py-24 bg-stone-100/60 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-900 uppercase mb-3">
            Ferramenta Interativa
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight [text-wrap:balance]">
            Calculadora Nutricional: descubra suas necessidades basais
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Ajuste seus dados abaixo para obter uma estimativa inicial de IMC, ingestão ideal de água e gasto calórico diário de acordo com a fórmula Mifflin-St Jeor.
          </p>
        </div>

        {/* 2-Column Split: Inputs (left) vs Dynamic Results (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            {/* Gender Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                Sexo Biológico
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setState((s) => ({ ...s, gender: 'female' }))}
                  className={`py-2.5 px-4 rounded-lg text-sm font-medium border transition-all ${
                    state.gender === 'female'
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  Feminino
                </button>
                <button
                  type="button"
                  onClick={() => setState((s) => ({ ...s, gender: 'male' }))}
                  className={`py-2.5 px-4 rounded-lg text-sm font-medium border transition-all ${
                    state.gender === 'male'
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  Masculino
                </button>
              </div>
            </div>

            {/* Age, Weight, Height */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="input-age" className="text-xs font-semibold uppercase tracking-wider text-stone-700">Idade</label>
                  <span className="font-mono text-sm font-bold text-stone-900">{state.age} anos</span>
                </div>
                <input
                  id="input-age"
                  type="range"
                  min="16"
                  max="85"
                  value={state.age}
                  onChange={(e) => setState((s) => ({ ...s, age: Number(e.target.value) }))}
                  className="w-full accent-emerald-800 cursor-pointer"
                  aria-label="Idade em anos"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="input-weight" className="text-xs font-semibold uppercase tracking-wider text-stone-700">Peso</label>
                  <span className="font-mono text-sm font-bold text-stone-900">{state.weight} kg</span>
                </div>
                <input
                  id="input-weight"
                  type="range"
                  min="40"
                  max="160"
                  value={state.weight}
                  onChange={(e) => setState((s) => ({ ...s, weight: Number(e.target.value) }))}
                  className="w-full accent-emerald-800 cursor-pointer"
                  aria-label="Peso em quilogramas"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="input-height" className="text-xs font-semibold uppercase tracking-wider text-stone-700">Altura</label>
                  <span className="font-mono text-sm font-bold text-stone-900">{state.height} cm</span>
                </div>
                <input
                  id="input-height"
                  type="range"
                  min="140"
                  max="210"
                  value={state.height}
                  onChange={(e) => setState((s) => ({ ...s, height: Number(e.target.value) }))}
                  className="w-full accent-emerald-800 cursor-pointer"
                  aria-label="Altura em centímetros"
                />
              </div>
            </div>

            {/* Activity Level Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                Nível de Atividade Física
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activityOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setState((s) => ({ ...s, activity: opt.value }))}
                    className={`p-3 text-left rounded-lg border text-xs transition-all ${
                      state.activity === opt.value
                        ? 'border-emerald-800 bg-emerald-50/70 text-emerald-950 font-medium'
                        : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <div className="font-semibold text-stone-900">{opt.label}</div>
                    <div className="text-stone-500 mt-0.5 text-[11px]">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Goal Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                Objetivo Nutricional Principal
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {goalOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setState((s) => ({ ...s, goal: opt.value }))}
                    className={`py-2 px-3 text-left rounded-lg border text-xs font-medium transition-all ${
                      state.goal === opt.value
                        ? 'border-emerald-800 bg-emerald-800 text-white shadow-xs'
                        : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Results Column (col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
                Seu Diagnóstico Estimado
              </span>
              <span className="text-xs text-stone-500">Mifflin-St Jeor</span>
            </div>

            {/* Metric 1: BMI */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-emerald-800" />
                  <span className="text-xs font-medium text-stone-600">Índice de Massa Corporal (IMC)</span>
                </div>
                <span className={`text-xs px-2.5 py-0.5 rounded-md font-semibold border ${results.bmiBadgeColor}`}>
                  {results.bmiClassification}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono text-stone-900 tabular-nums">
                  {results.bmi}
                </span>
                <span className="text-xs text-stone-500">kg/m²</span>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                Faixa saudável para sua altura: <strong className="text-stone-700">{results.idealWeightRange.min} kg</strong> a <strong className="text-stone-700">{results.idealWeightRange.max} kg</strong>.
              </p>
            </div>

            {/* Metric 2: Calories */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-700" />
                  <span className="text-xs font-medium text-stone-600">Meta Calórica Sugerida</span>
                </div>
                <span className="text-xs font-mono text-stone-500">
                  Gasto Total: {results.estimatedTdee} kcal
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono text-emerald-900 tabular-nums">
                  {results.targetDailyCalories}
                </span>
                <span className="text-xs text-stone-600 font-medium">kcal/dia</span>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                Proteína indicada: <span className="text-stone-700 font-medium">{results.proteinRecommendation}</span>.
              </p>
            </div>

            {/* Metric 3: Water */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <div className="flex items-center gap-2 mb-2">
                <Droplet className="w-4 h-4 text-sky-700" />
                <span className="text-xs font-medium text-stone-600">Hidratação Mínima Recomendada</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-mono text-stone-900 tabular-nums">
                  {results.dailyWaterMl.toLocaleString('pt-BR')}
                </span>
                <span className="text-xs text-stone-600 font-medium">ml de água/dia</span>
              </div>
              <p className="text-xs text-stone-500 mt-1">
                Aproximadamente {Math.round(results.dailyWaterMl / 500)} garrafinhas de 500ml distribuídas ao longo do dia.
              </p>
            </div>

            {/* Action Card: Apply this to consultation */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onApplyGoalToBooking(state.goal, results.targetDailyCalories, results.bmi)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900 active:scale-98 transition-all cursor-pointer shadow-xs"
              >
                <span>Montar Cardápio para Esta Meta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-stone-500 text-center mt-2">
                * Estimativa matemática. Na consulta clínica realizamos bioimpedância com divisão de massa muscular, água intra/extracelular e gordura visceral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
