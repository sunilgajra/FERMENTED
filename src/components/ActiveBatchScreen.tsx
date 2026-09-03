import React, { useState } from 'react';
import { useFerment } from '../context/FermentContext';
import { calculateCurrentDay, calculateProgressPercentage, getTodayStep, formatDate } from '../utils/helpers';
import { 
  ArrowLeft, Camera, BookOpen, Calendar, AlertTriangle, CheckCircle2, Layers, Trash2, X, Thermometer, Smile, Eye, MessageSquare, ClipboardCheck
} from 'lucide-react';

export const ActiveBatchScreen: React.FC = () => {
  const { 
    selectedBatch, setSelectedBatchId, recipes, toggleTaskCompletion, 
    openCompletionModal, deleteBatch, addProgressPhoto, addJournalEntry, setSelectedRecipe
  } = useFerment();

  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'photos' | 'recipe'>('overview');
  
  // Daily Check-in Modal State
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [appearanceInput, setAppearanceInput] = useState<'Normal' | 'Cloudy' | 'Clear' | 'Bubbles' | 'Sediment' | 'Active Bubbling' | 'Other'>('Normal');
  const [smellInput, setSmellInput] = useState<'Normal' | 'Sour' | 'Yeasty' | 'Strong' | 'Unusual' | 'Fresh & Tangy'>('Normal');
  const [tasteInput, setTasteInput] = useState('');
  const [tempInput, setTempInput] = useState('21°C');
  const [checkInPhotoUrl, setCheckInPhotoUrl] = useState('');
  const [checkInNotes, setCheckInNotes] = useState('');

  if (!selectedBatch) return null;

  const recipe = recipes.find(r => r.id === selectedBatch.recipe_id);
  const currentDay = calculateCurrentDay(selectedBatch.start_date);
  const progressPercent = calculateProgressPercentage(selectedBatch.start_date, selectedBatch.total_days);
  const todayStep = recipe ? getTodayStep(recipe, currentDay) : null;
  const completedForDay = selectedBatch.completed_tasks?.[currentDay] || [];

  const handleDailyCheckInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const photoUrl = checkInPhotoUrl || 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80';
    
    // Add photo
    addProgressPhoto(selectedBatch.id, currentDay, photoUrl, `Day ${currentDay}: ${appearanceInput} appearance, ${smellInput} smell`);
    
    // Add journal entry with full observations
    const formattedNote = `[Appearance: ${appearanceInput} | Smell: ${smellInput}${tempInput ? ' | Temp: ' + tempInput : ''}${tasteInput ? ' | Taste: ' + tasteInput : ''}] ${checkInNotes}`;
    addJournalEntry(selectedBatch.id, currentDay, formattedNote, smellInput);

    // Reset & Close
    setCheckInNotes('');
    setCheckInPhotoUrl('');
    setTasteInput('');
    setShowCheckInModal(false);
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto pb-12">
      
      {/* Header Navigation & Actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelectedBatchId(null)}
          className="btn btn-secondary btn-sm flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Ferments</span>
        </button>

        <div className="flex items-center gap-2">
          {recipe && (
            <button
              onClick={() => setSelectedRecipe(recipe)}
              className="btn btn-secondary btn-sm flex items-center gap-1 text-emerald-800 dark:text-emerald-400 font-bold"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>View Full Recipe Guide</span>
            </button>
          )}

          <button
            onClick={() => deleteBatch(selectedBatch.id)}
            className="p-2 rounded-xl text-stone-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
            title="Delete Batch"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Batch Main Banner Card */}
      <div className="card p-6 space-y-4 bg-white dark:bg-stone-800">
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <img
            src={selectedBatch.image}
            alt={selectedBatch.batch_name}
            className="w-full sm:w-36 h-36 rounded-2xl object-cover border shadow-sm shrink-0"
          />

          <div className="space-y-2 flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-green text-xs font-bold">🟢 Active Ferment</span>
              <span className="badge badge-neutral text-xs font-mono">Batch #{selectedBatch.batch_number}</span>
              <span className="badge badge-amber text-xs">{selectedBatch.batch_size}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
              {selectedBatch.batch_name}
            </h1>

            <p className="text-xs text-stone-500 font-medium">
              Recipe Source: <span className="font-bold text-stone-800 dark:text-stone-200">{selectedBatch.recipe_name}</span>
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-stone-500 pt-1">
              <span>Started: <strong>{formatDate(selectedBatch.start_date)}</strong></span>
              <span>Expected Ready: <strong>{formatDate(selectedBatch.expected_end_date)}</strong></span>
            </div>
          </div>
        </div>

        {/* Progress Bar & Day Counter */}
        <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-700">
          <div className="flex justify-between items-center text-xs">
            <span className="font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-700" />
              Day {currentDay} of {selectedBatch.total_days} Fermentation
            </span>
            <span className="font-mono font-bold text-emerald-800 dark:text-emerald-400 text-sm">
              {progressPercent}% Complete
            </span>
          </div>

          <div className="progress-bar-bg h-3">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        {/* Action Buttons Header Bar */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setShowCheckInModal(true)}
            className="btn btn-primary btn-sm flex items-center gap-1.5 shadow-sm font-bold"
          >
            <ClipboardCheck className="w-4 h-4" />
            <span>Daily Check-In ("How is your ferment doing?")</span>
          </button>

          <button
            onClick={() => openCompletionModal(selectedBatch)}
            className="btn btn-amber btn-sm ml-auto flex items-center gap-1.5 font-bold shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Complete Ferment</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-stone-200 dark:border-stone-800">
        {[
          { id: 'overview', label: "Today's Guidance & Tasks" },
          { id: 'timeline', label: "Day-by-Day Timeline" },
          { id: 'photos', label: "Photo Journal & Log" },
          { id: 'recipe', label: "Recipe Reference" }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-4 py-2.5 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
              activeTab === t.id
                ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400 font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAB 1: TODAY'S GUIDANCE & TASKS */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          
          {/* Today's Tasks Checklist */}
          {todayStep && (
            <div className="card p-5 space-y-4 bg-white dark:bg-stone-800 border-emerald-200/80">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 tracking-wider">
                    TODAY — DAY {currentDay}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                    {todayStep.title}
                  </h3>
                </div>
                <span className="badge badge-amber text-xs">
                  {completedForDay.length}/{todayStep.tasks.length} Tasks Done
                </span>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-400">
                {todayStep.description}
              </p>

              {/* Task Checklist */}
              <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-700">
                {todayStep.tasks.map((task, idx) => {
                  const isDone = completedForDay.includes(task);
                  return (
                    <label key={idx} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-stone-50 dark:hover:bg-stone-750 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => toggleTaskCompletion(selectedBatch.id, currentDay, task)}
                        className="custom-checkbox shrink-0"
                      />
                      <span className={`text-xs sm:text-sm font-medium ${isDone ? 'line-through text-stone-400' : 'text-stone-800 dark:text-stone-200'}`}>
                        {task}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* WHAT TO LOOK FOR (Normal vs Warning) */}
          {todayStep && (todayStep.what_is_normal || todayStep.what_is_not_normal) && (
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                What To Look For Today (Day {currentDay})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {todayStep.what_is_normal && (
                  <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 space-y-1.5">
                    <h5 className="font-bold text-xs text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      🟢 Expected & Normal:
                    </h5>
                    <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                      {todayStep.what_is_normal}
                    </p>
                  </div>
                )}

                {todayStep.what_is_not_normal && (
                  <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 space-y-1.5">
                    <h5 className="font-bold text-xs text-rose-900 dark:text-rose-300 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      ⚠️ Not Normal (Action Required):
                    </h5>
                    <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                      {todayStep.what_is_not_normal}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* RECIPE REFERENCE VS MY BATCH PHOTOS SEPARATION */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-700" />
              Reference Guides vs My Batch Photos
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Recipe Reference Box */}
              <div className="card p-4 space-y-3 bg-stone-50/80 dark:bg-stone-800/40 border-stone-200">
                <span className="text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block">
                  📖 RECIPE REFERENCE — HOW IT SHOULD LOOK
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <img
                      src={selectedBatch.referencing_fermenting_image || selectedBatch.image}
                      alt="Fermenting Reference"
                      className="w-full h-24 object-cover rounded-xl border"
                    />
                    <span className="text-[10px] font-semibold text-stone-600 dark:text-stone-400 block text-center">
                      In-Progress Setup
                    </span>
                  </div>
                  <div className="space-y-1">
                    <img
                      src={selectedBatch.referencing_finished_image || selectedBatch.image}
                      alt="Finished Reference"
                      className="w-full h-24 object-cover rounded-xl border"
                    />
                    <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 block text-center">
                      Finished Goal
                    </span>
                  </div>
                </div>
              </div>

              {/* My Batch Photos Box */}
              <div className="card p-4 space-y-3 bg-white dark:bg-stone-800 border-emerald-200/80">
                <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-wider block">
                  📷 MY BATCH — MY PROGRESS PHOTOS ({selectedBatch.progress_photos.length})
                </span>

                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {selectedBatch.progress_photos.map((p, idx) => (
                    <div key={idx} className="space-y-1 shrink-0 w-24">
                      <img src={p.url} alt={`Day ${p.day}`} className="w-24 h-24 object-cover rounded-xl border" />
                      <span className="text-[10px] font-mono text-stone-500 block text-center truncate">Day {p.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: DAY-BY-DAY TIMELINE */}
      {activeTab === 'timeline' && recipe && (
        <div className="space-y-6">
          <div className="relative border-l-2 border-emerald-700/30 ml-4 pl-6 space-y-8">
            {recipe.fermentation_timeline.map((step, idx) => {
              const isPast = step.day < currentDay;
              const isCurrent = step.day === currentDay;

              return (
                <div key={idx} className="relative space-y-2">
                  <div className={`absolute -left-[31px] top-0.5 w-4 h-4 rounded-full border-2 ${
                    isPast
                      ? 'bg-emerald-700 border-emerald-800'
                      : isCurrent
                      ? 'bg-amber-500 border-amber-600 ring-4 ring-amber-500/20 animate-pulse'
                      : 'bg-stone-200 dark:bg-stone-800 border-stone-400'
                  }`} />

                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-xs font-bold ${isCurrent ? 'text-amber-600' : 'text-emerald-700'}`}>
                      Day {step.day}
                    </span>
                    <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                      {step.title}
                    </h4>
                    {isCurrent && <span className="badge badge-amber text-[10px]">TODAY</span>}
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-400">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: PHOTO JOURNEY */}
      {activeTab === 'photos' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
              My Fermentation Visual Journey
            </h3>
            <button onClick={() => setShowCheckInModal(true)} className="btn btn-primary btn-sm">
              <Camera className="w-4 h-4" />
              <span>Perform Check-In</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {selectedBatch.progress_photos.map((p, idx) => (
              <div key={idx} className="card p-2 space-y-2 bg-white dark:bg-stone-800">
                <img src={p.url} alt={`Day ${p.day}`} className="w-full h-36 object-cover rounded-xl border" />
                <div className="p-1">
                  <span className="text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-400 block">
                    Day {p.day} • {p.date}
                  </span>
                  {p.caption && <p className="text-xs text-stone-600 dark:text-stone-400 truncate">{p.caption}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: RECIPE REFERENCE */}
      {activeTab === 'recipe' && recipe && (
        <div className="space-y-6">
          <div className="card p-6 space-y-4 bg-white dark:bg-stone-800">
            <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
              {recipe.name} — Full Reference Guide
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              {recipe.long_description}
            </p>

            <button
              onClick={() => setSelectedRecipe(recipe)}
              className="btn btn-primary btn-md w-full flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Open Interactive Recipe Guide</span>
            </button>
          </div>
        </div>
      )}

      {/* DAILY CHECK-IN MODAL ("How is your ferment doing?") */}
      {showCheckInModal && (
        <div className="modal-overlay">
          <div className="modal-content max-w-lg p-6 space-y-5">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-emerald-700">Daily Fermentation Log</span>
                <h3 className="font-serif font-bold text-lg">How is your ferment doing? (Day {currentDay})</h3>
              </div>
              <button onClick={() => setShowCheckInModal(false)}><X className="w-5 h-5 text-stone-400" /></button>
            </div>

            <form onSubmit={handleDailyCheckInSubmit} className="space-y-4 text-xs">
              
              {/* Appearance Radio Selector */}
              <div className="space-y-2">
                <label className="font-bold flex items-center gap-1.5 text-stone-900 dark:text-stone-100">
                  <Eye className="w-4 h-4 text-emerald-700" />
                  Appearance:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Normal', 'Cloudy', 'Clear', 'Bubbles', 'Sediment', 'Active Bubbling', 'Other'].map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setAppearanceInput(opt as any)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                        appearanceInput === opt
                          ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                          : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Smell Radio Selector */}
              <div className="space-y-2">
                <label className="font-bold flex items-center gap-1.5 text-stone-900 dark:text-stone-100">
                  <Smile className="w-4 h-4 text-amber-600" />
                  Smell / Aroma:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Normal', 'Sour', 'Yeasty', 'Strong', 'Unusual', 'Fresh & Tangy'].map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSmellInput(opt as any)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                        smellInput === opt
                          ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                          : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Temperature & Taste inputs */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold flex items-center gap-1">
                    <Thermometer className="w-3.5 h-3.5 text-rose-500" />
                    Ambient Temp:
                  </label>
                  <input
                    type="text"
                    value={tempInput}
                    onChange={e => setTempInput(e.target.value)}
                    placeholder="e.g. 21°C"
                    className="w-full p-2.5 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold">Taste (if tested):</label>
                  <input
                    type="text"
                    value={tasteInput}
                    onChange={e => setTasteInput(e.target.value)}
                    placeholder="e.g. Crisp & pleasantly sour"
                    className="w-full p-2.5 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs"
                  />
                </div>
              </div>

              {/* Photo Input */}
              <div className="space-y-1">
                <label className="font-bold flex items-center gap-1">
                  <Camera className="w-3.5 h-3.5 text-emerald-700" />
                  Progress Photo URL:
                </label>
                <input
                  type="text"
                  value={checkInPhotoUrl}
                  onChange={e => setCheckInPhotoUrl(e.target.value)}
                  placeholder="Paste photo URL or leave empty for sample photo"
                  className="w-full p-2.5 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs"
                />
              </div>

              {/* Free-form notes */}
              <div className="space-y-1">
                <label className="font-bold flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5 text-stone-500" />
                  Free-form Observation Notes:
                </label>
                <textarea
                  rows={3}
                  value={checkInNotes}
                  onChange={e => setCheckInNotes(e.target.value)}
                  placeholder="Record gas activity, brine levels, submersion, or aroma details..."
                  className="w-full p-2.5 rounded-xl border bg-stone-50 dark:bg-stone-800 text-xs"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full py-3 font-bold shadow-md">
                Save Check-In to Fermentation Journal
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
