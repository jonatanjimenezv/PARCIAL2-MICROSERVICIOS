'use client';

import React from 'react';
import { CourseCreationForm } from '@/components/course-creation-form';

const CourseCreationPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Creación de Cursos</h1>
      <CourseCreationForm />
    </div>
  );
};

export default CourseCreationPage;
