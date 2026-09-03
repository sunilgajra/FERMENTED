import React, { useState } from 'react';
import { useFerment } from '../context/FermentContext';
import type { JournalEntryItem, Batch } from '../types/ferment';
import { BookOpen, Search, Filter, Calendar } from 'lucide-react';

export const JournalScreen: React.FC = () => {
  const { journalEntries, batches, openBatchDetail } = useFerment();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBatchId, setSelectedBatchId] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fermented Drinks', 'Vegetables', 'Condiments', 'Dairy', 'Grains'];

  const filteredEntries = journalEntries.filter((entry: JournalEntryItem) => {
    const matchesSearch = entry.note.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          entry.batch_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          entry.recipe_name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesBatch = selectedBatchId === 'All' || entry.batch_id === selectedBatchId;
    const matchesCategory = selectedCategory === 'All' || entry.category === selectedCategory;

    return matchesSearch && matchesBatch && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2.5">
          <BookOpen className="w-7 h-7 text-emerald-800 dark:text-emerald-400" />
          Fermentation Journal & Log
        </h1>
        <p className="text-sm text-stone-600 dark:text-stone-400">
          Chronological visual diary of daily observations, effervescence, aromas, and progress photos.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search journal notes, ferments..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-emerald-600"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-xl shrink-0">
            <Filter className="w-3.5 h-3.5 text-stone-400 ml-2" />
            <select
              value={selectedBatchId}
              onChange={e => setSelectedBatchId(e.target.value)}
              className="bg-transparent text-xs font-semibold text-stone-700 dark:text-stone-300 p-1 focus:outline-none"
            >
              <option value="All">All Batches</option>
              {batches.map((b: Batch) => (
                <option key={b.id} value={b.id}>{b.batch_name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Entry Feed */}
      <div className="space-y-4">
        {filteredEntries.length === 0 ? (
          <div className="card p-8 text-center space-y-2 text-stone-500">
            <p className="font-serif font-bold text-base text-stone-800 dark:text-stone-200">No journal entries found</p>
            <p className="text-xs">Log daily notes and photos inside an active batch to populate your journal.</p>
          </div>
        ) : (
          filteredEntries.map((entry: JournalEntryItem) => (
            <div key={entry.id} className="card p-5 space-y-4 bg-white dark:bg-stone-800 hover:border-emerald-700/50 transition-colors">
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-750 pb-3">
                <div className="flex items-center gap-3">
                  <span className="badge badge-green font-mono text-xs">Day {entry.day}</span>
                  <div>
                    <h3
                      onClick={() => openBatchDetail(entry.batch_id)}
                      className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 cursor-pointer hover:text-emerald-800 transition-colors"
                    >
                      {entry.batch_name}
                    </h3>
                    <p className="text-xs text-stone-500">{entry.recipe_name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{entry.date}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                {entry.photo && (
                  <img
                    src={entry.photo}
                    alt={`Day ${entry.day}`}
                    className="w-full sm:w-44 h-36 object-cover rounded-2xl border shadow-xs shrink-0"
                  />
                )}

                <div className="space-y-3 flex-1">
                  <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed italic">
                    "{entry.note}"
                  </p>

                  {entry.completed_tasks && entry.completed_tasks.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-stone-400 font-mono block">Completed Tasks:</span>
                      <div className="flex flex-wrap gap-1">
                        {entry.completed_tasks.map((task: string, tIdx: number) => (
                          <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300">
                            ✓ {task}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};
