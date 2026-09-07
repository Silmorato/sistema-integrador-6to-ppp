# Cómo Modificar Y Probar Mi Módulo

## Objetivo

Aprender a encontrar el módulo que le corresponde a cada grupo, modificar una parte visible de la pantalla y probar el cambio en el navegador.

## 1. Abrir El Proyecto

Para ver el sistema no hace falta instalar Node ni ejecutar comandos especiales.

Opción simple:

```txt
Doble clic en index.html
```

Opción recomendada:

```txt
Abrir la carpeta en Visual Studio Code
Hacer clic derecho en index.html
Elegir Open with Live Server
```

## 2. Ubicar Mi Módulo

Cada grupo debe trabajar principalmente en su carpeta:

```txt
Grupo 1: modulos/autenticacion
Grupo 2: modulos/laboratorio
Grupo 3: modulos/comedor
Grupo 4: modulos/notebooks
```

## 3. Archivo Principal De Cada Grupo

Para comenzar, cada grupo debe modificar su archivo HTML principal:

```txt
Grupo 1: modulos/autenticacion/login.html
Grupo 1: modulos/autenticacion/usuarios.html
Grupo 2: modulos/laboratorio/laboratorio.html
Grupo 3: modulos/comedor/comedor.html
Grupo 4: modulos/notebooks/notebooks.html
```

## 4. Qué Puedo Modificar Primero

Para empezar, conviene modificar partes visibles de la pantalla:

- Títulos.
- Párrafos.
- Nombres de campos.
- Textos de botones.
- Opciones de listas desplegables.
- Columnas de tablas.
- Datos de ejemplo.

Ejemplo:

```html
<h2>Turnos de laboratorio</h2>
```

Se puede cambiar por:

```html
<h2>Reserva de laboratorios escolares</h2>
```

## 5. Cómo Agregar Un Campo

Pueden copiar un campo existente y cambiar el texto.

Ejemplo:

```html
<label>
  Profesor
  <input type="text" placeholder="Nombre del profesor" />
</label>
```

Para agregar materia:

```html
<label>
  Materia
  <input type="text" placeholder="Materia" />
</label>
```

## 6. Qué Conviene No Tocar Sin Consultar

Para evitar romper la navegación, consultar antes de modificar:

- Nombres de carpetas.
- Nombres de archivos.
- Rutas de enlaces.
- El archivo `css/estilos.css` si el cambio afecta a todos.

## 7. Probar Los Cambios

Después de modificar el archivo:

1. Guardar.
2. Volver al navegador.
3. Actualizar la página.
4. Revisar si la pantalla cambió.
5. Si algo se ve mal, revisar si faltó cerrar una etiqueta.

Ejemplo de etiquetas bien cerradas:

```html
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

No hace falta aprender todo el proyecto de una vez.

Primero vamos a reconocer la estructura HTML, modificar la pantalla del módulo y probar los cambios en el navegador.
