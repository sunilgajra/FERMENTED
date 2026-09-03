import type { Batch, JournalEntryItem, InAppNotification } from '../types/ferment';

export const INITIAL_BATCHES: Batch[] = [
  {
    id: 'batch-004',
    batch_number: 4,
    recipe_id: 'recipe-orange-drink',
    recipe_name: 'Orange Fermented Drink',
    batch_name: 'Orange Ferment #004',
    category: 'Fermented Drinks',
    image: '/src/assets/orange_ferment_fermenting.png',
    referencing_fermenting_image: '/src/assets/orange_ferment_fermenting.png',
    referencing_finished_image: '/src/assets/orange_ferment_finished.png',
    start_date: '2026-08-24',
    expected_end_date: '2026-08-31',
    total_days: 7,
    batch_size: '500 ml',
    status: 'active',
    notes: 'Using fresh organic Valencia oranges, extra ginger slices, and fresh garden mint.',
    before_photo: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    progress_photos: [
      { day: 0, date: '2026-08-24', url: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80', caption: 'Initial mix in 1L jar with airlock attached.' },
      { day: 1, date: '2026-08-25', url: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80', caption: 'Tiny bubbles starting to form around ginger slices.' },
      { day: 2, date: '2026-08-26', url: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80', caption: 'Aroma turning delightfully citrusy & tangy.' },
      { day: 3, date: '2026-08-27', url: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80', caption: 'Active effervescence and bright citrus scent today!' }
    ],
    daily_entries: [
      {
        id: 'entry-004-0',
        batch_id: 'batch-004',
        day: 0,
        date: '2026-08-24',
        photo: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
        note: 'Started batch today! Mixed 500ml juice with ginger and mint. Airlock is set up.',
        tasks_completed: ['Sanitize equipment', 'Mix ingredients', 'Take starting photo', 'Store in cool dark spot'],
        aroma: 'Fresh sweet orange with mint',
        activity_level: 'none',
        created_at: '2026-08-24T10:00:00Z'
      },
      {
        id: 'entry-004-1',
        batch_id: 'batch-004',
        day: 1,
        date: '2026-08-25',
        photo: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80',
        note: 'Checked airlock water level. Tiny carbonation bubbles visible around ginger pieces.',
        tasks_completed: ['Check airlock water level', 'Observe bubble formation'],
        aroma: 'Subtle yeast and orange',
        activity_level: 'low',
        created_at: '2026-08-25T18:00:00Z'
      },
      {
        id: 'entry-004-2',
        batch_id: 'batch-004',
        day: 2,
        date: '2026-08-26',
        photo: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
        note: 'Swirled jar gently. Beautiful effervescence rising to the top. Aroma is becoming pleasantly tart!',
        tasks_completed: ['Swirl jar gently', 'Check for effervescence', 'Take progress photo'],
        aroma: 'Tangy fermented citrus',
        activity_level: 'moderate',
        created_at: '2026-08-26T18:00:00Z'
      }
    ],
    completed_tasks: {
      0: ['Sanitize equipment', 'Mix ingredients', 'Take starting photo', 'Store in cool dark spot'],
      1: ['Check airlock water level', 'Observe bubble formation'],
      2: ['Swirl jar gently', 'Check for effervescence', 'Take progress photo']
    },
    reminder_settings: {
      enabled: true,
      time: '18:00',
      frequency: 'daily'
    },
    user_modifications: 'Added 5g extra ginger for a spicier ginger kick.',
    created_at: '2026-08-24T10:00:00Z'
  },
  {
    id: 'batch-002',
    batch_number: 2,
    recipe_id: 'recipe-ginger-bug',
    recipe_name: 'Wild Ginger Bug Starter',
    batch_name: 'Ginger Bug #002',
    category: 'Fermented Drinks',
    image: '/src/assets/ginger_bug_fermenting.png',
    referencing_fermenting_image: '/src/assets/ginger_bug_fermenting.png',
    referencing_finished_image: '/src/assets/ginger_bug_finished.png',
    start_date: '2026-08-22',
    expected_end_date: '2026-08-29',
    total_days: 7,
    batch_size: '500 ml',
    status: 'active',
    notes: 'Feeding daily at 7 PM with organic unpeeled ginger and raw cane sugar.',
    before_photo: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    progress_photos: [
      { day: 0, date: '2026-08-22', url: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80', caption: 'Day 0 start' },
      { day: 3, date: '2026-08-25', url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', caption: 'Vibrant foaming when stirred!' }
    ],
    daily_entries: [],
    completed_tasks: {
      0: ['Mix initial ingredients', 'Cover with cloth'],
      1: ['Feed ginger bug', 'Stir for 1 min'],
      2: ['Feed ginger bug', 'Check for bubbles'],
      3: ['Feed ginger bug', 'Record aroma'],
      4: ['Feed ginger bug', 'Check foam layer']
    },
    reminder_settings: { enabled: true, time: '19:00', frequency: 'daily' },
    created_at: '2026-08-22T10:00:00Z'
  },
  {
    id: 'batch-018',
    batch_number: 1,
    recipe_id: 'recipe-black-garlic',
    recipe_name: 'Slow Fermented Black Garlic',
    batch_name: 'Black Garlic #001',
    category: 'Condiments',
    image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=800&q=80',
    referencing_fermenting_image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=800&q=80',
    referencing_finished_image: 'https://images.unsplash.com/photo-1596097397804-39d5a1cf5ae0?auto=format&fit=crop&w=800&q=80',
    start_date: '2026-08-09',
    expected_end_date: '2026-09-08',
    total_days: 30,
    batch_size: '6 bulbs',
    status: 'active',
    notes: 'Fermenting in electric slow warm cooker at steady 60°C.',
    before_photo: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=800&q=80',
    progress_photos: [
      { day: 0, date: '2026-08-09', url: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=800&q=80', caption: 'Garlic wrapped in foil' },
      { day: 14, date: '2026-08-23', url: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80', caption: 'Cloves turning rich dark mahogany brown' }
    ],
    daily_entries: [],
    completed_tasks: {
      0: ['Wrap garlic', 'Set warm cycle', 'Take starting photo'],
      7: ['Check humidity level'],
      14: ['Check softness', 'Take photo']
    },
    reminder_settings: { enabled: true, time: '12:00', frequency: 'milestones_only' },
    created_at: '2026-08-09T10:00:00Z'
  },
  {
    id: 'batch-003',
    batch_number: 1,
    recipe_id: 'recipe-kimchi',
    recipe_name: 'Authentic Napa Cabbage Kimchi',
    batch_name: 'Kimchi Batch #001',
    category: 'Vegetables',
    image: '/src/assets/kimchi_fermenting.png',
    referencing_fermenting_image: '/src/assets/kimchi_fermenting.png',
    referencing_finished_image: '/src/assets/kimchi_finished.png',
    start_date: '2026-08-25',
    expected_end_date: '2026-08-29',
    total_days: 4,
    batch_size: '1.5 kg',
    status: 'active',
    notes: 'Extra gochugaru flakes and daikon radish matchsticks.',
    before_photo: 'https://images.unsplash.com/photo-1583224964978-2257b960c3d3?auto=format&fit=crop&w=800&q=80',
    progress_photos: [
      { day: 0, date: '2026-08-25', url: 'https://images.unsplash.com/photo-1583224964978-2257b960c3d3?auto=format&fit=crop&w=800&q=80', caption: 'Freshly packed red kimchi jar' }
    ],
    daily_entries: [],
    completed_tasks: {
      0: ['Salt & rinse cabbage', 'Make chili paste', 'Pack jar', 'Take photo'],
      1: ['Press down with clean spoon to release trapped bubbles']
    },
    reminder_settings: { enabled: true, time: '17:00', frequency: 'daily' },
    created_at: '2026-08-25T10:00:00Z'
  },

  // COMPLETED BATCHES
  {
    id: 'batch-comp-001',
    batch_number: 1,
    recipe_id: 'recipe-sauerkraut',
    recipe_name: 'Traditional Caraway Sauerkraut',
    batch_name: 'Sauerkraut Classic #001',
    category: 'Vegetables',
    image: '/src/assets/sauerkraut_fermenting.png',
    referencing_fermenting_image: '/src/assets/sauerkraut_fermenting.png',
    referencing_finished_image: '/src/assets/sauerkraut_finished.png',
    start_date: '2026-07-20',
    expected_end_date: '2026-08-10',
    actual_end_date: '2026-08-10',
    total_days: 21,
    batch_size: '1 kg',
    status: 'completed',
    notes: 'Fermented for 3 full weeks. Incredible crisp snap and clean sour depth!',
    before_photo: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80',
    after_photo: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    progress_photos: [
      { day: 0, date: '2026-07-20', url: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80', caption: 'Fresh green shredded cabbage salted in jar.' },
      { day: 7, date: '2026-07-27', url: 'https://images.unsplash.com/photo-1598170845058-12ef4a45753b?auto=format&fit=crop&w=800&q=80', caption: 'Active brine bubbling and pale yellowing.' },
      { day: 21, date: '2026-08-10', url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', caption: 'Finished gold translucent caraway sauerkraut!' }
    ],
    daily_entries: [],
    completed_tasks: {},
    reminder_settings: { enabled: false, time: '18:00', frequency: 'daily' },
    ratings: {
      taste: 5,
      aroma: 5,
      appearance: 4,
      texture: 5,
      overall: 4.8,
      would_make_again: 'Yes',
      final_notes: 'Perfect crunch and balance! Next time add a pinch of garlic cloves for extra complexity.'
    },
    user_modifications: 'Added 1 tsp caraway seeds and extra 2g sea salt.',
    created_at: '2026-07-20T10:00:00Z'
  },
  {
    id: 'batch-comp-002',
    batch_number: 2,
    recipe_id: 'recipe-kombucha',
    recipe_name: 'Classic Black Tea Kombucha',
    batch_name: 'Kombucha Lavender #002',
    category: 'Fermented Drinks',
    image: '/src/assets/kombucha_fermenting.png',
    referencing_fermenting_image: '/src/assets/kombucha_fermenting.png',
    referencing_finished_image: '/src/assets/kombucha_finished.png',
    start_date: '2026-08-01',
    expected_end_date: '2026-08-11',
    actual_end_date: '2026-08-11',
    total_days: 10,
    batch_size: '1 L',
    status: 'completed',
    notes: 'Flavored second fermentation with culinary dried lavender flowers & blueberries.',
    before_photo: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    after_photo: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    progress_photos: [
      { day: 0, date: '2026-08-01', url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80', caption: 'Sweet tea with SCOBY floating.' },
      { day: 10, date: '2026-08-11', url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', caption: 'Chilled floral purple kombucha!' }
    ],
    daily_entries: [],
    completed_tasks: {},
    reminder_settings: { enabled: false, time: '18:00', frequency: 'daily' },
    ratings: {
      taste: 4,
      aroma: 5,
      appearance: 5,
      texture: 4,
      overall: 4.5,
      would_make_again: 'Yes',
      final_notes: 'Gorgeous purple color from blueberries and subtle soothing lavender fragrance.'
    },
    user_modifications: 'Added 1 tsp dried lavender & 5 crushed blueberries in 2nd ferment.',
    created_at: '2026-08-01T10:00:00Z'
  }
];

export const INITIAL_JOURNAL_ENTRIES: JournalEntryItem[] = [
  {
    id: 'j-001',
    batch_id: 'batch-004',
    batch_name: 'Orange Ferment #004',
    recipe_name: 'Orange Fermented Drink',
    category: 'Fermented Drinks',
    day: 3,
    date: '27 Aug 2026',
    photo: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    note: 'Active effervescence and bright citrus scent today! Bubbles rising rapidly around ginger.',
    completed_tasks: ['Check fermentation activity', 'Check aroma', 'Take progress photo'],
    batch_image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'j-002',
    batch_id: 'batch-004',
    batch_name: 'Orange Ferment #004',
    recipe_name: 'Orange Fermented Drink',
    category: 'Fermented Drinks',
    day: 2,
    date: '26 Aug 2026',
    photo: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    note: 'Swirled jar gently. Beautiful effervescence rising to the top. Aroma becoming pleasantly tart!',
    completed_tasks: ['Swirl jar gently', 'Check for effervescence', 'Take progress photo'],
    batch_image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'j-003',
    batch_id: 'batch-002',
    batch_name: 'Ginger Bug #002',
    recipe_name: 'Wild Ginger Bug Starter',
    category: 'Fermented Drinks',
    day: 4,
    date: '26 Aug 2026',
    photo: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    note: 'Active foaming layer when stirred. Smells spicy, sweet, and yeasty!',
    completed_tasks: ['Feed ginger bug', 'Check foam layer'],
    batch_image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'j-004',
    batch_id: 'batch-comp-001',
    batch_name: 'Sauerkraut Classic #001',
    recipe_name: 'Traditional Caraway Sauerkraut',
    category: 'Vegetables',
    day: 21,
    date: '10 Aug 2026',
    photo: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    note: 'Final bottling day! Super sour and crunchy. Transferred to fridge.',
    completed_tasks: ['Final taste rating', 'Transfer to fridge'],
    batch_image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_NOTIFICATIONS: InAppNotification[] = [
  {
    id: 'notif-1',
    batch_id: 'batch-004',
    title: '🍊 Orange Ferment #004',
    message: 'Time to check fermentation activity and record aroma notes.',
    date: 'Today, 6:00 PM',
    read: false,
    type: 'reminder'
  },
  {
    id: 'notif-2',
    batch_id: 'batch-002',
    title: '🫚 Ginger Bug #002',
    message: 'Don’t forget today’s 1 tbsp ginger + 1 tbsp sugar feeding.',
    date: 'Today, 7:00 PM',
    read: false,
    type: 'reminder'
  },
  {
    id: 'notif-3',
    batch_id: 'batch-003',
    title: '🌶️ Kimchi Batch #001',
    message: 'Press down with clean spoon to release trapped bubbles.',
    date: 'Yesterday',
    read: true,
    type: 'milestone'
  }
];
