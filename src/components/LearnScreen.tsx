import React, { useState } from 'react';
import { FERMENTATION_TOPICS, FERMENTATION_GLOSSARY, type GuideTopic } from '../data/fermentationGuideData';
import { BookOpen, ShieldCheck, Package, Search, Sparkles, FlaskConical, Scale, Thermometer, ChevronRight, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

export const LearnScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'topics' | 'safety' | 'equipment' | 'glossary'>('topics');
  const [selectedTopic, setSelectedTopic] = useState<GuideTopic | null>(FERMENTATION_TOPICS[0]);
  const [glossaryQuery, setGlossaryQuery] = useState('');

  const filteredGlossary = FERMENTATION_GLOSSARY.filter(item =>
    item.term.toLowerCase().includes(glossaryQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossaryQuery.toLowerCase())
  );

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-emerald-500" />;
      case 'Scale': return <Scale className="w-5 h-5 text-blue-500" />;
      case 'Thermometer': return <Thermometer className="w-5 h-5 text-rose-500" />;
      case 'Package': return <Package className="w-5 h-5 text-purple-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default: return <BookOpen className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto pb-12">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-emerald-950 to-stone-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden space-y-3 border border-emerald-900/50">
        <div className="flex items-center gap-2">
          <span className="badge bg-emerald-700/80 text-emerald-100 text-[11px] font-mono uppercase">Reference Guide</span>
          <span className="text-xs text-stone-300">Based on Fermentation for Beginners</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-100">
          Fermentation Knowledge & Safety Guide
        </h1>
        <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
          Master the science of lacto-fermentation, wild yeast starters, salt brine ratios, home laboratory equipment, and food safety principles.
        </p>

        {/* Ambient Glow */}
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Primary Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-stone-200 dark:border-stone-800">
        {[
          { id: 'topics', label: 'Core Fundamentals', icon: BookOpen },
          { id: 'safety', label: 'Safety & Spoilage', icon: ShieldCheck },
          { id: 'equipment', label: 'Home Laboratory', icon: Package },
          { id: 'glossary', label: 'Glossary Lookup', icon: Search }
        ].map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-emerald-800 text-white shadow-md scale-105'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: CORE FUNDAMENTALS */}
      {activeTab === 'topics' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Topics Sidebar / Card Selection */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">Select Topic</h3>
            <div className="space-y-2">
              {FERMENTATION_TOPICS.map(topic => (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`card p-4 cursor-pointer transition-all flex items-center justify-between border ${
                    selectedTopic?.id === topic.id
                      ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                      : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700/60 hover:bg-stone-50 dark:hover:bg-stone-750'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-stone-100 dark:bg-stone-900">
                      {getTopicIcon(topic.icon)}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">{topic.title}</h4>
                      <span className="text-[10px] text-stone-500 block">{topic.category}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-stone-400 ${selectedTopic?.id === topic.id ? 'text-emerald-600' : ''}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Selected Topic Detailed View */}
          {selectedTopic && (
            <div className="md:col-span-2 card p-6 space-y-6 bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700/60">
              <div className="space-y-2 pb-4 border-b border-stone-100 dark:border-stone-700/60">
                <div className="flex items-center gap-2">
                  <span className="badge badge-green text-[10px]">{selectedTopic.category}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-3">
                  {getTopicIcon(selectedTopic.icon)}
                  {selectedTopic.title}
                </h2>
                <p className="text-xs text-emerald-800 dark:text-emerald-400 font-semibold">{selectedTopic.subtitle}</p>
              </div>

              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-medium">
                {selectedTopic.summary}
              </p>

              {/* Key Takeaways */}
              <div className="space-y-3 bg-stone-50 dark:bg-stone-900/60 p-4 rounded-2xl border border-stone-200/80 dark:border-stone-700/60">
                <h4 className="font-serif font-bold text-xs text-stone-900 dark:text-stone-100 uppercase tracking-wider font-mono">
                  Key Principles & Takeaways
                </h4>
                <ul className="space-y-2 text-xs text-stone-700 dark:text-stone-300">
                  {selectedTopic.key_points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 text-xs text-stone-800 dark:text-stone-200 space-y-1">
                <span className="font-bold text-amber-900 dark:text-amber-300 font-mono uppercase text-[10px] block">Source Reference Detail</span>
                <p>{selectedTopic.details}</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: SAFETY & SPOILAGE */}
      {activeTab === 'safety' && (
        <div className="space-y-6">
          <div className="card p-6 space-y-4 bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700/60">
            <h2 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Fermentation Safety & Microbe Control
            </h2>
            <p className="text-xs text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
              Lacto-fermentation relies on creating an environment tailored specifically for beneficial acid-producing bacteria while keeping unwanted pathogens out.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 space-y-2">
                <h4 className="font-serif font-bold text-sm text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Signs of Healthy Fermentation
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  <li>• Clean, tangy, pickle-like sour smell</li>
                  <li>• Carbonation bubbles rising actively through liquid</li>
                  <li>• Liquid turns slightly cloudy (lactic acid bacteria)</li>
                  <li>• Vegetables remain crisp and firm</li>
                  <li>• pH level drops safely below 4.6</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 space-y-2">
                <h4 className="font-serif font-bold text-sm text-rose-900 dark:text-rose-200 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  Warning Signs of Spoilage
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700 dark:text-stone-300">
                  <li>• Putrid, rotten, or foul decay odors</li>
                  <li>• Fuzzy elevated mold (green, black, or pink)</li>
                  <li>• Vegetables turning dark and slimy</li>
                  <li>• Ingredients exposed above brine level</li>
                  <li>• pH remaining above 4.6 after expected duration</li>
                </ul>
              </div>
            </div>

            {/* Kahm Yeast vs Mold Callout */}
            <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 space-y-2 text-xs">
              <h4 className="font-serif font-bold text-amber-900 dark:text-amber-200 text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                Kahm Yeast vs. Mold: How to tell the difference
              </h4>
              <p className="text-stone-700 dark:text-stone-300">
                <strong>Kahm Yeast:</strong> Appears as a thin, flat, smooth white film on the surface of liquid. It is harmless, non-toxic, and can simply be skimmed off with a clean spoon.
              </p>
              <p className="text-stone-700 dark:text-stone-300">
                <strong>Mold:</strong> Appears as fuzzy, elevated, velvety spots (white, green, blue, black, or pink). Mold spores produce toxins throughout liquid—if fuzzy mold appears, discard the batch immediately.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: HOME LABORATORY EQUIPMENT */}
      {activeTab === 'equipment' && (
        <div className="space-y-6">
          <div className="card p-6 space-y-4 bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700/60">
            <h2 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Package className="w-5 h-5 text-purple-600" />
              Essential Fermentation Equipment
            </h2>
            <p className="text-xs text-stone-600 dark:text-stone-400 max-w-2xl">
              Equip your home laboratory with non-reactive vessels, weights, and airlocks to ensure clean, anaerobic fermentation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {[
                { title: 'Wide-Mouth Glass Jars', role: 'Vessel', desc: '1-quart or 1-pint Mason jars allow easy packing and visual tracking of bubbles.' },
                { title: 'Glass Fermentation Weights', role: 'Submergence', desc: 'Heavy glass discs keep vegetables 100% submerged beneath protective brine.' },
                { title: 'Airlocks & Water Locks', role: 'Gas Venting', desc: 'Vents CO2 gas out while preventing oxygen and fruit flies from entering.' },
                { title: 'Wooden Kraut Pounder', role: 'Preparation', desc: 'Crushes vegetable cell walls to release natural juices for self-brining.' },
                { title: 'Digital Precision Scale', role: 'Measurement', desc: 'Ensures exact 2%–3% salinity calculations by weight.' },
                { title: 'pH Strips & Thermometer', role: 'Monitoring', desc: 'Verifies safe acidic pH (< 4.6) and optimal 68°F–72°F room temperature.' }
              ].map((item, idx) => (
                <div key={idx} className="card p-4 space-y-2 bg-stone-50 dark:bg-stone-800/40 border">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">{item.title}</h4>
                    <span className="badge badge-green text-[10px]">{item.role}</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: GLOSSARY LOOKUP */}
      {activeTab === 'glossary' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                Fermentation Glossary
              </h2>
              <p className="text-xs text-stone-500">Dictionary of technical terms and biological concepts</p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search terms (e.g. SCOBY, Brine)..."
                value={glossaryQuery}
                onChange={e => setGlossaryQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-2xl bg-stone-100 dark:bg-stone-800 border text-xs focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((item, idx) => (
              <div key={idx} className="card p-4 space-y-1 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700/60">
                <h4 className="font-serif font-bold text-sm text-emerald-800 dark:text-emerald-400">{item.term}</h4>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
