import React from 'react';
import { useFerment } from '../context/FermentContext';
import type { InAppNotification } from '../types/ferment';
import { Bell, X } from 'lucide-react';

export const NotificationCenterModal: React.FC = () => {
  const { notifications, setIsNotificationOpen, markNotificationRead, openBatchDetail, isNotificationOpen } = useFerment();

  if (!isNotificationOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setIsNotificationOpen(false)} />
      
      <div className="absolute right-0 top-0 bottom-0 max-w-sm w-full bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 shadow-2xl p-5 space-y-4 overflow-y-auto flex flex-col justify-between animate-slide-left">
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-amber-600" />
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                Reminders & Alerts
              </h3>
            </div>
            <button onClick={() => setIsNotificationOpen(false)} className="text-stone-400 hover:text-stone-800">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {notifications.length === 0 ? (
              <p className="text-xs text-stone-500 text-center py-8">No notifications right now.</p>
            ) : (
              notifications.map((notif: InAppNotification) => (
                <div
                  key={notif.id}
                  onClick={() => {
                    if (notif.batch_id) openBatchDetail(notif.batch_id);
                    markNotificationRead(notif.id);
                  }}
                  className={`p-3.5 rounded-2xl border transition-colors cursor-pointer space-y-1.5 ${
                    notif.read
                      ? 'bg-stone-50/60 dark:bg-stone-800/40 border-stone-200/60'
                      : 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs text-stone-900 dark:text-stone-100">{notif.title}</span>
                    <span className="text-[10px] font-mono text-stone-400">{notif.date}</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">{notif.message}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <button
          onClick={() => setIsNotificationOpen(false)}
          className="btn btn-secondary btn-sm w-full"
        >
          Close Notifications
        </button>
      </div>
    </div>
  );
};
