import React, { useState } from 'react';
import { useFerment } from '../context/FermentContext';
import { X, Star, ShieldAlert, Check } from 'lucide-react';
import type { RatingBreakdown, Recipe } from '../types/ferment';

export const CompletionFlowModal: React.FC = () => {
  const { isCompletionModalOpen, closeCompletionModal, selectedBatch, completeBatch, recipes } = useFerment();

  const [taste, setTaste] = useState(4);
  const [aroma, setAroma] = useState(5);
  const [appearance, setAppearance] = useState(4);
  const [texture, setTexture] = useState(4);
  const [wouldMakeAgain, setWouldMakeAgain] = useState<'Yes' | 'Maybe' | 'No'>('Yes');
  const [finalNotes, setFinalNotes] = useState('');

  if (!isCompletionModalOpen || !selectedBatch) return null;

  const recipe = recipes.find((r: Recipe) => r.id === selectedBatch.recipe_id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const overall = parseFloat(((taste + aroma + appearance + texture) / 4).toFixed(1));
    
    const ratingData: RatingBreakdown = {
      taste,
      aroma,
      appearance,
      texture,
      overall,
      would_make_again: wouldMakeAgain,
      final_notes: finalNotes
    };

    completeBatch(selectedBatch.id, ratingData);
  };

  const renderStarPicker = (val: number, setVal: (n: number) => void, label: string) => (
    <div className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60">
      <span className="text-xs font-semibold text-stone-700 dark:text-stone-300">{label}</span>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            type="button"
            key={star}
            onClick={() => setVal(star)}
            className="p-1 text-stone-300 hover:scale-110 transition-transform"
          >
            <Star className={`w-5 h-5 ${star <= val ? 'fill-amber-500 text-amber-500' : 'text-stone-300'}`} />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content max-w-lg p-6 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
          <div>
            <span className="text-[10px] uppercase font-bold text-emerald-700 font-mono tracking-wider">
              Completion Journey
            </span>
            <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
              Final Check & Batch Rating
            </h3>
          </div>
          <button onClick={closeCompletionModal} className="text-stone-400 hover:text-stone-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Food Safety Guidance Disclaimer */}
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-2">
          <h4 className="font-serif font-bold text-amber-900 dark:text-amber-200 text-xs flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            Your ferment is ready for a final check.
          </h4>
          <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
            {recipe?.completion_guidance || 'Inspect for bright aroma, vibrant effervescence or acidity, and absence of surface mold.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Star Ratings Grid */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-stone-800 dark:text-stone-200">
              How did it turn out? (1–5 Stars)
            </span>
            {renderStarPicker(taste, setTaste, 'Taste')}
            {renderStarPicker(aroma, setAroma, 'Aroma')}
            {renderStarPicker(appearance, setAppearance, 'Appearance')}
            {renderStarPicker(texture, setTexture, 'Texture')}
          </div>

          {/* Would make again picker */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-stone-800 dark:text-stone-200">
              Would you make it again?
            </span>
            <div className="grid grid-cols-3 gap-2">
              {(['Yes', 'Maybe', 'No'] as const).map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setWouldMakeAgain(opt)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all ${
                    wouldMakeAgain === opt
                      ? 'bg-emerald-800 text-white shadow-sm'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Final Notes textarea */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-stone-600">
              What would you change next time?
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Ferment 2 days longer, add more caraway seeds, reduce sugar quantity..."
              value={finalNotes}
              onChange={e => setFinalNotes(e.target.value)}
              className="w-full p-3 rounded-2xl bg-stone-100 dark:bg-stone-800 border text-xs text-stone-900 dark:text-stone-100"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-full shadow-md flex items-center justify-center gap-2">
            <Check className="w-5 h-5" />
            <span>Complete & Preserve Journal</span>
          </button>
        </form>

      </div>
    </div>
  );
};
