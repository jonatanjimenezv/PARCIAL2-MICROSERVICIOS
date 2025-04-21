
'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { generateCourseDescription } from '@/ai/flows/generate-course-description';

export function AICourseDescriptionGenerator() {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateDescription = async () => {
    setIsLoading(true);
    try {
      const result = await generateCourseDescription({ courseName });
      setDescription(result.courseDescription);
    } catch (error) {
      console.error("Failed to generate description:", error);
      setDescription("Failed to generate description. Por favor, inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Label htmlFor="courseName">Nombre del Curso:</Label>
        <Input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Ingrese el nombre del curso"
        />
      </div>

      <Button onClick={handleGenerateDescription} disabled={isLoading}>
        {isLoading ? 'Generando...' : 'Generar Descripción'}
      </Button>

      <div>
        <Label htmlFor="description">Descripción del Curso:</Label>
        <Textarea
          id="description"
          value={description}
          readOnly
          placeholder="La descripción generada aparecerá aquí"
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}

