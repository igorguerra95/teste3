import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Methodology } from './components/Methodology';
import { Specialties } from './components/Specialties';
import { NutritionCalculator } from './components/NutritionCalculator';
import { AboutClinic } from './components/AboutClinic';
import { Testimonials } from './components/Testimonials';
import { AppointmentSection } from './components/AppointmentSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { NutritionGoal } from './types';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<NutritionGoal>('weight_loss');
  const [calculatedCalories, setCalculatedCalories] = useState<number | undefined>(undefined);

  const handleOpenBooking = () => {
    setIsModalOpen(true);
  };

  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculadora');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSpecialty = (specialtyTitle: string) => {
    if (specialtyTitle.includes('Esportiva')) {
      setSelectedGoal('muscle_gain');
    } else if (specialtyTitle.includes('Digestiva') || specialtyTitle.includes('Mulher')) {
      setSelectedGoal('health_gut');
    } else {
      setSelectedGoal('weight_loss');
    }
    setIsModalOpen(true);
  };

  const handleApplyGoalToBooking = (goal: NutritionGoal, calories: number, _bmi: number) => {
    setSelectedGoal(goal);
    setCalculatedCalories(calories);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-emerald-800 selection:text-white">
      {/* 3-Zone Clean Header */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onScrollToCalculator={handleScrollToCalculator}
        />

        {/* Methodology (How consultation works) */}
        <Methodology />

        {/* Areas of Practice (Asymmetric Bento with high-res food/sports images) */}
        <Specialties onSelectSpecialty={handleSelectSpecialty} />

        {/* Interactive Fast Nutrition Calculator */}
        <NutritionCalculator onApplyGoalToBooking={handleApplyGoalToBooking} />

        {/* About the Nutritionist & Clinic Space */}
        <AboutClinic onOpenBooking={handleOpenBooking} />

        {/* Attributable Real Patient Results */}
        <Testimonials />

        {/* Quick Booking Form Section */}
        <AppointmentSection
          initialGoal={selectedGoal}
          initialCalculatedCalories={calculatedCalories}
        />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Quick Booking Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialGoal={selectedGoal}
        initialCalculatedCalories={calculatedCalories}
      />

      {/* Floating Discreet WhatsApp Quick Action */}
      <a
        href="https://wa.me/5511994829100?text=Ol%C3%A1%2C%20Dra.%20Camila!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20consulta%20nutricional."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp oficial"
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 px-4 py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all text-xs font-semibold"
      >
        <MessageCircle className="w-5 h-5 text-emerald-300" />
        <span className="hidden sm:inline">WhatsApp Oficial</span>
      </a>
    </div>
  );
}
