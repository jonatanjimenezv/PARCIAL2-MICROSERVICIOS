'use client';

import { CourseList } from '@/components/course-list';
import React, { useState, useEffect } from 'react';

const CourseListingPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Retrieve courses from local storage on component mount
    const storedCourses = localStorage.getItem('courses');
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Listado de Cursos</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default CourseListingPage;
