import React, { useState } from 'react';
import { useFerment } from '../context/FermentContext';
import { X, Sparkles, Send, Camera, Bot, User as UserIcon } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  photoUrl?: string;
  isSafetyWarning?: boolean;
}

export const AskAIAssistant: React.FC = () => {
  const { isAskAIOpen, setIsAskAIOpen } = useFerment();

  const [inputQuery, setInputQuery] = useState('');
  const [attachedPhoto, setAttachedPhoto] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'ai',
      text: 'Hello! I am your FermentLog AI assistant. Ask me about fermentation timelines, active bubble formation, salinity ratios, or flavor checks!'
    }
  ]);

  if (!isAskAIOpen) return null;

  const presetPrompts = [
    "What's happening on Day 3?",
    "My ferment looks different today.",
    "What should I do today?",
    "How long does this ferment usually take?"
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputQuery;
    if (!text.trim() && !attachedPhoto) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      photoUrl: attachedPhoto || undefined
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setAttachedPhoto(null);

    setTimeout(() => {
      let responseText = '';
      let isSafety = false;

      const lower = text.toLowerCase();

      if (lower.includes('mold') || lower.includes('different') || lower.includes('safe') || lower.includes('smell')) {
        isSafety = true;
        responseText = '🛡️ **Safety Notice**: I cannot definitively diagnose food safety from photographs alone. If you observe dark fuzzy white or green growth floating on the surface, or detect a putrid foul odor, the safest practice is to discard the batch and start fresh.';
      } else if (lower.includes('day 3')) {
        responseText = 'On Day 3 of lacto-fermentation, wild lactic acid bacteria are actively consuming natural sugars. You will observe steady carbonation bubbles rising to the surface, and the aroma shifting from raw juice/cabbage to a bright, tangy scent!';
      } else if (lower.includes('how long')) {
        responseText = 'Fermentation duration depends on ambient temperature and recipe type: quick drinks take 3–7 days, kimchis take 3–5 days room temp, while sauerkrauts and garlic honey ferment over 2 to 4 weeks for deep flavor development.';
      } else {
        responseText = `Regarding "${text}": Ensure your ferment is kept at room temperature (20-24°C / 68-75°F) out of direct sunlight, and keep all ingredients fully submerged beneath the liquid line.`;
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        isSafetyWarning: isSafety
      };

      setMessages(prev => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content max-w-lg p-0 flex flex-col h-[600px] overflow-hidden">
        
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-amber-900/10 via-emerald-900/10 to-transparent border-b border-stone-200 dark:border-stone-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500 text-stone-950 font-bold flex items-center justify-center">
              <Sparkles className="w-4 h-4 fill-stone-950" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                Ask FermentLog AI
              </h3>
              <p className="text-[10px] text-stone-500">Instant ferment guidance & visual troubleshooting</p>
            </div>
          </div>
          <button onClick={() => setIsAskAIOpen(false)} className="text-stone-400 hover:text-stone-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preset Prompt Pills */}
        <div className="px-4 py-2 bg-stone-50 dark:bg-stone-800/50 border-b border-stone-200/60 dark:border-stone-800 flex items-center gap-1.5 overflow-x-auto shrink-0">
          {presetPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-3 py-1 rounded-full bg-white dark:bg-stone-700 border text-[11px] font-medium whitespace-nowrap text-stone-700 dark:text-stone-300 hover:border-amber-500 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat Messages Body */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1 bg-stone-50/30 dark:bg-stone-900/40">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed space-y-2 ${
                  msg.sender === 'user'
                    ? 'bg-emerald-800 text-white rounded-br-none'
                    : msg.isSafetyWarning
                    ? 'bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-950 dark:text-rose-200 rounded-bl-none'
                    : 'bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 text-stone-800 dark:text-stone-200 rounded-bl-none shadow-xs'
                }`}
              >
                {msg.photoUrl && (
                  <img src={msg.photoUrl} alt="Attached" className="w-full h-32 object-cover rounded-xl" />
                )}
                <p>{msg.text}</p>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-200 flex items-center justify-center shrink-0 mt-1">
                  <UserIcon className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chat Input Bar */}
        <div className="p-3 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shrink-0 space-y-2">
          {attachedPhoto && (
            <div className="flex items-center gap-2 bg-stone-100 dark:bg-stone-800 p-2 rounded-xl text-xs">
              <img src={attachedPhoto} alt="Attached" className="w-8 h-8 rounded-lg object-cover" />
              <span className="text-stone-500 text-[10px] flex-1 truncate">Photo attached</span>
              <button onClick={() => setAttachedPhoto(null)} className="text-stone-400 hover:text-stone-800">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <form
            onSubmit={e => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <button
              type="button"
              onClick={() => setAttachedPhoto('https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80')}
              className="p-2 text-stone-400 hover:text-amber-600 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              title="Attach Photo"
            >
              <Camera className="w-5 h-5" />
            </button>

            <input
              type="text"
              placeholder="Ask about your ferment..."
              value={inputQuery}
              onChange={e => setInputQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 border text-xs text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-500"
            />

            <button
              type="submit"
              disabled={!inputQuery.trim() && !attachedPhoto}
              className="btn btn-amber btn-sm px-3"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
