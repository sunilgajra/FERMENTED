import type { Recipe } from '../types/ferment';
import { PDF_RECIPES } from './pdfRecipesData';

// Generated professional images (local)
const IMG = {
  orange_fermenting: '/src/assets/orange_ferment_fermenting.png',
  orange_finished: '/src/assets/orange_ferment_finished.png',
  ginger_bug_fermenting: '/src/assets/ginger_bug_fermenting.png',
  ginger_bug_finished: '/src/assets/ginger_bug_finished.png',
  kombucha_fermenting: '/src/assets/kombucha_fermenting.png',
  kombucha_finished: '/src/assets/kombucha_finished.png',
  sauerkraut_fermenting: '/src/assets/sauerkraut_fermenting.png',
  sauerkraut_finished: '/src/assets/sauerkraut_finished.png',
  kimchi_fermenting: '/src/assets/kimchi_fermenting.png',
  kimchi_finished: '/src/assets/kimchi_finished.png',
  honey_garlic_fermenting: '/src/assets/honey_garlic_fermenting.png',
  honey_garlic_finished: '/src/assets/honey_garlic_finished.png',
  fermented_carrots_fermenting: '/src/assets/fermented_carrots_fermenting.png',
  // Fallback high-quality Unsplash URLs (curated & specific)
  fermented_carrots_finished: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
  tepache_fermenting: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=800&q=80',
  tepache_finished: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80',
  yogurt_fermenting: 'https://images.unsplash.com/photo-1571167530149-c1105da4c2c8?auto=format&fit=crop&w=800&q=80',
  yogurt_finished: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
  sourdough_fermenting: 'https://images.unsplash.com/photo-1585478259715-4af2ccbf0b8d?auto=format&fit=crop&w=800&q=80',
  sourdough_finished: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7f?auto=format&fit=crop&w=800&q=80',
  black_garlic_fermenting: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=800&q=80',
  black_garlic_finished: 'https://images.unsplash.com/photo-1596097397804-39d5a1cf5ae0?auto=format&fit=crop&w=800&q=80',
};

