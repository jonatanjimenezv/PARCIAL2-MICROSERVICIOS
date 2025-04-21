'use client';

import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  name: string;
  role: string;
}

interface Course {
  id: string;
  name: string;
  description: string;
}

export function CourseEnrollmentForm() {
  const [studentId, setStudentId] = useState('');
  const [courseIds, setCourseIds] = useState<string[]>([]);
  const [students, setStudents] = useState<User[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Retrieve students from local storage
    const storedStudents = localStorage.getItem('users');
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }

    // Retrieve courses from local storage
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!studentId || courseIds.length === 0) {
      toast({
        title: "Error",
        description: "Por favor, seleccione un estudiante y al menos un curso.",
        variant: "destructive",
      });
      return;
    }

    // Retrieve existing enrollments from local storage or initialize an empty array
    const storedEnrollments = localStorage.getItem('enrollments');
    const existingEnrollments: { [studentId: string]: string[] } = storedEnrollments ? JSON.parse(storedEnrollments) : {};

    // Add the new course to the student's enrollment list
    existingEnrollments[studentId] = courseIds;

    // Store the updated enrollments back in local storage
    localStorage.setItem('enrollments', JSON.stringify(existingEnrollments));

    // Find the student's name based on studentId
    const studentName = students.find(student => student.id === studentId)?.name || 'Unknown Student';

    // Find the names of the enrolled courses based on courseIds
    const enrolledCourseNames = courses.filter(course => courseIds.includes(course.id)).map(course => course.name);

    toast({
      title: "Inscripción Exitosa",
      description: `El estudiante ${studentName} ha sido inscrito en los cursos: ${enrolledCourseNames.join(', ')}.`,
    });

    setStudentId('');
    setCourseIds([]);
  };

  const handleCourseSelect = (courseId: string) => {
    setCourseIds(prevCourseIds => {
      if (prevCourseIds.includes(courseId)) {
        return prevCourseIds.filter(id => id !== courseId);
      } else {
        return [...prevCourseIds, courseId];
      }
    });
  };

  return (
    <div>
      <Link href="/" className="mb-4 inline-block">
        <Button variant="outline">Volver al Menú</Button>
      </Link>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="studentId">Nombre del Estudiante:</Label>
          <Select onValueChange={setStudentId}>
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Seleccione un estudiante" />
            </SelectTrigger>
            <SelectContent>
              {students.map((student) => (
                <SelectItem key={student.id} value={student.id}>
                  {student.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Cursos:</Label>
          <div className="flex flex-wrap gap-2">
            {courses.map((course) => (
              <div key={course.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`course-${course.id}`}
                  value={course.id}
                  className="h-4 w-4 rounded border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  checked={courseIds.includes(course.id)}
                  onChange={() => handleCourseSelect(course.id)}
                />
                <Label htmlFor={`course-${course.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{course.name}</Label>
              </div>
            ))}
          </div>
        </div>

        <Button type="submit">Inscribir Estudiante</Button>
      </form>
    </div>
  );
}

const CourseEnrollmentPage = () => {
  return <CourseEnrollmentForm />;
};

export default CourseEnrollmentPage;
