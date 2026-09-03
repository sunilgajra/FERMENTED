import React, { useState } from 'react';
import { useFerment } from '../context/FermentContext';
import { Search, Filter, Bookmark, Clock, Flame, ChevronRight } from 'lucide-react';

export const ExploreScreen: React.FC = () => {
  const { recipes, setSelectedRecipe, toggleSaveRecipe, openStartWizard } = useFerment();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const categories: string[] = [
    'All', 'Vegetables', 'Fruits', 'Dairy', 'Beans & Legumes', 'Sourdough', 'Meat, Fish & Eggs', 'Vinegar', 'Beverages', 'Fermented Drinks', 'Condiments'
  ];
  const difficulties: string[] = ['All', 'Beginner', 'Easy', 'Intermediate', 'Advanced'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (recipe.short_description && recipe.short_description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (recipe.long_description && recipe.long_description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (recipe.fermentation_type && recipe.fermentation_type.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          recipe.ingredients.some(i => i.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          recipe.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || 
                            recipe.category === selectedCategory || 
                            (selectedCategory === 'Beverages' && recipe.category === 'Fermented Drinks') ||
                            (selectedCategory === 'Fruits' && recipe.category === 'Fruits');
    const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
    const matchesSaved = !showSavedOnly || recipe.saved;

    return matchesSearch && matchesCategory && matchesDifficulty && matchesSaved;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
          Fermentation Library
        </h1>
        <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
          Discover traditional sourdoughs, sparkling probiotics, vibrant kimchis, and artisanal lacto-ferments crafted for home ferments.
        </p>
      </div>

      {/* Search Bar & Primary Filters */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search ferments, ingredients, tags..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-emerald-600 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setShowSavedOnly(!showSavedOnly)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors ${
              showSavedOnly 
                ? 'bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300' 
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${showSavedOnly ? 'fill-amber-600 text-amber-600' : ''}`} />
            <span>Bookmarked</span>
          </button>

          <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-xl shrink-0">
            <Filter className="w-3.5 h-3.5 text-stone-400 ml-2" />
            {difficulties.map(diff => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedDifficulty === diff
                    ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-emerald-800 text-white shadow-sm scale-105'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map(recipe => (
          <div
            key={recipe.id}
            className="card card-hover cursor-pointer flex flex-col justify-between overflow-hidden group"
            onClick={() => setSelectedRecipe(recipe)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="badge bg-white/90 dark:bg-stone-900/90 backdrop-blur-md text-stone-900 dark:text-stone-100 text-[11px]">
                  {recipe.category}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSaveRecipe(recipe.id);
                  }}
                  className="w-8 h-8 rounded-full bg-white/80 dark:bg-stone-900/80 backdrop-blur-md flex items-center justify-center text-stone-700 dark:text-stone-300 hover:scale-110 transition-transform"
                >
                  <Bookmark className={`w-4 h-4 ${recipe.saved ? 'fill-amber-500 text-amber-500' : ''}`} />
                </button>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-serif font-bold text-lg leading-tight line-clamp-1">
                  {recipe.name}
                </h3>
              </div>
            </div>

            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
              <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
                {recipe.short_description}
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
                    {recipe.duration_min}–{recipe.duration_max} days
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Flame className="w-3.5 h-3.5 text-amber-600" />
                    {recipe.difficulty}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {recipe.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-500">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openStartWizard(recipe);
                }}
                className="w-full mt-2 py-2 px-3 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-800 text-stone-800 dark:text-stone-200 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                <span>Start Batch</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
