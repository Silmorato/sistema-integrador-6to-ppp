# Manual Del Proyecto Integrador

## Nombre Del Proyecto

Sistema Integrador 6to PPP

## Objetivo General

Construir un prototipo frontend de un sistema de gestión escolar que permita organizar distintos movimientos de la institución.

El sistema esta dividido en modulos:

- Autenticacion y sistema general.
- Turnos de laboratorio.
- Turnos de comedor.
- Notebooks y accesorios.

## Que Problema Busca Resolver

El proyecto busca organizar informacion que actualmente puede estar distribuida en distintos lugares, como planillas, mensajes, papeles o registros separados.

La idea es que el sistema permita consultar, cargar y visualizar informacion importante de manera mas ordenada.

## Alcance Del Proyecto

En esta etapa se desarrolla principalmente el frontend.

El prototipo debe incluir:

- Pantallas navegables.
- Formularios de carga.
- Listados de informacion.
- Datos simulados.
- Roles de usuario simulados.
- Menu principal para acceder a los modulos.

## Estructura Del Proyecto

```txt
sistema-integrador-6to-ppp/
  index.html
  css/
  modulos/
  docs/
```

El archivo `index.html` es la pantalla principal del sistema.

La carpeta `css/` contiene los estilos generales.

La carpeta `modulos/` contiene las pantallas de cada grupo.

La carpeta `docs/` contiene documentacion, consignas y acuerdos del proyecto.

## Modulos

### Autenticacion Y Sistema General

Responsable de:

- Login.
- Pantalla de inicio.
- Menu principal.
- Usuarios.
- Roles.
- Acceso a los modulos.
- Novedades o calendario, si el tiempo alcanza.

### Laboratorio

Responsable de:

- Carga de turnos de laboratorio.
- Listado de turnos.
- Edicion o cancelacion.
- Estados de los turnos.

### Comedor

Responsable de:

- Carga de reservas o turnos de comedor.
- Listado de reservas.
- Edicion o cancelacion.
- Estados de las reservas.

### Notebooks Y Accesorios

Responsable de:

- Registro de notebooks y accesorios.
- Consulta de equipos.
- Cambios de estado.
- Ubicacion o responsable del equipo.
- Movimientos de gabinete.

## Herramientas Utilizadas

- HTML.
- CSS.
- Git.
- GitHub.
- Documentacion del proyecto.

## Control De Versiones

Git permite guardar versiones del proyecto.

GitHub permite compartir el proyecto entre los integrantes del curso.

Conceptos importantes:

- Repositorio: carpeta del proyecto controlada con Git.
- Commit: version guardada del proyecto.
- Rama: linea de trabajo separada.
- Push: subir cambios a GitHub.
- Pull: traer cambios desde GitHub.
- Merge: unir cambios.
- Conflicto: choque entre cambios que debe resolverse.

## Forma De Trabajo

Cada grupo trabaja principalmente dentro de su modulo.

```txt
Grupo 1: modulos/autenticacion
Grupo 2: modulos/laboratorio
Grupo 3: modulos/comedor
Grupo 4: modulos/notebooks
```

Las carpetas compartidas deben modificarse con cuidado:

```txt
css/
docs/
```

## Acuerdos De Interfaz

Todos los modulos deben mantener una forma visual parecida.

Botones comunes:

- Nuevo.
- Guardar.
- Cancelar.
- Editar.
- Eliminar.
- Ver detalle.
- Volver.

## Como Ejecutar El Proyecto

Abrir el archivo principal:

```txt
index.html
```

## Aprendizajes Del Proyecto

Durante el proyecto se trabajan contenidos tecnicos y organizativos:

- Analisis de requerimientos.
- Historias de usuario.
- Criterios de aceptacion.
- Diagramas de flujo.
- Organizacion por modulos.
- Desarrollo frontend.
- Trabajo colaborativo.
- Uso de Git y GitHub.
- Documentacion tecnica.

## Posibles Mejoras Futuras

- Agregar JavaScript para validar formularios.
- Conectar el frontend con un backend real.
- Agregar base de datos.
- Implementar login real.
- Guardar turnos y equipos de manera persistente.
- Agregar filtros y busquedas.
- Mejorar permisos segun rol.
