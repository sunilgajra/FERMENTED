import React from 'react';
import { useFerment } from '../context/FermentContext';
import type { ToastMessage } from '../context/FermentContext';
import { CheckCircle2, Info, AlertTriangle } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toasts } = useFerment();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none">
      {toasts.map((toast: ToastMessage) => (
        <div
          key={toast.id}
          className={`px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 border backdrop-blur-md text-xs font-bold transition-all animate-slide-up ${
            toast.type === 'info'
              ? 'bg-stone-900/90 text-stone-100 border-stone-700'
              : toast.type === 'warning'
              ? 'bg-amber-900/90 text-amber-100 border-amber-700'
              : 'bg-emerald-900/90 text-white border-emerald-700'
          }`}
        >
          {toast.type === 'info' && <Info className="w-4 h-4 text-sky-400" />}
          {toast.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-400" />}
          {(!toast.type || toast.type === 'success') && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
          <span>{toast.text}</span>
        </div>
      ))}
    </div>
  );
};
