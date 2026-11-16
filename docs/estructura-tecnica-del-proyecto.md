# Estructura Técnica Del Proyecto

## Recomendación

Usar un solo repositorio de GitHub con una estructura simple basada en HTML y CSS.

```txt
sistema-integrador-6to-ppp/
  index.html
  css/
  modulos/
  docs/
```

Esta estructura permite que los grupos entiendan rápido dónde trabajar y puedan abrir el proyecto sin instalar herramientas extra.

## Estructura Principal

```txt
sistema-integrador-6to-ppp/
  index.html
  css/
    estilos.css
  modulos/
    autenticacion/
      login.html
      usuarios.html
    laboratorio/
      laboratorio.html
    comedor/
      comedor.html
    notebooks/
      notebooks.html
  docs/
```

## Carpetas Por Grupo

```txt
Grupo 1: modulos/autenticacion
Grupo 2: modulos/laboratorio
Grupo 3: modulos/comedor
Grupo 4: modulos/notebooks
```

## Carpetas Compartidas

```txt
css/
docs/
```

La carpeta `css/` contiene los estilos generales del sistema. Si un grupo modifica esa carpeta, puede afectar visualmente a todos los módulos.

La carpeta `docs/` contiene consignas, guías y documentación del proyecto.

## Cómo Ver El Proyecto

Opción simple:

```txt
Abrir index.html con doble clic.
```

Opción recomendada:

```txt
Abrir la carpeta en Visual Studio Code.
Usar la extensión Live Server.
Abrir index.html con Open with Live Server.
```

## Flujo De Trabajo Sugerido

1. Cada grupo trabaja en su módulo.
2. Primero se modifican textos y estructura HTML.
3. Después se agregan campos de formularios.
4. Luego se ajustan tablas y datos de ejemplo.
5. Más adelante se puede sumar JavaScript o backend si el tiempo alcanza.

## Decisión Técnica

La recomendación para esta etapa es:

```txt
Un solo repositorio.
HTML y CSS como base.
Sin Node.
Sin npm install.
Sin frameworks por ahora.
```
