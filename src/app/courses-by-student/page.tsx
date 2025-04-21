'use client';

import React, { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

const CoursesByStudentPage = () => {
  const [studentId, setStudentId] = useState('');
  const [students, setStudents] = useState<User[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);

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

  useEffect(() => {
    // Retrieve enrollments from local storage
    const storedEnrollments = localStorage.getItem('enrollments');
    if (storedEnrollments) {
      const enrollments = JSON.parse(storedEnrollments);
      if (studentId && enrollments[studentId]) {
        const courseIds = enrollments[studentId];
        const coursesEnrolled = courses.filter(course => courseIds.includes(course.id));
        setEnrolledCourses(coursesEnrolled);
      } else {
        setEnrolledCourses([]);
      }
    }
    else {
      setEnrolledCourses([]);
    }
  }, [studentId, courses]);

  const handleStudentSelect = (studentId: string) => {
    setStudentId(studentId);
  };

  return (
    <div>
      <Link href="/" className="mb-4 inline-block">
        <Button variant="outline">Volver al Menú</Button>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Cursos Inscritos por Estudiante</h1>

      <div>
        <Label htmlFor="studentId">Seleccione un Estudiante:</Label>
        <Select onValueChange={handleStudentSelect}>
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

      {studentId && enrolledCourses.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Cursos Inscritos:</h2>
          <ul>
            {enrolledCourses.map((course) => (
              <li key={course.id} className="mb-2">{course.name}</li>
            ))}
          </ul>
        </div>
      ) : studentId ? (
        <div className="mt-4">
          <p>Este estudiante no está inscrito en ningún curso.</p>
        </div>
      ) : null}
    </div>
  );
};

export default CoursesByStudentPage;
