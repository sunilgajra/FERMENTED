import React from 'react';
import { useFerment } from '../context/FermentContext';
import type { Batch, Recipe } from '../types/ferment';
import { RefreshCw, Moon, Sun, Download, Bookmark } from 'lucide-react';

export const ProfileScreen: React.FC = () => {
  const { batches, recipes, settings, updateSettings, resetAllData, setSelectedRecipe } = useFerment();

  const totalBatches = batches.length;
  const completedBatches = batches.filter((b: Batch) => b.status === 'completed').length;
  const activeBatches = batches.filter((b: Batch) => b.status === 'active').length;
  const totalDaysLogged = batches.reduce((acc: number, b: Batch) => acc + b.total_days, 0);
  const bookmarkedRecipes = recipes.filter((r: Recipe) => r.saved);

  const handleExportData = () => {
    const dataStr = JSON.stringify({ batches, recipes, settings }, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fermentlog-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
      
      {/* Profile Header */}
      <div className="card p-6 bg-white dark:bg-stone-800 space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <img
            src={settings.avatar}
            alt={settings.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-emerald-800 shadow-md"
          />
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h1 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                {settings.name}
              </h1>
              <span className="badge badge-green text-xs">Master Fermenter</span>
            </div>
            <p className="text-xs text-stone-500">
              Personal fermentation journal and companion since July 2026.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-stone-100 dark:border-stone-750 text-center">
          <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-750">
            <span className="font-serif font-bold text-2xl text-emerald-800 dark:text-emerald-400">{totalBatches}</span>
            <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block mt-0.5">Total Ferments</span>
          </div>

          <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-750">
            <span className="font-serif font-bold text-2xl text-amber-600">{completedBatches}</span>
            <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block mt-0.5">Completed</span>
          </div>

          <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-750">
            <span className="font-serif font-bold text-2xl text-emerald-700">{activeBatches}</span>
            <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block mt-0.5">Active Batches</span>
          </div>

          <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-750">
            <span className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">{totalDaysLogged}d</span>
            <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block mt-0.5">Days Tracked</span>
          </div>
        </div>
      </div>

      {/* Bookmarked Recipes Quick Access */}
      {bookmarkedRecipes.length > 0 && (
        <div className="card p-6 space-y-4 bg-white dark:bg-stone-800">
          <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
            Bookmarked Recipes ({bookmarkedRecipes.length})
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bookmarkedRecipes.map((recipe: Recipe) => (
              <div
                key={recipe.id}
                onClick={() => setSelectedRecipe(recipe)}
                className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-750 border hover:border-emerald-700 cursor-pointer flex items-center gap-3"
              >
                <img src={recipe.image} alt={recipe.name} className="w-12 h-12 rounded-xl object-cover" />
                <div className="min-w-0 flex-1">
                  <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 truncate">{recipe.name}</h4>
                  <span className="text-[11px] text-stone-500">{recipe.duration_min}–{recipe.duration_max} Days</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Preferences & Settings */}
      <div className="card p-6 space-y-4 bg-white dark:bg-stone-800">
        <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
          Preferences & Data Management
        </h3>

        <div className="space-y-3 divide-y divide-stone-100 dark:divide-stone-750 text-xs">
          
          <div className="pt-3 flex items-center justify-between">
            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100 block">Appearance Theme</span>
              <span className="text-stone-500">Toggle between Light and Dark mode</span>
            </div>
            <button
              onClick={() => updateSettings({ theme: settings.theme === 'light' ? 'dark' : 'light' })}
              className="btn btn-secondary btn-sm flex items-center gap-1.5"
            >
              {settings.theme === 'light' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-400" />}
              <span className="capitalize">{settings.theme} Mode</span>
            </button>
          </div>

          <div className="pt-3 flex items-center justify-between">
            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100 block">Export Journal Data</span>
              <span className="text-stone-500">Download complete backup of your batches and notes in JSON format</span>
            </div>
            <button onClick={handleExportData} className="btn btn-secondary btn-sm flex items-center gap-1.5">
              <Download className="w-4 h-4 text-emerald-700" />
              <span>Export JSON</span>
            </button>
          </div>

          <div className="pt-3 flex items-center justify-between">
            <div>
              <span className="font-bold text-stone-900 dark:text-stone-100 block">Reset Seed Demo Data</span>
              <span className="text-stone-500">Reset all recipes, batches, and journal entries back to initial seed data</span>
            </div>
            <button onClick={resetAllData} className="btn btn-secondary btn-sm text-rose-600 flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4" />
              <span>Reset Data</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
