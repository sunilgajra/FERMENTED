import React, { useState } from 'react';
import { useFerment } from '../context/FermentContext';
import { 
  X, Clock, Flame, Play, Calendar, Utensils, 
  Package, Layers, Wind, ShieldCheck, Thermometer, Box, BookOpen
} from 'lucide-react';

export const RecipeDetailModal: React.FC = () => {
  const { selectedRecipe, setSelectedRecipe, openStartWizard } = useFerment();
  
  const [scaleMultiplier, setScaleMultiplier] = useState<number>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [checkedEquipment, setCheckedEquipment] = useState<Record<string, boolean>>({});

  if (!selectedRecipe) return null;

  const toggleIngredientCheck = (name: string) => {
    setCheckedIngredients(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const toggleEquipmentCheck = (name: string) => {
    setCheckedEquipment(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const handleStartFermentation = () => {
    openStartWizard(selectedRecipe);
  };

  return (
    <div className="modal-overlay z-50">
      <div className="modal-content max-w-3xl overflow-hidden flex flex-col max-h-[92vh] bg-stone-50 dark:bg-stone-900">
        
        {/* HERO FOOD PHOTO (4:3 aspect ratio with object-cover) */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 bg-stone-900">
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={() => setSelectedRecipe(null)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Content Overlay */}
          <div className="absolute bottom-4 left-4 right-4 space-y-2 text-white">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge bg-emerald-700 text-white text-[11px] font-mono">
                {selectedRecipe.category}
              </span>
              <span className="badge bg-white/20 backdrop-blur-md text-white text-[11px] font-mono">
                {selectedRecipe.fermentation_type || 'Lacto-Ferment'}
              </span>
              <span className="badge bg-amber-500 text-stone-950 font-bold text-[11px] font-mono flex items-center gap-1">
                <Flame className="w-3 h-3 fill-current" />
                {selectedRecipe.difficulty}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-50">
              {selectedRecipe.name}
            </h1>

            {selectedRecipe.source_reference && (
              <p className="text-[11px] font-mono text-emerald-300 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                {selectedRecipe.source_reference.book} • {selectedRecipe.source_reference.chapter}
              </p>
            )}
          </div>
        </div>

        {/* SCROLLABLE RECIPE BODY */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">

          {/* CLEAN INFORMATION GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            <div className="p-3 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block">PREPARATION</span>
              <span className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-700" />
                {selectedRecipe.prep_time_min} min
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block">FERMENTATION</span>
              <span className="font-serif font-bold text-sm text-emerald-800 dark:text-emerald-400 flex items-center justify-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {selectedRecipe.duration_min}–{selectedRecipe.duration_max} days
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block">TEMPERATURE</span>
              <span className="font-serif font-bold text-xs text-stone-900 dark:text-stone-100 flex items-center justify-center gap-1">
                <Thermometer className="w-3.5 h-3.5 text-rose-500" />
                Room Temp
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block">STORAGE</span>
              <span className="font-serif font-bold text-xs text-stone-900 dark:text-stone-100 flex items-center justify-center gap-1">
                <Box className="w-3.5 h-3.5 text-blue-500" />
                Refrigerator
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block">YIELD</span>
              <span className="font-serif font-bold text-xs text-stone-900 dark:text-stone-100 truncate block">
                {selectedRecipe.expected_yield}
              </span>
            </div>
          </div>

          {/* BURP / VENT VS AIRLOCK STATUS BANNER */}
          {selectedRecipe.requires_burp ? (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 space-y-1.5">
              <h3 className="font-serif font-bold text-sm text-amber-900 dark:text-amber-300 flex items-center gap-2">
                <Wind className="w-4 h-4 text-amber-600 shrink-0" />
                BURP / VENTILATION REQUIRED
              </h3>
              <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                {selectedRecipe.burp_instructions || 'This fermentation creates CO2 pressure in sealed bottles. Vent daily.'}
              </p>
              {selectedRecipe.venting_warning && (
                <p className="text-[11px] font-semibold text-amber-900 dark:text-amber-300 italic pt-1">
                  ⚠️ {selectedRecipe.venting_warning}
                </p>
              )}
            </div>
          ) : selectedRecipe.requires_airlock ? (
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 space-y-1.5">
              <h3 className="font-serif font-bold text-sm text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                AIRLOCK ACTIVE — NO BURPING NEEDED
              </h3>
              <p className="text-xs text-emerald-800 dark:text-emerald-200 leading-relaxed">
                Gas is escaping automatically through the liquid-filled airlock. Keep lid sealed and solids submerged under brine.
              </p>
            </div>
          ) : null}

          {/* STORAGE DURATIONS (AMBIENT VS REFRIGERATED) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block">ROOM TEMPERATURE STORAGE</span>
              <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                {selectedRecipe.ambient_storage_duration || 'Follow recipe guidance'}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block">REFRIGERATOR STORAGE</span>
              <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                {selectedRecipe.refrigerated_storage_duration || 'Follow recipe guidance'}
              </p>
            </div>
          </div>

          {/* INGREDIENTS WITH PROPORTIONAL SCALER & CHECKBOXES */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-700" />
                Ingredients
              </h2>

              <div className="flex items-center gap-1 bg-stone-200 dark:bg-stone-800 p-1 rounded-xl">
                {[0.5, 1, 2, 3].map(m => (
                  <button
                    key={m}
                    onClick={() => setScaleMultiplier(m)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono transition-all ${
                      scaleMultiplier === m
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
                    }`}
                  >
                    {m}x
                  </button>
                ))}
              </div>
            </div>

            <div className="card p-4 space-y-2 bg-white dark:bg-stone-800">
              {selectedRecipe.ingredients.map((ing, idx) => {
                const scaledQty = ing.quantity_base * scaleMultiplier;
                const isChecked = checkedIngredients[ing.name];

                return (
                  <label key={idx} className="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-750 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isChecked || false}
                      onChange={() => toggleIngredientCheck(ing.name)}
                      className="custom-checkbox shrink-0"
                    />
                    <span className={`text-xs sm:text-sm font-medium flex-1 ${isChecked ? 'line-through text-stone-400' : 'text-stone-800 dark:text-stone-200'}`}>
                      {ing.name} {ing.is_optional && <span className="text-stone-400 font-normal">(optional)</span>}
                    </span>
                    <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-400 shrink-0">
                      {scaledQty % 1 === 0 ? scaledQty : scaledQty.toFixed(1)} {ing.unit !== 'item' ? ing.unit : ''}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* EQUIPMENT CHECKLIST */}
          <div className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Package className="w-4 h-4 text-emerald-700" />
              Equipment Checklist
            </h2>

            <div className="card p-4 space-y-2 bg-white dark:bg-stone-800">
              {selectedRecipe.equipment.map((eq, idx) => {
                const isChecked = checkedEquipment[eq.name];

                return (
                  <label key={idx} className="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-750 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isChecked || false}
                      onChange={() => toggleEquipmentCheck(eq.name)}
                      className="custom-checkbox shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-stone-400' : 'text-stone-800 dark:text-stone-200'}`}>
                        {eq.name}
                      </span>
                      {eq.description && (
                        <p className="text-[11px] text-stone-500 block truncate">{eq.description}</p>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* FERMENTATION PLAN TIMELINE */}
          <div className="space-y-3">
            <h2 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-700" />
              Fermentation Plan Timeline
            </h2>

            <div className="card p-4 space-y-3 bg-white dark:bg-stone-800">
              {selectedRecipe.fermentation_timeline.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-stone-50 dark:bg-stone-850">
                  <span className="badge badge-green text-xs font-mono font-bold shrink-0 mt-0.5">
                    DAY {step.day}
                  </span>
                  <div className="space-y-1 min-w-0">
                    <h3 className="font-serif font-bold text-xs text-stone-900 dark:text-stone-100">
                      {step.title}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* STICKY BOTTOM BUTTON: START FERMENTATION */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-850 shrink-0">
          <button
            onClick={handleStartFermentation}
            className="btn btn-primary w-full py-3.5 text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-transform"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>START FERMENTATION</span>
          </button>
        </div>

      </div>
    </div>
  );
};
