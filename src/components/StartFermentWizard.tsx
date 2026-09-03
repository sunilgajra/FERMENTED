import React, { useState } from 'react';
import { useFerment } from '../context/FermentContext';
import { X, Play, Calendar, Clock, Box, Camera, FileText, BookOpen } from 'lucide-react';

export const StartFermentWizard: React.FC = () => {
  const { 
    isStartWizardOpen, closeStartWizard, selectedRecipe, setSelectedRecipe, 
    recipes, startNewBatch 
  } = useFerment();

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const activeRecipe = selectedRecipe || recipes[0];

  const [batchName, setBatchName] = useState('');
  const [startDate, setStartDate] = useState(todayStr);
  const [startTime, setStartTime] = useState(timeStr);
  const [batchQuantity, setBatchQuantity] = useState('');
  const [containerType, setContainerType] = useState<string>('Jar');
  const [notes, setNotes] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  if (!isStartWizardOpen || !activeRecipe) return null;

  const currentBatchName = batchName || activeRecipe.name;
  const currentQuantity = batchQuantity || activeRecipe.expected_yield || '1 Quart Jar';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const expectedEnd = new Date(startDate);
    expectedEnd.setDate(expectedEnd.getDate() + activeRecipe.duration_min);

    startNewBatch({
      recipe_id: activeRecipe.id,
      recipe_name: activeRecipe.name,
      batch_name: currentBatchName,
      category: activeRecipe.category,
      image: photoUrl || activeRecipe.image,
      referencing_fermenting_image: activeRecipe.fermentingImage || activeRecipe.image,
      referencing_finished_image: activeRecipe.finishedImage || activeRecipe.image,
      start_date: startDate,
      start_time: startTime,
      expected_end_date: expectedEnd.toISOString().split('T')[0],
      total_days: activeRecipe.duration_min,
      batch_size: currentQuantity,
      container_type: containerType,
      requires_burp: activeRecipe.requires_burp,
      requires_airlock: activeRecipe.requires_airlock,
      notes: notes,
      before_photo: photoUrl || activeRecipe.image,
      progress_photos: photoUrl ? [{ day: 0, date: startDate, url: photoUrl, caption: 'Day 0 Setup Photo' }] : []
    });

    closeStartWizard();
  };

  return (
    <div className="modal-overlay z-50">
      <div className="modal-content max-w-lg p-6 space-y-5 bg-white dark:bg-stone-900">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 border-stone-200 dark:border-stone-800">
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-emerald-700">Start New Batch</span>
            <h2 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
              {activeRecipe.name}
            </h2>
          </div>
          <button onClick={closeStartWizard} className="p-1 rounded-full text-stone-400 hover:text-stone-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Setup Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {/* Select Recipe Dropdown */}
          <div className="space-y-1">
            <label className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              Fermentation Recipe:
            </label>
            <select
              value={activeRecipe.id}
              onChange={e => {
                const found = recipes.find(r => r.id === e.target.value);
                if (found) {
                  setSelectedRecipe(found);
                  setBatchName(found.name);
                }
              }}
              className="w-full p-2.5 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs font-semibold text-stone-900 dark:text-stone-100"
            >
              {recipes.map(r => (
                <option key={r.id} value={r.id}>
                  {r.name} ({r.category} • {r.duration_min} Days)
                </option>
              ))}
            </select>
          </div>

          {/* Batch Name */}
          <div className="space-y-1">
            <label className="font-bold text-stone-800 dark:text-stone-200">
              Batch Name:
            </label>
            <input
              type="text"
              value={batchName}
              placeholder={activeRecipe.name}
              onChange={e => setBatchName(e.target.value)}
              className="w-full p-3 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs text-stone-900 dark:text-stone-100"
            />
          </div>

          {/* Start Date & Time */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                Start Date:
              </label>
              <input
                type="date"
                required
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="w-full p-2.5 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-700" />
                Start Time:
              </label>
              <input
                type="text"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
                className="w-full p-2.5 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs"
              />
            </div>
          </div>

          {/* Quantity & Container */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="font-bold text-stone-800 dark:text-stone-200">
                Batch Quantity (Optional):
              </label>
              <input
                type="text"
                value={batchQuantity}
                onChange={e => setBatchQuantity(e.target.value)}
                placeholder={activeRecipe.expected_yield || '1 Quart Jar'}
                className="w-full p-2.5 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1">
                <Box className="w-3.5 h-3.5 text-emerald-700" />
                Container Vessel:
              </label>
              <select
                value={containerType}
                onChange={e => setContainerType(e.target.value)}
                className="w-full p-2.5 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs font-semibold"
              >
                <option value="Jar">Glass Canning Jar</option>
                <option value="Crock">Fermentation Crock</option>
                <option value="Bottle">Flip-Top Glass Bottle</option>
                <option value="Fermentation Vessel">Airlock Vessel</option>
                <option value="Other">Other Vessel</option>
              </select>
            </div>
          </div>

          {/* Optional Photo URL */}
          <div className="space-y-1">
            <label className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1">
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              Day 0 Photo URL (Optional):
            </label>
            <input
              type="text"
              value={photoUrl}
              onChange={e => setPhotoUrl(e.target.value)}
              placeholder="Paste photo link or leave empty to use recipe hero image"
              className="w-full p-2.5 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs"
            />
          </div>

          {/* Optional Notes */}
          <div className="space-y-1">
            <label className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-stone-500" />
              Initial Notes (Optional):
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="Record ambient room temp, salt percentage, or initial observations..."
              className="w-full p-2.5 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full py-3.5 font-bold text-sm flex items-center justify-center gap-2 shadow-md"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>START BATCH</span>
          </button>
        </form>

      </div>
    </div>
  );
};
