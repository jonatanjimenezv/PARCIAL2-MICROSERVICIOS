'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

interface Course {
  id: string;
  name: string;
  description: string;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export function CourseCreationForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCourse: Course = {
      id: generateId(),
      name: name,
      description: description,
    };

    // Retrieve existing courses from local storage or initialize an empty array
    const storedCourses = localStorage.getItem('courses');
    const existingCourses: Course[] = storedCourses ? JSON.parse(storedCourses) : [];

    // Add the new course to the array
    const updatedCourses = [...existingCourses, newCourse];

    // Store the updated array back in local storage
    localStorage.setItem('courses', JSON.stringify(updatedCourses));

    toast({
      title: "Curso creado",
      description: `Se ha creado el curso ${name}.`,
    });

    setName('');
    setDescription('');
  };

  return (
    <div>
      <Link href="/" className="mb-4 inline-block">
        <Button variant="outline">Volver al Menú</Button>
      </Link>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="name">Nombre del Curso:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese el nombre del curso"
          />
        </div>

        <div>
          <Label htmlFor="description">Descripción del Curso:</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ingrese la descripción del curso"
            className="min-h-[100px]"
          />
        </div>

        <Button type="submit">Crear Curso</Button>
      </form>
    </div>
  );
}
