# Sistema Integrador de Gestión Escolar

Proyecto integrador de sexto año para construir un prototipo frontend de un sistema de gestión escolar.

## Objetivo

Crear un sitio navegable con HTML y CSS para representar un sistema que permita gestionar distintos movimientos de la escuela:

- Acceso al sistema y usuarios.
- Turnos de laboratorio.
- Turnos de comedor.
- Notebooks, accesorios y estados de uso o reparación.

En esta etapa no vamos a trabajar con backend ni base de datos. El objetivo es armar la estructura visual del sistema.

La carpeta `backend/` queda incluida para una etapa futura, pero por ahora no deben modificarla.

## Estructura Del Proyecto

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
  backend/
  docs/
```

## Cómo Ver El Proyecto

Opción simple:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Hacer doble clic en `index.html`.

Opción recomendada en Visual Studio Code:

1. Abrir la carpeta del proyecto en VS Code.
2. Instalar la extensión Live Server, si no está instalada.
3. Hacer clic derecho sobre `index.html`.
4. Elegir `Open with Live Server`.

Guía para estudiantes:

[Cómo clonar y abrir el proyecto](docs/guia-para-clonar-y-abrir-el-proyecto.md)

## Dónde Trabaja Cada Grupo

```txt
Grupo 1: modulos/autenticacion/
Grupo 2: modulos/laboratorio/
Grupo 3: modulos/comedor/
Grupo 4: modulos/notebooks/
```

La carpeta `css/` tiene los estilos generales del proyecto. Si un grupo necesita cambiar estilos comunes, debe avisar al resto.

## Qué Puede Modificar Cada Grupo

Para comenzar, cada grupo puede modificar:

- Títulos.
- Párrafos.
- Formularios.
- Nombres de campos.
- Opciones de listas.
- Tablas.
- Textos de botones.
- Datos de ejemplo.

## Grupos De Trabajo

| Grupo | Módulo | Responsabilidad principal |
| --- | --- | --- |
| Grupo 1 | Autenticación y sistema general | Login, usuarios, menú principal y roles |
| Grupo 2 | Laboratorio | Carga, listado y gestión visual de turnos de laboratorio |
| Grupo 3 | Comedor | Carga, listado y gestión visual de turnos de comedor |
| Grupo 4 | Notebooks | Gestión visual de notebooks, accesorios, estados y movimientos |

## Reglas De Trabajo

1. Cada grupo trabaja principalmente en su carpeta.
2. No se modifican carpetas de otros grupos sin avisar.
3. No se cambia el nombre de archivos o carpetas sin consultar.
4. Los estilos generales se modifican con cuidado.
5. Antes de subir cambios, el proyecto debe probarse localmente.
6. Cada avance importante debe guardarse con un commit.

## Versionado

Usaremos Git para guardar versiones del proyecto y GitHub para compartirlas.

Conceptos importantes:

- `git clone`: descargar el proyecto desde GitHub.
- `git status`: ver qué archivos cambiaron.
- `git add`: preparar cambios.
- `git commit`: guardar una versión.
- `git push`: subir cambios a GitHub.
- `git pull`: traer cambios desde GitHub.

## Entregable Mínimo Por Módulo

Cada módulo debe tener:

- Pantalla principal.
- Formulario de carga.
- Listado de registros.
- Acciones básicas: ver, editar, eliminar o cancelar.
- Estados posibles.
- Datos de ejemplo.
