import React, { useState } from 'react';
import { useFerment } from '../context/FermentContext';
import type { Recipe } from '../types/ferment';
import { X, ChevronRight, ArrowLeft, Clock, Flame, Sparkles } from 'lucide-react';

interface CategoryOption {
  id: string;
  name: string;
  categoryKey: string;
  image: string;
  description: string;
  badge: string;
}

const CATEGORY_CARDS: CategoryOption[] = [
  {
    id: 'veg',
    name: 'Vegetables',
    categoryKey: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80',
    description: 'Sauerkraut, Kimchi, Pickles, Garlic Carrots, Pickled Onions & Beets',
    badge: '12 Recipes'
  },
  {
    id: 'drinks',
    name: 'Drinks & Beverages',
    categoryKey: 'Beverages',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    description: 'Kombucha, Ginger Bug, Ginger Ale, Fruit Sodas, Beet Kvass & Cider',
    badge: '14 Recipes'
  },
  {
    id: 'fruit',
    name: 'Fruit',
    categoryKey: 'Fruits',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80',
    description: 'Pear Chutney, Spicy Pineapple Chutney, Preserved Lemons & Marmalade',
    badge: '4 Recipes'
  },
  {
    id: 'dairy',
    name: 'Dairy',
    categoryKey: 'Dairy',
    image: 'https://images.unsplash.com/photo-1571217698622-c2cb48a8035e?auto=format&fit=crop&w=800&q=80',
    description: 'Yogurt, Kefir, Cultured Buttermilk, Crème Fraîche, Butter & Cottage Cheese',
    badge: '8 Recipes'
  },
  {
    id: 'beans',
    name: 'Beans & Legumes',
    categoryKey: 'Beans & Legumes',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    description: 'Miso, Tempeh, Fermented Tofu, Dosa Batter & Bean Dips',
    badge: '5 Recipes'
  },
  {
    id: 'sourdough',
    name: 'Sourdough',
    categoryKey: 'Sourdough',
    image: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    description: 'Wild Starters, Rye Bread, Baguettes, Pancakes & Biscuits',
    badge: '5 Recipes'
  },
  {
    id: 'meat',
    name: 'Meat & Fish',
    categoryKey: 'Meat, Fish & Eggs',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    description: 'Corned Beef, Gravlax, Pickled Eggs, Fish Sauce & Herring',
    badge: '6 Recipes'
  },
  {
    id: 'vinegar',
    name: 'Vinegar & Shrubs',
    categoryKey: 'Vinegar',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    description: 'Pineapple Vinegar, Red Wine Vinegar & Fruit Shrubs',
    badge: '3 Recipes'
  }
];

interface FermentSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FermentSelectorModal: React.FC<FermentSelectorModalProps> = ({ isOpen, onClose }) => {
  const { recipes, setSelectedRecipe } = useFerment();
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption | null>(null);

  if (!isOpen) return null;

  const categoryRecipes = selectedCategory
    ? recipes.filter(r => 
        r.category === selectedCategory.categoryKey ||
        (selectedCategory.categoryKey === 'Beverages' && r.category === 'Beverages') ||
        (selectedCategory.categoryKey === 'Fruits' && r.category === 'Fruits')
      )
    : [];

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    onClose();
    setSelectedCategory(null);
  };

  return (
    <div className="modal-overlay z-50">
      <div className="modal-content max-w-2xl overflow-hidden flex flex-col max-h-[90vh] bg-stone-50 dark:bg-stone-900">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-white dark:bg-stone-850 shrink-0">
          <div className="flex items-center gap-2">
            {selectedCategory ? (
              <button
                onClick={() => setSelectedCategory(null)}
                className="p-1.5 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            ) : (
              <Sparkles className="w-5 h-5 text-emerald-600" />
            )}
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-emerald-700 dark:text-emerald-400 block">
                {selectedCategory ? `Step 2 of 2: Select ${selectedCategory.name}` : 'Step 1 of 2: Category Selection'}
              </span>
              <h2 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                {selectedCategory ? `Choose your ${selectedCategory.name} Ferment` : 'What would you like to ferment today?'}
              </h2>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              setSelectedCategory(null);
            }}
            className="w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          
          {/* STEP 1: CATEGORY SELECTION CARDS */}
          {!selectedCategory && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600 dark:text-stone-400 font-medium">
                Select a category to explore authentic recipes from your fermentation guide:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {CATEGORY_CARDS.map(cat => (
                  <div
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat)}
                    className="card card-hover cursor-pointer overflow-hidden group bg-white dark:bg-stone-800 border-stone-200/80 dark:border-stone-700 flex items-center gap-3.5 p-3"
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-20 h-20 rounded-2xl object-cover shrink-0 group-hover:scale-105 transition-transform duration-300 border"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 truncate">
                          {cat.name}
                        </h3>
                        <span className="badge badge-green text-[10px] shrink-0 font-mono">
                          {cat.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-2 leading-tight">
                        {cat.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-stone-400 group-hover:text-emerald-700 shrink-0 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: RELEVANT RECIPE SELECTION */}
          {selectedCategory && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-500 font-mono">
                  Found {categoryRecipes.length} recipes in {selectedCategory.name}
                </span>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-xs text-emerald-700 dark:text-emerald-400 font-bold hover:underline"
                >
                  ← Back to Categories
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categoryRecipes.map(recipe => (
                  <div
                    key={recipe.id}
                    onClick={() => handleSelectRecipe(recipe)}
                    className="card card-hover cursor-pointer overflow-hidden bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 p-3.5 space-y-3"
                  >
                    <div className="flex gap-3 items-start">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-20 h-20 rounded-2xl object-cover shrink-0 border"
                      />
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center justify-between gap-1">
                          <span className="badge bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-mono">
                            {recipe.fermentation_type || 'Lacto-Ferment'}
                          </span>
                          <span className="text-[10px] text-stone-400 font-mono flex items-center gap-0.5">
                            <Flame className="w-3 h-3 text-amber-500" />
                            {recipe.difficulty}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 line-clamp-1">
                          {recipe.name}
                        </h4>
                        <p className="text-[11px] text-stone-500 line-clamp-2">
                          {recipe.short_description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stone-100 dark:border-stone-750 flex items-center justify-between text-[11px]">
                      <span className="text-stone-500 font-mono flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-700" />
                        {recipe.duration_min}–{recipe.duration_max} Days
                      </span>
                      <span className="text-emerald-800 dark:text-emerald-400 font-bold flex items-center gap-0.5">
                        Select Recipe <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
