# Sistema Integrador de Gestión Escolar

Proyecto integrador de sexto año para construir el frontend de un sistema de gestión escolar.

## Objetivo

Crear un prototipo funcional del frontend para gestionar distintos movimientos de la escuela:

- Acceso al sistema y usuarios.
- Turnos de laboratorio.
- Turnos de comedor.
- Notebooks, accesorios y estados de uso o reparacion.

La primera etapa del proyecto se enfoca en el frontend. Los datos pueden simularse con arreglos, archivos JSON o `localStorage`.

## Estructura Técnica

El proyecto se organiza en un solo repositorio, pero con frontend y backend separados:

```txt
api-integradora/
  frontend/
  backend/
  docs/
```

En esta primera etapa vamos a trabajar en:

```txt
frontend/
```

La carpeta `backend/` queda reservada para una segunda etapa, si el tiempo alcanza.

## Cómo Ejecutar El Frontend

Entrar a la carpeta del frontend:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Iniciar el proyecto:

```bash
npm run dev
```

Cuando aparezca una dirección como `http://localhost:5173`, abrirla en el navegador.

## Cómo Probar Mi Módulo

1. Ejecutar el frontend con `npm run dev`.
2. Abrir el navegador en la dirección que indique la terminal.
3. Ingresar desde el login de prueba.
4. Entrar al módulo correspondiente desde el menú.
5. Modificar el archivo del módulo.
6. Guardar los cambios.
7. Volver al navegador y revisar si se ve correctamente.

Archivos principales por grupo:

```txt
Grupo 1: frontend/src/modulos/autenticacion/paginas/Inicio.jsx
Grupo 2: frontend/src/modulos/laboratorio/paginas/Laboratorio.jsx
Grupo 3: frontend/src/modulos/comedor/paginas/Comedor.jsx
Grupo 4: frontend/src/modulos/notebooks/paginas/Notebooks.jsx
```

Para empezar, conviene modificar textos visibles, campos del formulario, opciones y columnas de la tabla.

## Módulos

El sistema se organiza como un único proyecto con varios módulos:

```txt
frontend/src/
  modulos/
    autenticacion/
    laboratorio/
    comedor/
    notebooks/
```

Cada grupo trabaja principalmente dentro de la carpeta de su módulo.

## Grupos De Trabajo

| Grupo | Módulo | Responsabilidad principal |
| --- | --- | --- |
| Grupo 1 | Autenticación y sistema general | Login, inicio, usuarios, menú principal, roles, rutas generales |
| Grupo 2 | Laboratorio | Carga, listado y gestión de turnos de laboratorio |
| Grupo 3 | Comedor | Carga, listado y gestión de turnos de comedor |
| Grupo 4 | Notebooks | Gestión de notebooks, accesorios, estados y movimientos |

## Reglas De Trabajo

1. Cada grupo trabaja en su carpeta de módulo.
2. Si un grupo necesita modificar archivos generales, debe avisar antes.
3. No se cambian nombres de rutas sin acordarlo con el resto.
4. No se modifican estilos globales sin consultar.
5. Cada avance importante debe guardarse con un commit.
6. Antes de subir cambios, el proyecto debe probarse localmente.
7. Los mensajes de commit deben explicar que se hizo.

## Versionado

Usaremos Git para guardar versiones del proyecto y GitHub para compartirlas.

Ramas sugeridas:

```txt
main
develop
grupo-autenticacion
grupo-laboratorio
grupo-comedor
grupo-notebooks
```

La rama `main` representa la versión estable. La rama `develop` se usa para integrar avances. Cada grupo trabaja en su propia rama.

## Entregable Mínimo Por Módulo

Cada módulo debe tener:

- Pantalla principal.
- Formulario de carga.
- Listado de registros.
- Acciones basicas: ver, editar, eliminar o cancelar.
- Estados posibles.
- Datos simulados.
