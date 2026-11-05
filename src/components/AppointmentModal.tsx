import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { AppointmentSection } from './AppointmentSection';
import { NutritionGoal } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: NutritionGoal;
  initialCalculatedCalories?: number;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialGoal,
  initialCalculatedCalories,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Agendamento de consulta"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-950/60 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
          aria-label="Fechar janela de agendamento"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <AppointmentSection
            initialGoal={initialGoal}
            initialCalculatedCalories={initialCalculatedCalories}
            onSuccess={() => {
              setTimeout(() => {
                onClose();
              }, 4000);
            }}
          />
        </div>
      </div>
    </div>
  );
};
