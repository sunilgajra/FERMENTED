import { useState, useEffect } from 'react';
import type { Recipe } from '../types/ferment';

export function calculateCurrentDay(startDateStr: string): number {
  const start = new Date(startDateStr);
  const now = new Date();
  start.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  const diffTime = Math.max(0, now.getTime() - start.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function calculateProgressPercentage(startDateStr: string, totalDays: number): number {
  if (totalDays <= 0) return 100;
  const currentDay = calculateCurrentDay(startDateStr);
  const percent = Math.min(100, Math.round((currentDay / totalDays) * 100));
  return percent;
}

export function formatDate(dateStr?: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

export function getTodayStep(recipe: Recipe, currentDay: number) {
  if (!recipe || !recipe.fermentation_timeline.length) return null;
  const exact = recipe.fermentation_timeline.find(s => s.day === currentDay);
  if (exact) return exact;

  const sorted = [...recipe.fermentation_timeline].sort((a, b) => a.day - b.day);
  let latest = sorted[0];
  for (const step of sorted) {
    if (step.day <= currentDay) {
      latest = step;
    }
  }
  return latest;
}

export function getBatchMultiplier(batchSizeStr: string): number {
  const normalized = batchSizeStr.toLowerCase().trim();
  if (normalized.includes('1 l') || normalized.includes('1000') || normalized.includes('quart')) return 2;
  if (normalized.includes('2 l') || normalized.includes('2000')) return 4;
  if (normalized.includes('5 l') || normalized.includes('5000') || normalized.includes('gallon')) return 10;
  return 1; // Default 500 ml base
}

export function formatScaledQuantity(baseQty: number, scalingType: 'volume' | 'weight' | 'count' | 'fixed', batchSizeStr: string): string {
  if (scalingType === 'fixed') return `${baseQty}`;
  const multiplier = getBatchMultiplier(batchSizeStr);
  const scaled = baseQty * multiplier;
  if (Number.isInteger(scaled)) return `${scaled}`;
  return `${parseFloat(scaled.toFixed(1))}`;
}

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
