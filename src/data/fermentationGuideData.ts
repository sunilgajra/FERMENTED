export interface GuideTopic {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: string;
  summary: string;
  key_points: string[];
  details: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export const FERMENTATION_TOPICS: GuideTopic[] = [
  {
    "id": "what-is-fermentation",
    "title": "What Is Fermentation?",
    "subtitle": "The ancient art & modern science of living foods",
    "category": "Fundamentals",
    "icon": "Sparkles",
    "summary": "Fermentation is an ancient technique of food preservation where beneficial microorganisms\u2014like bacteria, yeast, or fungi\u2014break down sugars and starches into acids, alcohol, and carbon dioxide.",
    "key_points": [
      "Transforms raw ingredients into enzyme-rich, probiotic-packed superfoods",
      "Enhances flavor profiles with rich umami, tangy acidity, and complex aromas",
      "Increases nutrient bioavailability and produces B vitamins and lactic acid",
      "Naturally extends shelf life without chemical preservatives"
    ],
    "details": "Before refrigeration, fermentation was humanity primary line of defense against food spoilage. Beneficial microbes create an acidic or alcoholic environment that prevents harmful pathogens from surviving."
  },
  {
    "id": "types-of-fermentation",
    "title": "The 4 Types of Fermentation",
    "subtitle": "Lacto, Wild, Alcoholic & Acetic Acid Ferments",
    "category": "Science",
    "icon": "FlaskConical",
    "summary": "Understanding the specific microbial process behind your ferment helps you control flavor, texture, and fermentation speed.",
    "key_points": [
      "Lacto-Fermentation: Lactic acid bacteria (Lactobacillus) convert sugars into lactic acid (Sauerkraut, Kimchi, Pickles).",
      "Wild Fermentation: Relies on ambient yeasts and indigenous microflora naturally present on food skins.",
      "Alcoholic Fermentation: Yeasts convert sugars into ethanol and carbon dioxide (Beer, Mead, Cider, Wine).",
      "Acetic Acid Fermentation: Acetobacter bacteria convert alcohol into acetic acid (Pineapple Vinegar, Wine Vinegar)."
    ],
    "details": "Lacto-fermentation is the most versatile home technique requiring only fresh produce, salt, and an anaerobic jar environment."
  },
  {
    "id": "salt-brine-ratios",
    "title": "Salt & Brine Ratios",
    "subtitle": "Creating the optimal environment for beneficial bacteria",
    "category": "Technique",
    "icon": "Scale",
    "summary": "Salt is the cornerstone of lacto-fermentation. It draws out vegetable juices, keeps produce crisp, and inhibits bad bacteria while allowing Lactobacillus to thrive.",
    "key_points": [
      "Dry Salting (2%\u20133% by weight): Used for watery vegetables like cabbage in Sauerkraut and Kimchi.",
      "Wet Brining (3%\u20135% brine solution): Used for whole or chunked vegetables like cucumbers, carrots, and radishes.",
      "Always use non-iodized sea salt or Kosher salt to avoid chemical interference with microbes.",
      "Chlorine in tap water can kill beneficial bacteria\u2014always use filtered or boiled water."
    ],
    "details": "A 2% salt ratio means 20 grams of salt per 1000 grams (1 kg) of vegetables and water."
  },
  {
    "id": "temperature-control",
    "title": "Temperature Control",
    "subtitle": "How heat and cold affect microbial activity",
    "category": "Environment",
    "icon": "Thermometer",
    "summary": "Fermentation speed is directly tied to ambient room temperature. Most vegetable lacto-ferments flourish between 68\u00b0F and 72\u00b0F (20\u00b0C\u201322\u00b0C).",
    "key_points": [
      "Cool Temperatures (55\u00b0F\u201365\u00b0F): Slow, steady fermentation yielding crisp textures and nuanced flavor.",
      "Optimal Room Temp (68\u00b0F\u201372\u00b0F): Standard balanced fermentation duration (3 to 7 days).",
      "Warm Temperatures (75\u00b0F+): Rapid fermentation that can result in soft vegetables or overly sour flavors.",
      "Refrigeration (35\u00b0F\u201340\u00b0F): Dramatically slows fermentation down to a crawl for long-term storage."
    ],
    "details": "Keep fermentation jars in a cool, dark pantry away from direct sunlight."
  },
  {
    "id": "home-laboratory-equipment",
    "title": "Your Home Fermentation Laboratory",
    "subtitle": "Essential jars, weights, airlocks & sanitization",
    "category": "Equipment",
    "icon": "Package",
    "summary": "You do not need expensive laboratory equipment to make delicious ferments at home. A few basic kitchen tools ensure clean, consistent results.",
    "key_points": [
      "Glass Canning Jars: Wide-mouth Mason or Fido bail-top jars provide clear visibility.",
      "Fermentation Weights: Glass discs or crocks to keep food submerged under liquid.",
      "Airlocks & Water Locks: Allow carbon dioxide gas to escape while preventing oxygen entry.",
      "Wooden Mallet / Pounder: Crushes vegetable cells to release natural juices for self-brining.",
      "Cleanliness & Sanitization: Thoroughly wash jars in hot soapy water before every batch."
    ],
    "details": "Submergence is key: Submerged in brine = anaerobic = safe & delicious!"
  },
  {
    "id": "safety-spoilage-principles",
    "title": "Fermentation Safety & Spoilage",
    "subtitle": "How to identify successful ferments vs spoilage",
    "category": "Safety",
    "icon": "ShieldCheck",
    "summary": "Lacto-fermentation produces acidic environments (pH below 4.6) that naturally eliminate harmful foodborne pathogens.",
    "key_points": [
      "Kahm Yeast vs Mold: Kahm yeast forms a thin, white, flat film on surface liquid and is harmless. Mold is fuzzy, elevated, and colorful (green, black, pink).",
      "Sensory Check (Sight, Smell, Taste): Successful ferments smell clean, sour, and pickle-like. Discard any batch with putrid odors or slimy dark mold.",
      "Always trust your senses: If in doubt, throw it out!",
      "Maintain submersed vegetables under brine to eliminate oxygen exposure."
    ],
    "details": "Fermented foods have an extraordinary safety record when proper salt ratios and cleanliness are maintained."
  }
];

export const FERMENTATION_GLOSSARY: GlossaryTerm[] = [
  {
    "term": "Airlock",
    "definition": "A device fitted to the top of a fermentation vessel that allows gas (CO2) to escape while preventing outside air and contaminants from entering."
  },
  {
    "term": "Anaerobic",
    "definition": "An environment lacking oxygen. Lacto-fermentation occurs under anaerobic conditions submerged in brine."
  },
  {
    "term": "Brine",
    "definition": "A solution of salt dissolved in water (or vegetable juices) that protects ferments from spoilage organisms while encouraging lactic acid bacteria."
  },
  {
    "term": "Clabber",
    "definition": "Raw milk that has naturally thickened and soured through lactic acid fermentation."
  },
  {
    "term": "Cultured",
    "definition": "Food or beverage inoculated with specific beneficial bacterial strains or starter cultures."
  },
  {
    "term": "Dosa",
    "definition": "A fermented South Indian crepe made from a ground batter of rice and black lentils."
  },
  {
    "term": "Fermentation",
    "definition": "The microbial transformation of organic compounds (sugars/carbs) into acids, alcohol, or gases by yeasts, bacteria, or fungi."
  },
  {
    "term": "Ginger Bug",
    "definition": "A wild-fermented liquid culture of ginger, sugar, and water used to naturally carbonate sodas and ginger ale."
  },
  {
    "term": "Kefir",
    "definition": "A fermented milk or water beverage produced by kefir grains containing a complex symbiotic culture of bacteria and yeasts."
  },
  {
    "term": "Kimchi",
    "definition": "A traditional Korean fermented vegetable dish made with napa cabbage, radish, garlic, ginger, chilies, and salt."
  },
  {
    "term": "Koji",
    "definition": "Grain (rice or barley) inoculated with Aspergillus oryzae mold, used as a fermentation starter for miso, soy sauce, and sake."
  },
  {
    "term": "Lacto-Fermentation",
    "definition": "Anaerobic fermentation carried out by lactic acid bacteria (LAB) converting sugars into lactic acid."
  },
  {
    "term": "Lactobacillus",
    "definition": "A genus of beneficial, acid-tolerant rod-shaped bacteria central to vegetable and dairy fermentation."
  },
  {
    "term": "Probiotics",
    "definition": "Live microorganisms that confer health benefits to the human digestive system when consumed."
  },
  {
    "term": "Sauerkraut",
    "definition": "Finely cut cabbage that has been fermented by various lactic acid bacteria."
  },
  {
    "term": "SCOBY",
    "definition": "Symbiotic Culture Of Bacteria and Yeast; the rubbery cellulose mat used to brew Kombucha."
  },
  {
    "term": "Tempeh",
    "definition": "A Indonesian fermented soybean cake bound together by Rhizopus oligosporus fungal mycelium."
  },
  {
    "term": "Whey",
    "definition": "The liquid remaining after milk has been curdled and strained; rich in lactic acid bacteria and protein."
  },
  {
    "term": "Wild Ferment",
    "definition": "Fermentation relying on indigenous wild yeasts and bacteria present on ingredients or in the air, without added starters."
  }
];
