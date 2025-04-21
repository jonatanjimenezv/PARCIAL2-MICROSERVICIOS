# **App Name**: EduLocal

## Core Features:

- User Creation: Simulate user creation via a form for both students and teachers.
- Course Listing: Display a list of subjects/courses. Each item should display basic info (name, description).
- Course Enrollment: Create a form to simulate student enrollment in courses.
- Role-Based UI: Display user roles with clear distinctions between student and teacher views.
- AI Course Description Generator: AI-powered tool to generate course descriptions based on course names provided by the user, to aid in the creation of new course offerings.

## Style Guidelines:

- Primary color: A calm blue (#3498db) to represent trust and knowledge.
- Secondary color: A neutral gray (#ecf0f1) for backgrounds and content areas.
- Accent: A vibrant green (#2ecc71) for calls to action and important highlights.
- Clean and structured layout with clear separation of sections.
- Use simple and consistent icons to represent different modules and actions.
- Subtle transitions and animations to provide feedback on user interactions.

## Original User Request:
PARCIAL 2-MICROSERVICIOS
Objetivo del Parcial:
Desarrollar una continuación del proyecto presentado en el archivo base, aplicando los
conocimientos sobre microservicios con Spring Boot y Spring Cloud, en un entorno
distribuido, guiado paso a paso por cada tema visto en clase. El objetivo es transformar
parte del sistema en microservicios independientes, documentados y desplegados.
1. Configuración del Proyecto General
Paso a paso:
1. Crea una organización o repositorio en GitHub con el nombre: sistema-educativomicroservicios-nombre
2. Crea un archivo README.md con una descripción del sistema y el enfoque
distribuido.
3. Dentro del repositorio, crea carpetas por microservicio: usuarios-servicio,
asignaturas-servicio, entre otros.
Complementación de los estudiantes: Incluir datos personales, estructura del
repositorio y visión general del sistema.
2. Desarrollo de Microservicios con Spring Boot
Paso a paso:
1. Crear al menos 3 microservicios:
o usuarios-servicio: gestión de estudiantes y docentes.
o asignaturas-servicio: CRUD de materias.
o matriculas-servicio: registro de estudiantes en materias.
2. Cada microservicio debe tener su propio application.properties y base de datos.
Complementación del estudiante: Implementar controladores, servicios y entidades.
3. Comunicación entre Microservicios
Paso a paso:
1. Usar Feign Client en el matriculas-servicio para consumir datos de usuariosservicio y asignaturas-servicio.
2. Simular una matrícula completa.
Complementación del estudiante: Crear cliente Feign y probar integración.
4. Gestión de Configuración y Descubrimiento de Servicios
Paso a paso:
1. Implementar un config-server y un repositorio de configuración en GitHub.
2. Crear un eureka-server y registrar todos los microservicios.
Complementación del estudiante: Documentar cómo se conectan y su configuración.
5. Seguridad en Microservicios (JWT)
Paso a paso:
1. Implementar autenticación en el usuarios-servicio.
2. Proteger los endpoints con Spring Security y JWT.
Complementación del estudiante: Generar y validar tokens, definir roles.
6. Monitorización y Registro
Paso a paso:
1. Agregar Spring Boot Actuator a los microservicios.
2. Exponer endpoints de salud y métricas (/actuator/health).
Complementación del estudiante: Crear dashboard o consola de monitoreo.
7. Pruebas de Microservicios
Paso a paso:
1. Crear pruebas unitarias y de integración con Spring Boot Test y Postman.
2. Validar comportamiento de controladores y servicios.
Complementación del estudiante: Incluir mínimo 1 test por microservicio.
8. Despliegue y Orquestación
Paso a paso:
1. Crear un archivo Dockerfile por microservicio.
2. Crear un docker-compose.yml para levantar todo el entorno.
Complementación del estudiante: Ejecutar localmente y registrar evidencia en el
README.

En este caso lo realizaremos 100% local omitiremos todo Github
  