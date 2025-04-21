'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating course descriptions based on a course title.
 *
 * - generateCourseDescription - A function that uses the generateCourseDescriptionFlow to create a course description.
 * - GenerateCourseDescriptionInput - The input type for the generateCourseDescription function.
 * - GenerateCourseDescriptionOutput - The return type for the generateCourseDescription function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateCourseDescriptionInputSchema = z.object({
  courseName: z.string().describe('The name of the course.'),
});
export type GenerateCourseDescriptionInput = z.infer<
  typeof GenerateCourseDescriptionInputSchema
>;

const GenerateCourseDescriptionOutputSchema = z.object({
  courseDescription: z.string().describe('The generated description of the course.'),
});
export type GenerateCourseDescriptionOutput = z.infer<
  typeof GenerateCourseDescriptionOutputSchema
>;

export async function generateCourseDescription(
  input: GenerateCourseDescriptionInput
): Promise<GenerateCourseDescriptionOutput> {
  return generateCourseDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCourseDescriptionPrompt',
  input: {
    schema: z.object({
      courseName: z.string().describe('The name of the course.'),
    }),
  },
  output: {
    schema: z.object({
      courseDescription: z.string().describe('The generated description of the course.'),
    }),
  },
  prompt: `You are an experienced curriculum developer.

  Generate a compelling and informative description for the following course:

  Course Name: {{{courseName}}}
  Description:`,
});

const generateCourseDescriptionFlow = ai.defineFlow<
  typeof GenerateCourseDescriptionInputSchema,
  typeof GenerateCourseDescriptionOutputSchema
>({
  name: 'generateCourseDescriptionFlow',
  inputSchema: GenerateCourseDescriptionInputSchema,
  outputSchema: GenerateCourseDescriptionOutputSchema,
},
async input => {
  const {output} = await prompt(input);
  return output!;
});

