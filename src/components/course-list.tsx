'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Course {
  id: string;
  name: string;
  description: string;
}

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <div>
      <Link href="/" className="mb-4 inline-block">
        <Button variant="outline">Volver al Menú</Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-secondary p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <p className="text-sm text-muted-foreground">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
