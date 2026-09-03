import React, { useState } from 'react';
import { useFerment } from '../context/FermentContext';
import type { Batch } from '../types/ferment';
import { formatDate } from '../utils/helpers';
import { Star, RefreshCw, Share2, ArrowLeft, BookOpen } from 'lucide-react';

interface CompletedBatchScreenProps {
  batch: Batch;
  onBack: () => void;
}

export const CompletedBatchScreen: React.FC<CompletedBatchScreenProps> = ({ batch, onBack }) => {
  const { makeBatchAgain, showToast } = useFerment();
  const [sliderPos, setSliderPos] = useState(50);

  const beforeImg = batch.before_photo || batch.image;
  const afterImg = batch.after_photo || batch.progress_photos[batch.progress_photos.length - 1]?.url || batch.image;

  const handleShare = () => {
    showToast('✨ Fermentation story copied to clipboard!', 'info');
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="text-xs font-semibold text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1.5 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to My Ferments</span>
      </button>

      {/* Header Banner */}
      <div className="card p-6 bg-gradient-to-r from-amber-950/20 via-stone-900/5 to-transparent border-amber-900/30 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="badge badge-amber text-xs font-bold">🏆 Completed Batch</span>
              <span className="text-xs font-mono text-stone-400">Batch #{String(batch.batch_number).padStart(3, '0')}</span>
            </div>
            <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 mt-1">
              {batch.batch_name}
            </h1>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
              Started: {formatDate(batch.start_date)} • Completed: {formatDate(batch.actual_end_date || batch.expected_end_date)} ({batch.total_days} Days)
            </p>
          </div>

          {/* Rating Badge */}
          {batch.ratings && (
            <div className="bg-amber-100/80 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 p-3 rounded-2xl flex items-center gap-2">
              <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              <div>
                <span className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
                  {batch.ratings.overall}/5
                </span>
                <span className="block text-[10px] uppercase font-bold text-amber-800 dark:text-amber-400">
                  Final Score
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Actions Bar */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-stone-200/50 dark:border-stone-700/50">
          <button
            onClick={() => makeBatchAgain(batch)}
            className="btn btn-primary btn-md shadow-md flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Make Again</span>
          </button>

          <button
            onClick={handleShare}
            className="btn btn-secondary btn-md flex items-center gap-2"
          >
            <Share2 className="w-4 h-4 text-emerald-700" />
            <span>Share Journey</span>
          </button>
        </div>
      </div>

      {/* BEFORE VS AFTER PHOTO COMPARISON SLIDER */}
      <section className="card p-6 space-y-4">
        <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
          Before → After Transformation
        </h3>

        <div className="relative h-80 rounded-3xl overflow-hidden select-none border border-stone-200 dark:border-stone-700 shadow-md">
          <img src={afterImg} alt="After" className="absolute inset-0 w-full h-full object-cover" />
          <span className="absolute top-4 right-4 badge bg-black/70 text-white backdrop-blur-md text-xs">
            AFTER (Day {batch.total_days})
          </span>

          <div 
            className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-xl"
            style={{ width: `${sliderPos}%` }}
          >
            <img src={beforeImg} alt="Before" className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: '100%', height: '100%' }} />
            <span className="absolute top-4 left-4 badge bg-black/70 text-white backdrop-blur-md text-xs">
              BEFORE (Day 0)
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            value={sliderPos}
            onChange={e => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          />
        </div>
      </section>

      {/* RATING BREAKDOWN & FINAL NOTES */}
      {batch.ratings && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-3 bg-amber-50/30 dark:bg-amber-950/10 border-amber-200/50">
            <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
              Sensor Ratings Breakdown
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white dark:bg-stone-800 border">
                <span className="text-stone-500">Taste</span>
                <p className="font-serif font-bold text-base text-amber-600">{batch.ratings.taste} / 5</p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-stone-800 border">
                <span className="text-stone-500">Aroma</span>
                <p className="font-serif font-bold text-base text-amber-600">{batch.ratings.aroma} / 5</p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-stone-800 border">
                <span className="text-stone-500">Appearance</span>
                <p className="font-serif font-bold text-base text-amber-600">{batch.ratings.appearance} / 5</p>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-stone-800 border">
                <span className="text-stone-500">Texture</span>
                <p className="font-serif font-bold text-base text-amber-600">{batch.ratings.texture} / 5</p>
              </div>
            </div>
          </div>

          <div className="card p-6 space-y-3 bg-stone-50/60 dark:bg-stone-800/40">
            <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
              Final Notes & Recipe Changes
            </h4>
            <p className="text-xs text-stone-700 dark:text-stone-300 italic leading-relaxed">
              "{batch.ratings.final_notes || 'No custom notes provided.'}"
            </p>
            {batch.user_modifications && (
              <div className="pt-2 border-t text-xs">
                <span className="font-bold text-stone-500">My Modifications:</span>
                <p className="text-stone-700 dark:text-stone-300 mt-0.5">{batch.user_modifications}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FULL JOURNEY TIMELINE */}
      <section className="card p-6 space-y-4">
        <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-700" />
          Complete Journal History ({batch.progress_photos.length} Photos)
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {batch.progress_photos.map((photo, idx) => (
            <div key={idx} className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/60 space-y-2">
              <img src={photo.url} alt={`Day ${photo.day}`} className="w-full h-36 object-cover rounded-xl" />
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-emerald-800 dark:text-emerald-400">Day {photo.day}</span>
                <span className="text-stone-400 text-[10px]">{photo.date}</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 italic line-clamp-2">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
