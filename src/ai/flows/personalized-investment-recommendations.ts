// src/ai/flows/personalized-investment-recommendations.ts
'use server';

/**
 * @fileOverview Generates personalized investment recommendations for a user based on their profile, investment interests, and past purchases.
 *
 * - generatePersonalizedRecommendations - A function that generates personalized investment recommendations.
 * - PersonalizedRecommendationsInput - The input type for the generatePersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the generatePersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('The user profile, including investment interests.'),
  pastPurchases: z.string().describe('The user past purchases.'),
});

export type PersonalizedRecommendationsInput =
  z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('Personalized investment recommendations for the user.'),
});

export type PersonalizedRecommendationsOutput =
  z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function generatePersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert financial advisor providing personalized investment recommendations to users.

  Based on the user's profile, investment interests, and past purchases, provide tailored investment recommendations.

  User Profile: {{{userProfile}}}
  Past Purchases: {{{pastPurchases}}}

  Provide a list of investment opportunities with a brief explanation of why each one is a good fit for the user.
  Format the response as a list. The response must be in Spanish.
  `, // Ensure the prompt is properly formatted using Handlebars syntax
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
