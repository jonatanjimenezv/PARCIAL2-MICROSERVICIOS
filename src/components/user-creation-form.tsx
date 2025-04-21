'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function UserCreationForm() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Creando usuario con nombre: ${name} y rol: ${role}`);
    setName('');
    setRole('student');
  };

  return (
    <div>
      <Link href="/" className="mb-4 inline-block">
        <Button variant="outline">Volver al Menú</Button>
      </Link>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="name">Nombre:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese el nombre"
          />
        </div>

        <div>
          <Label>Rol:</Label>
          <RadioGroup defaultValue="student" className="flex gap-2" onValueChange={value => setRole(value)}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="student" id="student" />
              <Label htmlFor="student">Estudiante</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="teacher" id="teacher" />
              <Label htmlFor="teacher">Profesor</Label>
            </div>
          </RadioGroup>
        </div>

        <Button type="submit">Crear Usuario</Button>
      </form>
    </div>
  );
}
