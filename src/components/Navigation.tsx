import React from 'react';
import { useFerment } from '../context/FermentContext';
import type { ActiveView } from '../context/FermentContext';
import type { InAppNotification } from '../types/ferment';
import { Home, Compass, BookOpen, User, Bell, Plus, Sparkles, GraduationCap } from 'lucide-react';
import { NotificationCenterModal } from './NotificationCenterModal';

export const Navigation: React.FC = () => {
  const { 
    activeView, setActiveView, isNotificationOpen, setIsNotificationOpen, 
    notifications, openStartWizard, openAiAssistant, settings, setSelectedBatch
  } = useFerment();

  const unreadCount = notifications.filter((n: InAppNotification) => !n.read).length;

  const handleNavClick = (view: ActiveView) => {
    setSelectedBatch(null);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop & Mobile Header Bar */}
      <header className="sticky top-0 z-40 bg-stone-50/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-2xl bg-emerald-800 text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              F
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 tracking-tight block leading-none">
                FermentLog
              </span>
              <span className="text-[10px] font-mono text-stone-500 block mt-0.5">
                Journal & Companion
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-200/50 dark:bg-stone-800/50 p-1 rounded-2xl border border-stone-200/60 dark:border-stone-750">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'explore', label: 'Explore', icon: Compass },
              { id: 'learn', label: 'Guide', icon: GraduationCap },
              { id: 'my-ferments', label: 'My Ferments', icon: BookOpen },
              { id: 'journal', label: 'Journal', icon: BookOpen },
              { id: 'profile', label: 'Profile', icon: User }
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id as ActiveView)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isActive
                      ? 'bg-white dark:bg-stone-700 text-emerald-800 dark:text-emerald-400 shadow-xs'
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Top Right Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={openAiAssistant}
              className="btn btn-secondary btn-sm font-bold text-xs flex items-center gap-1 text-amber-700 dark:text-amber-400"
              title="Ask FermentLog AI"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ask AI</span>
            </button>

            {/* Notification Bell */}
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative p-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white dark:ring-stone-900" />
              )}
            </button>

            {/* Header Start Ferment CTA */}
            <button
              onClick={() => openStartWizard()}
              className="hidden sm:flex btn btn-primary btn-sm font-bold text-xs shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Start Ferment</span>
            </button>

            {/* User Avatar */}
            <button
              onClick={() => handleNavClick('profile')}
              className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-800 shrink-0"
            >
              <img src={settings.avatar} alt="Profile" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="bottom-nav">
        {[
          { id: 'home', label: 'HOME', icon: Home },
          { id: 'my-ferments', label: 'MY FERMENTS', icon: BookOpen },
          { id: 'explore', label: 'RECIPES', icon: Compass },
          { id: 'learn', label: 'LEARN', icon: GraduationCap }
        ].map(item => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as ActiveView)}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon className="w-5 h-5 nav-icon" />
              <span className="text-[10px] font-mono font-bold tracking-wider">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Floating CTA Button on Mobile */}
      <button
        onClick={() => openStartWizard()}
        className="fab-start"
        title="Start new ferment batch"
      >
        <Plus className="w-5 h-5" />
        <span>Start Batch</span>
      </button>

      {/* Notification Center Slideout */}
      {isNotificationOpen && <NotificationCenterModal />}
    </>
  );
};
