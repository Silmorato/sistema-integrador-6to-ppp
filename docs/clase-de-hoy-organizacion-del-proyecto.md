# Clase De Hoy: Organizacion Del Proyecto Integrador

## Objetivo De La Clase

Que los grupos comprendan como se va a organizar el desarrollo del sistema integrador y definan con claridad que debe hacer cada modulo.

La idea principal de la clase es:

```txt
No vamos a construir cuatro sistemas separados.
Vamos a construir un solo sistema integrador dividido en modulos.
```

## Situacion Del Proyecto

El sistema integrador va a tener una pantalla de acceso, una pantalla de inicio y diferentes modulos para gestionar movimientos de la escuela.

Modulos principales:

```txt
Autenticacion y sistema general
Laboratorio
Comedor
Notebooks y accesorios
```

En esta primera etapa vamos a trabajar sobre el frontend. El objetivo es lograr un prototipo navegable, con pantallas, formularios, listados y datos simulados.

## Explicacion Inicial Para Los Estudiantes

Hasta ahora estuvimos trabajando en el analisis del sistema:

- Requerimientos funcionales.
- Requerimientos no funcionales.
- Historias de usuario.
- Criterios de aceptacion.
- Diagramas de flujo.
- Ideas generales de funcionamiento.

Ahora empezamos una nueva etapa:

```txt
Pensar como se construye el sistema.
```

Para poder trabajar entre varios grupos necesitamos organizarnos. Si cada grupo hace algo completamente separado, despues va a ser dificil unirlo. Por eso vamos a trabajar con una estructura comun.

## Organizacion De Los Grupos

### Grupo 1: Autenticacion Y Sistema General

Este grupo se encarga de la entrada al sistema y de la navegacion general.

Debe pensar:

- Pantalla de login.
- Pantalla de inicio.
- Menu principal.
- Accesos a los modulos.
- Gestion visual de usuarios, si el tiempo alcanza.
- Roles de usuario.
- Que ve cada tipo de usuario.
- Feed de novedades o avisos, si el tiempo alcanza.
- Calendario, si el tiempo alcanza.

Preguntas guia:

```txt
Como ingresa un usuario al sistema
Que datos pide el login
Que aparece en la pantalla de inicio
Como se accede a cada modulo
Que roles existen
Que puede ver o hacer cada rol
```

Roles posibles:

```txt
Administrador
Directivo
Docente
Preceptor
Alumno
Encargado de laboratorio
Encargado de comedor
Encargado de gabinete
```

### Grupo 2: Laboratorio

Este grupo se encarga de la gestion de turnos de laboratorio.

Debe pensar:

- Formulario para cargar un turno.
- Listado de turnos.
- Edicion o cancelacion de turnos.
- Estados del turno.
- Filtros posibles.

Datos posibles:

```txt
Fecha
Hora
Profesor
Curso
Laboratorio
Motivo
Estado
Observaciones
```

Estados posibles:

```txt
Pendiente
Confirmado
Cancelado
Finalizado
```

Preguntas guia:

```txt
Quien puede pedir un turno
Quien puede confirmarlo
Que datos son obligatorios
Como se muestra el listado
Que pasa si se cancela un turno
```

### Grupo 3: Comedor

Este grupo se encarga de la gestion de reservas o turnos del comedor.

Debe pensar:

- Formulario para cargar una reserva.
- Listado de reservas.
- Edicion o cancelacion de reservas.
- Estados de la reserva.
- Filtros posibles.

Datos posibles:

```txt
Fecha
Turno
Curso
Cantidad de alumnos
Responsable
Observaciones
Estado
```

Estados posibles:

```txt
Pendiente
Confirmado
Cancelado
```

Preguntas guia:

```txt
Quien puede cargar una reserva
Que informacion necesita comedor
Como se controla la cantidad de alumnos
Que datos se muestran en el listado
Que pasa si una reserva se cancela
```

### Grupo 4: Notebooks Y Accesorios

Este grupo se encarga de registrar y consultar el estado de notebooks, accesorios y movimientos de gabinete.

Debe pensar:

- Formulario para registrar notebook o accesorio.
- Listado de equipos.
- Cambio de estado.
- Asignacion a responsable o ubicacion.
- Historial simple de movimientos, si el tiempo alcanza.

Datos posibles:

```txt
Codigo interno
Tipo
Marca
Modelo
Estado
Ubicacion
Responsable
Observaciones
```

Estados posibles:

```txt
Disponible
En uso
En reparacion
Fuera de servicio
```

Preguntas guia:

```txt
Como se identifica cada notebook
Que estados puede tener
Quien puede cambiar el estado
A quien puede estar asignada
Como se muestra si esta disponible o no
Que movimientos conviene registrar
```

## Acuerdos Comunes Entre Todos Los Grupos

Todos los modulos deben compartir una misma forma de trabajo.

Acuerdos iniciales:

```txt
Usar nombres claros en espanol
Mantener una estructura similar de pantallas
Usar los mismos nombres para botones comunes
Pensar que datos se cargan y que datos se muestran
Definir estados posibles
Definir que roles pueden usar cada modulo
Avisar si un modulo necesita informacion de otro
```

Botones comunes:

```txt
Nuevo
Guardar
Cancelar
Editar
Eliminar
Ver detalle
Volver
```

## Actividad Para La Clase

Cada grupo debe completar una ficha de su modulo.

### Ficha Del Modulo

```txt
Nombre del modulo:

Integrantes:

Objetivo del modulo:

Problema que resuelve:

Pantallas necesarias:

Datos que se cargan:

Datos que se muestran:

Acciones del usuario:

Estados posibles:

Roles que usan este modulo:

Informacion que necesita de otros modulos:

Dudas o decisiones pendientes:
```

## Ejemplo De Ficha

```txt
Nombre del modulo:
Comedor

Objetivo del modulo:
Gestionar reservas del comedor escolar.

Problema que resuelve:
Permite saber que cursos o grupos van a usar el comedor, en que fecha y con que cantidad de alumnos.

Pantallas necesarias:
Nueva reserva
Listado de reservas
Detalle de reserva

Datos que se cargan:
Fecha
Turno
Curso
Cantidad de alumnos
Responsable
Observaciones

Datos que se muestran:
Fecha
Turno
Curso
Cantidad
Estado

Acciones del usuario:
Crear reserva
Editar reserva
Cancelar reserva
Ver detalle

Estados posibles:
Pendiente
Confirmado
Cancelado

Roles que usan este modulo:
Directivo
Preceptor
Encargado de comedor

Informacion que necesita de otros modulos:
Usuarios y roles

Dudas o decisiones pendientes:
Quien confirma las reservas
Si los alumnos pueden ver las reservas
```

## Puesta En Comun

Al final de la clase, cada grupo comparte:

- Que modulo tiene.
- Que pantallas penso.
- Que datos necesita cargar.
- Que roles van a usarlo.
- Que dudas aparecieron.

La puesta en comun sirve para detectar si hay datos repetidos, nombres diferentes para lo mismo o dependencias entre modulos.

## Cierre De La Clase

Idea para cerrar:

```txt
Hoy no programamos todavia.
Hoy organizamos el proyecto para poder programar mejor.
Un sistema no empieza solamente escribiendo codigo:
empieza definiendo responsabilidades, pantallas, datos y acuerdos comunes.
```

## Tarea Para La Proxima Clase

Cada grupo debe traer:

- Ficha del modulo completa.
- Boceto simple de las pantallas principales.
- Lista de dudas o decisiones que necesita consultar.

Para la clase de laboratorio del jueves se puede comenzar con Git, GitHub, ramas y versionado.

