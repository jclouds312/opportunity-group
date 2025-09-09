// src/lib/actions.ts
'use server';

import {
  generatePersonalizedRecommendations as originalGeneratePersonalizedRecommendations,
  type PersonalizedRecommendationsInput,
  type PersonalizedRecommendationsOutput,
} from '@/ai/flows/personalized-investment-recommendations';

export async function generatePersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return originalGeneratePersonalizedRecommendations(input);
}
