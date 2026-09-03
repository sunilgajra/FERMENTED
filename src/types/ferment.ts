export type FermentCategory = 
  | 'Fruits'
  | 'Vegetables'
  | 'Fermented Drinks'
  | 'Dairy'
  | 'Grains'
  | 'Beans & Legumes'
  | 'Sourdough'
  | 'Meat, Fish & Eggs'
  | 'Vinegar'
  | 'Beverages'
  | 'Condiments'
  | 'Other';

export type DifficultyLevel = 'Beginner' | 'Easy' | 'Intermediate' | 'Advanced';

export interface RecipeIngredient {
  name: string;
  quantity_base: number; // Base quantity for standard recipe yield
  unit: string; // "ml", "g", "tbsp", "tsp", "cloves", "leaves", "pieces", "cup", "cups", "lbs", "head", "bunch", etc.
  scaling_type: 'volume' | 'weight' | 'count' | 'fixed';
  notes?: string;
  is_optional?: boolean;
}

export type EquipmentCategory = 'required' | 'container' | 'utensil' | 'optional';

export interface RecipeEquipment {
  name: string;
  category: EquipmentCategory;
  description: string;
  why_used: string;
  icon?: string;
  image?: string;
}

export interface PrepStep {
  step: number;
  title: string;
  description: string;
  time_min: number;
  tip?: string;
  image?: string;
}

export interface RecipeTimelineStep {
  day: number;
  title: string;
  description: string;
  tasks: string[];
  photo_required?: boolean;
  note_required?: boolean;
  reminder_text?: string;
  what_to_observe?: string;
  what_is_normal?: string;
  what_is_not_normal?: string;
}

export interface StorageInstructions {
  container: string;
  location: string; // "Refrigerated (2–4°C)" or "Cool Dark Pantry"
  duration: string; // "Up to 3 months"
}

export interface CommonMistake {
  mistake: string;
  consequence: string;
  prevention: string;
}

export interface TroubleshootingQA {
  question: string;
  answer: string;
}

export interface SourceReference {
  book: string;
  chapter: string;
  page?: number;
}

export interface Recipe {
  id: string;
  name: string;
  short_description: string;
  long_description: string;
  category: FermentCategory;
  image: string; // Primary thumbnail
  heroImage?: string;
  fermentingImage: string; // In-progress fermentation setup photo
  finishedImage: string; // Completed serving photo
  difficulty: DifficultyLevel;
  duration_min: number; // days
  duration_max: number; // days
  prep_time_min: number; // minutes
  active_work_time_min: number; // minutes
  expected_yield: string; // e.g., "MAKES TWO 1-QUART JARS"
  serving_info?: string;
  
  fermentation_type?: string; // e.g., "Lacto-Ferment", "Alcoholic Ferment", "Wild Ferment"
  fermentation_temperature?: string; // e.g., "Room Temperature (68–72°F)"
  source_reference?: SourceReference;

  // Burp & Airlock Management
  requires_burp?: boolean;
  burp_frequency?: string;
  burp_instructions?: string;
  venting_warning?: string;
  requires_airlock?: boolean;
  airlock_instructions?: string;

  // Storage Durations
  ambient_storage_duration?: string;
  refrigerated_storage_duration?: string;

  ingredients: RecipeIngredient[];
  optional_ingredients?: RecipeIngredient[];
  equipment: RecipeEquipment[];
  preparation_steps: PrepStep[];
  fermentation_timeline: RecipeTimelineStep[];
  
  completion_guidance: string;
  ready_checklist: string[];
  storage_instructions: StorageInstructions;
  safety_notes: string[];
  common_mistakes: CommonMistake[];
  troubleshooting: TroubleshootingQA[];
  tips: string[];
  tags: string[];
  saved?: boolean;
}

export interface DailyCheckInObservations {
  appearance?: 'Normal' | 'Cloudy' | 'Clear' | 'Bubbles' | 'Sediment' | 'Active Bubbling' | 'Mold' | 'Other';
  smell?: 'Normal' | 'Sour' | 'Yeasty' | 'Strong' | 'Unusual' | 'Fresh & Tangy' | 'Off-odour';
  taste?: string;
  temperature?: string;
  milestones_checked?: string[];
}

export interface DailyEntry {
  id: string;
  batch_id: string;
  day: number;
  date: string;
  photo?: string;
  note?: string;
  tasks_completed: string[];
  aroma?: string;
  activity_level?: 'none' | 'low' | 'moderate' | 'high' | 'vibrant';
  observations?: DailyCheckInObservations;
  created_at: string;
}

export interface RatingBreakdown {
  taste: number; // 1-5
  aroma: number; // 1-5
  appearance: number; // 1-5
  texture: number; // 1-5
  overall: number; // 1-5
  would_make_again: 'Yes' | 'Maybe' | 'No';
  final_notes: string;
}

export interface ReminderSetting {
  enabled: boolean;
  time: string; // "18:00"
  frequency: 'daily' | 'milestones_only';
  custom_days?: number[];
}

export interface Batch {
  id: string;
  batch_number: number;
  recipe_id: string;
  recipe_name: string;
  batch_name: string;
  category: FermentCategory;
  image: string;
  referencing_fermenting_image?: string;
  referencing_finished_image?: string;
  start_date: string; // ISO format "2026-08-24"
  start_time?: string; // e.g. "10:30 AM"
  expected_end_date: string; // ISO format
  actual_end_date?: string;
  total_days: number;
  batch_size: string; // e.g., "500 ml", "1 L", "2 L", "5 L"
  container_type?: 'Jar' | 'Crock' | 'Bottle' | 'Fermentation Vessel' | 'Other' | string;
  requires_burp?: boolean;
  requires_airlock?: boolean;
  last_burped_at?: string;
  status: 'active' | 'completed' | 'archived';
  notes?: string;
  before_photo?: string;
  after_photo?: string;
  progress_photos: { day: number; date: string; url: string; caption?: string }[];
  daily_entries: DailyEntry[];
  completed_tasks: Record<number, string[]>; // day -> array of task strings
  reminder_settings: ReminderSetting;
  ratings?: RatingBreakdown;
  user_modifications?: string;
  created_at: string;
}

export interface JournalEntryItem {
  id: string;
  batch_id: string;
  batch_name: string;
  recipe_name: string;
  category: FermentCategory;
  day: number;
  date: string;
  photo?: string;
  note: string;
  completed_tasks: string[];
  batch_image?: string;
}

export interface InAppNotification {
  id: string;
  batch_id?: string;
  title: string;
  message: string;
  date: string;
  read: boolean;
  type: 'reminder' | 'milestone' | 'safety' | 'system';
}

export interface UserProfileSettings {
  name: string;
  avatar: string;
  units: 'metric' | 'imperial';
  theme: 'light' | 'dark' | 'system';
  default_reminder_time: string;
  enable_sound: boolean;
}
