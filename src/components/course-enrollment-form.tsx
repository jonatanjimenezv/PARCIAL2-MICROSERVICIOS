'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CourseEnrollmentForm() {
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Inscribiendo al estudiante ${studentName} en el curso: ${course}`);
    setStudentName('');
    setCourse('');
  };

  return (
    <div>
      <Link href="/" className="mb-4 inline-block">
        <Button variant="outline">Volver al Menú</Button>
      </Link>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="studentName">Nombre del Estudiante:</Label>
          <Input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Ingrese el nombre del estudiante"
          />
        </div>

        <div>
          <Label>Curso:</Label>
          <Select onValueChange={setCourse}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Seleccione un curso" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="math">Matemáticas</SelectItem>
              <SelectItem value="science">Ciencia</SelectItem>
              <SelectItem value="english">Inglés</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit">Inscribir Estudiante</Button>
      </form>
    </div>
  );
}

