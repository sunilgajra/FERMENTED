import React, { useState } from 'react';
import { useFerment } from '../context/FermentContext';
import type { Recipe, Batch } from '../types/ferment';
import { 
  Plus, Search, Sparkles, Clock, Flame, ChevronRight, Wind, ShieldCheck, Play, ArrowUpRight
} from 'lucide-react';

export const HomeScreen: React.FC = () => {
  const { 
    activeBatches, recipes, openFermentSelector, setSelectedRecipe, 
    openBatchDetail, openAiAssistant, setActiveView, burpBatch, snoozeBurp
  } = useFerment();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');

  // Quick picks IDs from authentic guide
  const quickPickIds = [
    'sauerkraut', 'kimchi', 'garlic-dill-pickles', 'kombucha', 
    'ginger-ale', 'fruit-soda', 'beet-kvass', 'ginger-bug-for-soda', 
    'rye-or-wheat-sourdough-starter'
  ];

  const quickPicks = recipes.filter(r => quickPickIds.includes(r.id));

  const categoryPills = [
    { name: 'All', key: 'All' },
    { name: 'Vegetables', key: 'Vegetables', icon: '🥬' },
    { name: 'Drinks', key: 'Beverages', icon: '🍹' },
    { name: 'Fruit', key: 'Fruits', icon: '🍍' },
    { name: 'Dairy', key: 'Dairy', icon: '🥛' },
    { name: 'Beans', key: 'Beans & Legumes', icon: '🫘' },
    { name: 'Sourdough', key: 'Sourdough', icon: '🌾' },
    { name: 'Meat & Fish', key: 'Meat, Fish & Eggs', icon: '🥩' },
    { name: 'Vinegar', key: 'Vinegar', icon: '🍾' }
  ];

  const filteredQuickPicks = quickPicks.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCat = selectedCategoryFilter === 'All' || 
                       r.category === selectedCategoryFilter ||
                       (selectedCategoryFilter === 'Beverages' && r.category === 'Fermented Drinks');
    
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto pb-16 px-1 sm:px-0">
      
      {/* 1. HERO BANNER: WHAT WOULD YOU LIKE TO FERMENT TODAY? */}
      <div className="bg-gradient-to-br from-emerald-950 via-stone-900 to-emerald-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden space-y-5">
        
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-mono tracking-wider font-semibold text-emerald-200 uppercase">
              Fermentation Companion
            </span>
          </div>

          <button
            onClick={openAiAssistant}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-amber-300 backdrop-blur-md transition-colors"
            title="Ask AI Fermentation Assistant"
          >
            <Sparkles className="w-4 h-4" />
          </button>
        </div>

        <div className="relative z-10 space-y-2">
          <span className="text-xs font-medium text-stone-300">Good morning 👋</span>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-stone-50 leading-tight">
            WHAT WOULD YOU LIKE<br />
            <span className="text-emerald-400">TO FERMENT TODAY?</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative z-10">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search recipes, ingredients, or fermentation types..."
              className="w-full bg-white/10 dark:bg-black/20 text-white placeholder-stone-400 text-xs sm:text-sm pl-10 pr-4 py-3 rounded-2xl border border-white/15 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 backdrop-blur-md"
            />
          </div>
        </div>

        {/* Fast Action CTA */}
        <div className="relative z-10 flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={openFermentSelector}
            className="btn bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs sm:text-sm py-3 px-5 rounded-2xl flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>+ START A FERMENT</span>
          </button>

          <button
            onClick={() => setActiveView('learn')}
            className="btn bg-white/10 hover:bg-white/20 text-white font-semibold text-xs py-3 px-4 rounded-2xl flex items-center gap-1.5 backdrop-blur-md transition-all"
          >
            <span>Learn Guide & Safety</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-300" />
          </button>
        </div>

        {/* Ambient background decoration */}
        <div className="absolute -right-12 -bottom-12 w-56 h-56 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. CATEGORY SELECTION CARDS GRID */}
      <div className="space-y-3">
        <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 px-1">
          Browse Categories
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {categoryPills.map(cat => (
            <button
              key={cat.key}
              onClick={() => {
                if (cat.key === 'All') {
                  setSelectedCategoryFilter('All');
                } else {
                  setSelectedCategoryFilter(cat.key);
                  openFermentSelector();
                }
              }}
              className={`p-2.5 rounded-2xl flex flex-col items-center justify-center gap-1 text-center transition-all ${
                selectedCategoryFilter === cat.key
                  ? 'bg-emerald-800 text-white shadow-md font-bold scale-105'
                  : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-750 hover:bg-stone-50'
              }`}
            >
              <span className="text-base">{cat.icon || '🍃'}</span>
              <span className="text-[10px] font-medium truncate w-full">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. ACTIVE FERMENTS DASHBOARD (IF ANY) */}
      {activeBatches.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-sm font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              My Active Ferments ({activeBatches.length})
            </h2>
            <button
              onClick={() => setActiveView('my-ferments')}
              className="text-xs font-bold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-0.5"
            >
              View All <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {activeBatches.map((batch: Batch) => {
              const currentDay = Math.max(1, Math.floor((Date.now() - new Date(batch.start_date).getTime()) / (1000 * 60 * 60 * 24)) + 1);
              const progressPct = Math.min(100, Math.round((currentDay / batch.total_days) * 100));

              return (
                <div
                  key={batch.id}
                  className="card p-4 space-y-3 bg-white dark:bg-stone-800 border-stone-200/90 dark:border-stone-700 hover:border-emerald-500/50 transition-all shadow-xs"
                >
                  <div className="flex gap-3 items-center" onClick={() => openBatchDetail(batch.id)}>
                    <img
                      src={batch.image}
                      alt={batch.batch_name}
                      className="w-16 h-16 rounded-2xl object-cover shrink-0 border"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="badge badge-green text-[10px] font-mono">
                          Day {currentDay} of {batch.total_days}
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">
                          {progressPct}%
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 truncate">
                        {batch.batch_name}
                      </h3>

                      <p className="text-[11px] text-stone-500 truncate">
                        Expected ready: {new Date(batch.expected_end_date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="progress-bar-bg h-2">
                    <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
                  </div>

                  {/* Burp vs Airlock Status Card */}
                  {batch.requires_burp ? (
                    <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-amber-900 dark:text-amber-300 font-semibold">
                        <Wind className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>🔔 Vent / Burp Needed</span>
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => burpBatch(batch.id)}
                          className="btn bg-amber-600 hover:bg-amber-500 text-white text-[11px] py-1 px-2.5 rounded-lg font-bold"
                        >
                          BURP NOW
                        </button>
                        <button
                          onClick={() => snoozeBurp(batch.id, 30)}
                          className="text-[10px] text-stone-500 hover:text-stone-800 px-1 font-mono"
                        >
                          30m
                        </button>
                      </div>
                    </div>
                  ) : batch.requires_airlock ? (
                    <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 flex items-center gap-1.5 text-xs text-emerald-900 dark:text-emerald-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-[11px] font-medium">AIRLOCK ACTIVE • Gas escapes automatically</span>
                    </div>
                  ) : null}

                  <button
                    onClick={() => openBatchDetail(batch.id)}
                    className="btn btn-secondary btn-sm w-full font-bold text-xs"
                  >
                    Open Ferment Tracker
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. QUICK PICKS VISUAL RECIPE CARDS */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between px-1">
          <div>
            <h2 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100">
              Popular & Easy Ferments
            </h2>
            <p className="text-xs text-stone-500">Tap any recipe to preview setup, timing & ingredients</p>
          </div>
          <button
            onClick={() => setActiveView('explore')}
            className="text-xs font-bold text-emerald-800 dark:text-emerald-400 hover:underline"
          >
            All 57 Recipes →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredQuickPicks.map((recipe: Recipe) => (
            <div
              key={recipe.id}
              onClick={() => setSelectedRecipe(recipe)}
              className="card card-hover cursor-pointer overflow-hidden bg-white dark:bg-stone-800 border-stone-200/90 dark:border-stone-700 flex flex-col justify-between group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Fermentation Type Badge */}
                <span className="absolute top-2.5 left-2.5 badge bg-stone-900/80 backdrop-blur-md text-white text-[10px] font-mono">
                  {recipe.fermentation_type || 'Lacto-Ferment'}
                </span>

                <span className="absolute bottom-2.5 right-2.5 badge bg-emerald-800 text-white text-[10px] font-mono font-bold shadow-md">
                  {recipe.duration_min} Days
                </span>
              </div>

              <div className="p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                      {recipe.category}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400 flex items-center gap-0.5">
                      <Flame className="w-3 h-3 text-amber-500" />
                      {recipe.difficulty}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 transition-colors">
                    {recipe.name}
                  </h3>

                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                    {recipe.short_description}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 dark:border-stone-750 flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-400">
                  <span className="flex items-center gap-1 text-stone-500 font-mono font-normal text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    Prep: {recipe.prep_time_min}m
                  </span>
                  <span className="flex items-center gap-0.5">
                    Start Ferment <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
