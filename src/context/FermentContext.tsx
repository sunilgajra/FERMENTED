import React, { createContext, useContext, useState } from 'react';
import type { Batch, Recipe, JournalEntryItem, InAppNotification, UserProfileSettings, RatingBreakdown } from '../types/ferment';
import { SEED_RECIPES } from '../data/recipesSeed';
import { INITIAL_BATCHES, INITIAL_JOURNAL_ENTRIES, INITIAL_NOTIFICATIONS } from '../data/batchesSeed';
import { useLocalStorage, calculateCurrentDay } from '../utils/helpers';
import confetti from 'canvas-confetti';

export type ActiveView = 'home' | 'explore' | 'my-ferments' | 'journal' | 'profile' | 'learn';

export interface ToastMessage {
  id: string;
  text: string;
  type?: 'success' | 'info' | 'warning';
}

export interface FermentContextType {
  // Navigation & Modals State
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  selectedRecipe: Recipe | null;
  setSelectedRecipe: (recipe: Recipe | null) => void;
  selectedBatch: Batch | null;
  setSelectedBatch: (batch: Batch | null) => void;
  setSelectedBatchId: (id: string | null) => void;
  openBatchDetail: (id: string) => void;
  
  isStartWizardOpen: boolean;
  openStartWizard: (recipe?: Recipe) => void;
  closeStartWizard: () => void;

  isSelectorOpen: boolean;
  openFermentSelector: () => void;
  closeFermentSelector: () => void;
  
  isCompletionModalOpen: boolean;
  openCompletionModal: (batchOrId: Batch | string) => void;
  closeCompletionModal: () => void;

  isAskAIOpen: boolean;
  setIsAskAIOpen: (open: boolean) => void;
  openAiAssistant: () => void;
  
  isNotificationOpen: boolean;
  setIsNotificationOpen: (open: boolean) => void;

  // App Data
  recipes: Recipe[];
  batches: Batch[];
  activeBatches: Batch[];
  journalEntries: JournalEntryItem[];
  notifications: InAppNotification[];
  settings: UserProfileSettings;
  toasts: ToastMessage[];

  // Actions
  startNewBatch: (batchData: Partial<Batch>) => Batch;
  toggleTaskCompletion: (batchId: string, day: number, taskText: string) => void;
  addPhotoToBatch: (batchId: string, photoUrl: string, caption?: string) => void;
  addProgressPhoto: (batchId: string, day: number, photoUrl: string, caption?: string) => void;
  addJournalNote: (batchId: string, noteText: string, photoUrl?: string) => void;
  addJournalEntry: (batchId: string, day: number, noteText: string, aroma?: string) => void;
  completeBatch: (batchId: string, ratingData: RatingBreakdown) => void;
  makeBatchAgain: (batch: Batch) => void;
  toggleSaveRecipe: (recipeId: string) => void;
  burpBatch: (batchId: string) => void;
  snoozeBurp: (batchId: string, minutes: number) => void;
  deleteBatch: (batchId: string) => void;
  showToast: (text: string, type?: 'success' | 'info' | 'warning') => void;
  markNotificationRead: (notifId: string) => void;
  updateSettings: (newSettings: Partial<UserProfileSettings>) => void;
  resetAllData: () => void;
}

const FermentContext = createContext<FermentContextType | undefined>(undefined);

