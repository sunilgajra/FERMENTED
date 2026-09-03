import React, { useState } from 'react';
import { useFerment } from '../context/FermentContext';
import type { Batch } from '../types/ferment';
import { calculateCurrentDay, calculateProgressPercentage } from '../utils/helpers';
import { Plus, BookOpen, Star, RefreshCw } from 'lucide-react';
import { CompletedBatchScreen } from './CompletedBatchScreen';

export const MyFermentsScreen: React.FC = () => {
  const { batches, openStartWizard, openBatchDetail, makeBatchAgain } = useFerment();
  
  const [activeTab, setActiveTab] = useState<'active' | 'completed' | 'all'>('active');
  const [viewingCompletedBatch, setViewingCompletedBatch] = useState<Batch | null>(null);

  if (viewingCompletedBatch) {
    return (
      <CompletedBatchScreen
        batch={viewingCompletedBatch}
        onBack={() => setViewingCompletedBatch(null)}
      />
    );
  }

  const activeBatches = batches.filter((b: Batch) => b.status === 'active');
  const completedBatches = batches.filter((b: Batch) => b.status === 'completed');

  const displayedBatches = activeTab === 'active' 
    ? activeBatches 
    : activeTab === 'completed' 
    ? completedBatches 
    : batches;

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
            My Fermentation Batches
          </h1>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            Manage active batches and review historical fermentation logs.
          </p>
        </div>

        <button
          onClick={() => openStartWizard()}
          className="btn btn-primary btn-md shadow-md flex items-center gap-2 shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Start New Batch</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex border-b border-stone-200 dark:border-stone-800">
        <button
          onClick={() => setActiveTab('active')}
          className={`px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-all ${
            activeTab === 'active'
              ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400'
              : 'border-transparent text-stone-500 hover:text-stone-800'
          }`}
        >
          Active Batches ({activeBatches.length})
        </button>

        <button
          onClick={() => setActiveTab('completed')}
          className={`px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-all ${
            activeTab === 'completed'
              ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400'
              : 'border-transparent text-stone-500 hover:text-stone-800'
          }`}
        >
          Completed Journal Archive ({completedBatches.length})
        </button>

        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 transition-all ${
            activeTab === 'all'
              ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400'
              : 'border-transparent text-stone-500 hover:text-stone-800'
          }`}
        >
          All Batches ({batches.length})
        </button>
      </div>

      {/* Batches Grid */}
      <div className="space-y-4">
        {displayedBatches.length === 0 ? (
          <div className="card p-8 text-center space-y-4 text-stone-500">
            <BookOpen className="w-8 h-8 text-stone-400 mx-auto" />
            <div>
              <h3 className="font-serif font-bold text-base text-stone-800 dark:text-stone-200">No batches in this view</h3>
              <p className="text-xs">Start a batch from the recipe library to begin your fermentation journey.</p>
            </div>
            <button onClick={() => openStartWizard()} className="btn btn-primary btn-sm mx-auto">
              <Plus className="w-4 h-4" />
              <span>Start Ferment</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedBatches.map((batch: Batch) => {
              const currentDay = calculateCurrentDay(batch.start_date);
              const progress = calculateProgressPercentage(batch.start_date, batch.total_days);
              const isCompleted = batch.status === 'completed';

              return (
                <div
                  key={batch.id}
                  onClick={() => {
                    if (isCompleted) setViewingCompletedBatch(batch);
                    else openBatchDetail(batch.id);
                  }}
                  className="card card-hover cursor-pointer p-4 space-y-3 bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700/60"
                >
                  <div className="flex gap-4 items-start">
                    <img
                      src={batch.image}
                      alt={batch.batch_name}
                      className="w-20 h-20 rounded-2xl object-cover shadow-sm shrink-0 border"
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className={`badge ${isCompleted ? 'badge-amber' : 'badge-green'} text-[10px]`}>
                          {isCompleted ? '🏆 Completed' : '🟢 On Track'}
                        </span>
                        <span className="text-[10px] font-mono text-stone-400">Batch #{batch.batch_number}</span>
                      </div>

                      <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 truncate">
                        {batch.batch_name}
                      </h3>

                      <p className="text-xs text-stone-500 font-medium truncate">
                        {batch.recipe_name} • {batch.batch_size}
                      </p>
                    </div>
                  </div>

                  {!isCompleted ? (
                    <div className="space-y-1 pt-1">
                      <div className="flex justify-between text-[11px] font-semibold text-stone-500">
                        <span>Day {currentDay} of {batch.total_days}</span>
                        <span className="font-mono text-emerald-800 dark:text-emerald-400 font-bold">{progress}%</span>
                      </div>
                      <div className="progress-bar-bg">
                        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  ) : (
                    <div className="pt-2 border-t border-stone-100 dark:border-stone-750 flex items-center justify-between text-xs">
                      {batch.ratings && (
                        <div className="flex items-center gap-1 text-amber-600 font-bold">
                          <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                          <span>{batch.ratings.overall}/5 Score</span>
                        </div>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          makeBatchAgain(batch);
                        }}
                        className="btn btn-secondary btn-sm ml-auto flex items-center gap-1"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Make Again</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};
