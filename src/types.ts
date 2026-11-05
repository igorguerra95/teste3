export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'intense';
export type NutritionGoal = 'weight_loss' | 'maintenance' | 'muscle_gain' | 'health_gut';
export type ConsultationModality = 'online' | 'presencial';
export type ShiftPreference = 'morning' | 'afternoon' | 'evening';

export interface CalculatorState {
  gender: 'female' | 'male';
  age: number;
  weight: number; // in kg
  height: number; // in cm
  activity: ActivityLevel;
  goal: NutritionGoal;
}

export interface CalculatorResults {
  bmi: number;
  bmiClassification: string;
  bmiBadgeColor: string;
  idealWeightRange: { min: number; max: number };
  dailyWaterMl: number;
  estimatedTdee: number;
  targetDailyCalories: number;
  proteinRecommendation: string;
}

export interface SpecialtyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusPoints: string[];
  imageSrc?: string;
  badge: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  age: number;
  city: string;
  resultMetric: string;
  quote: string;
  timeframe: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  modality: ConsultationModality;
  goal: NutritionGoal;
  shift: ShiftPreference;
  notes?: string;
}
