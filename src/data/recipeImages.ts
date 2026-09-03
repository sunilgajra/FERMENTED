// Centralized Image Dictionary mapping recipe IDs to curated, high-quality, realistic food photography.
export const RECIPE_IMAGE_MAP: Record<string, string> = {
  // VEGETABLES
  'sauerkraut': 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80',
  'curtido': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
  'kimchi': 'https://images.unsplash.com/photo-1583032015879-e5022bc8867a?auto=format&fit=crop&w=800&q=80',
  'garlic-carrots': 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
  'pickled-onions': 'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=800&q=80',
  'pickled-beets': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  'pickled-red-bell-peppers': 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80',
  'pickled-eggplant': 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
  'pickled-ginger': 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
  'corn-relish': 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80',
  'garlic-dill-pickles': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
  'tomato-salsa': 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?auto=format&fit=crop&w=800&q=80',

  // FRUIT
  'pear-chutney': 'https://images.unsplash.com/photo-1568569350060-e85d788327c0?auto=format&fit=crop&w=800&q=80',
  'spicy-pineapple-chutney': 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
  'preserved-lemons': 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80',
  'bitter-orange-marmalade': 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80',

  // DAIRY
  'cr-me-fra-che': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
  'creme-fraiche': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
  'cultured-buttermilk': 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=800&q=80',
  'greek-style-yogurt': 'https://images.unsplash.com/photo-1571217698622-c2cb48a8035e?auto=format&fit=crop&w=800&q=80',
  'cultured-butter-and-buttermilk': 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80',
  'kefir': 'https://images.unsplash.com/photo-1571167530149-c1105da4c2c8?auto=format&fit=crop&w=800&q=80',
  'cream-cheese-and-whey': 'https://images.unsplash.com/photo-1517414214554-1594e9ef4a89?auto=format&fit=crop&w=800&q=80',
  'cottage-cheese': 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=800&q=80',
  'clabbered-cream': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',

  // BEANS
  'fermented-tofu': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  'tempeh': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
  'miso': 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=800&q=80',
  'dosa-lentil-pancakes': 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
  'fermented-bean-dip': 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80',

  // SOURDOUGH
  'rye-or-wheat-sourdough-starter': 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
  'sourdough-rye-bread': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  'sourdough-baguettes': 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7f?auto=format&fit=crop&w=800&q=80',
  'sourdough-pancakes': 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80',
  'sourdough-buttermilk-biscuits': 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',

  // MEAT, FISH & EGGS
  'corned-beef': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
  'pickled-eggs': 'https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?auto=format&fit=crop&w=800&q=80',
  'beet-pickled-eggs': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
  'gravlax': 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
  'fermented-fish-sauce': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
  'pickled-herring': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',

  // VINEGAR
  'pineapple-vinegar': 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
  'red-wine-vinegar': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
  'blackberry-shrub': 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',

  // BEVERAGES
  'ginger-bug-for-soda': 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
  'ginger-ale': 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  'fruit-soda': 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
  'scoby-and-starter-tea-for-kombucha': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  'kombucha': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  'hard-cider-or-perry': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80',
  'beet-kvass': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  'honey-mead': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
  'blackberry-mead': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
  'root-beer': 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
  'basic-beer': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80',
  'green-malt-malted-grain': 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
  'pale-malt': 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
  'basic-wine': 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
};

export const getRecipeImage = (recipeId: string, fallbackUrl?: string): string => {
  if (RECIPE_IMAGE_MAP[recipeId]) return RECIPE_IMAGE_MAP[recipeId];
  const cleanId = recipeId.toLowerCase().replace(/^recipe-/, '');
  if (RECIPE_IMAGE_MAP[cleanId]) return RECIPE_IMAGE_MAP[cleanId];
  return fallbackUrl || 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80';
};
