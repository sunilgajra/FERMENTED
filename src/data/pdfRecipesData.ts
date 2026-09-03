import type { Recipe } from '../types/ferment';

export const PDF_RECIPES: Recipe[] = [
  {
    "id": "sauerkraut",
    "name": "Sauerkraut",
    "short_description": "Sauerkraut Sauerkraut is a traditional accompaniment to a wide variety of roasted and braised meats, especially sausages, beef, and pork. A famous Alsatian dish",
    "long_description": "Sauerkraut Sauerkraut is a traditional accompaniment to a wide variety of roasted and braised meats, especially sausages, beef, and pork. A famous Alsatian dish",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-QUART JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 41
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Medium Green Cabbage, Cored And Shredded",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Caraway Seeds",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Mix the cabbage, caraway seeds, whey, and salt in a large bowl.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Pound the cabbage with a meat pounder or mallet until it releases",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Pack the cabbage in two 1-quart wide-mouth canning jars.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Press down firmly until the juices rise over the top of the cabbage. The",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Cover the jars tightly and let the sauerkraut ferment at room",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Transfer to cold storage.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Sauerkraut to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "curtido",
    "name": "Curtido",
    "short_description": "Curtido This zesty Caribbean-style sauerkraut is a natural with grilled, roasted, or braised meats, especially pork and game. It makes a perfect addition to fish",
    "long_description": "Curtido This zesty Caribbean-style sauerkraut is a natural with grilled, roasted, or braised meats, especially pork and game. It makes a perfect addition to fish",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-QUART JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 42
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Medium Cabbage, Cored And Shredded",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Shredded Carrots",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Medium Onions, Quartered And Sliced Very Thin",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Pineapple Vinegar",
        "quantity_base": 4.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Dried Oregano",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Red Pepper Flakes",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Mix the cabbage, carrots, onions, pineapple vinegar, oregano, and red",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Pound the vegetables with a meat pounder or mallet until they release",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Pack the vegetables in two 1-quart wide-mouth canning jars.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Press down firmly until the juices rise over the top of the vegetables.",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Cover the jars tightly and let the curtido ferment at room temperature",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Transfer to cold storage.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Curtido to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "kimchi",
    "name": "Kimchi",
    "short_description": "Kimchi You can make your kimchi hotter if you like. Simply add a few more chilies or an extra \u00bd teaspoon or more of red pepper flakes.",
    "long_description": "Kimchi You can make your kimchi hotter if you like. Simply add a few more chilies or an extra \u00bd teaspoon or more of red pepper flakes.",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1583032015879-e5022bc8867a?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1583032015879-e5022bc8867a?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1583032015879-e5022bc8867a?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-QUART JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 43
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Napa Cabbage, Cored And Shredded",
        "quantity_base": 1.0,
        "unit": "head",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Green Onions, Chopped",
        "quantity_base": 1.0,
        "unit": "bunch",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Shredded Carrots",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Hot Chilies, Sliced Thin",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Grated Daikon",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Grated Ginger",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Garlic Cloves, Peeled And Minced",
        "quantity_base": 3.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Red Pepper Flakes",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Mix the cabbage, green onions, carrots, chilies, daikon, ginger, garlic,",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Pound the vegetables with a meat pounder or mallet until they release",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Pack the vegetables in two 1-quart wide-mouth canning jars. Press",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Cover the jars tightly and let the kimchi ferment at room temperature",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Store the kimchi in covered containers in the refrigerator for up to 1",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Kimchi to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "garlic-carrots",
    "name": "Garlic Carrots",
    "short_description": "Garlic Carrots These spicy, garlicky carrots are the perfect topping for grilled fish or burgers. You can add them to coleslaw and other salads for a kick of heat.",
    "long_description": "Garlic Carrots These spicy, garlicky carrots are the perfect topping for grilled fish or burgers. You can add them to coleslaw and other salads for a kick of heat.",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-QUART JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 45
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Shredded Carrots, Tightly Packed",
        "quantity_base": 4.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Minced Garlic",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Mix the carrots, garlic, whey (if using), and salt in a large bowl.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Pound the carrots with a meat pounder or mallet until they release",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Pack the carrots in two 1-quart wide-mouth canning jars.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Press down firmly until the juices rise over the top of the carrots. Add",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Cover the jars tightly and let the garlic carrots ferment at room",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Store the garlic carrots in covered containers in the refrigerator for up",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Garlic Carrots to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "pickled-onions",
    "name": "Pickled Onions",
    "short_description": "Pickled Onions Handcrafted cocktails are all the rage. These delicious pickled onions give you bragging rights next time you make your world-famous Gibsons.",
    "long_description": "Pickled Onions Handcrafted cocktails are all the rage. These delicious pickled onions give you bragging rights next time you make your world-famous Gibsons.",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-PINT JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 46
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Pearl Onions, Peeled",
        "quantity_base": 2.0,
        "unit": "pounds",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Filtered Water, Plus More As Needed",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Juniper Berries",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whole Cloves",
        "quantity_base": 2.0,
        "unit": "teaspoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Green Peppercorns",
        "quantity_base": 1.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Sprigs Fresh Tarragon",
        "quantity_base": 4.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Cinnamon Stick",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Small Whole Nutmeg, Cracked",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Place the pearl onions in two 1-pint wide-mouth canning jars.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "To make the brine, combine the water, whey, salt, juniper berries,",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Pour the brine over the onions, dividing it evenly between the jars. Add",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Cover the jars tightly and let the onions ferment at room temperature",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Store the pickled onions in covered containers in the refrigerator for up",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Pickled Onions to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "pickled-beets",
    "name": "Pickled Beets",
    "short_description": "Pickled Beets",
    "long_description": "Pickled Beets",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-QUART JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 48
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Preparation Time For Beets: About 3 Hours",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Medium Beets",
        "quantity_base": 12.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Filtered Water, Plus More As Needed",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cardamom Pods, Optional",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": true
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Preheat the oven to 300\u00b0F.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Scrub the beets thoroughly and prick each one in several places with a",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Place the beets in a baking dish and roast until they can be pierced",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Once the beets are cool enough to handle, slip them out of their skins.",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Cut the beets into fine julienne (the size of matchsticks).",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Pack the beets in two 1-pint wide-mouth canning jars.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Mash the beets into the jars with a mallet or wooden spoon.",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "To make the brine, combine the water, whey, salt, and cardamom (if",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Pour the brine over the beets, dividing it evenly between the two jars.",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Cover the jars tightly and let the beets ferment at room temperature",
        "time_min": 5
      },
      {
        "step": 11,
        "title": "Step 11",
        "description": "Store the pickled beets in covered containers in the refrigerator for up",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Pickled Beets to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "pickled-red-bell-peppers",
    "name": "Pickled Red Bell Peppers",
    "short_description": "Pickled Red Bell Peppers",
    "long_description": "Pickled Red Bell Peppers",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-PINT JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 50
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Preparation Time For Peppers: About 1 Hour",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Red Bell Peppers, Quartered And Seeded",
        "quantity_base": 12.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Filtered Water, Plus More As Needed",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Preheat the oven to 325\u00b0F.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Place the peppers in a single layer on an oiled baking sheet.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Roast the peppers until the skin blisters and the peppers are very soft,",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Place the peppers in a bowl and cover with plastic wrap.",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "When the peppers are cool enough to handle, remove and discard the",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Pack the peppers in two 1-pint wide-mouth canning jars.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "To make the brine, combine the water, whey, and salt in a large bowl",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Pour the brine over the peppers. Add more filtered water if necessary",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Cover the jars tightly and let the peppers ferment at room temperature",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Store the pickled peppers in covered containers in the refrigerator for",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Pickled Red Bell Peppers to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "pickled-eggplant",
    "name": "Pickled Eggplant",
    "short_description": "Pickled Eggplant Enjoy this as part of an antipasti platter, or serve it on grilled bread. You can also serve it as a topping on saut\u00e9ed, grilled, or roasted poultry, fish, or",
    "long_description": "Pickled Eggplant Enjoy this as part of an antipasti platter, or serve it on grilled bread. You can also serve it as a topping on saut\u00e9ed, grilled, or roasted poultry, fish, or",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 1,
    "duration_max": 1,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-PINT JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 52
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "1 to 1 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Medium Eggplants, Peeled, Sliced, And Cut Into \u00be-Inch-Wide Strips",
        "quantity_base": 4.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Medium Red Bell Peppers, Stemmed, Seeded, And Cut Into \u00bc-Inch-Wide Strips",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Hot Frying Peppers Or Chilies, Stemmed, Seeded, And Cut Into \u00bc-Inch-Wide Strips",
        "quantity_base": 3.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Filtered Water",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Red Wine Vinegar",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Honey",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Garlic Cloves, Minced",
        "quantity_base": 12.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Chopped Fresh Oregano",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Chopped Fresh Thyme",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Olive Oil",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Salt-Packed Capers",
        "quantity_base": 2.0,
        "unit": "teaspoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Green Olives, Pitted And Chopped",
        "quantity_base": 10.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Place the eggplant and bell and frying peppers in a pickling bucket or",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "To make the brine, combine the water and salt in a large bowl and stir",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Pour the brine over the vegetables.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Knead the eggplant with your hands until it releases some of its juices,",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Cover with cheesecloth or a clean towel. Use string or rubber bands to",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Put a plate on top of the eggplant and add enough weight so that it is",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Let the vegetables ferment at room temperature in an area away from",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Drain the vegetables and spin dry them in a salad spinner.",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "To make the seasoning mixture, combine the vinegar, honey, garlic,",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Add the seasoning mixture to the drained vegetables and stir until the",
        "time_min": 5
      },
      {
        "step": 11,
        "title": "Step 11",
        "description": "Pack the vegetables in two 1-pint wide-mouth canning jars.",
        "time_min": 5
      },
      {
        "step": 12,
        "title": "Step 12",
        "description": "Add enough oil to completely cover the vegetables.",
        "time_min": 5
      },
      {
        "step": 13,
        "title": "Step 13",
        "description": "Store the pickled eggplant in covered containers in the refrigerator for",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Pickled Eggplant to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "pickled-ginger",
    "name": "Pickled Ginger",
    "short_description": "Pickled Ginger To peel ginger, use an ordinary teaspoon and scrape the edge of the spoon against the ginger. The skin will come off easily.",
    "long_description": "Pickled Ginger To peel ginger, use an ordinary teaspoon and scrape the edge of the spoon against the ginger. The skin will come off easily.",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-PINT JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 54
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Fresh Ginger, Peeled And Sliced Very Thin",
        "quantity_base": 3.0,
        "unit": "pounds",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Filtered Water, Plus More As Needed",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Pound the ginger with a meat pounder or mallet until it releases some",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Pack the ginger in two 1-pint wide-mouth canning jars.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "To make the brine, combine the water, whey, and salt in a large bowl",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Pour the brine over the ginger, dividing it evenly between the jars. Add",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Cover the jars tightly and let the ginger ferment at room temperature in",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Store the pickled ginger in covered containers in the refrigerator for up",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Pickled Ginger to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "corn-relish",
    "name": "Corn Relish",
    "short_description": "Corn Relish This relish is worlds better than any bottled relish you can find in the grocery store. The next time you have corn on the cob (ideally, in the summer at the",
    "long_description": "Corn Relish This relish is worlds better than any bottled relish you can find in the grocery store. The next time you have corn on the cob (ideally, in the summer at the",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-PINT JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 55
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Corn Kernels",
        "quantity_base": 3.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Small Tomato, Peeled, Seeded, And Diced",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Small Onion, Minced",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Medium Red Bell Pepper",
        "quantity_base": 0.5,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Chopped Cilantro Leaves",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Red Pepper Flakes",
        "quantity_base": 0.25,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Combine the corn, tomato, onion, red bell pepper, cilantro, red pepper",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Pound the vegetables with a meat pounder or mallet until they release",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Pack the corn relish in two 1-pint wide-mouth canning jars.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Press down firmly until the juices cover the top of the vegetables.",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Cover the jars tightly and let the corn relish ferment at room",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Store the corn relish in covered containers in the refrigerator for up to",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Corn Relish to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "garlic-dill-pickles",
    "name": "Garlic Dill Pickles",
    "short_description": "Garlic Dill Pickles It is hard to believe that a process this simple can produce something as addictive as these crisp, tangy pickles. Kirbys are the best choice; they are the",
    "long_description": "Garlic Dill Pickles It is hard to believe that a process this simple can produce something as addictive as these crisp, tangy pickles. Kirbys are the best choice; they are the",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-QUART JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 56
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Pickling Cucumbers",
        "quantity_base": 6.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Mustard Seeds",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Medium Garlic Cloves",
        "quantity_base": 4.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Sprigs Fresh Dill",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Filtered Water, Plus More As Needed",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "teaspoons",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Scrub the cucumbers.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Place the cucumbers in two 1-quart wide-mouth jars.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Divide the mustard seeds, garlic, and dill evenly between the two jars.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Combine the water and salt and divide evenly between the two jars.",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Add more filtered water if necessary to completely cover the",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Cover the jars tightly and let ferment at room temperature in an area",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Store the dill pickles in covered containers in the refrigerator for up to",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Garlic Dill Pickles to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "tomato-salsa",
    "name": "Tomato Salsa",
    "short_description": "Tomato Salsa Letting the salsa ferment before you eat it adds a subtle richness to this popular relish. In addition to its popularity as a dip for tortilla chips, it is also",
    "long_description": "Tomato Salsa Letting the salsa ferment before you eat it adds a subtle richness to this popular relish. In addition to its popularity as a dip for tortilla chips, it is also",
    "category": "Vegetables",
    "image": "https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1592417817098-8f3d6eb19655?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 2,
    "duration_max": 2,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-PINT JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 5: Vegetables",
      "page": 57
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "2 to 2 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Medium Tomatoes, Peeled, Seeded, And Diced",
        "quantity_base": 4.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Small Onions, Chopped Fine",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Chopped Hot Chilies",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Garlic",
        "quantity_base": 6.0,
        "unit": "cloves",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Cilantro, Chopped",
        "quantity_base": 1.0,
        "unit": "bunch",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Dried Oregano",
        "quantity_base": 1.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Juice Of 2 Medium Limes",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Filtered Water, Plus More As Needed",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Combine the tomatoes, onions, chilies, garlic, cilantro, oregano, lime",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Transfer the salsa to two 1-pint canning jars.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Press the salsa to remove air pockets and to bring the liquid level above",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Cover the jars tightly and let ferment at room temperature in an area",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Store the tomato salsa in covered containers in the refrigerator for up",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Tomato Salsa to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vegetables",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "pear-chutney",
    "name": "Pear Chutney",
    "short_description": "Pear Chutney",
    "long_description": "Pear Chutney",
    "category": "Fruits",
    "image": "https://images.unsplash.com/photo-1568569350060-e85d788327c0?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1568569350060-e85d788327c0?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1568569350060-e85d788327c0?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 2,
    "duration_max": 2,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-PINT JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 6: Fruit",
      "page": 60
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "2 to 2 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Filtered Water, Plus More As Needed",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Sugar",
        "quantity_base": 3.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 2.0,
        "unit": "teaspoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Juice And Zest Of 2 Medium Lemons",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Diced Pears, Peeled, Cored, And Diced",
        "quantity_base": 3.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Toasted Walnuts",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Raisins",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cumin Seeds",
        "quantity_base": 1.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Fennel Seeds",
        "quantity_base": 1.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Coriander Seeds",
        "quantity_base": 1.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Green Peppercorns",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Red Pepper Flakes",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Dried Thyme",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "To make the brine, combine the water, sugar, whey, salt, lemon juice,",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Add the nuts, raisins, cumin, fennel, coriander, green peppercorns, red",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Let the chutney ferment at room temperature for 2 days.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Store the chutney in covered containers in the refrigerator for up to 2",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Pear Chutney to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "fruits",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "spicy-pineapple-chutney",
    "name": "Spicy Pineapple Chutney",
    "short_description": "Spicy Pineapple Chutney This recipe provides ingredients for two fermented foods. The discarded skin and core can be used to make Pineapple Vinegar.",
    "long_description": "Spicy Pineapple Chutney This recipe provides ingredients for two fermented foods. The discarded skin and core can be used to make Pineapple Vinegar.",
    "category": "Fruits",
    "image": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 2,
    "duration_max": 2,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-PINT JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 6: Fruit",
      "page": 61
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "2 to 2 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Follow recipe guidance",
    "ingredients": [
      {
        "name": "Medium Pineapple",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Cilantro, Chopped",
        "quantity_base": 1.0,
        "unit": "bunch",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Small Red Onion, Peeled And Chopped Fine",
        "quantity_base": 0.5,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Medium Red Bell Pepper, Seeded And Diced",
        "quantity_base": 0.5,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Medium Jalape\u00f1o, Seeded And Chopped Fine",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Coarsely Grated Fresh Ginger",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Filtered Water, Plus More As Needed",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Lime Juice",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Cut away the end and the outer skin of the pineapple. Cut the pineapple",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Combine the pineapple, cilantro, red onion, red bell pepper, jalape\u00f1o,",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "To make the brine, mix the water, lime juice, whey, and salt until the",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Pack the chutney mixture in two 1-pint wide-mouth canning jars. Press",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Spicy Pineapple Chutney to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Follow recipe guidance"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "fruits",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "preserved-lemons",
    "name": "Preserved Lemons",
    "short_description": "Traditional Preserved Lemons recipe from the fermentation guide.",
    "long_description": "Traditional Preserved Lemons recipe from the fermentation guide.",
    "category": "Fruits",
    "image": "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Intermediate",
    "duration_min": 14,
    "duration_max": 14,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 QUART",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 6: Fruit",
      "page": 62
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "14 to 14 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Medium Lemons, Preferably Organic And Thin-Skinned",
        "quantity_base": 6.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Lemon Juice, As Needed To Cover The Lemons",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Let the chutney ferment at room temperature for 2 days.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Store the chutney in covered containers in the refrigerator for up to 4",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "To prepare the lemons, cut off the ends opposite the stem ends. Cut the",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Pour the remaining salt into a 1-quart wide-mouth canning jar. Push",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Ferment the lemons at room temperature for 2 weeks, shaking and",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Store the lemons in covered containers in the refrigerator for up to 4",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 7,
        "title": "Active Fermentation Check (Day 7)",
        "description": "Active fermentation underway. Check brine level and submerge any floating pieces.",
        "tasks": [
          "Inspect brine submergence",
          "Burp jar if using tight lid",
          "Check aroma & clarity"
        ],
        "what_is_normal": "Cloudy brine, rich fermented aroma",
        "what_is_not_normal": "Dry top layer without brine protection"
      },
      {
        "day": 14,
        "title": "Final Day 14 - Ready & Transfer",
        "description": "Taste test ferment for desired sourness. Once satisfied, transfer container to cold storage/refrigerator.",
        "tasks": [
          "Perform taste & acidity test",
          "Seal container",
          "Transfer to refrigerator"
        ],
        "what_is_normal": "Tangy, delicious fermented flavor",
        "what_is_not_normal": "Slimy texture or off-taste"
      }
    ],
    "completion_guidance": "Transfer Preserved Lemons to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "fruits",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "bitter-orange-marmalade",
    "name": "Bitter Orange Marmalade",
    "short_description": "Bitter Orange Marmalade",
    "long_description": "Bitter Orange Marmalade",
    "category": "Fruits",
    "image": "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-PINT JARS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 6: Fruit",
      "page": 63
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Medium Bitter Oranges",
        "quantity_base": 4.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Filtered Water",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Sugar",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Additional 1 Teaspoon Sea Salt",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Orange Juice, If Needed",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "About Cheese",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Enjoying Fermented Dairy Foods",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "To prepare the oranges, quarter the oranges and slice them very thin.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Divide the sliced oranges evenly between two 1-pint wide-mouth jars.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "To make the brine, combine the water, sugar, whey, and salt. Pour the",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Let the marmalade ferment at room temperature for 3 days.",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Store the marmalade in covered containers in the refrigerator for up to",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Bitter Orange Marmalade to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "fruits",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "cr-me-fra-che",
    "name": "Cr\u00e8me Fra\u00eeche",
    "short_description": "Cr\u00e8me Fra\u00eeche",
    "long_description": "Cr\u00e8me Fra\u00eeche",
    "category": "Dairy",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 PINT",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 7: Dairy",
      "page": 67
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Buttermilk Starter, Purchased Or Homemade",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Heavy Cream (Not Ultra-Pasteurized If Possible)",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Buttermilk",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Stir the cream and buttermilk together in a clean 1-pint jar.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Cover the jar and let the cr\u00e8me fra\u00eeche ferment in a warm, dark place,",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "It can be used immediately or stored in a covered container in the",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Cr\u00e8me Fra\u00eeche to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "dairy",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "cultured-buttermilk",
    "name": "Cultured Buttermilk",
    "short_description": "Cultured Buttermilk",
    "long_description": "Cultured Buttermilk",
    "category": "Dairy",
    "image": "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 2 QUARTS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 7: Dairy",
      "page": 68
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Buttermilk Starter, Purchased Or From Previous Batch",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Quarts Whole Milk",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Cultured Buttermilk, From Previous Batch Or Commercially Produced",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Stir the milk and buttermilk together in a clean 2-quart jar.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Cover the jar and let the buttermilk ferment in a warm, dark place, at",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "It can be used immediately or stored in a covered container in the",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Cultured Buttermilk to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "dairy",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "greek-style-yogurt",
    "name": "Greek-Style Yogurt",
    "short_description": "Greek-Style Yogurt",
    "long_description": "Greek-Style Yogurt",
    "category": "Dairy",
    "image": "https://images.unsplash.com/photo-1571217698622-c2cb48a8035e?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1571217698622-c2cb48a8035e?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1571217698622-c2cb48a8035e?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 1,
    "duration_max": 1,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 2 QUARTS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 7: Dairy",
      "page": 69
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "1 to 1 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Plain Yogurt Starter, Purchased Or From Previous Batch",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Incubate At 85 To 95\u00b0F",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Quarts Whole Milk",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Plain Yogurt",
        "quantity_base": 3.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "In a stainless steel pan, slowly heat the milk over low heat to 180\u00b0F.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Remove the pan from the heat and let the milk cool to 110\u00b0F. Gradually",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "The yogurt can be used immediately or stored in a covered container in",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Greek-Style Yogurt to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "dairy",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "cultured-butter-and-buttermilk",
    "name": "Cultured Butter and Buttermilk",
    "short_description": "Cultured Butter and Buttermilk This recipe produces both butter and buttermilk. The buttermilk made here is already cultured because you begin with a cultured cream, the cr\u00e8me fra\u00eeche.",
    "long_description": "Cultured Butter and Buttermilk This recipe produces both butter and buttermilk. The buttermilk made here is already cultured because you begin with a cultured cream, the cr\u00e8me fra\u00eeche.",
    "category": "Dairy",
    "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 CUP BUTTER",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 7: Dairy",
      "page": 70
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Cr\u00e8me Fra\u00eeche",
        "quantity_base": 1.0,
        "unit": "quart",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Whip the cr\u00e8me fra\u00eeche in a blender or food processor until clumps of",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Pour the cr\u00e8me fra\u00eeche into a colander lined with cheesecloth.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Let the liquid (buttermilk) drain into the bowl.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Transfer the butter to a stainless steel bowl.",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Work the butter with a wooden spoon or paddle to press out as much",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Rinse the butter in cold water and form into a ball.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "The butter can be used immediately or stored in a covered container in",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Cultured Butter and Buttermilk to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "dairy",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "kefir",
    "name": "Kefir",
    "short_description": "Kefir",
    "long_description": "Kefir",
    "category": "Dairy",
    "image": "https://images.unsplash.com/photo-1571167530149-c1105da4c2c8?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1571167530149-c1105da4c2c8?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1571167530149-c1105da4c2c8?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 1,
    "duration_max": 1,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 QUART",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 7: Dairy",
      "page": 71
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "1 to 1 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Dairy Kefir Grains",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Kefir Grains (See Note)",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whole Milk (See Note), Plus More For Rinsing And Storing Kefir Grains",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Heavy Cream (See Note)",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Drain and rinse the kefir grains in cold water or milk.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Combine the milk and cream in a clear 1-quart canning jar.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Add the kefir grains.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Cover the jar and let ferment at 75 to 80\u00b0F until thickened with a",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Use a strainer or slotted spoon to gently lift the kefir grains out of the",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "The kefir can be drunk immediately or stored in a covered container in",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Kefir to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "dairy",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "cream-cheese-and-whey",
    "name": "Cream Cheese and Whey",
    "short_description": "Cream Cheese and Whey",
    "long_description": "Cream Cheese and Whey",
    "category": "Dairy",
    "image": "https://images.unsplash.com/photo-1517414214554-1594e9ef4a89?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1517414214554-1594e9ef4a89?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1517414214554-1594e9ef4a89?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 CUP AND ABOUT 3 CUPS WHEY",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 7: Dairy",
      "page": 72
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Buttermilk Starter, Purchased Or Homemade",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whole Milk",
        "quantity_base": 1.0,
        "unit": "quart",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Buttermilk",
        "quantity_base": 3.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Combine the milk and buttermilk in a clean jar.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Cover the jar and let ferment in a warm, dark place at 75 to 80\u00b0F, until",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Line a colander with cheesecloth or a jelly bag. Pour the cream cheese",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Tie the corners of the cheesecloth around the handle of a wooden",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Scrape the cream cheese into a container.",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "The cream cheese can be used immediately or stored in a covered",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Cream Cheese and Whey to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "dairy",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "cottage-cheese",
    "name": "Cottage Cheese",
    "short_description": "Cottage Cheese",
    "long_description": "Cottage Cheese",
    "category": "Dairy",
    "image": "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 1,
    "duration_max": 1,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 PINT",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 7: Dairy",
      "page": 73
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "1 to 1 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Lemon Juice To Curdle Milk",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Incubate At 85 To 90\u00b0F",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Quarts Whole Milk",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Lemon Juice",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "In a stainless steel pan, slowly heat the milk over low heat to 200\u00b0F.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Remove the pan from the heat and let the milk cool to 115\u00b0F.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Gradually stir in the lemon juice.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Cover the pan and let ferment at 85 to 90\u00b0F until large curds have",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Pour the curds and whey into a lined colander set in a bowl. Let the",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Scrape the cottage cheese into a container.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Store in a covered container in the refrigerator for up to 2 weeks.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Cottage Cheese to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "dairy",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "clabbered-cream",
    "name": "Clabbered Cream",
    "short_description": "Clabbered Cream",
    "long_description": "Clabbered Cream",
    "category": "Dairy",
    "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 CUP",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 7: Dairy",
      "page": 74
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Buttermilk Starter, Purchased Or Homemade",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Incubate At 80 To 85\u00b0F",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Milk",
        "quantity_base": 1.0,
        "unit": "quart",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Buttermilk",
        "quantity_base": 2.0,
        "unit": "teaspoons",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Combine the milk and buttermilk in a 1-quart canning jar.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Cover the container and let ferment at 80 to 85\u00b0F until a thick curd",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Lift the curd from the liquid and transfer it to a jar or dish.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "The clabbered cream can be used immediately or stored in a covered",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Sort through the beans, removing any dry, shriveled, or moldy ones.",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Rinse the beans well in plenty of cold running water.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Put the beans in a large container (they will swell to nearly three times",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Add enough cold water to cover the beans by 2 or 3 inches.",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Cover loosely with a cloth or plastic wrap or with a lid and airlock.",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Ferment at room temperature until you can see some bubbles forming,",
        "time_min": 5
      },
      {
        "step": 11,
        "title": "Step 11",
        "description": "Change the soaking water two or three times for the best flavor.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Clabbered Cream to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "dairy",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "fermented-tofu",
    "name": "Fermented Tofu",
    "short_description": "Fermented Tofu The tofu is wrapped in a clean cloth before it ferments in a mixture of miso, mirin, and sake. You can use doubled cheesecloth or a thin cotton fabric",
    "long_description": "Fermented Tofu The tofu is wrapped in a clean cloth before it ferments in a mixture of miso, mirin, and sake. You can use doubled cheesecloth or a thin cotton fabric",
    "category": "Beans & Legumes",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 1,
    "duration_max": 1,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 10 OUNCES",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 8: Beans",
      "page": 77
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "1 to 1 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Ounces Medium Or Firm Tofu, Preferably Organic Or Non-Gmo",
        "quantity_base": 10.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "White Miso",
        "quantity_base": 0.67,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Red Miso",
        "quantity_base": 4.0,
        "unit": "teaspoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Mirin",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Sake",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Cut the tofu into 1-inch cubes. Drain on a paper towel\u2013lined baking",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Combine the white and red miso, mirin, and sake. Spoon about one-",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Drape the cheesecloth or muslin over the miso mixture. Add the",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Smear the remaining miso mixture evenly over the cheesecloth to",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Cover the container and let ferment in the refrigerator for 3 days. If",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Unwrap the tofu and transfer it to a clean container lined with",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "The tofu can be used immediately or stored in a covered container in",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Fermented Tofu to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beans & legumes",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "tempeh",
    "name": "Tempeh",
    "short_description": "Tempeh",
    "long_description": "Tempeh",
    "category": "Beans & Legumes",
    "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 10 OUNCES",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 8: Beans",
      "page": 79
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Tempeh Spore",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Soybean Preparation Time: 26 Hours",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Dried Soybeans",
        "quantity_base": 1.0,
        "unit": "pound",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Red Or White Wine Vinegar, Cider Vinegar, Or Distilled White Vinegar",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Tempeh Spore (See Resources)",
        "quantity_base": 1.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Soak the soybeans in a large container with enough cold water to cover",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Drain the soybeans and place them in a large pot. Add enough cold",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Drain the soybeans. When they are cool enough to handle, squeeze the",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Place the soybeans on sheet pans lined with paper towels and blot dry.",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Combine the dried soybeans and tempeh spore in a large bowl.",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Let ferment in a warm place, 75 to 80\u00b0F, until the tempeh is covered",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "The tempeh can be used in recipes or cooled completely, cut into",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Tempeh to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beans & legumes",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "miso",
    "name": "Miso",
    "short_description": "Miso",
    "long_description": "Miso",
    "category": "Beans & Legumes",
    "image": "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 PINT",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 8: Beans",
      "page": 81
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Follow recipe guidance",
    "ingredients": [
      {
        "name": "Barley Or Rice Koji",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Soybean Preparation Time: 26 Hours",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Ounces Whole Dry Soybeans",
        "quantity_base": 8.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Barley Koji (See Resources)",
        "quantity_base": 1.0,
        "unit": "pound",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Ounces Sea Salt (About 1 Cup)",
        "quantity_base": 7.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Soak the soybeans in a large container in cold water to cover for 24",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Drain the soybeans. Place them in a large pot. Add cold water to cover",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Bring to a simmer over low heat. Simmer, skimming off any foam or",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Drain the beans. When they are cool enough to handle, squeeze the",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Place the beans on sheet pans lined with paper towels and blot dry.",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Combine the dried soybeans and barley koji in a large bowl and mash",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "With very clean hands, scoop the soybean mixture up and pack it into",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Scatter the salt in an even layer over the surface of the soybeans. Press",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Ferment at room temperature, 65 to 70\u00b0F, until it has the flavor you",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "As the miso ferments, a dark brown liquid will rise to the surface. This",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Miso to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Follow recipe guidance"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beans & legumes",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "dosa-lentil-pancakes",
    "name": "Dosa (Lentil Pancakes)",
    "short_description": "Dosa (Lentil Pancakes)",
    "long_description": "Dosa (Lentil Pancakes)",
    "category": "Beans & Legumes",
    "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 1,
    "duration_max": 1,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 6 DOSAS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 8: Beans",
      "page": 83
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "1 to 1 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Lentil Preparation Time: 24 Hours",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Red Lentils",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Hot Green Chili, Seeded And Chopped",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Minced Onion",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Chopped Fresh Cilantro",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Grated Fresh Ginger",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Kosher Salt",
        "quantity_base": 1.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Ground Turmeric",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Ground Black Pepper",
        "quantity_base": 0.25,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Coconut Or Olive Oil",
        "quantity_base": 3.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "To prepare the lentils, combine them in a large bowl with warm water",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "To prepare the dosa batter, pur\u00e9e the drained lentils and the reserved",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Transfer to a bowl. Cover with a towel and let ferment in a warm place,",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "The batter can be used immediately or stored in a covered container in",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "To prepare dosas, preheat the oven to 180\u00b0F, to keep them warm as",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Heat a griddle or skillet over medium-high heat. Add enough oil to",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Cook the dosa until the edges start to look dry, 2 to 3 minutes. Drizzle",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Transfer to a sheet pan or baking dish and keep warm in the oven while",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Serve the dosas warm.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Dosa (Lentil Pancakes) to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beans & legumes",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "fermented-bean-dip",
    "name": "Fermented Bean Dip",
    "short_description": "Fermented Bean Dip",
    "long_description": "Fermented Bean Dip",
    "category": "Beans & Legumes",
    "image": "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 PINT",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 8: Beans",
      "page": 85
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Or Kefir, Homemade Or Purchased",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Cooked Black Or Pinto Beans",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Kefir",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Kosher Salt",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Combine the drained beans, whey, and salt in a large bowl. Mash lightly",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Transfer to a 1-pint canning jar. Cover tightly and ferment at room",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "The beans can be eaten immediately or stored in a covered container in",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Fermented Bean Dip to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beans & legumes",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "rye-or-wheat-sourdough-starter",
    "name": "Rye or Wheat Sourdough Starter",
    "short_description": "Rye or Wheat Sourdough Starter",
    "long_description": "Rye or Wheat Sourdough Starter",
    "category": "Sourdough",
    "image": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "makes a stronger, healthier starter, since there is less yeast competing for the",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 9: Sourdough Bread",
      "page": 88
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Sourdough",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Day 1",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whole-Grain Rye Or Wheat Flour",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cold Filtered Water",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Day 2",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whole-Grain Rye Or Wheat Flour",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cold Filtered Water",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Day 3",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whole-Grain Rye Or Wheat Flour",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cold Filtered Water",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Day 4",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whole-Grain Rye Or Wheat Flour",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cold Filtered Water",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Day 5",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whole-Grain Rye Or Wheat Flour",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cold Filtered Water",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "The Build For Bread-Baking Day",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whole-Grain Rye Or Wheat Flour",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cold Filtered Water",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Feeding Day",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whole-Grain Rye Or Wheat Flour",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cold Filtered Water",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Combine the flour and water in a glass jar or an earthenware container.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Cover with a tightly woven cloth, secure with string or a rubber band,",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Stir the starter and put \u00bd cup of the starter into a jar or bowl.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Stir the flour and water into the starter. Cover with a tightly woven",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Stir the starter and put \u00bd cup of the starter into a jar or bowl.",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Add the flour and water to the starter. Stir well, cover with a tightly",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Stir the starter and put \u00bd cup of the starter into a jar or bowl.",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Add the flour and water to the starter. Stir well, cover with a tightly",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Stir the starter and put \u00bd cup of the starter into a jar or bowl.",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Add the flour and water to the starter. Stir well, cover with a tightly",
        "time_min": 5
      },
      {
        "step": 11,
        "title": "Step 11",
        "description": "The starter should double in volume. Stir the starter down. It can be",
        "time_min": 5
      },
      {
        "step": 12,
        "title": "Step 12",
        "description": "If your starter has been in the refrigerator, stir it well to incorporate",
        "time_min": 5
      },
      {
        "step": 13,
        "title": "Step 13",
        "description": "Add 1 cup of the flour and \u00bd cup of the water to the starter. Mix well,",
        "time_min": 5
      },
      {
        "step": 14,
        "title": "Step 14",
        "description": "Add the remaining 1 cup flour and \u00bd cup water to the starter.",
        "time_min": 5
      },
      {
        "step": 15,
        "title": "Step 15",
        "description": "Stir well, cover with a tightly woven cloth, secure with string or a",
        "time_min": 5
      },
      {
        "step": 16,
        "title": "Step 16",
        "description": "The starter can be covered, refrigerated, and fed weekly at this point. If",
        "time_min": 5
      },
      {
        "step": 17,
        "title": "Step 17",
        "description": "Stir the starter and put \u00bd cup of the starter into a jar or bowl.",
        "time_min": 5
      },
      {
        "step": 18,
        "title": "Step 18",
        "description": "Add the flour and water. Stir well, cover with a tightly woven cloth,",
        "time_min": 5
      },
      {
        "step": 19,
        "title": "Step 19",
        "description": "Stir the starter down. It is ready to build for use for bread making, or it",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Rye or Wheat Sourdough Starter to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "sourdough",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "sourdough-rye-bread",
    "name": "Sourdough Rye Bread",
    "short_description": "Sourdough Rye Bread",
    "long_description": "Sourdough Rye Bread",
    "category": "Sourdough",
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 2 LOAVES",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 9: Sourdough Bread",
      "page": 92
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Follow recipe guidance",
    "ingredients": [
      {
        "name": "Sourdough Starter",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Rye Starter",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Warm Filtered Water, 85 To 90\u00b0F",
        "quantity_base": 1.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Honey Or Molasses",
        "quantity_base": 3.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Package Instant Yeast",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Kosher Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Medium Rye Flour",
        "quantity_base": 3.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "All-Purpose Flour",
        "quantity_base": 1.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cornmeal For Baking Sheets",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Large Egg White",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Caraway Seeds",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Combine the starter and water in a large bowl, mixing with a wooden",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Add the honey, yeast, and salt, and mix by hand until evenly combined.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Add the rye flour and 2 cups of the all-purpose flour. Continue to mix",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Knead the dough, adding more of the remaining all-purpose flour as",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Transfer the dough to an oiled bowl. Cover the dough with plastic wrap",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Fold the dough over on itself in three or four places to expel the gases.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Scatter a little cornmeal on two baking sheets. Place one round loaf on",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Preheat the oven to 400\u00b0F.",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "When the loaves have almost doubled in size, score the top of each loaf",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Brush the loaves with beaten egg white. Sprinkle the caraway seeds",
        "time_min": 5
      },
      {
        "step": 11,
        "title": "Step 11",
        "description": "Bake until the bread sounds hollow when tapped on the bottom or",
        "time_min": 5
      },
      {
        "step": 12,
        "title": "Step 12",
        "description": "Cool on a rack before slicing.",
        "time_min": 5
      },
      {
        "step": 13,
        "title": "Step 13",
        "description": "Wrap and store at room temperature.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Sourdough Rye Bread to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Follow recipe guidance"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "sourdough",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "sourdough-baguettes",
    "name": "Sourdough Baguettes",
    "short_description": "Sourdough Baguettes",
    "long_description": "Sourdough Baguettes",
    "category": "Sourdough",
    "image": "https://images.unsplash.com/photo-1549931319-a545dcf3bc7f?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1549931319-a545dcf3bc7f?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1549931319-a545dcf3bc7f?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 3 BAGUETTES",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 9: Sourdough Bread",
      "page": 94
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Follow recipe guidance",
    "ingredients": [
      {
        "name": "Sourdough Starter",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Wheat Sourdough Starter",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Warm Filtered Water, 85 To 90\u00b0F",
        "quantity_base": 0.75,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Honey Or Sugar",
        "quantity_base": 2.0,
        "unit": "teaspoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Package Instant Dry Yeast (Or 1\u00bc Teaspoons)",
        "quantity_base": 0.5,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Kosher Salt",
        "quantity_base": 1.0,
        "unit": "teaspoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "All-Purpose Or Bread Flour",
        "quantity_base": 5.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cornmeal For Baking Sheets",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Large Egg Yolk",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Combine the starter and water in a large bowl, mixing with a wooden",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Add 3 cups of the flour and continue to mix the dough by hand or in a",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Knead the dough, adding enough of the remaining flour to make a",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Transfer the dough to an oiled bowl. Cover the dough with plastic wrap",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Put the dough in a warm, draft-free place, 70 to 75\u00b0F. Let the dough rise",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Fold the dough over on itself in three or four places to expel the gases.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Divide the dough into three equal pieces. Shape the dough into",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Scatter a little cornmeal on two baking sheets. Place the baguettes on",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Preheat the oven to 450\u00b0F.",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "When the loaves have doubled in size, score the top of each loaf with a",
        "time_min": 5
      },
      {
        "step": 11,
        "title": "Step 11",
        "description": "Brush the loaves with the beaten egg yolk.",
        "time_min": 5
      },
      {
        "step": 12,
        "title": "Step 12",
        "description": "Bake until the bread sounds hollow when tapped on the bottom or",
        "time_min": 5
      },
      {
        "step": 13,
        "title": "Step 13",
        "description": "Cool on a rack before slicing.",
        "time_min": 5
      },
      {
        "step": 14,
        "title": "Step 14",
        "description": "Wrap and store at room temperature.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Sourdough Baguettes to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Follow recipe guidance"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "sourdough",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "sourdough-pancakes",
    "name": "Sourdough Pancakes",
    "short_description": "Sourdough Pancakes",
    "long_description": "Sourdough Pancakes",
    "category": "Sourdough",
    "image": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 6 SERVINGS (18 PANCAKES)",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 9: Sourdough Bread",
      "page": 96
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Follow recipe guidance",
    "ingredients": [
      {
        "name": "Sourdough Starter",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "All-Purpose Flour",
        "quantity_base": 1.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Sugar",
        "quantity_base": 3.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Baking Powder",
        "quantity_base": 1.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Baking Soda",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Kosher Salt",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Large Eggs",
        "quantity_base": 3.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Wheat Sourdough Starter",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Milk",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Unsalted Butter, Melted And Cooled",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Place the flour, sugar, baking powder, baking soda, and salt in a large",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Beat the eggs in a small mixing bowl. Add the starter, milk, and butter,",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Make a well in the center of the dry ingredients. Add the wet",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Preheat the oven to 180\u00b0F.",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Heat a skillet or griddle over medium-high heat. Brush with melted",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Pour the batter onto the griddle, about \u00bc cup for each pancake. Leave",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Cook on the first side until you see small bubbles bursting in the center",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Hold the finished pancakes in the oven to keep them warm.",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Serve the pancakes with toppings such as syrup, fruit butter, fresh fruit,",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Sourdough Pancakes to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Follow recipe guidance"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "sourdough",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "sourdough-buttermilk-biscuits",
    "name": "Sourdough Buttermilk Biscuits",
    "short_description": "Sourdough Buttermilk Biscuits",
    "long_description": "Sourdough Buttermilk Biscuits",
    "category": "Sourdough",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 14 BISCUITS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 9: Sourdough Bread",
      "page": 98
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Follow recipe guidance",
    "ingredients": [
      {
        "name": "Sourdough Starter",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "All-Purpose Flour",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Baking Powder",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Baking Soda",
        "quantity_base": 0.25,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Kosher Salt",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Chilled Unsalted Butter, Cubed",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Wheat Sourdough Starter At Room Temperature",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cultured Buttermilk At Room Temperature",
        "quantity_base": 0.75,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Preheat the oven to 425\u00b0F. Brush two baking sheets with butter or oil",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Place the flour, baking powder, baking soda, and salt in a large mixing",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Add the butter to the flour and cut it in with a pastry blender or two",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "To prepare the wet ingredients, stir together the starter and buttermilk",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Turn the dough out onto a floured work surface. Knead the dough 3 or",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Using a floured rolling pin, roll out the dough to a \u00bd-inch thickness.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Transfer the biscuits to the prepared baking sheets. Space the biscuits",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Preheat the oven to 425\u00b0F while the biscuits are rising.",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Bake until golden brown on top, 10 to 12 minutes.",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Serve the biscuits warm, accompanied by Cultured Butter, honey, fruit",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Sourdough Buttermilk Biscuits to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Follow recipe guidance"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "sourdough",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "corned-beef",
    "name": "Corned Beef",
    "short_description": "Corned Beef",
    "long_description": "Corned Beef",
    "category": "Meat, Fish & Eggs",
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Intermediate",
    "duration_min": 14,
    "duration_max": 14,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 3 POUNDS (6 TO 8 SERVINGS)",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 10: Meat, Fish, and Eggs",
      "page": 101
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "14 to 14 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Curing Time In The Refrigerator: 2 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Cold Filtered Water",
        "quantity_base": 6.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Sea Salt",
        "quantity_base": 0.75,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Brown Sugar",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Garlic Cloves",
        "quantity_base": 6.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Bay Leaves",
        "quantity_base": 6.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Cinnamon Stick",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whole Coriander Seeds",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whole Black Peppercorns",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Juniper Berries",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "",
        "quantity_base": 4.0,
        "unit": "cloves",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Beef Brisket",
        "quantity_base": 3.0,
        "unit": "pounds",
        "scaling_type": "weight",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "To make the brine, stir together the water, salt, and sugar until",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Trim the beef and place it in a fermenting container. Pour the brine",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Add a weight to keep the meat submerged. Cover the container and add",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Let ferment at room temperature, 65 to 70\u00b0F, for 7 days.",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Transfer the container to the refrigerator and ferment for 2 weeks.",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "To cook the corned beef, remove it from the brine. Place it in a deep pot",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Bring the corned beef slowly to a simmer over low heat. Simmer until",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Slice the corned beef and serve.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 7,
        "title": "Active Fermentation Check (Day 7)",
        "description": "Active fermentation underway. Check brine level and submerge any floating pieces.",
        "tasks": [
          "Inspect brine submergence",
          "Burp jar if using tight lid",
          "Check aroma & clarity"
        ],
        "what_is_normal": "Cloudy brine, rich fermented aroma",
        "what_is_not_normal": "Dry top layer without brine protection"
      },
      {
        "day": 14,
        "title": "Final Day 14 - Ready & Transfer",
        "description": "Taste test ferment for desired sourness. Once satisfied, transfer container to cold storage/refrigerator.",
        "tasks": [
          "Perform taste & acidity test",
          "Seal container",
          "Transfer to refrigerator"
        ],
        "what_is_normal": "Tangy, delicious fermented flavor",
        "what_is_not_normal": "Slimy texture or off-taste"
      }
    ],
    "completion_guidance": "Transfer Corned Beef to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "meat, fish & eggs",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "pickled-eggs",
    "name": "Pickled Eggs",
    "short_description": "Pickled Eggs",
    "long_description": "Pickled Eggs",
    "category": "Meat, Fish & Eggs",
    "image": "https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 6 EGGS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 10: Meat, Fish, and Eggs",
      "page": 103
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Garlic Cloves, Peeled",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Sprigs Fresh Dill",
        "quantity_base": 3.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Hard-Cooked Eggs, Peeled",
        "quantity_base": 6.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Kosher Salt",
        "quantity_base": 1.0,
        "unit": "teaspoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Filtered Water, Plus More As Needed",
        "quantity_base": 3.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Place 1 of the garlic cloves and 1 sprig of the dill in the bottom of a 2-",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Stir together the water and salt in a small bowl until the salt dissolves.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Seal the jars and let ferment in a cool, dark spot, 60 to 65\u00b0F, until you",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "The eggs can be eaten immediately or stored in the refrigerator for up",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Pickled Eggs to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "meat, fish & eggs",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "beet-pickled-eggs",
    "name": "Beet Pickled Eggs",
    "short_description": "Beet Pickled Eggs",
    "long_description": "Beet Pickled Eggs",
    "category": "Meat, Fish & Eggs",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 6 EGGS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 10: Meat, Fish, and Eggs",
      "page": 104
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Thin Slices Yellow Onion",
        "quantity_base": 4.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Allspice Berries",
        "quantity_base": 6.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Hard-Cooked Eggs, Peeled",
        "quantity_base": 6.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Beet Kvass",
        "quantity_base": 3.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Place 2 slices of the onion and 3 of the allspice berries in the bottom of",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Add the peeled eggs, the remaining 2 slices of onion, and 3 allspice",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Pour the kvass over the eggs. Add filtered water if necessary to bring",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Seal the jar and let ferment in a cool, dark spot, 60 to 65\u00b0F, until you",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Transfer the jar to the refrigerator.",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "The eggs can be eaten immediately or stored in the refrigerator for up",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Beet Pickled Eggs to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "meat, fish & eggs",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "gravlax",
    "name": "Gravlax",
    "short_description": "Gravlax In traditional Scandinavian cooking, the liquid released by the salmon as it cures is used to make a mustard sauce.",
    "long_description": "Gravlax In traditional Scandinavian cooking, the liquid released by the salmon as it cures is used to make a mustard sauce.",
    "category": "Meat, Fish & Eggs",
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 FILLET (TEN TO TWELVE 2-OUNCE SERVINGS)",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 10: Meat, Fish, and Eggs",
      "page": 105
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Sugar",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Kosher Salt",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Bunches Fresh Dill, Chopped",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Salmon Fillet (About 3 Pounds)",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Vodka",
        "quantity_base": 1.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "To prepare the gravlax cure, combine the sugar, salt, and dill in a bowl,",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Remove the pin bones from the salmon. To check for pin bones, run",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Lay the salmon on a large piece of doubled cheesecloth. The piece",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Pack half the gravlax cure on the top of the salmon. Bring the",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Fold the cheesecloth around the salmon securely, folding in the sides to",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Transfer the salmon to a shallow bowl or baking dish. Put a plate or a",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Let the salmon ferment at room temperature for 6 hours.",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Finish fermenting the salmon in the refrigerator until it has a good",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "The gravlax can be carved immediately (see note).",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Store the gravlax well wrapped in the refrigerator and eat within 2",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Gravlax to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "meat, fish & eggs",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "fermented-fish-sauce",
    "name": "Fermented Fish Sauce",
    "short_description": "Fermented Fish Sauce This sauce has a history that goes as far back as eating. Records describe a form of it in ancient Greece, Rome (the famous garum), Constantinople, and",
    "long_description": "Fermented Fish Sauce This sauce has a history that goes as far back as eating. Records describe a form of it in ancient Greece, Rome (the famous garum), Constantinople, and",
    "category": "Meat, Fish & Eggs",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Advanced",
    "duration_min": 28,
    "duration_max": 28,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 CUP",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 10: Meat, Fish, and Eggs",
      "page": 107
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "28 to 28 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Whole Fresh Sardines",
        "quantity_base": 1.0,
        "unit": "pound",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Sea Salt",
        "quantity_base": 4.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Garlic Clove, Peeled And Smashed",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Fresh Bay Leaves",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Strip Lemon Peel, 2 Inches Long And \u00bc Inch Wide",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whole Black Peppercorns",
        "quantity_base": 2.0,
        "unit": "teaspoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey Or Pickle Brine",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Filtered Water, Or As Needed To Fill The Jar",
        "quantity_base": 1.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "To prepare the sardines, chop them into 1-inch pieces. Transfer to a",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Add the salt, smashed garlic, bay leaves, lemon peel, and peppercorns.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Pour in enough water to cover the fish and fill the jar to bring the liquid",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Let ferment at room temperature until there are plenty of bubbles in",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Transfer the jar to the refrigerator. Continue to ferment for 4 weeks.",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Drain the fish sauce through a fine-mesh strainer into a clean container.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "The fish sauce can be used immediately or stored in clean bottles with",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 14,
        "title": "Active Fermentation Check (Day 14)",
        "description": "Active fermentation underway. Check brine level and submerge any floating pieces.",
        "tasks": [
          "Inspect brine submergence",
          "Burp jar if using tight lid",
          "Check aroma & clarity"
        ],
        "what_is_normal": "Cloudy brine, rich fermented aroma",
        "what_is_not_normal": "Dry top layer without brine protection"
      },
      {
        "day": 28,
        "title": "Final Day 28 - Ready & Transfer",
        "description": "Taste test ferment for desired sourness. Once satisfied, transfer container to cold storage/refrigerator.",
        "tasks": [
          "Perform taste & acidity test",
          "Seal container",
          "Transfer to refrigerator"
        ],
        "what_is_normal": "Tangy, delicious fermented flavor",
        "what_is_not_normal": "Slimy texture or off-taste"
      }
    ],
    "completion_guidance": "Transfer Fermented Fish Sauce to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "meat, fish & eggs",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "pickled-herring",
    "name": "Pickled Herring",
    "short_description": "Pickled Herring",
    "long_description": "Pickled Herring",
    "category": "Meat, Fish & Eggs",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 1,
    "duration_max": 1,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1\u00bd POUNDS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 10: Meat, Fish, and Eggs",
      "page": 109
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "1 to 1 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Herring Fillets, Cut Into 1-Inch Pieces",
        "quantity_base": 1.0,
        "unit": "pounds",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Medium Yellow Onion, Sliced Thin",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Kosher Salt",
        "quantity_base": 2.0,
        "unit": "teaspoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whole Black Peppercorns",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Yellow Mustard Seeds",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whole Coriander Seeds",
        "quantity_base": 0.25,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Bay Leaves",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whey (Optional)",
        "quantity_base": 2.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Vinegar Mothers",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Maintaining And Sharing A Mother",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Growing Your Own Vinegar Mother",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Drinking Vinegars",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Shrub Syrups",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Pasteurizing Vinegars And Shrubs",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Combine the herring, onion, salt, peppercorns, mustard seeds,",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Press the fish down with a mallet or wooden spoon. Pour in enough",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Cover the jar. Let ferment at room temperature for 24 hours.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "The herring can be eaten now or stored in the covered jar in the",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Heat them gently to 180\u00b0F over low heat.",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Pour the vinegar through a funnel into bottles.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Cap tightly.",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Store in a pantry or cupboard away from direct sunlight.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Pickled Herring to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "meat, fish & eggs",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "pineapple-vinegar",
    "name": "Pineapple Vinegar",
    "short_description": "Pineapple Vinegar The enzymes in fresh pineapple can produce a very active vinegar with plenty of effervescence. Open jars carefully to avoid explosions.",
    "long_description": "Pineapple Vinegar The enzymes in fresh pineapple can produce a very active vinegar with plenty of effervescence. Open jars carefully to avoid explosions.",
    "category": "Vinegar",
    "image": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 QUART",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 11: Vinegar",
      "page": 115
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Medium Pineapple",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Red Pepper Flakes",
        "quantity_base": 0.5,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Dried Oregano Or 2 Sprigs Fresh Oregano",
        "quantity_base": 2.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Quarts Filtered Water",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Cut the skin off the pineapple and transfer the skin to a 2-quart canning",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Cut the pineapple flesh lengthwise into quarters. Cut out the core and",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Add the red pepper flakes and oregano to the canning jar. Pour the",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Cover the jar and let ferment at room temperature (65 to 70\u00b0F) for 2 or",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Strain the pineapple vinegar into clear jars with screw tops or clamp",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Store in a covered container in the refrigerator for up to 2 weeks.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Pineapple Vinegar to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vinegar",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "red-wine-vinegar",
    "name": "Red Wine Vinegar",
    "short_description": "Red Wine Vinegar",
    "long_description": "Red Wine Vinegar",
    "category": "Vinegar",
    "image": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Advanced",
    "duration_min": 21,
    "duration_max": 21,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 2 QUARTS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 11: Vinegar",
      "page": 116
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "21 to 21 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Vinegar Mother",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Vinegar Mother And Vinegar (About 1 Cup)",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Quarts Dry Red Wine",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Filtered Water",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "White Wine Vinegar",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Champagne Vinegar",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Sherry Vinegar",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Cider Vinegar",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Malt Vinegar",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Place the vinegar mother and vinegar in a glass or ceramic crock or jar.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Carefully pour in the wine and water so that it runs down the sides of",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Cover the jar or crock with cheesecloth. Secure with a string or rubber",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Let the vinegar ferment until it has developed a strong acidic aroma",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "If you have used a crock with a spigot, draw off about 1 quart of the",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Strain the vinegar through a cheesecloth-lined sieve. Pour the vinegar",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Store at room temperature in a cupboard or pantry away from direct",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 10,
        "title": "Active Fermentation Check (Day 10)",
        "description": "Active fermentation underway. Check brine level and submerge any floating pieces.",
        "tasks": [
          "Inspect brine submergence",
          "Burp jar if using tight lid",
          "Check aroma & clarity"
        ],
        "what_is_normal": "Cloudy brine, rich fermented aroma",
        "what_is_not_normal": "Dry top layer without brine protection"
      },
      {
        "day": 21,
        "title": "Final Day 21 - Ready & Transfer",
        "description": "Taste test ferment for desired sourness. Once satisfied, transfer container to cold storage/refrigerator.",
        "tasks": [
          "Perform taste & acidity test",
          "Seal container",
          "Transfer to refrigerator"
        ],
        "what_is_normal": "Tangy, delicious fermented flavor",
        "what_is_not_normal": "Slimy texture or off-taste"
      }
    ],
    "completion_guidance": "Transfer Red Wine Vinegar to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vinegar",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "blackberry-shrub",
    "name": "Blackberry Shrub",
    "short_description": "Blackberry Shrub",
    "long_description": "Blackberry Shrub",
    "category": "Vinegar",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES TWO 1-PINT BOTTLES",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 11: Vinegar",
      "page": 118
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Blackberries",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Sugar",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Red Wine Vinegar",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Cherry Shrub",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Strawberry Rhubarb Shrub",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Equipment, Ingredients, And Basic",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Techniques",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Combine the blackberries and sugar in a large mixing bowl.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Crush them together using a wooden mallet, a potato masher, or clean",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Cover with cheesecloth or a clean towel, securing it in place with a",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Ferment at room temperature until the sugar is completely dissolved,",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Add the vinegar.",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Cover with cheesecloth or a clean towel, securing it in place with a",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Ferment at room temperature until the shrub has a rich, sweet-tart",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Strain the shrub through a fine-mesh sieve or cheesecloth.",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Transfer to clean jars or bottles and cap tightly.",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Store in a covered container in the refrigerator for up to 2 months.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Blackberry Shrub to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "vinegar",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "ginger-bug-for-soda",
    "name": "Ginger Bug for Soda",
    "short_description": "Ginger Bug for Soda This bug is like a sourdough starter. You need to feed it daily for 5 consecutive days before it is established and ready to use. Then you feed it weekly to keep",
    "long_description": "Ginger Bug for Soda This bug is like a sourdough starter. You need to feed it daily for 5 consecutive days before it is established and ready to use. Then you feed it weekly to keep",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 PINT",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 122
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Day 1",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Chopped Fresh Ginger",
        "quantity_base": 3.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Sugar",
        "quantity_base": 3.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Water",
        "quantity_base": 3.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Day 2 Through Day 5",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Prepare Ferment",
        "description": "Follow standard procedure for Ginger Bug for Soda as outlined in the guide.",
        "time_min": 15
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Ginger Bug for Soda to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "ginger-ale",
    "name": "Ginger Ale",
    "short_description": "Ginger Ale",
    "long_description": "Ginger Ale",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 2 QUARTS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 123
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Ginger Bug",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Quarts Filtered Water",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Sugar",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Chopped Fresh Ginger",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Lemon Or Lime Juice",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Ginger Bug",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "To make the ginger wort, warm the water, sugar, ginger, and lemon",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Add the ginger bug to the wort. Cover with cheesecloth and let it",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Strain the ginger ale into glass bottles with screw or clamp-style caps.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "The ginger ale can be drunk immediately or stored in tightly capped",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Ginger Ale to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "fruit-soda",
    "name": "Fruit Soda",
    "short_description": "Fruit Soda",
    "long_description": "Fruit Soda",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 2 QUARTS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 124
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Ginger Bug",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Ginger Bug",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Quarts Fresh Or Bottled Fruit Juice (See Note)",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Add 2 tablespoons ginger bug each into 2 clean 1-quart jars. Pour the",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Cover with cheesecloth and let ferment at room temperature until",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Strain the soda into glass bottles with screw or clamp-style caps.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "The soda can be drunk immediately or stored in tightly capped bottles",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Fruit Soda to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "scoby-and-starter-tea-for-kombucha",
    "name": "SCOBY and Starter Tea for Kombucha",
    "short_description": "SCOBY and Starter Tea for Kombucha",
    "long_description": "SCOBY and Starter Tea for Kombucha",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Advanced",
    "duration_min": 28,
    "duration_max": 28,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 SCOBY AND 3 CUPS STARTER TEA",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 126
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "28 to 28 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Follow recipe guidance",
    "ingredients": [
      {
        "name": "Building Time: 2 To 4 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Water",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Tea Bag Black Tea",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Sugar",
        "quantity_base": 3.0,
        "unit": "tablespoons",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Purchased Plain Kombucha With Live Cultures",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Bring the water to a boil and combine it with the tea bag in a teapot.",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Steep for 10 minutes (the tea should be quite strong). Remove the tea",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Pour the sweetened tea and kombucha into a 2-quart glass canning jar.",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Let ferment at room temperature until a gelatinous-looking mass forms",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "You may see bubbles and tendrils attached to the sides and bottom of",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "When the SCOBY is about \u00bd inch thick, it can be used for kombucha",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 14,
        "title": "Active Fermentation Check (Day 14)",
        "description": "Active fermentation underway. Check brine level and submerge any floating pieces.",
        "tasks": [
          "Inspect brine submergence",
          "Burp jar if using tight lid",
          "Check aroma & clarity"
        ],
        "what_is_normal": "Cloudy brine, rich fermented aroma",
        "what_is_not_normal": "Dry top layer without brine protection"
      },
      {
        "day": 28,
        "title": "Final Day 28 - Ready & Transfer",
        "description": "Taste test ferment for desired sourness. Once satisfied, transfer container to cold storage/refrigerator.",
        "tasks": [
          "Perform taste & acidity test",
          "Seal container",
          "Transfer to refrigerator"
        ],
        "what_is_normal": "Tangy, delicious fermented flavor",
        "what_is_not_normal": "Slimy texture or off-taste"
      }
    ],
    "completion_guidance": "Transfer SCOBY and Starter Tea for Kombucha to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Follow recipe guidance"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "kombucha",
    "name": "Kombucha",
    "short_description": "Kombucha",
    "long_description": "Kombucha",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Advanced",
    "duration_min": 21,
    "duration_max": 21,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 2 QUARTS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 128
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "21 to 21 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Scoby",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Quarts Water",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Tea Bags Black Tea Or 2 Tablespoons Loose Tea",
        "quantity_base": 4.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Sugar",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Starter Tea (From Growing Scoby) Or Purchased Raw Living Kombucha",
        "quantity_base": 2.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Scoby, Homegrown Or Purchased",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Bring the water to a rolling boil in a stainless steel pot. Add the tea and",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Pour the sweetened tea into a 2-quart glass canning jar. Carefully pour",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Let ferment at room temperature until a gelatinous-looking mass forms",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Taste the kombucha periodically as it brews. It is ready when it has the",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Transfer the SCOBY to a SCOBY hotel (see here).",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Ladle the kombucha into glass bottles with screw or clamp-style caps.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "The kombucha can be drunk immediately or stored in the refrigerator",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 10,
        "title": "Active Fermentation Check (Day 10)",
        "description": "Active fermentation underway. Check brine level and submerge any floating pieces.",
        "tasks": [
          "Inspect brine submergence",
          "Burp jar if using tight lid",
          "Check aroma & clarity"
        ],
        "what_is_normal": "Cloudy brine, rich fermented aroma",
        "what_is_not_normal": "Dry top layer without brine protection"
      },
      {
        "day": 21,
        "title": "Final Day 21 - Ready & Transfer",
        "description": "Taste test ferment for desired sourness. Once satisfied, transfer container to cold storage/refrigerator.",
        "tasks": [
          "Perform taste & acidity test",
          "Seal container",
          "Transfer to refrigerator"
        ],
        "what_is_normal": "Tangy, delicious fermented flavor",
        "what_is_not_normal": "Slimy texture or off-taste"
      }
    ],
    "completion_guidance": "Transfer Kombucha to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "hard-cider-or-perry",
    "name": "Hard Cider or Perry",
    "short_description": "Hard Cider or Perry",
    "long_description": "Hard Cider or Perry",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Advanced",
    "duration_min": 21,
    "duration_max": 21,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 2\u00bd GALLONS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 130
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "21 to 21 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Yeast",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Initial Fermentation Time: 3 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Secondary Fermentation Time: 4 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Aging Time: 4 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Package Or 2\u00bd Teaspoons Cider, Wine, Or Champagne Yeast",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Gallons Sweet Apple Or Pear Cider, Preservative-Free,",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Preferably Unpasteurized, Plus 1 Cup For Making Starter",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Brown Sugar",
        "quantity_base": 2.0,
        "unit": "pounds",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Sparking Hard Cider",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Make a starter by combining yeast and 1 cup of the cider in a small",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Pour the remaining cider into large clean pots and heat to about 180\u00b0F.",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Pour the cider into a sterilized fermenting bucket and cool to room",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Let ferment at room temperature until the bubbling in the airlock",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Siphon the cider into a second sterilized fermenting bucket, leaving",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "For still cider, siphon the cider into sterilized bottles as described here.",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Store in the refrigerator for up to 1 year.",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "For sparkling hard cider, combine 1 cup water with an additional \u00be",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Pour the mixture into a sterilized fermenting bucket or a bottling",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Siphon the clarified cider on top of the sugar. Stir gently to distribute.",
        "time_min": 5
      },
      {
        "step": 11,
        "title": "Step 11",
        "description": "Siphon the cider into sterilized bottles. Let ferment at room",
        "time_min": 5
      },
      {
        "step": 12,
        "title": "Step 12",
        "description": "Transfer to the refrigerator. Drink within 1 year.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 10,
        "title": "Active Fermentation Check (Day 10)",
        "description": "Active fermentation underway. Check brine level and submerge any floating pieces.",
        "tasks": [
          "Inspect brine submergence",
          "Burp jar if using tight lid",
          "Check aroma & clarity"
        ],
        "what_is_normal": "Cloudy brine, rich fermented aroma",
        "what_is_not_normal": "Dry top layer without brine protection"
      },
      {
        "day": 21,
        "title": "Final Day 21 - Ready & Transfer",
        "description": "Taste test ferment for desired sourness. Once satisfied, transfer container to cold storage/refrigerator.",
        "tasks": [
          "Perform taste & acidity test",
          "Seal container",
          "Transfer to refrigerator"
        ],
        "what_is_normal": "Tangy, delicious fermented flavor",
        "what_is_not_normal": "Slimy texture or off-taste"
      }
    ],
    "completion_guidance": "Transfer Hard Cider or Perry to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "beet-kvass",
    "name": "Beet Kvass",
    "short_description": "Beet Kvass Kvass is an earthy tonic rich with nutrients that have been shown to help the body cleanse itself of toxins and aid digestion. Some studies are investigating",
    "long_description": "Beet Kvass Kvass is an earthy tonic rich with nutrients that have been shown to help the body cleanse itself of toxins and aid digestion. Some studies are investigating",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 2 QUARTS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 132
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Medium Beets",
        "quantity_base": 3.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Filtered Water, Plus More As Needed",
        "quantity_base": 1.0,
        "unit": "quart",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Whey",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": true
      },
      {
        "name": "Sea Salt",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Peel and coarsely chop the beets. Transfer the chopped beets to a 2-",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Combine the water, whey, and salt and pour over the beets. Add more",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Ferment at room temperature until bubbly with a pleasant sour aroma,",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "The kvass can be served immediately.",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Transfer the kvass to clean jars and seal tightly. Store in the",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Beet Kvass to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "honey-mead",
    "name": "Honey Mead",
    "short_description": "Honey Mead",
    "long_description": "Honey Mead",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Advanced",
    "duration_min": 28,
    "duration_max": 28,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 GALLON",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 133
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "28 to 28 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Yeast",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Initial Fermentation Time: 4 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Secondary Fermentation Time: 4 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Aging Time: 1 Week",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Filtered Water, Plus 1 Cup For Softening The Yeast",
        "quantity_base": 1.0,
        "unit": "gallon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Clover Honey",
        "quantity_base": 4.0,
        "unit": "pounds",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Package Or 2\u00bd Teaspoons Mead, Wine, Or Champagne Yeast",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Heat 2 quarts of the water in a large pot to 90\u00b0F. Add the honey. Stir",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Stir in another 2 quarts water and continue to stir occasionally until the",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "While the honey mixture is cooling, stir the yeast together with the",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Transfer the cooled honey mixture to a sterilized 1-gallon fermentation",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Cover with an airlock and ferment until fermentation has nearly",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Siphon the mead into a sterilized secondary fermentation container,",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Siphon the mead into sterilized bottles. Cap the mead tightly.",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Age in the refrigerator at least 1 week. Drink within 1 year.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 14,
        "title": "Active Fermentation Check (Day 14)",
        "description": "Active fermentation underway. Check brine level and submerge any floating pieces.",
        "tasks": [
          "Inspect brine submergence",
          "Burp jar if using tight lid",
          "Check aroma & clarity"
        ],
        "what_is_normal": "Cloudy brine, rich fermented aroma",
        "what_is_not_normal": "Dry top layer without brine protection"
      },
      {
        "day": 28,
        "title": "Final Day 28 - Ready & Transfer",
        "description": "Taste test ferment for desired sourness. Once satisfied, transfer container to cold storage/refrigerator.",
        "tasks": [
          "Perform taste & acidity test",
          "Seal container",
          "Transfer to refrigerator"
        ],
        "what_is_normal": "Tangy, delicious fermented flavor",
        "what_is_not_normal": "Slimy texture or off-taste"
      }
    ],
    "completion_guidance": "Transfer Honey Mead to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "blackberry-mead",
    "name": "Blackberry Mead",
    "short_description": "Blackberry Mead",
    "long_description": "Blackberry Mead",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Advanced",
    "duration_min": 28,
    "duration_max": 28,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 GALLON",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 135
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "28 to 28 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Yeast",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Initial Fermentation Time: 3 To 4 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Secondary Fermentation Time: 3 To 4 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Aging Time: 1 Week",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Ounces Fresh Or Frozen Blackberries",
        "quantity_base": 10.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "",
        "quantity_base": 1.0,
        "unit": "clove",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "-Inch Piece Vanilla Bean, Split Lengthwise",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Filtered Water, Plus 1 Cup For Softening The Yeast",
        "quantity_base": 1.0,
        "unit": "gallon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Clover Honey",
        "quantity_base": 4.0,
        "unit": "pounds",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Package Red Star Premier Cuv\u00e9e Yeast",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "To prepare the blackberries, thaw if frozen and crush with your hands",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Make a sachet by tying the clove and vanilla bean in a piece of rinsed",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Heat 2 quarts of the water in a large pot to 90\u00b0F. Add the honey. Stir",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Stir 2 quarts of the water into the honey mixture and continue to stir",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "While the honey mixture is cooling, stir the yeast together with the",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Transfer the cooled honey mixture to a sterilized 1-gallon fermentation",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Cover with an airlock and ferment until fermentation has nearly",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Taste the mead during this time. Remove the vanilla and clove when",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Siphon the mead into a sterilized secondary fermentation container,",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Siphon the mead into sterilized bottles and cap tightly.",
        "time_min": 5
      },
      {
        "step": 11,
        "title": "Step 11",
        "description": "Let the mead age in the refrigerator for at least 1 week. Drink it within",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 14,
        "title": "Active Fermentation Check (Day 14)",
        "description": "Active fermentation underway. Check brine level and submerge any floating pieces.",
        "tasks": [
          "Inspect brine submergence",
          "Burp jar if using tight lid",
          "Check aroma & clarity"
        ],
        "what_is_normal": "Cloudy brine, rich fermented aroma",
        "what_is_not_normal": "Dry top layer without brine protection"
      },
      {
        "day": 28,
        "title": "Final Day 28 - Ready & Transfer",
        "description": "Taste test ferment for desired sourness. Once satisfied, transfer container to cold storage/refrigerator.",
        "tasks": [
          "Perform taste & acidity test",
          "Seal container",
          "Transfer to refrigerator"
        ],
        "what_is_normal": "Tangy, delicious fermented flavor",
        "what_is_not_normal": "Slimy texture or off-taste"
      }
    ],
    "completion_guidance": "Transfer Blackberry Mead to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "root-beer",
    "name": "Root Beer",
    "short_description": "Root Beer",
    "long_description": "Root Beer",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 2,
    "duration_max": 2,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 2\u00bd QUARTS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 137
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "2 to 2 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Ginger Bug",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Quarts Filtered Water",
        "quantity_base": 3.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Dried Sassafras Root Bark",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Wintergreen Leaf",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Dried Sarsaparilla Root",
        "quantity_base": 0.25,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Piece Licorice Root, 5 Inches Long, Broken Into Pieces",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Vanilla Bean, Split",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Cinnamon Stick",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Whole Star Anise",
        "quantity_base": 3.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Chopped Fresh Ginger",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Dried Dandelion Root",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Dried Burdock Root",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Crumbled Hops Flowers",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Dried Birch Bark",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Dried Wild Cherry Tree Bark",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Dried Juniper Berries",
        "quantity_base": 1.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Strips Orange Zest, 2 To 3 Inches Long, \u00bc Inch Wide",
        "quantity_base": 2.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Unrefined Cane Sugar",
        "quantity_base": 1.0,
        "unit": "cups",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Molasses",
        "quantity_base": 1.0,
        "unit": "tablespoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Strained Ginger Bug",
        "quantity_base": 0.5,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "To make the extract, bring 2\u00bd quarts of the water to a boil in a large",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Add the sassafras root bark, wintergreen leaf, sarsaparilla root, licorice",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Simmer uncovered until the flavors are extracted, 20 minutes. Add the",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Remove from the heat and strain through a cheesecloth-lined strainer",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Stir in the ginger bug and transfer the root beer to sterilized bottles.",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Taste a sample from one of the bottles. If you like the flavor, stop the",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Transfer the root beer to the refrigerator and drink within 3 months.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Root Beer to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "basic-beer",
    "name": "Basic Beer",
    "short_description": "Basic Beer",
    "long_description": "Basic Beer",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Intermediate",
    "duration_min": 14,
    "duration_max": 14,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 5 GALLONS (ABOUT FIFTY 12-OUNCE BOTTLES)",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 139
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "14 to 14 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Up to 6 to 12 months in refrigerator",
    "ingredients": [
      {
        "name": "Yeast",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Initial Fermentation Time: 1 To 2 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Secondary Fermentation Time: 2 To 4 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Aging Time: 1 Week",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Unhopped Pale Malt Extract",
        "quantity_base": 6.0,
        "unit": "pounds",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Ounces Hop Pellets",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Package Or 2\u00bd Teaspoons Liquid Yeast",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Corn Sugar Or Other Priming Sugar",
        "quantity_base": 1.0,
        "unit": "cup",
        "scaling_type": "volume",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "To make the wort, place the malt extract and hops in a large pot. Add",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Siphon or transfer the wort to the plastic bucket or carboy. Add the",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Ferment at room temperature, 60 to 65\u00b0F, until fully fermented, 1 to 2",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Siphon the beer into a sanitized container. Add the corn sugar and stir",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "Age the beer in the refrigerator for at least 2 and up to 4 weeks before",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 7,
        "title": "Active Fermentation Check (Day 7)",
        "description": "Active fermentation underway. Check brine level and submerge any floating pieces.",
        "tasks": [
          "Inspect brine submergence",
          "Burp jar if using tight lid",
          "Check aroma & clarity"
        ],
        "what_is_normal": "Cloudy brine, rich fermented aroma",
        "what_is_not_normal": "Dry top layer without brine protection"
      },
      {
        "day": 14,
        "title": "Final Day 14 - Ready & Transfer",
        "description": "Taste test ferment for desired sourness. Once satisfied, transfer container to cold storage/refrigerator.",
        "tasks": [
          "Perform taste & acidity test",
          "Seal container",
          "Transfer to refrigerator"
        ],
        "what_is_normal": "Tangy, delicious fermented flavor",
        "what_is_not_normal": "Slimy texture or off-taste"
      }
    ],
    "completion_guidance": "Transfer Basic Beer to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Up to 6 to 12 months in refrigerator"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "green-malt-malted-grain",
    "name": "Green Malt (Malted Grain)",
    "short_description": "Green Malt (Malted Grain) This process requires plenty of time, plenty of space, and the ability to control temperatures during the process of sprouting the grain. You could break the",
    "long_description": "Green Malt (Malted Grain) This process requires plenty of time, plenty of space, and the ability to control temperatures during the process of sprouting the grain. You could break the",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 7,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 15 POUNDS",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 141
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "3 to 7 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Follow recipe guidance",
    "ingredients": [
      {
        "name": "Barley, Wheat, Oats, Or Corn (Whole Berries)",
        "quantity_base": 10.0,
        "unit": "pounds",
        "scaling_type": "weight",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Wash the grain in clean water to remove the chaff, which will mostly",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Soak for 8 hours, drain, and let stand for 8 hours without water. After 8",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Spread the soaked grain over paper towels in large baking pans and",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Let the grain sprout at room temperature until the main shoot is the",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "To dry the malted grain, see the recipe for Pale Malt.",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Green Malt (Malted Grain) to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Follow recipe guidance"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "pale-malt",
    "name": "Pale Malt",
    "short_description": "Pale Malt",
    "long_description": "Pale Malt",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Beginner",
    "duration_min": 3,
    "duration_max": 3,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "1 Batch",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 142
    },
    "requires_burp": false,
    "burp_frequency": "",
    "burp_instructions": "",
    "venting_warning": "",
    "requires_airlock": true,
    "airlock_instructions": "AIRLOCK ACTIVE: Gas is escaping automatically through water-filled airlock. Do not burp.",
    "ambient_storage_duration": "3 to 3 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Follow recipe guidance",
    "ingredients": [
      {
        "name": "Dry In Oven",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Drying Time: Up To 3 Days",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Green Malt",
        "quantity_base": 15.0,
        "unit": "pounds",
        "scaling_type": "weight",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Spread the green malt on baking sheets; the layers should not be more",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Barley requires final drying in the oven at a temperature of 140 to",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "While the malt is drying, turn it every 30 minutes. To dry the malt",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 1,
        "title": "Fermentation Day 1",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 2,
        "title": "Fermentation Day 2",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      },
      {
        "day": 3,
        "title": "Fermentation Day 3",
        "description": "Store away from direct sunlight at room temperature. Check for bubble formation and tangy aroma.",
        "tasks": [
          "Inspect gas bubbles",
          "Ensure ingredients stay submerged",
          "Check aroma & room temp"
        ],
        "what_is_normal": "Small carbonation bubbles forming, pleasantly sour aroma",
        "what_is_not_normal": "Foul putrid odor or fuzzy surface mold"
      }
    ],
    "completion_guidance": "Transfer Pale Malt to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Follow recipe guidance"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  },
  {
    "id": "basic-wine",
    "name": "Basic Wine",
    "short_description": "Basic Wine",
    "long_description": "Basic Wine",
    "category": "Beverages",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "fermentingImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "finishedImage": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "difficulty": "Advanced",
    "duration_min": 180,
    "duration_max": 180,
    "prep_time_min": 15,
    "active_work_time_min": 15,
    "expected_yield": "MAKES 1 GALLON",
    "fermentation_type": "Lacto-Ferment",
    "fermentation_temperature": "Room Temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "source_reference": {
      "book": "Fermentation for Beginners",
      "chapter": "Chapter 12: Alcoholic and Nonalcoholic Beverages",
      "page": 143
    },
    "requires_burp": true,
    "burp_frequency": "Vent daily / when pressure builds",
    "burp_instructions": "Gently open flip-top cap to release excess CO2 gas, then reseal tightly.",
    "venting_warning": "Warning: Carbonated beverages build intense pressure. Vent daily to prevent bottle stress.",
    "requires_airlock": false,
    "airlock_instructions": "",
    "ambient_storage_duration": "180 to 180 days at room temperature (68\u201372\u00b0F / 20\u201322\u00b0C)",
    "refrigerated_storage_duration": "Follow recipe guidance",
    "ingredients": [
      {
        "name": "Yeast",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Initial Fermentation Time: Up To 8 Weeks",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Secondary Fermentation Time: Up To 3 Months",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Aging Time: 6 Months For White Wine And Up To 1 Year For Red Wine",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Wine Grapes",
        "quantity_base": 18.0,
        "unit": "pounds",
        "scaling_type": "weight",
        "is_optional": false
      },
      {
        "name": "Powdered Potassium Bisulfite Or 1 Campden Tablet, Crushed",
        "quantity_base": 1.0,
        "unit": "teaspoon",
        "scaling_type": "volume",
        "is_optional": false
      },
      {
        "name": "Package Or \u00bd Teaspoon Wine Yeast (1 Package Will Ferment 1 To 6 Gallons Of",
        "quantity_base": 0.5,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Wine)",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      },
      {
        "name": "Sugar As Needed",
        "quantity_base": 1.0,
        "unit": "item",
        "scaling_type": "count",
        "is_optional": false
      }
    ],
    "equipment": [
      {
        "name": "Glass Canning Jar or Bottle",
        "category": "container",
        "description": "Clean glass vessel (1-quart or 1-pint as specified in recipe).",
        "why_used": "Provides a non-reactive, airtight vessel for fermentation."
      },
      {
        "name": "Fermentation Weight or Mallet",
        "category": "required",
        "description": "Glass weight or wooden pounder to pack ingredients and keep them submerged.",
        "why_used": "Prevents exposure to oxygen and deters surface mold formation."
      }
    ],
    "preparation_steps": [
      {
        "step": 1,
        "title": "Step 1",
        "description": "Sort the grapes, discarding any shriveled or moldy ones. Remove the",
        "time_min": 5
      },
      {
        "step": 2,
        "title": "Step 2",
        "description": "Crush the grapes to release the juice (called must) into the primary",
        "time_min": 5
      },
      {
        "step": 3,
        "title": "Step 3",
        "description": "Insert the hydrometer into the must. If it reads less than 1.010,",
        "time_min": 5
      },
      {
        "step": 4,
        "title": "Step 4",
        "description": "Add the powdered potassium bisulfite, crushed and dissolved in a little",
        "time_min": 5
      },
      {
        "step": 5,
        "title": "Step 5",
        "description": "After 24 hours, add the wine yeast by sprinkling it over the surface of",
        "time_min": 5
      },
      {
        "step": 6,
        "title": "Step 6",
        "description": "Over the course of days, fermentation will cause a froth to develop on",
        "time_min": 5
      },
      {
        "step": 7,
        "title": "Step 7",
        "description": "Siphon the must through a funnel into sanitized glass secondary",
        "time_min": 5
      },
      {
        "step": 8,
        "title": "Step 8",
        "description": "Siphon the wine into a clean glass secondary fermentation container.",
        "time_min": 5
      },
      {
        "step": 9,
        "title": "Step 9",
        "description": "Siphon the wine into bottles, leaving space for the cork plus about \u00bd",
        "time_min": 5
      },
      {
        "step": 10,
        "title": "Step 10",
        "description": "Store the wine upright for 3 days, then store the bottles on their sides.",
        "time_min": 5
      },
      {
        "step": 11,
        "title": "Step 11",
        "description": "Let the wine age to complete its flavor development. Red wine is",
        "time_min": 5
      }
    ],
    "fermentation_timeline": [
      {
        "day": 0,
        "title": "Preparation & Pack Jar",
        "description": "Sanitize equipment, combine ingredients, pack firmly into clean glass jar, and ensure liquid submerges solids.",
        "tasks": [
          "Sanitize jar & equipment",
          "Prepare & chop ingredients",
          "Pack firmly into jar",
          "Submerge under brine",
          "Seal lid / airlock"
        ],
        "what_is_normal": "Freshly packed ingredients with brine visible over top",
        "what_is_not_normal": "Ingredients exposed above liquid surface"
      },
      {
        "day": 90,
        "title": "Active Fermentation Check (Day 90)",
        "description": "Active fermentation underway. Check brine level and submerge any floating pieces.",
        "tasks": [
          "Inspect brine submergence",
          "Burp jar if using tight lid",
          "Check aroma & clarity"
        ],
        "what_is_normal": "Cloudy brine, rich fermented aroma",
        "what_is_not_normal": "Dry top layer without brine protection"
      },
      {
        "day": 180,
        "title": "Final Day 180 - Ready & Transfer",
        "description": "Taste test ferment for desired sourness. Once satisfied, transfer container to cold storage/refrigerator.",
        "tasks": [
          "Perform taste & acidity test",
          "Seal container",
          "Transfer to refrigerator"
        ],
        "what_is_normal": "Tangy, delicious fermented flavor",
        "what_is_not_normal": "Slimy texture or off-taste"
      }
    ],
    "completion_guidance": "Transfer Basic Wine to cold storage/refrigerator once desired sourness is reached.",
    "ready_checklist": [
      "Pleasant sour/tangy aroma",
      "Brine remains clear to slightly cloudy with visible bubble activity",
      "Desirable crunch/texture achieved",
      "pH is sufficiently acidic (below 4.6)"
    ],
    "storage_instructions": {
      "container": "Covered glass jars",
      "location": "Refrigerated (2\u20134\u00b0C / 35\u201340\u00b0F)",
      "duration": "Follow recipe guidance"
    },
    "safety_notes": [
      "Always keep vegetables submerged below brine level.",
      "Maintain clean, sanitized utensils and glass jars.",
      "If putrid smell, dark slime, or fuzzy mold appears, discard batch."
    ],
    "common_mistakes": [
      {
        "mistake": "Not using enough salt or brine",
        "consequence": "Soft or spoiled vegetables due to unwanted bacterial growth",
        "prevention": "Follow exact salt ratios from recipe source"
      }
    ],
    "troubleshooting": [
      {
        "question": "How do I know if my ferment is working?",
        "answer": "Look for small carbonation bubbles rising to the top and a pleasingly tangy sour smell after 24-48 hours."
      }
    ],
    "tips": [
      "Use filtered water to avoid chlorine inhibiting lactic acid bacteria."
    ],
    "tags": [
      "beverages",
      "lacto-ferment",
      "pdf-guide",
      "probiotic"
    ]
  }
];
