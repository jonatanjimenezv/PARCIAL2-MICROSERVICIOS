'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  name: string;
  role: string;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

export function UserCreationForm() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('student');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: User = {
      id: generateId(),
      name: name,
      role: role,
    };

    // Retrieve existing users from local storage or initialize an empty array
    const storedUsers = localStorage.getItem('users');
    const existingUsers: User[] = storedUsers ? JSON.parse(storedUsers) : [];

    // Add the new user to the array
    const updatedUsers = [...existingUsers, newUser];

    // Store the updated array back in local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    toast({
      title: "Usuario creado",
      description: `Se ha creado el usuario ${name} con rol ${role}.`,
    });

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

const UserCreationPage = () => {
  return <UserCreationForm />;
};

export default UserCreationPage;

    