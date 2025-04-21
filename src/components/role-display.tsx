'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function RoleDisplay() {
  const [isTeacher, setIsTeacher] = useState(false);

  return (
    <div>
      <Link href="/" className="mb-4 inline-block">
        <Button variant="outline">Volver al Menú</Button>
      </Link>
      <Card>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="role" checked={isTeacher} onCheckedChange={setIsTeacher} />
            <Label htmlFor="role">
              {isTeacher ? 'Vista de Profesor' : 'Vista de Estudiante'}
            </Label>
          </div>

          {isTeacher ? (
            <div className="p-4 rounded-md bg-accent text-accent-foreground">
              <h3 className="text-lg font-semibold">Vista de Profesor</h3>
              <p className="text-sm">Mostrando contenido y opciones específicas para profesores.</p>
            </div>
          ) : (
            <div className="p-4 rounded-md bg-secondary">
              <h3 className="text-lg font-semibold">Vista de Estudiante</h3>
              <p className="text-sm text-muted-foreground">Mostrando contenido y opciones específicas para estudiantes.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