export const SEED_RECIPES: Recipe[] = [
  ...PDF_RECIPES,
  {
    id: 'recipe-orange-drink',
    name: 'Orange Fermented Drink',
    short_description: 'A refreshing, naturally fizzy fermented orange beverage infused with fresh ginger root and mint leaves.',
    long_description: 'Crafted through wild lacto-fermentation, this effervescent citrus drink combines raw orange juice, fresh ginger, and garden mint. Wild yeasts convert natural sugars into delicate carbonation and gut-healthy organic acids over 5 to 7 days.',
    category: 'Fermented Drinks',
    image: IMG.orange_fermenting,
    heroImage: IMG.orange_fermenting,
    fermentingImage: IMG.orange_fermenting,
    finishedImage: IMG.orange_finished,
    difficulty: 'Easy',
    duration_min: 5,
    duration_max: 7,
    prep_time_min: 15,
    active_work_time_min: 15,
    expected_yield: '500 ml',
    serving_info: 'Serve chilled over ice with fresh mint garnish.',
    
    ingredients: [
      { name: 'Freshly squeezed orange juice', quantity_base: 500, unit: 'ml', scaling_type: 'volume', notes: 'Raw unpasteurized juice yields best natural yeast' },
      { name: 'Orange pulp', quantity_base: 50, unit: 'g', scaling_type: 'weight', notes: 'Adds natural fiber and yeast attachment surface' },
      { name: 'Fresh ginger root (thinly sliced)', quantity_base: 10, unit: 'g', scaling_type: 'weight', notes: 'Wild yeast booster & spicy kick' },
      { name: 'Fresh mint leaves', quantity_base: 6, unit: 'leaves', scaling_type: 'count', notes: 'Provides herbal aroma notes' },
      { name: 'Raw organic cane sugar or active ginger bug', quantity_base: 20, unit: 'g', scaling_type: 'weight', notes: 'Feeds wild yeast during fermentation' },
      { name: 'Unrefined sea salt', quantity_base: 1, unit: 'pinch', scaling_type: 'fixed', notes: 'Inhibits unwanted microbial strains' },
      { name: 'Filtered non-chlorinated water', quantity_base: 250, unit: 'ml', scaling_type: 'volume', notes: 'For adjusting headspace and gravity' }
    ],

    equipment: [
      { name: '1-Liter Wide-Mouth Glass Jar', category: 'container', description: 'Heavy-duty food-grade glass jar for primary fermentation.', why_used: 'Glass is non-reactive to acid and allows clear visual tracking of carbonation bubbles.' },
      { name: 'Fermentation Airlock & Grommet Lid', category: 'required', description: '3-piece S-bubble airlock filled with sanitizing water.', why_used: 'Allows CO2 carbonation gas to vent outward while blocking oxygen and wild fruit flies from entering.' },
      { name: 'Wooden Stirring Spoon', category: 'utensil', description: 'Long-handled wooden or silicone spoon.', why_used: 'Prevents scratching glass and avoids metallic chemical interactions with citrus acid.' },
      { name: 'Kitchen Digital Scale', category: 'required', description: 'Precision digital kitchen scale (1g accuracy).', why_used: 'Ensures exact sugar-to-water ratios for predictable wild fermentation rates.' },
      { name: 'Fine Mesh Strainer', category: 'utensil', description: 'Stainless steel fine wire mesh sieve.', why_used: 'Filters out spent ginger slices and mint leaves before secondary bottling.' },
      { name: 'Flip-Top Glass Pressure Bottles', category: 'optional', description: 'Swing-top Grolsch style bottles with silicone seal.', why_used: 'Builds intense sparkling champagne-like carbonation during 2nd fermentation.' }
    ],

    preparation_steps: [
      { step: 1, title: 'Sanitize Equipment & Utensils', description: 'Wash glass jar, airlock, spoon, and strainer in hot soapy water and rinse thoroughly with non-chlorinated warm water.', time_min: 5, tip: 'Avoid harsh chemical bleach which leaves residual chlorine that kills wild yeast.' },
      { step: 2, title: 'Prepare Fresh Citrus & Aromatics', description: 'Squeeze fresh organic Valencia oranges. Slice unpeeled fresh ginger into 2mm discs and bruise mint leaves gently.', time_min: 5, tip: 'Leaving ginger skin on supplies rich native wild yeast cultures.' },
      { step: 3, title: 'Dissolve Sugar & Combine Base', description: 'In the glass jar, combine orange juice, pulp, ginger discs, mint leaves, raw sugar, sea salt, and filtered water. Stir for 1 minute until sugar dissolves.', time_min: 3, tip: 'Ensure liquid fills jar up to 2 inches below the rim for proper expansion headspace.' },
      { step: 4, title: 'Install Airlock & Record Baseline', description: 'Attach airlock lid securely. Fill airlock half-full with sanitized water. Take a starting baseline photo.', time_min: 2, tip: 'Store jar in a dark cabinet at 20-24°C (68-75°F) out of direct sunlight.' }
    ],

    fermentation_timeline: [
      { day: 0, title: 'Start Batch & Airlock Set', description: 'Mix raw juice base, secure airlock, record volume, and capture Day 0 photo.', tasks: ['Sanitize equipment', 'Mix ingredients', 'Take starting photo', 'Store in cool dark spot'], photo_required: true, reminder_text: 'Verify airlock water line is level.', what_to_observe: 'Juice settles with pulp floating near top.', what_is_normal: 'No bubbles visible yet; sweet citrus fragrance.', what_is_not_normal: 'Airlock leaking or jar left in hot sunny window.' },
      { day: 1, title: 'Observe Initial Microbial Activity', description: 'Wild yeasts acclimate to sugar content and begin producing carbon dioxide.', tasks: ['Check airlock water level', 'Observe bubble formation'], photo_required: false, what_to_observe: 'Tiny microscopic carbonation bubbles rising around ginger discs.', what_is_normal: 'Slight cloudiness developing.', what_is_not_normal: 'Strong sulfur odor (indicates contaminated water).' },
      { day: 2, title: 'Check Bubbles & Gentle Swirl', description: 'Fermentation enters active logarithmic growth phase.', tasks: ['Swirl jar gently', 'Check for effervescence', 'Take progress photo'], photo_required: true, what_to_observe: 'Steady stream of bubbles breaking pulp surface.', what_is_normal: 'Aroma shifts from sweet orange to pleasantly tart and yeasty.', what_is_not_normal: 'Dry white fuzzy mold spots on floating mint (skim off if present).' },
      { day: 3, title: 'Active Fermentation & Aroma Check', description: 'Peak carbon dioxide generation with vibrant fizzy action.', tasks: ['Record aroma notes', 'Check carbonation buildup', 'Take progress photo'], photo_required: true, note_required: true, what_to_observe: 'Airlock bubbling once every 5 to 10 seconds.', what_is_normal: 'Refreshing, tangy, champagne-like citrus aroma.', what_is_not_normal: 'Slimy ropey liquid texture.' },
      { day: 4, title: 'Taste & Acidity Check', description: 'Sample liquid with a clean spoon to evaluate sweetness vs sourness.', tasks: ['Take taste sample', 'Record acidity & carbonation notes'], note_required: true, what_to_observe: 'Sugar level significantly reduced; crisp tart taste.', what_is_normal: 'Pleasant sharp effervescence with spicy ginger undertone.', what_is_not_normal: 'Overly vinegar-like acetic acid sharp sting.' },
      { day: 5, title: 'Final Bottling Check & Chill', description: 'Strain solids and transfer to flip-top bottles for secondary carbonation or chill immediately.', tasks: ['Strain pulp & ginger', 'Transfer into flip-top bottles', 'Refrigerate'], photo_required: true, what_to_observe: 'Finished sparkling orange beverage ready for consumption.', what_is_normal: 'Bright orange color with natural sediment settlement at bottom.', what_is_not_normal: 'Black discoloration or putrid decay odor.' }
    ],

    completion_guidance: 'Your Orange Ferment is complete when it tastes sparkling, pleasantly tart, and crisp with subtle lingering sweetness. Strain solids and store in flip-top bottles in the refrigerator.',
    ready_checklist: ['Active effervescence and carbonation bubbles visible', 'Aroma is pleasantly sour, fruity, and spicy with no foul odor', 'Flavor balanced between tangy acidity and mild residual sweetness', 'No surface mold discoloration detected'],
    storage_instructions: { container: 'Glass flip-top bottles with tight pressure seal', location: 'Refrigerated at 2–4°C (35–39°F)', duration: 'Consume within 2 weeks for optimal carbonation' },
    safety_notes: ['Always use clean glass containers free of cracks.', 'Discard immediately if dark fuzzy mold forms on top.', 'Burp bottles daily if keeping at room temperature to prevent excess pressure buildup.'],
    common_mistakes: [
      { mistake: 'Using chlorinated tap water', consequence: 'Chlorine kills wild yeast and halts ferment.', prevention: 'Use filtered spring water or boil tap water for 15 mins.' },
      { mistake: 'Leaving jar in direct sunlight', consequence: 'UV rays kill beneficial bacteria and overheat liquid.', prevention: 'Keep in a dark kitchen pantry or cupboard.' }
    ],
    troubleshooting: [
      { question: 'Why is there no bubbling after 3 days?', answer: 'Your room temperature may be too cool (<18°C). Move the jar to a warmer spot (22–24°C) or add 1 tsp extra sugar to re-stimulate yeast.' },
      { question: 'What is the white sediment at the bottom?', answer: 'This is completely normal spent wild yeast (lees). It is non-toxic and healthy.' }
    ],
    tips: ['Add a dash of cinnamon stick during winter for a warm spiced cider flavor.'],
    tags: ['Probiotic', 'Refreshing', 'Beginner Friendly', 'Citrus', 'Fizzy'],
    saved: true
  },

  {
    id: 'recipe-ginger-bug',
    name: 'Wild Ginger Bug Starter',
    short_description: 'The essential wild-yeast starter for crafting homemade fermented sodas, root beer, and herbal brews.',
    long_description: 'A ginger bug is a living culture of beneficial wild yeasts and lactic acid bacteria cultured from fresh organic ginger skin and sugar. Daily feedings create a potent bubbling starter that carbonates homemade herbal sodas.',
    category: 'Fermented Drinks',
    image: IMG.ginger_bug_fermenting,
    heroImage: IMG.ginger_bug_fermenting,
    fermentingImage: IMG.ginger_bug_fermenting,
    finishedImage: IMG.ginger_bug_finished,
    difficulty: 'Easy',
    duration_min: 5,
    duration_max: 7,
    prep_time_min: 10,
    active_work_time_min: 5,
    expected_yield: '500 ml',
    serving_info: 'Use 1/4 cup starter per Liter of sweet fruit juice or tea for homemade soda.',

    ingredients: [
      { name: 'Organic unpeeled ginger (diced fine)', quantity_base: 300, unit: 'g', scaling_type: 'weight', notes: 'Skin contains native wild yeast' },
      { name: 'Raw organic cane sugar', quantity_base: 150, unit: 'g', scaling_type: 'weight', notes: 'Feeds yeast during daily feedings' },
      { name: 'Filtered non-chlorinated water', quantity_base: 500, unit: 'ml', scaling_type: 'volume', notes: 'Unchlorinated spring water' }
    ],

    equipment: [
      { name: '500ml Mason Jar', category: 'container', description: 'Clear glass jar', why_used: 'Allows easy daily stirring and bubbling observation.' },
      { name: 'Breathable Cotton Cloth', category: 'required', description: 'Tight weave cheesecloth or coffee filter', why_used: 'Allows air circulation while keeping fruit flies out.' },
      { name: 'Rubber Band', category: 'required', description: 'Elastic band', why_used: 'Secures cloth cover around jar neck.' },
      { name: 'Wooden Stirring Spoon', category: 'utensil', description: 'Wooden spoon', why_used: 'Stirs in oxygen for aerobic wild yeast growth.' }
    ],

    preparation_steps: [
      { step: 1, title: 'Initial Mix', description: 'In a clean glass jar, mix 250ml water, 2 tbsp diced ginger, and 2 tbsp sugar.', time_min: 5, tip: 'Do not peel organic ginger skin!' },
      { step: 2, title: 'Stir & Cover', description: 'Stir vigorously until sugar dissolves. Cover jar with breathable cloth and secure with rubber band.', time_min: 3, tip: 'Store on kitchen counter at room temp.' }
    ],

    fermentation_timeline: [
      { day: 0, title: 'Initial Build', description: 'Combine initial water, ginger, and sugar.', tasks: ['Mix initial ingredients', 'Cover with cloth'], photo_required: true },
      { day: 1, title: 'First Feeding', description: 'Add 1 tbsp diced ginger + 1 tbsp sugar. Stir 1 min.', tasks: ['Feed ginger bug', 'Stir for 1 min'], photo_required: false },
      { day: 2, title: 'Second Feeding', description: 'Add 1 tbsp ginger + 1 tbsp sugar.', tasks: ['Feed ginger bug', 'Check for bubbles'], photo_required: true, what_to_observe: 'Slight cloudiness and tiny bubbles.' },
      { day: 3, title: 'Third Feeding', description: 'Active bubbling begins.', tasks: ['Feed ginger bug', 'Record aroma'], note_required: true, what_to_observe: 'Fizzing sound when stirred.' },
      { day: 5, title: 'Peak Vitality Test', description: 'Bug foams vigorously when stirred.', tasks: ['Test fizziness', 'Take final photo'], photo_required: true }
    ],

    completion_guidance: 'When the bug is ready, it will foam and fizz vigorously when stirred, smelling pleasantly sweet, yeasty, and spicy.',
    ready_checklist: ['Foamy white layer when stirred', 'Pleasant sweet spicy yeasty aroma', 'Fizzy carbonation sound'],
    storage_instructions: { container: 'Covered glass jar', location: 'Refrigerated (feed 1 tbsp sugar + ginger weekly)', duration: 'Indefinitely with regular feeding' },
    safety_notes: ['Use unpeeled organic ginger.', 'Avoid chlorinated tap water.'],
    common_mistakes: [{ mistake: 'Peeling the ginger', consequence: 'Removes native wild yeast.', prevention: 'Wash skin gently without peeling.' }],
    troubleshooting: [{ question: 'Why is it slimy?', answer: 'Excess Pediococcus bacteria. Discard and restart with fresh organic ginger.' }],
    tips: ['Feed at the exact same time every day.'],
    tags: ['Starter', 'Wild Yeast', 'Essential', 'Probiotic'],
    saved: true
  },

  {
    id: 'recipe-kombucha',
    name: 'Classic Black Tea Kombucha',
    short_description: 'A crisp, tangy fermented tea packed with organic acids and living probiotics.',
    long_description: 'Kombucha is brewed by fermenting sweetened black tea with a Symbiotic Culture of Bacteria and Yeast (SCOBY). Over 7 to 14 days, the culture transforms tea polyphenols into acetic acid, gluconic acid, and natural carbonation.',
    category: 'Fermented Drinks',
    image: IMG.kombucha_fermenting,
    heroImage: IMG.kombucha_fermenting,
    fermentingImage: IMG.kombucha_fermenting,
    finishedImage: IMG.kombucha_finished,
    difficulty: 'Intermediate',
    duration_min: 7,
    duration_max: 14,
    prep_time_min: 20,
    active_work_time_min: 20,
    expected_yield: '1 Liter',
    serving_info: 'Serve ice cold or bottle for secondary fruit flavoring.',

    ingredients: [
      { name: 'SCOBY culture with starter tea', quantity_base: 1, unit: 'culture', scaling_type: 'fixed', notes: 'Includes 200ml active starter liquid' },
      { name: 'Organic loose black tea or tea bags', quantity_base: 4, unit: 'bags', scaling_type: 'count', notes: 'Ceylon or English Breakfast' },
      { name: 'Organic white cane sugar', quantity_base: 100, unit: 'g', scaling_type: 'weight', notes: 'Food source for SCOBY' },
      { name: 'Filtered water', quantity_base: 1000, unit: 'ml', scaling_type: 'volume', notes: 'Chlorine-free water' }
    ],

    equipment: [
      { name: '2-Liter Glass Brew Vessel', category: 'container', description: 'Wide mouth glass jar', why_used: 'Provides oxygen surface area for SCOBY growth.' },
      { name: 'Tight Weave Cloth & Band', category: 'required', description: 'Breathable cover', why_used: 'Prevents fruit flies while allowing oxygen.' },
      { name: 'pH Test Strips (2.5 - 4.5)', category: 'optional', description: 'Litmus test strips', why_used: 'Verifies acid safety levels.' }
    ],

    preparation_steps: [
      { step: 1, title: 'Brew Sweet Tea', description: 'Boil 500ml water, steep tea bags 10 mins. Dissolve sugar completely into hot tea.', time_min: 15 },
      { step: 2, title: 'Cool & Pitch SCOBY', description: 'Dilute with 500ml cold water. Ensure tea drops below 28°C before sliding in SCOBY and starter liquid.', time_min: 5 }
    ],

    fermentation_timeline: [
      { day: 0, title: 'Pitch Culture', description: 'Brew tea, pitch SCOBY, secure cloth lid.', tasks: ['Brew sweet tea', 'Pitch SCOBY', 'Take photo'], photo_required: true },
      { day: 3, title: 'Baby SCOBY Layer', description: 'Translucent film forms on surface.', tasks: ['Check surface layer'], photo_required: true },
      { day: 7, title: 'Taste Test', description: 'Sample with clean straw. Balance sweet & sour.', tasks: ['Straw taste sample', 'Record pH'], note_required: true },
      { day: 10, title: 'Bottling Day', description: 'Bottle kombucha into flip-top bottles.', tasks: ['Bottle kombucha', 'Take final photo'], photo_required: true }
    ],

    completion_guidance: 'Kombucha is ready when it achieves your preferred sweetness vs acidity balance (pH 2.8 - 3.2).',
    ready_checklist: ['Target pH between 2.8 and 3.2', 'Tangy cider-like aroma', 'New SCOBY layer formed on top'],
    storage_instructions: { container: 'Flip-top glass bottles', location: 'Refrigerated (2–4°C)', duration: 'Up to 2 months' },
    safety_notes: ['Never add SCOBY to hot tea (>32°C).', 'If dry fuzzy green mold forms on SCOBY top, discard entire batch.'],
    common_mistakes: [{ mistake: 'Using antibacterial soap on hands', consequence: 'Residue harms SCOBY culture.', prevention: 'Rinse hands with cider vinegar before touching culture.' }],
    troubleshooting: [{ question: 'Why is SCOBY floating sideways?', answer: 'SCOBY orientation does not matter; a new layer will grow flat on top.' }],
    tips: ['Use loose leaf Earl Grey or Hibiscus in secondary fermentation for floral flavor.'],
    tags: ['Kombucha', 'Probiotic', 'SCOBY', 'Classic'],
    saved: true
  },

  {
    id: 'recipe-sauerkraut',
    name: 'Traditional Caraway Sauerkraut',
    short_description: 'Crisp, tangy lacto-fermented cabbage packed with vitamin C and natural gut-friendly enzymes.',
    long_description: 'A classic European lacto-fermentation where natural Leuconostoc and Lactobacillus bacteria on raw cabbage leaves ferment natural plant sugars into preserving lactic acid.',
    category: 'Vegetables',
    image: IMG.sauerkraut_fermenting,
    heroImage: IMG.sauerkraut_fermenting,
    fermentingImage: IMG.sauerkraut_fermenting,
    finishedImage: IMG.sauerkraut_finished,
    difficulty: 'Beginner',
    duration_min: 14,
    duration_max: 28,
    prep_time_min: 25,
    active_work_time_min: 20,
    expected_yield: '1 kg',
    serving_info: 'Serve alongside roasted meats, sausages, sandwiches, or grain bowls.',

    ingredients: [
      { name: 'Fresh green cabbage', quantity_base: 1000, unit: 'g', scaling_type: 'weight', notes: 'Firm heavy head' },
      { name: 'Non-iodized fine sea salt (2% by weight)', quantity_base: 20, unit: 'g', scaling_type: 'weight', notes: 'Exact 2% salinity protects crunch' },
      { name: 'Caraway seeds', quantity_base: 5, unit: 'g', scaling_type: 'weight', notes: 'Traditional Bavarian aromatic' }
    ],

    equipment: [
      { name: '1.5-Liter Fermentation Jar', category: 'container', description: 'Mason or Fido jar', why_used: 'Holds shredded cabbage tightly under brine.' },
      { name: 'Glass Fermentation Weight', category: 'required', description: 'Heavy glass disc', why_used: 'Keeps cabbage 100% submerged below liquid line.' },
      { name: 'Stainless Mixing Bowl', category: 'utensil', description: 'Large bowl', why_used: 'For massaging cabbage with salt.' },
      { name: 'Wooden Cabbage Tamper', category: 'utensil', description: 'Pounder tool', why_used: 'Packs cabbage firmly into jar to release trapped oxygen.' }
    ],

    preparation_steps: [
      { step: 1, title: 'Reserve Outer Leaf & Shred', description: 'Remove outer leaf and set aside. Slice cabbage into 2mm shreds using a sharp chef knife.', time_min: 10 },
      { step: 2, title: 'Salt & Massage Thoroughly', description: 'Sprinkle 2% sea salt over shredded cabbage. Massage firmly for 10 minutes until abundant natural brine pools in bowl.', time_min: 10 },
      { step: 3, title: 'Pack Jar & Submerge', description: 'Pack cabbage tightly into jar, pressing down with tamper. Place reserved outer leaf and glass weight on top so brine completely covers cabbage.', time_min: 5 }
    ],

    fermentation_timeline: [
      { day: 0, title: 'Pack & Submerge', description: 'Massaged cabbage packed tightly under brine with weight.', tasks: ['Shred & massage cabbage', 'Pack jar & weight', 'Take photo'], photo_required: true },
      { day: 3, title: 'CO2 Bubbling Phase', description: 'Lacto-bacteria actively producing carbon dioxide gas bubbles.', tasks: ['Check brine submergence', 'Burp jar if sealed'], photo_required: true },
      { day: 7, title: 'Mid-Ferment Crunch Test', description: 'Flavor shifts from raw cabbage to crisp mild tang.', tasks: ['Taste small sample', 'Record crispness'], note_required: true },
      { day: 21, title: 'Peak Deep Sour Tang', description: 'Cabbage turns translucent light yellow with rich savory sour tang.', tasks: ['Final taste rating', 'Transfer to fridge'], photo_required: true }
    ],

    completion_guidance: 'Sauerkraut is ready when cabbage becomes pale yellow, translucent, crunchy, and pleasantly sour. Store submerged in fridge.',
    ready_checklist: ['Cabbage turns pale yellow translucent', 'Crisp crunchy texture', 'Clean, sour, lactic fragrance', 'Brine remains clear above cabbage line'],
    storage_instructions: { container: 'Sealed glass jar', location: 'Refrigerated (2–4°C)', duration: 'Up to 6 months' },
    safety_notes: ['Keep cabbage 100% submerged under brine line.', 'Skim off harmless white Kahm yeast film if it appears.'],
    common_mistakes: [{ mistake: 'Under-salting cabbage (<1.5%)', consequence: 'Cabbage becomes soft, mushy, and prone to spoilage.', prevention: 'Weigh cabbage and calculate exact 2% salt.' }],
    troubleshooting: [{ question: 'What if brine level drops below cabbage?', answer: 'Top up with a 2% salt water brine (20g sea salt dissolved in 1 Liter water).' }],
    tips: ['Add grated carrots or apples for a sweeter variation.'],
    tags: ['Lacto-fermentation', 'Gut Health', 'Classic', 'Vegan', 'Beginner'],
    saved: true
  },

  {
    id: 'recipe-kimchi',
    name: 'Authentic Napa Cabbage Kimchi',
    short_description: 'Bold, spicy Korean fermented cabbage with garlic, ginger, and gochugaru chilli powder.',
    long_description: 'A cornerstone of Korean cuisine, Mak-Kimchi features chopped salted Napa cabbage tossed in a fragrant chili paste of Gochugaru, garlic, ginger, fish sauce, and daikon matchsticks.',
    category: 'Vegetables',
    image: IMG.kimchi_fermenting,
    heroImage: IMG.kimchi_fermenting,
    fermentingImage: IMG.kimchi_fermenting,
    finishedImage: IMG.kimchi_finished,
    difficulty: 'Intermediate',
    duration_min: 3,
    duration_max: 7,
    prep_time_min: 40,
    active_work_time_min: 30,
    expected_yield: '1.5 kg',
    serving_info: 'Serve with rice, kimchi stew (Jjigae), fried rice, or pancakes.',

    ingredients: [
      { name: 'Napa Cabbage (cut into 2-inch squares)', quantity_base: 1500, unit: 'g', scaling_type: 'weight', notes: 'Fresh crisp Korean cabbage' },
      { name: 'Coarse Korean sea salt', quantity_base: 60, unit: 'g', scaling_type: 'weight', notes: 'For wilting cabbage' },
      { name: 'Korean chili flakes (Gochugaru)', quantity_base: 50, unit: 'g', scaling_type: 'weight', notes: 'Authentic vibrant red chili powder' },
      { name: 'Glutinous rice flour paste', quantity_base: 100, unit: 'ml', scaling_type: 'volume', notes: 'Cooked porridge base' },
      { name: 'Fish sauce or vegan kelp sauce', quantity_base: 40, unit: 'ml', scaling_type: 'volume', notes: 'Provides rich umami depth' },
      { name: 'Minced fresh garlic', quantity_base: 30, unit: 'g', scaling_type: 'weight', notes: '6 whole cloves' },
      { name: 'Minced fresh ginger', quantity_base: 15, unit: 'g', scaling_type: 'weight', notes: '1 tbsp minced' },
      { name: 'Daikon radish matchsticks', quantity_base: 150, unit: 'g', scaling_type: 'weight', notes: 'Adds crisp texture' },
      { name: 'Scallions (chopped 1-inch)', quantity_base: 4, unit: 'pieces', scaling_type: 'count', notes: 'Green onions' }
    ],

    equipment: [
      { name: '2-Liter Glass Fermentation Jar', category: 'container', description: 'Wide-mouth jar', why_used: 'Packs kimchi tightly without overflow.' },
      { name: 'Large Salting Basin', category: 'utensil', description: 'Wash basin', why_used: 'For salting and rinsing cabbage leaves.' },
      { name: 'Nitrile Food Gloves', category: 'required', description: 'Protective gloves', why_used: 'Prevents chili capsaicin burn on hands.' }
    ],

    preparation_steps: [
      { step: 1, title: 'Salt & Wilt Cabbage', description: 'Toss cut Napa cabbage with coarse sea salt. Rest 2 hours, turning every 30 mins until flexible.', time_min: 20 },
      { step: 2, title: 'Rinse 3 Times & Drain', description: 'Rinse cabbage thoroughly 3 times in cold water to remove excess surface salt. Drain in colander for 30 mins.', time_min: 15 },
      { step: 3, title: 'Make Chili Paste & Mix', description: 'Mix rice porridge, Gochugaru, garlic, ginger, fish sauce, radish, and scallions into a thick red paste. Coat cabbage leaves thoroughly using gloved hands.', time_min: 10 },
      { step: 4, title: 'Pack & Vent', description: 'Pack kimchi firmly into jar, leaving 2 inches headspace. Cap loosely to allow gas escape.', time_min: 5 }
    ],

    fermentation_timeline: [
      { day: 0, title: 'Pack Spicy Kimchi', description: 'Pack spiced cabbage firmly into jar.', tasks: ['Salt & rinse cabbage', 'Make chili paste', 'Pack jar', 'Take photo'], photo_required: true },
      { day: 1, title: 'Room Temp Bubble Release', description: 'Press down with clean spoon to release trapped bubbles.', tasks: ['Press down with clean spoon to release trapped bubbles'], photo_required: false },
      { day: 2, title: 'Aroma & Effervescence Check', description: 'Pungent garlic chili fermented aroma.', tasks: ['Check effervescence', 'Take photo'], photo_required: true, note_required: true },
      { day: 4, title: 'Refrigerate & Age', description: 'Move to fridge to slow ferment and develop deep savory sour flavor.', tasks: ['Taste test', 'Refrigerate'], photo_required: true }
    ],

    completion_guidance: 'Kimchi can be eaten fresh or fermented at room temp for 2-4 days until sour, bubbly, and fragrant before storing cold.',
    ready_checklist: ['Pungent, tangy garlic-chili scent', 'Bubbles releasing when pressed with spoon', 'Acidity developing pleasantly'],
    storage_instructions: { container: 'Tight glass jar', location: 'Refrigerated (2–4°C)', duration: 'Up to 6 months' },
    safety_notes: ['Always wear gloves when handling Gochugaru paste.', 'Keep jar capped loosely during room temp fermentation.'],
    common_mistakes: [{ mistake: 'Insufficient draining after rinsing', consequence: 'Watery kimchi paste.', prevention: 'Drain cabbage for a full 30 mins.' }],
    troubleshooting: [{ question: 'Why is my kimchi too salty?', answer: 'Rinse it once more with cold water or add more fresh radish matchsticks.' }],
    tips: ['Save sour aged kimchi juice for making Kimchi Jjigae stew.'],
    tags: ['Spicy', 'Korean', 'Lacto-ferment', 'Probiotic'],
    saved: true
  },

  {
    id: 'recipe-fermented-garlic',
    name: 'Raw Honey Fermented Garlic',
    short_description: 'Whole garlic cloves mellowed in raw unpasteurized honey, creating a sweet medicinal syrup.',
    long_description: 'Combining peeled raw garlic cloves with unpasteurized raw honey initiates a unique enzyme-driven fermentation. Moisture drawn from the garlic thins the honey, creating a dark, sweet, pungent syrup.',
    category: 'Condiments',
    image: IMG.honey_garlic_fermenting,
    heroImage: IMG.honey_garlic_fermenting,
    fermentingImage: IMG.honey_garlic_fermenting,
    finishedImage: IMG.honey_garlic_finished,
    difficulty: 'Easy',
    duration_min: 30,
    duration_max: 90,
    prep_time_min: 20,
    active_work_time_min: 15,
    expected_yield: '500 ml',
    serving_info: 'Drizzle honey over roasted vegetables, cheeses, or take 1 spoonful daily during winter.',

    ingredients: [
      { name: 'Organic garlic (peeled whole cloves)', quantity_base: 250, unit: 'g', scaling_type: 'weight', notes: 'Firm unblemished cloves' },
      { name: 'Raw unpasteurized honey', quantity_base: 350, unit: 'g', scaling_type: 'weight', notes: 'Must be raw active honey' },
      { name: 'Raw apple cider vinegar', quantity_base: 15, unit: 'ml', scaling_type: 'volume', notes: 'Ensures safe pH < 4.6' }
    ],

    equipment: [
      { name: '500ml Glass Flip-Top Jar', category: 'container', description: 'Glass jar', why_used: 'Allows easy daily jar inversion.' }
    ],

    preparation_steps: [
      { step: 1, title: 'Peel Garlic', description: 'Peel garlic cloves carefully without crushing or cutting into them.', time_min: 15 },
      { step: 2, title: 'Submerge in Honey', description: 'Fill jar 3/4 with garlic cloves, pour raw honey over cloves until submerged, and add cider vinegar. Cap loosely.', time_min: 5 }
    ],

    fermentation_timeline: [
      { day: 0, title: 'Submerge Cloves', description: 'Combine garlic and honey in glass jar.', tasks: ['Peel garlic', 'Pour honey', 'Take initial photo'], photo_required: true },
      { day: 3, title: 'Daily Inversion', description: 'Invert jar daily to re-coat floating cloves.', tasks: ['Invert jar', 'Release gas pressure'] },
      { day: 14, title: 'Syrup Thinning Phase', description: 'Garlic juice thins honey into a liquid syrup.', tasks: ['Check liquid consistency', 'Take photo'], photo_required: true },
      { day: 30, title: 'Mellow Flavor Test', description: 'Garlic sharpness softens into sweet savory goodness.', tasks: ['Taste honey syrup', 'Record notes'], note_required: true }
    ],

    completion_guidance: 'Honey garlic ferments over months. It is safe to consume after 4 weeks, getting darker, sweeter, and more complex over time.',
    ready_checklist: ['Honey turns into liquid syrup consistency', 'Garlic cloves sink to bottom and turn translucent amber', 'pH tested below 4.6'],
    storage_instructions: { container: 'Glass jar', location: 'Cool dark pantry', duration: 'Up to 1 year' },
    safety_notes: ['Must use raw unpasteurized honey.', 'Test pH with litmus paper (must be < 4.6).'],
    common_mistakes: [{ mistake: 'Using processed pasteurized honey', consequence: 'No live enzymes, fermentation fails.', prevention: 'Buy raw unpasteurized honey from local beekeeper.' }],
    troubleshooting: [{ question: 'Why are my garlic cloves floating?', answer: 'Garlic is less dense than honey initially. Invert jar daily to keep them coated.' }],
    tips: ['Use the infused honey as a glaze for chicken wings.'],
    tags: ['Honey', 'Immune Boost', 'Sweet & Savory', 'Long Ferment'],
    saved: false
  },

  {
    id: 'recipe-fermented-carrots',
    name: 'Dill & Garlic Fermented Carrots',
    short_description: 'Crunchy carrot sticks lacto-fermented in sea salt brine with fresh dill and garlic.',
    long_description: 'Crisp organic carrot sticks lacto-fermented in a 3.5% sea salt brine infused with garlic and fresh dill weed. Lactic acid bacteria preserve the crunch while imparting a tangy pickle snap.',
    category: 'Vegetables',
    image: IMG.fermented_carrots_fermenting,
    heroImage: IMG.fermented_carrots_fermenting,
    fermentingImage: IMG.fermented_carrots_fermenting,
    finishedImage: IMG.fermented_carrots_finished,
    difficulty: 'Beginner',
    duration_min: 7,
    duration_max: 14,
    prep_time_min: 15,
    active_work_time_min: 15,
    expected_yield: '500 g',
    serving_info: 'Enjoy as a crunchy probiotic snack or on charcuterie boards.',

    ingredients: [
      { name: 'Organic carrots (cut into sticks)', quantity_base: 500, unit: 'g', scaling_type: 'weight', notes: 'Peeled & trimmed' },
      { name: 'Smashed garlic cloves', quantity_base: 2, unit: 'cloves', scaling_type: 'count', notes: 'Fresh garlic' },
      { name: 'Fresh dill sprigs', quantity_base: 3, unit: 'pieces', scaling_type: 'count', notes: 'Fresh dill' },
      { name: '3.5% Sea Salt Brine (21g salt in 600ml water)', quantity_base: 600, unit: 'ml', scaling_type: 'volume', notes: '3.5% brine concentration' }
    ],

    equipment: [
      { name: '1-Liter Glass Jar', category: 'container', description: 'Wide mouth jar', why_used: 'Packs vertical carrot sticks tightly.' },
      { name: 'Glass Weight', category: 'required', description: 'Fermentation disc', why_used: 'Keeps carrots submerged under brine.' }
    ],

    preparation_steps: [
      { step: 1, title: 'Cut Carrots & Prepare Brine', description: 'Slice carrots into uniform 3-inch sticks. Dissolve 21g sea salt into 600ml warm water and cool.', time_min: 10 },
      { step: 2, title: 'Pack Vertically', description: 'Pack carrot sticks vertically into jar alongside dill sprigs and garlic. Pour cool brine over carrots until covered and weight down.', time_min: 5 }
    ],

    fermentation_timeline: [
      { day: 0, title: 'Pack Jar', description: 'Pack carrot sticks tightly and cover with 3.5% brine.', tasks: ['Cut carrots', 'Prepare brine', 'Pack jar', 'Take photo'], photo_required: true },
      { day: 3, title: 'Brine Cloudiness Phase', description: 'Brine turns cloudy with active lacto-bacteria.', tasks: ['Observe cloudiness'], photo_required: true },
      { day: 7, title: 'Crisp Taste Test', description: 'Carrots develop a bright tangy snap.', tasks: ['Sample carrot stick', 'Record crunch level'], note_required: true }
    ],

    completion_guidance: 'Ready when carrots taste pleasantly sour while retaining crisp crunch.',
    ready_checklist: ['Cloudy white brine', 'Pleasant dill pickle aroma', 'Crisp snap when bitten'],
    storage_instructions: { container: 'Glass jar', location: 'Refrigerated (2–4°C)', duration: 'Up to 3 months' },
    safety_notes: ['Keep carrots fully submerged under brine.'],
    common_mistakes: [{ mistake: 'Using floppy old carrots', consequence: 'Mushy ferments.', prevention: 'Use fresh firm organic carrots.' }],
    troubleshooting: [{ question: 'Why is the brine white and cloudy?', answer: 'Cloudy brine is a positive sign of healthy lactic acid bacteria multiplication.' }],
    tips: ['Add 1/2 tsp mustard seeds for extra zesty flavor.'],
    tags: ['Crunchy', 'Snack', 'Lacto-ferment', 'Beginner'],
    saved: false
  },

  {
    id: 'recipe-tepache',
    name: 'Mexican Pineapple Tepache',
    short_description: 'A traditional Mexican fermented beverage made from pineapple rinds, piloncillo, and cinnamon.',
    long_description: 'Tepache is a fast-fermenting Mexican street drink made by fermenting raw pineapple peels and cores with unrefined piloncillo brown sugar, cinnamon, and cloves over 3 to 5 days.',
    category: 'Fermented Drinks',
    image: IMG.tepache_fermenting,
    heroImage: IMG.tepache_fermenting,
    fermentingImage: IMG.tepache_fermenting,
    finishedImage: IMG.tepache_finished,
    difficulty: 'Easy',
    duration_min: 3,
    duration_max: 5,
    prep_time_min: 15,
    active_work_time_min: 15,
    expected_yield: '1.5 Liters',
    serving_info: 'Serve icy cold over ice cubes with a dash of Tajín chili lime salt.',

    ingredients: [
      { name: 'Rinds and core of 1 ripe organic pineapple', quantity_base: 1, unit: 'piece', scaling_type: 'count', notes: 'Native wild yeast lives on rind' },
      { name: 'Dark piloncillo or brown sugar', quantity_base: 150, unit: 'g', scaling_type: 'weight', notes: 'Raw unrefined sugar' },
      { name: 'Cinnamon stick', quantity_base: 1, unit: 'stick', scaling_type: 'fixed', notes: 'Mexican Canela cinnamon' },
      { name: 'Whole cloves', quantity_base: 3, unit: 'pieces', scaling_type: 'fixed', notes: 'Spiced undertone' },
      { name: 'Filtered water', quantity_base: 1500, unit: 'ml', scaling_type: 'volume', notes: 'Chlorine-free water' }
    ],

    equipment: [
      { name: '3-Liter Glass Pitcher or Jar', category: 'container', description: 'Large vessel', why_used: 'Accommodates bulky pineapple peels.' },
      { name: 'Cheesecloth & Band', category: 'required', description: 'Breathable cover', why_used: 'Vents fast CO2 gas.' }
    ],

    preparation_steps: [
      { step: 1, title: 'Prep Pineapple & Sugar Water', description: 'Scrub pineapple skin gently. Chop rind and core into 2-inch chunks. Dissolve sugar in warm water.', time_min: 10 },
      { step: 2, title: 'Combine & Cover', description: 'Add pineapple rinds, cinnamon, cloves, and sugar water into pitcher. Cover with cloth and store on counter.', time_min: 5 }
    ],

    fermentation_timeline: [
      { day: 0, title: 'Brew Tepache Base', description: 'Mix rinds, sugar, and spices.', tasks: ['Prepare rinds', 'Mix sugar water', 'Take photo'], photo_required: true },
      { day: 2, title: 'White Foam Check', description: 'A light white foam will float on surface.', tasks: ['Skim excess foam', 'Check aroma'], note_required: true },
      { day: 3, title: 'Strain & Chill', description: 'Strain out rinds. Serve cold over ice.', tasks: ['Strain tepache', 'Take final photo'], photo_required: true }
    ],

    completion_guidance: 'Tepache ferments very fast! Strain after 3 days to avoid turning into pineapple vinegar.',
    ready_checklist: ['Light white foam layer', 'Fizzy tropical pineapple aroma', 'Mildly sweet & bubbly taste'],
    storage_instructions: { container: 'Glass bottles', location: 'Refrigerated (2–4°C)', duration: 'Consume within 5 days' },
    safety_notes: ['Do not over-ferment past 5 days at room temp.'],
    common_mistakes: [{ mistake: 'Over-fermenting past 5 days', consequence: 'Turns into sharp vinegar.', prevention: 'Strain and chill on day 3.' }],
    troubleshooting: [{ question: 'Why is white foam forming on top?', answer: 'White foam is wild yeast activity and is completely normal for Tepache.' }],
    tips: ['Mix finished Tepache 50/50 with light Mexican beer for a traditional cocktail.'],
    tags: ['Mexican', 'Pineapple', 'Fizzy', 'Quick Ferment'],
    saved: true
  },

  {
    id: 'recipe-yogurt',
    name: 'Creamy Homemade Whole Milk Yogurt',
    short_description: 'Silky, rich cultured yogurt made with fresh milk and live probiotic starter.',
    long_description: 'Made by heating whole milk to denature whey proteins, cooling, and inoculating with live Lactobacillus bulgaricus and Streptococcus thermophilus cultures at 42°C for 8–12 hours.',
    category: 'Dairy',
    image: IMG.yogurt_fermenting,
    heroImage: IMG.yogurt_fermenting,
    fermentingImage: IMG.yogurt_fermenting,
    finishedImage: IMG.yogurt_finished,
    difficulty: 'Easy',
    duration_min: 1,
    duration_max: 1,
    prep_time_min: 20,
    active_work_time_min: 15,
    expected_yield: '1 Liter',
    serving_info: 'Serve with raw honey, fresh berries, or granola.',

    ingredients: [
      { name: 'Whole milk', quantity_base: 1000, unit: 'ml', scaling_type: 'volume', notes: 'Fresh pasteurized whole milk' },
      { name: 'Plain unpasteurized yogurt (starter)', quantity_base: 30, unit: 'g', scaling_type: 'weight', notes: 'Live active cultures' }
    ],

    equipment: [
      { name: 'Digital Thermometer', category: 'required', description: 'Probe thermometer', why_used: 'Ensures exact 42°C inoculation temp.' },
      { name: 'Incubator or Oven with Light', category: 'required', description: 'Warm environment', why_used: 'Maintains steady 42°C incubation temperature.' }
    ],

    preparation_steps: [
      { step: 1, title: 'Scald Milk to 85°C', description: 'Heat milk slowly in heavy saucepan to 85°C (185°F) to denature proteins.', time_min: 10 },
      { step: 2, title: 'Cool to 43°C & Pitch Starter', description: 'Cool milk down to 43°C (110°F). Whisk in 2 tbsp live yogurt starter. Pour into warm glass jars and incubate at 42°C for 8-12 hours.', time_min: 10 }
    ],

    fermentation_timeline: [
      { day: 0, title: 'Scald & Incubate', description: 'Scald milk, cool to 43°C, stir in starter, incubate 8-12h.', tasks: ['Scald milk', 'Pitch culture', 'Incubate 8h'], photo_required: true },
      { day: 1, title: 'Chill & Set', description: 'Yogurt sets firmly in refrigerator.', tasks: ['Check thickness', 'Refrigerate', 'Take photo'], photo_required: true }
    ],

    completion_guidance: 'Yogurt is ready when set firm and creamy with mild tangy aroma.',
    ready_checklist: ['Firm custardy set when jar is tilted', 'Clean mild creamy lactic aroma'],
    storage_instructions: { container: 'Sealed glass jar', location: 'Refrigerated (2–4°C)', duration: 'Up to 2 weeks' },
    safety_notes: ['Ensure accurate temperature when adding starter to avoid killing live cultures.'],
    common_mistakes: [{ mistake: 'Adding starter to hot milk (>48°C)', consequence: 'Kills live cultures; milk stays liquid.', prevention: 'Use digital thermometer.' }],
    troubleshooting: [{ question: 'Why is my yogurt runny?', answer: 'Incubate 2–4 hours longer or strain through cheesecloth for Greek yogurt.' }],
    tips: ['Strain through cheesecloth for 4 hours to make thick Greek yogurt.'],
    tags: ['Dairy', 'Creamy', 'Probiotic', 'Breakfast'],
    saved: false
  },

  {
    id: 'recipe-sourdough',
    name: 'Wild Rye Sourdough Starter',
    short_description: 'Active wild yeast sourdough culture for baking artisan crusty sourdough bread.',
    long_description: 'Creating a sourdough starter captures wild yeasts (Saccharomyces cerevisiae) and lactic acid bacteria (Lactobacillus sanfranciscensis) present in whole rye flour.',
    category: 'Grains',
    image: IMG.sourdough_fermenting,
    heroImage: IMG.sourdough_fermenting,
    fermentingImage: IMG.sourdough_fermenting,
    finishedImage: IMG.sourdough_finished,
    difficulty: 'Intermediate',
    duration_min: 7,
    duration_max: 14,
    prep_time_min: 10,
    active_work_time_min: 5,
    expected_yield: '300 g starter',
    serving_info: 'Use 100g active starter in artisan bread recipes.',

    ingredients: [
      { name: 'Whole rye flour', quantity_base: 500, unit: 'g', scaling_type: 'weight', notes: 'Unbleached whole rye has most wild yeast' },
      { name: 'Unbleached all-purpose flour', quantity_base: 200, unit: 'g', scaling_type: 'weight', notes: 'For ongoing feedings' },
      { name: 'Filtered lukewarm water', quantity_base: 500, unit: 'ml', scaling_type: 'volume', notes: 'Non-chlorinated, 25°C' }
    ],

    equipment: [
      { name: '1-Liter Glass Jar', category: 'container', description: 'Straight-sided glass jar', why_used: 'Tracks starter rise and fall accurately.' },
      { name: 'Digital Kitchen Scale', category: 'required', description: 'Precision scale', why_used: 'Exact flour and water ratios ensure consistent hydration.' },
      { name: 'Rubber Band', category: 'utensil', description: 'Elastic band', why_used: 'Marks the starter level to track rise.' }
    ],

    preparation_steps: [
      { step: 1, title: 'Day 1 Build', description: 'Mix 50g whole rye flour with 50ml water (room temp). Stir vigorously for 1 min. Cover loosely.', time_min: 5, tip: 'Use unpeeled organic rye for maximum wild yeast capture.' },
      { step: 2, title: 'Daily Discard & Feed', description: 'Each day: discard half, add 30g flour + 30ml water, stir, mark level.', time_min: 5, tip: 'Feed at the same time daily. A ripe starter doubles in 4–6 hours.' }
    ],

    fermentation_timeline: [
      { day: 0, title: 'Initial Build', description: 'Mix rye flour and water.', tasks: ['Mix 50g rye + 50ml water', 'Mark level', 'Take photo'], photo_required: true },
      { day: 2, title: 'Early Activity', description: 'Small bubbles appear on surface.', tasks: ['Discard half', 'Feed 30g flour + 30ml water', 'Mark new level'], photo_required: true },
      { day: 5, title: 'Consistent Rise', description: 'Starter now doubles predictably.', tasks: ['Feed starter', 'Record rise time'], note_required: true },
      { day: 7, title: 'Float Test', description: 'Drop 1 tsp starter in water — it floats when ready.', tasks: ['Perform float test', 'Take final photo'], photo_required: true }
    ],

    completion_guidance: 'Starter is ready when it reliably doubles within 4–8 hours of feeding and passes the float test.',
    ready_checklist: ['Doubles within 6 hours of feeding', 'Bubbly honeycomb interior', 'Pleasantly sour/yeasty aroma', 'Passes the float test'],
    storage_instructions: { container: 'Glass jar, loosely covered', location: 'Refrigerator (feed weekly)', duration: 'Indefinitely with weekly feeding' },
    safety_notes: ['Never use metal utensils — acid may react.', 'Discard black liquid (hooch) and feed immediately.'],
    common_mistakes: [{ mistake: 'Using bleached flour', consequence: 'Bleaching agents inhibit wild yeast growth.', prevention: 'Use unbleached organic rye flour.' }],
    troubleshooting: [{ question: 'Why does my starter smell like nail polish remover?', answer: 'Acetone smell means it is hungry. Feed immediately with fresh flour and water.' }],
    tips: ['Whole rye flour jump-starts fermentation faster than white flour.'],
    tags: ['Sourdough', 'Wild Yeast', 'Artisan', 'Grains'],
    saved: false
  },

  {
    id: 'recipe-black-garlic',
    name: 'Slow Fermented Black Garlic',
    short_description: 'Whole garlic bulbs transformed over 30 days of gentle heat into sweet, umami-rich black cloves.',
    long_description: 'Black garlic is produced through a slow Maillard reaction (not microbial fermentation) at a constant 60°C over 30 days. The result is soft, jet-black cloves with a balsamic-molasses sweetness, complex umami, and zero pungent aroma.',
    category: 'Condiments',
    image: IMG.black_garlic_fermenting,
    heroImage: IMG.black_garlic_fermenting,
    fermentingImage: IMG.black_garlic_fermenting,
    finishedImage: IMG.black_garlic_finished,
    difficulty: 'Easy',
    duration_min: 30,
    duration_max: 40,
    prep_time_min: 10,
    active_work_time_min: 5,
    expected_yield: '6 bulbs',
    serving_info: 'Use as a spread on toast, blend into aioli, or garnish steaks and pasta.',

    ingredients: [
      { name: 'Whole garlic bulbs (unpeeled)', quantity_base: 6, unit: 'bulbs', scaling_type: 'count', notes: 'Firm, unblemished large heads' }
    ],

    equipment: [
      { name: 'Electric Rice Cooker or Slow Cooker', category: 'required', description: 'Maintains constant 60°C heat', why_used: 'The warm/low setting holds steady fermentation heat for 30 days.' },
      { name: 'Aluminium Foil', category: 'required', description: 'Heavy duty foil', why_used: 'Wraps bulbs individually to retain moisture and prevent drying.' }
    ],

    preparation_steps: [
      { step: 1, title: 'Wrap Each Bulb', description: 'Wrap each whole unpeeled garlic bulb individually in 2 layers of aluminium foil. Do not peel or separate cloves.', time_min: 5 },
      { step: 2, title: 'Set Warm Cycle & Wait', description: 'Place wrapped bulbs in rice cooker on Warm setting (60°C). Leave undisturbed for 30 days.', time_min: 5, tip: 'Open lid briefly once a week to release excess moisture.' }
    ],

    fermentation_timeline: [
      { day: 0, title: 'Begin Warm Cycle', description: 'Wrap bulbs and set warm cooker.', tasks: ['Wrap garlic bulbs in foil', 'Place in warm cooker', 'Take starting photo'], photo_required: true },
      { day: 7, title: 'First Check', description: 'Garlic begins to soften and brown.', tasks: ['Check humidity inside cooker', 'Photograph outer foil'] },
      { day: 14, title: 'Browning Progress', description: 'Outer skins darken to mahogany.', tasks: ['Check softness of bulb', 'Take photo'], photo_required: true },
      { day: 30, title: 'Final Black Garlic Harvest', description: 'Garlic is jet-black, soft, and sweet.', tasks: ['Remove from cooker', 'Unwrap one clove', 'Taste test', 'Take final photo'], photo_required: true }
    ],

    completion_guidance: 'Black garlic is complete when cloves are jet black throughout, fork-tender, sweet with balsamic notes, and completely odorless.',
    ready_checklist: ['Cloves are uniformly jet black throughout', 'Soft and spreadable texture', 'Sweet balsamic-molasses flavor', 'No raw garlic pungency'],
    storage_instructions: { container: 'Airtight glass container', location: 'Refrigerator', duration: 'Up to 3 months unpeeled' },
    safety_notes: ['Do not exceed 65°C or garlic will dry out and harden.', 'Ensure cooker stays powered on throughout entire 30-day cycle.'],
    common_mistakes: [{ mistake: 'Setting temperature above 70°C', consequence: 'Garlic dehydrates and becomes hard instead of soft.', prevention: 'Use a rice cooker warm function which holds steady at 55-65°C.' }],
    troubleshooting: [{ question: 'Why are my cloves hard and not soft?', answer: 'Temperature was too high or humidity too low. Ensure bulbs are well wrapped and cooker stays at warm (not high) setting.' }],
    tips: ['Blend black garlic with butter for an incredible umami compound butter for steaks.'],
    tags: ['Umami', 'Black Garlic', 'Slow Ferment', 'Condiment'],
    saved: false
  }
];
