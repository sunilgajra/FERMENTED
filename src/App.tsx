import React from 'react';
import { FermentProvider, useFerment } from './context/FermentContext';
import { Navigation } from './components/Navigation';
import { HomeScreen } from './components/HomeScreen';
import { ExploreScreen } from './components/ExploreScreen';
import { LearnScreen } from './components/LearnScreen';
import { MyFermentsScreen } from './components/MyFermentsScreen';
import { JournalScreen } from './components/JournalScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { ActiveBatchScreen } from './components/ActiveBatchScreen';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { StartFermentWizard } from './components/StartFermentWizard';
import { CompletionFlowModal } from './components/CompletionFlowModal';
import { AskAIAssistant } from './components/AskAIAssistant';
import { Toast } from './components/Toast';

import { FermentSelectorModal } from './components/FermentSelectorModal';

const AppContent: React.FC = () => {
  const { activeView, selectedBatch, isSelectorOpen, closeFermentSelector } = useFerment();

  return (
    <div className="app-container">
      {/* Toast Manager */}
      <Toast />

      {/* Top Header & Navigation */}
      <Navigation />

      {/* Main View Area */}
      <main className="main-content">
        {selectedBatch ? (
          <ActiveBatchScreen />
        ) : (
          <>
            {activeView === 'home' && <HomeScreen />}
            {activeView === 'explore' && <ExploreScreen />}
            {activeView === 'learn' && <LearnScreen />}
            {activeView === 'my-ferments' && <MyFermentsScreen />}
            {activeView === 'journal' && <JournalScreen />}
            {activeView === 'profile' && <ProfileScreen />}
          </>
        )}
      </main>

      {/* Modals & Dialogs */}
      <FermentSelectorModal isOpen={isSelectorOpen} onClose={closeFermentSelector} />
      <RecipeDetailModal />
      <StartFermentWizard />
      <CompletionFlowModal />
      <AskAIAssistant />
    </div>
  );
};

export default function App() {
  return (
    <FermentProvider>
      <AppContent />
    </FermentProvider>
  );
}
