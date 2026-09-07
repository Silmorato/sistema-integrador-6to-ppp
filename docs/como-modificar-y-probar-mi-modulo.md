# Cómo Modificar Y Probar Mi Módulo

## Objetivo

Aprender a encontrar el módulo que le corresponde a cada grupo, modificar una parte visible de la pantalla y probar el cambio en el navegador.

## 1. Ejecutar El Proyecto

Desde Git Bash o la terminal de Visual Studio Code:

```bash
cd sistema-integrador-6to-ppp
cd frontend
npm install
npm run dev
```

Cuando la terminal muestre una dirección como esta:

```txt
http://localhost:5173
```

abrirla en el navegador.

## 2. Entrar Al Sistema

El login es simulado.

Pueden ingresar con los datos que ya aparecen cargados en pantalla.

Después de ingresar, se verá el panel de inicio y el menú con los módulos.

## 3. Ubicar Mi Módulo

Cada grupo debe trabajar principalmente en su carpeta:

```txt
Grupo 1: frontend/src/modulos/autenticacion
Grupo 2: frontend/src/modulos/laboratorio
Grupo 3: frontend/src/modulos/comedor
Grupo 4: frontend/src/modulos/notebooks
```

## 4. Archivo Principal De Cada Grupo

Para comenzar, cada grupo debe modificar su pantalla principal:

```txt
Grupo 1: frontend/src/modulos/autenticacion/paginas/Inicio.jsx
Grupo 2: frontend/src/modulos/laboratorio/paginas/Laboratorio.jsx
Grupo 3: frontend/src/modulos/comedor/paginas/Comedor.jsx
Grupo 4: frontend/src/modulos/notebooks/paginas/Notebooks.jsx
```

## 5. Qué Puedo Modificar Primero

Para empezar, conviene modificar solo partes visibles de la pantalla:

- Títulos.
- Párrafos.
- Nombres de campos.
- Textos de botones.
- Opciones de listas desplegables.
- Columnas de tablas.
- Textos de ejemplo.

Ejemplo:

```jsx
<h2>Turnos de laboratorio</h2>
```

Se puede cambiar por:

```jsx
<h2>Reserva de laboratorios escolares</h2>
```

## 6. Qué Conviene No Tocar Todavía

Si todavía no entendemos React, conviene no modificar estas partes:

```jsx
import ...
export function ...
const ...
map(...)
onClick={...}
```

Regla simple:

```txt
Si está entre etiquetas, probablemente sea parte visual.
Si tiene llaves, map, import, export o function, primero consultar.
```

## 7. Probar Los Cambios

Después de modificar el archivo:

1. Guardar.
2. Volver al navegador.
3. Revisar si la pantalla cambió.
4. Si aparece un error, leer qué archivo menciona.
5. Revisar si faltó cerrar una etiqueta.

Ejemplo de etiquetas que deben cerrarse:

```jsx
<section>
  <h2>Título</h2>
  <p>Texto de la pantalla</p>
</section>
```

## 8. Actividad Inicial

Cada grupo debe:

1. Abrir el archivo principal de su módulo.
2. Cambiar el título de la pantalla.
3. Revisar si los campos del formulario sirven para su módulo.
4. Agregar un campo nuevo copiando uno existente.
5. Cambiar una columna de la tabla.
6. Probar el cambio en el navegador.
7. Anotar qué modificó y qué dudas aparecieron.

## 9. Idea Clave

No hace falta entender todo React desde el primer día.

Primero vamos a reconocer la parte visual de cada componente, modificarla con cuidado y probar los cambios en el navegador.