export const FermentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null);
  
  const [isStartWizardOpen, setIsStartWizardOpen] = useState<boolean>(false);
  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);
  const [isCompletionModalOpen, setIsCompletionModalOpen] = useState<boolean>(false);
  const [isAskAIOpen, setIsAskAIOpen] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Persistent States
  const [_recipes, setRecipes] = useLocalStorage<Recipe[]>('fermentlog_recipes', SEED_RECIPES);
  const [_batches, setBatches] = useLocalStorage<Batch[]>('fermentlog_batches', INITIAL_BATCHES);
  const [_journalEntries, setJournalEntries] = useLocalStorage<JournalEntryItem[]>('fermentlog_journal', INITIAL_JOURNAL_ENTRIES);
  const [_notifications, setNotifications] = useLocalStorage<InAppNotification[]>('fermentlog_notifications', INITIAL_NOTIFICATIONS);

  // Defensive: ensure these are always arrays (guards against corrupted localStorage)
  const recipes = Array.isArray(_recipes) ? _recipes : SEED_RECIPES;
  const batches = Array.isArray(_batches) ? _batches : INITIAL_BATCHES;
  const journalEntries = Array.isArray(_journalEntries) ? _journalEntries : INITIAL_JOURNAL_ENTRIES;
  const notifications = Array.isArray(_notifications) ? _notifications : INITIAL_NOTIFICATIONS;

  const activeBatches = batches.filter(b => b.status === 'active');

  const openFermentSelector = () => setIsSelectorOpen(true);
  const closeFermentSelector = () => setIsSelectorOpen(false);

  const burpBatch = (batchId: string) => {
    const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setBatches(prev => prev.map(b => {
      if (b.id === batchId) {
        return {
          ...b,
          last_burped_at: nowStr
        };
      }
      return b;
    }));
    showToast('✓ Vent / Burp recorded successfully', 'success');
  };

  const snoozeBurp = (_batchId: string, minutes: number) => {
    showToast(`Burp reminder snoozed for ${minutes} minutes`, 'info');
  };

  const [settings, setSettings] = useLocalStorage<UserProfileSettings>('fermentlog_settings', {
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    units: 'metric',
    theme: 'light',
    default_reminder_time: '18:00',
    enable_sound: true
  });

  const setSelectedBatchId = (id: string | null) => {
    if (!id) {
      setSelectedBatch(null);
    } else {
      const found = batches.find(b => b.id === id);
      if (found) setSelectedBatch(found);
    }
  };

  const openBatchDetail = (id: string) => {
    setSelectedBatchId(id);
  };

  const openAiAssistant = () => {
    setIsAskAIOpen(true);
  };

  const showToast = (text: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  const openStartWizard = (recipe?: Recipe) => {
    if (recipe) {
      setSelectedRecipe(recipe);
      setIsStartWizardOpen(true);
    } else if (selectedRecipe) {
      setIsStartWizardOpen(true);
    } else if (recipes.length > 0) {
      setSelectedRecipe(recipes[0]);
      setIsStartWizardOpen(true);
    } else {
      setIsSelectorOpen(true);
    }
  };

  const closeStartWizard = () => {
    setIsStartWizardOpen(false);
  };

  const openCompletionModal = (batchOrId: Batch | string) => {
    if (typeof batchOrId === 'string') {
      const found = batches.find(b => b.id === batchOrId);
      if (found) setSelectedBatch(found);
    } else {
      setSelectedBatch(batchOrId);
    }
    setIsCompletionModalOpen(true);
  };

  const closeCompletionModal = () => {
    setIsCompletionModalOpen(false);
  };

  const startNewBatch = (batchData: Partial<Batch>): Batch => {
    const newBatchNumber = batches.filter(b => b.recipe_id === batchData.recipe_id).length + 1;
    const recipe = recipes.find(r => r.id === batchData.recipe_id);
    
    const newBatch: Batch = {
      id: `batch-${Date.now()}`,
      batch_number: newBatchNumber,
      recipe_id: batchData.recipe_id || 'custom',
      recipe_name: recipe ? recipe.name : (batchData.recipe_name || 'Custom Ferment'),
      batch_name: batchData.batch_name || `${recipe?.name || 'Ferment'} #${String(newBatchNumber).padStart(3, '0')}`,
      category: recipe?.category || 'Vegetables',
      image: batchData.before_photo || recipe?.image || 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
      referencing_fermenting_image: recipe?.fermentingImage || recipe?.image,
      referencing_finished_image: recipe?.finishedImage || recipe?.image,
      start_date: batchData.start_date || new Date().toISOString().split('T')[0],
      expected_end_date: batchData.expected_end_date || new Date(Date.now() + (recipe?.duration_min || 7) * 86400000).toISOString().split('T')[0],
      total_days: batchData.total_days || recipe?.duration_min || 7,
      batch_size: batchData.batch_size || '500 ml',
      status: 'active',
      notes: batchData.notes || '',
      before_photo: batchData.before_photo,
      progress_photos: batchData.before_photo ? [{
        day: 0,
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        url: batchData.before_photo,
        caption: 'Before Photo - Starting Batch'
      }] : [],
      daily_entries: [],
      completed_tasks: {
        0: batchData.before_photo ? ['Take starting photo'] : []
      },
      reminder_settings: batchData.reminder_settings || {
        enabled: true,
        time: settings.default_reminder_time,
        frequency: 'daily'
      },
      user_modifications: batchData.user_modifications || '',
      created_at: new Date().toISOString()
    };

    setBatches(prev => [newBatch, ...prev]);

    const newJournal: JournalEntryItem = {
      id: `j-${Date.now()}`,
      batch_id: newBatch.id,
      batch_name: newBatch.batch_name,
      recipe_name: newBatch.recipe_name,
      category: newBatch.category,
      day: 0,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
      photo: newBatch.before_photo,
      note: `Started batch "${newBatch.batch_name}"! ${newBatch.notes ? 'Notes: ' + newBatch.notes : ''}`,
      completed_tasks: ['Start fermentation batch'],
      batch_image: newBatch.image
    };

    setJournalEntries(prev => [newJournal, ...prev]);

    showToast(`🎉 Started ${newBatch.batch_name}!`, 'success');
    closeStartWizard();
    setSelectedRecipe(null);
    setSelectedBatch(newBatch);
    setActiveView('home');
    return newBatch;
  };

  const toggleTaskCompletion = (batchId: string, day: number, taskText: string) => {
    setBatches(prev => prev.map(b => {
      if (b.id !== batchId) return b;
      const currentTasks = b.completed_tasks[day] || [];
      const exists = currentTasks.includes(taskText);
      const updated = exists 
        ? currentTasks.filter(t => t !== taskText)
        : [...currentTasks, taskText];
      
      return {
        ...b,
        completed_tasks: {
          ...b.completed_tasks,
          [day]: updated
        }
      };
    }));
    showToast('Task updated!', 'info');
  };

  const addPhotoToBatch = (batchId: string, photoUrl: string, caption?: string) => {
    setBatches(prev => prev.map(b => {
      if (b.id !== batchId) return b;
      const currentDay = calculateCurrentDay(b.start_date);
      const newPhotoObj = {
        day: currentDay,
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
        url: photoUrl,
        caption: caption || `Day ${currentDay} progress photo`
      };

      return {
        ...b,
        progress_photos: [...b.progress_photos, newPhotoObj]
      };
    }));

    showToast('📸 Progress photo saved!', 'success');
  };

  const addProgressPhoto = (batchId: string, day: number, photoUrl: string, caption?: string) => {
    addPhotoToBatch(batchId, photoUrl, caption || `Day ${day} progress photo`);
  };

  const addJournalNote = (batchId: string, noteText: string, photoUrl?: string) => {
    const targetBatch = batches.find(b => b.id === batchId);
    if (!targetBatch) return;

    const currentDay = calculateCurrentDay(targetBatch.start_date);
    const newEntry: JournalEntryItem = {
      id: `j-${Date.now()}`,
      batch_id: targetBatch.id,
      batch_name: targetBatch.batch_name,
      recipe_name: targetBatch.recipe_name,
      category: targetBatch.category,
      day: currentDay,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
      photo: photoUrl || targetBatch.progress_photos[targetBatch.progress_photos.length - 1]?.url,
      note: noteText,
      completed_tasks: targetBatch.completed_tasks[currentDay] || [],
      batch_image: targetBatch.image
    };

    setJournalEntries(prev => [newEntry, ...prev]);
    showToast('📝 Journal entry saved!', 'success');
  };

  const addJournalEntry = (batchId: string, _day: number, noteText: string, aroma?: string) => {
    addJournalNote(batchId, aroma ? `[Aroma: ${aroma}] ${noteText}` : noteText);
  };

  const completeBatch = (batchId: string, ratingData: RatingBreakdown) => {
    setBatches(prev => prev.map(b => {
      if (b.id !== batchId) return b;
      return {
        ...b,
        status: 'completed',
        actual_end_date: new Date().toISOString().split('T')[0],
        after_photo: ratingData.final_notes ? b.progress_photos[b.progress_photos.length - 1]?.url || b.image : b.image,
        ratings: ratingData
      };
    }));

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti effect triggered');
    }

    showToast('🎉 Ferment marked as completed!', 'success');
    closeCompletionModal();
  };

  const makeBatchAgain = (batch: Batch) => {
    startNewBatch({
      recipe_id: batch.recipe_id,
      recipe_name: batch.recipe_name,
      batch_name: `${batch.recipe_name} #${String(batch.batch_number + 1).padStart(3, '0')}`,
      batch_size: batch.batch_size,
      total_days: batch.total_days,
      user_modifications: batch.user_modifications || batch.notes,
      before_photo: batch.before_photo
    });
  };

  const toggleSaveRecipe = (recipeId: string) => {
    setRecipes(prev => prev.map(r => {
      if (r.id !== recipeId) return r;
      const updated = !r.saved;
      showToast(updated ? 'Bookmark saved!' : 'Bookmark removed', 'info');
      return { ...r, saved: updated };
    }));
  };

  const deleteBatch = (batchId: string) => {
    setBatches(prev => prev.filter(b => b.id !== batchId));
    setJournalEntries(prev => prev.filter(j => j.batch_id !== batchId));
    if (selectedBatch?.id === batchId) setSelectedBatch(null);
    showToast('Batch removed from journal', 'info');
  };

  const markNotificationRead = (notifId: string) => {
    setNotifications(prev => prev.map(n => n.id === notifId ? { ...n, read: true } : n));
  };

  const updateSettings = (newSettings: Partial<UserProfileSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    showToast('Settings saved!', 'success');
  };

  const resetAllData = () => {
    setRecipes(SEED_RECIPES);
    setBatches(INITIAL_BATCHES);
    setJournalEntries(INITIAL_JOURNAL_ENTRIES);
    setNotifications(INITIAL_NOTIFICATIONS);
    setSelectedBatch(null);
    setSelectedRecipe(null);
    setActiveView('home');
    showToast('App data reset to initial seeds!', 'info');
  };

  return (
    <FermentContext.Provider value={{
      activeView,
      setActiveView,
      selectedRecipe,
      setSelectedRecipe,
      selectedBatch,
      setSelectedBatch,
      setSelectedBatchId,
      openBatchDetail,
      isStartWizardOpen,
      openStartWizard,
      closeStartWizard,
      isSelectorOpen,
      openFermentSelector,
      closeFermentSelector,
      isCompletionModalOpen,
      openCompletionModal,
      closeCompletionModal,
      isAskAIOpen,
      setIsAskAIOpen,
      openAiAssistant,
      isNotificationOpen,
      setIsNotificationOpen,
      recipes,
      batches,
      activeBatches,
      journalEntries,
      notifications,
      settings,
      toasts,
      startNewBatch,
      toggleTaskCompletion,
      addPhotoToBatch,
      addProgressPhoto,
      addJournalNote,
      addJournalEntry,
      completeBatch,
      makeBatchAgain,
      toggleSaveRecipe,
      burpBatch,
      snoozeBurp,
      deleteBatch,
      showToast,
      markNotificationRead,
      updateSettings,
      resetAllData
    }}>
      {children}
    </FermentContext.Provider>
  );
};

export const useFerment = () => {
  const context = useContext(FermentContext);
  if (!context) throw new Error('useFerment must be used within a FermentProvider');
  return context;
};
