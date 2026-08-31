# Sistema Integrador de Gestion Escolar

Proyecto integrador de sexto anio para construir el frontend de un sistema de gestion escolar.

## Objetivo

Crear un prototipo funcional del frontend para gestionar distintos movimientos de la escuela:

- Acceso al sistema y usuarios.
- Turnos de laboratorio.
- Turnos de comedor.
- Notebooks, accesorios y estados de uso o reparacion.

La primera etapa del proyecto se enfoca en el frontend. Los datos pueden simularse con arreglos, archivos JSON o `localStorage`.

## Estructura Tecnica

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

## Como Ejecutar El Frontend

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

## Modulos

El sistema se organiza como un unico proyecto con varios modulos:

```txt
frontend/src/
  modulos/
    autenticacion/
    laboratorio/
    comedor/
    notebooks/
```

Cada grupo trabaja principalmente dentro de la carpeta de su modulo.

## Grupos De Trabajo

| Grupo | Modulo | Responsabilidad principal |
| --- | --- | --- |
| Grupo 1 | Autenticacion y sistema general | Login, inicio, usuarios, menu principal, roles, rutas generales |
| Grupo 2 | Laboratorio | Carga, listado y gestion de turnos de laboratorio |
| Grupo 3 | Comedor | Carga, listado y gestion de turnos de comedor |
| Grupo 4 | Notebooks | Gestion de notebooks, accesorios, estados y movimientos |

## Reglas De Trabajo

1. Cada grupo trabaja en su carpeta de modulo.
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

La rama `main` representa la version estable. La rama `develop` se usa para integrar avances. Cada grupo trabaja en su propia rama.

## Entregable Minimo Por Modulo

Cada modulo debe tener:

- Pantalla principal.
- Formulario de carga.
- Listado de registros.
- Acciones basicas: ver, editar, eliminar o cancelar.
- Estados posibles.
- Datos simulados.
