'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const WelcomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a EduLocal</h1>

      <section className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>¿Qué es EduLocal?</CardTitle>
            <CardDescription>
              EduLocal es una plataforma diseñada para simular la gestión de un sistema educativo local,
              permitiendo a estudiantes y profesores interactuar en un entorno virtual.
            </CardDescription>
          </CardHeader>
          <CardContent>
            Explora las diferentes secciones y descubre cómo puedes sacar el máximo provecho de esta herramienta.
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Guía de Uso</h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="userCreation">
            <AccordionTrigger>Creación de Usuario</AccordionTrigger>
            <AccordionContent>
              <p>
                La sección de "Creación de Usuario" te permite simular la creación de nuevos usuarios en el sistema.
                Puedes ingresar el nombre del usuario y seleccionar su rol, ya sea estudiante o profesor.
                Una vez que completes la información, haz clic en "Crear Usuario" para registrarlo.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="userList">
            <AccordionTrigger>Lista de Usuarios</AccordionTrigger>
            <AccordionContent>
              <p>
                En "Lista de Usuarios", podrás visualizar una lista de todos los usuarios que han sido creados en el sistema.
                Cada entrada muestra el nombre del usuario y su rol asignado.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="courseCreation">
            <AccordionTrigger>Creación de Curso</AccordionTrigger>
            <AccordionContent>
              <p>
                La sección de "Creación de Curso" te permite agregar nuevos cursos al sistema.
                Debes proporcionar el nombre del curso y una descripción detallada del mismo.
                Después de completar la información, haz clic en "Crear Curso" para registrarlo.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="courseListing">
            <AccordionTrigger>Listado de Cursos</AccordionTrigger>
            <AccordionContent>
              <p>
                En "Listado de Cursos", podrás ver una lista de todos los cursos disponibles en el sistema.
                Cada curso muestra su nombre y una breve descripción.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="courseEnrollment">
            <AccordionTrigger>Inscripción a Cursos</AccordionTrigger>
            <AccordionContent>
              <p>
                La sección de "Inscripción a Cursos" te permite inscribir a estudiantes en los cursos disponibles.
                Selecciona el nombre del estudiante de la lista desplegable y luego selecciona los cursos en los que deseas inscribirlo.
                Haz clic en "Inscribir Estudiante" para completar el proceso.
              </p>
            </AccordionContent>
          </AccordionItem>
           <AccordionItem value="coursesByStudent">
            <AccordionTrigger>Cursos por Estudiante</AccordionTrigger>
            <AccordionContent>
              <p>
                La sección de "Cursos por Estudiante" te permite consultar los cursos en los que está inscrito un estudiante específico.
                Selecciona el nombre del estudiante de la lista desplegable y verás una lista de los cursos en los que está inscrito.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="roleVisualization">
            <AccordionTrigger>Visualización de Roles</AccordionTrigger>
            <AccordionContent>
              <p>
                Utiliza la sección "Visualización de Roles" para cambiar entre la vista de estudiante y la de profesor.
                Activa el interruptor para alternar entre los roles y ver contenido específico para cada uno.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>¡Comienza a Explorar!</CardTitle>
            <CardDescription>
              Ahora que conoces las funcionalidades básicas de EduLocal, te invitamos a explorar y experimentar con la plataforma.
            </CardDescription>
          </CardHeader>
          <CardContent>
            ¡Esperamos que disfrutes de tu experiencia en EduLocal!
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default WelcomePage;
