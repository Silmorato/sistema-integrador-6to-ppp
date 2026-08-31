# Acuerdos De Interfaz

Este documento sirve para que todos los grupos mantengan una misma forma de construir pantallas.

## Estructura General De Cada Modulo

Cada modulo deberia tener:

- Titulo del modulo.
- Boton para cargar un nuevo registro.
- Formulario de carga.
- Listado de registros.
- Acciones por registro.
- Estados visibles.

## Rutas Sugeridas

```txt
/login
/inicio
/usuarios
/laboratorio
/comedor
/notebooks
```

## Pantalla De Inicio

La pantalla de inicio funciona como entrada al sistema integral.

Puede incluir:

- Menu de acceso a los modulos.
- Resumen de novedades.
- Calendario escolar o calendario de turnos.
- Accesos rapidos.
- Mensajes importantes.
- Vista diferente segun el rol del usuario.

## Roles Sugeridos

Para el prototipo, los roles pueden ser simulados.

```txt
Administrador
Directivo
Docente
Preceptor
Alumno
Encargado de comedor
Encargado de laboratorio
Encargado de gabinete
```

Cada grupo debe pensar que acciones puede ver o realizar cada rol dentro de su modulo.

## Botones Comunes

Usar siempre los mismos nombres:

```txt
Nuevo
Guardar
Cancelar
Editar
Eliminar
Ver detalle
Volver
```

## Estados Sugeridos

Laboratorio:

```txt
Pendiente
Confirmado
Cancelado
Finalizado
```

Comedor:

```txt
Pendiente
Confirmado
Cancelado
```

Notebooks:

```txt
Disponible
En uso
En reparacion
Fuera de servicio
```

## Componentes Repetidos

Cuando el proyecto avance, conviene crear componentes comunes para:

- Botones.
- Campos de formulario.
- Tablas.
- Mensajes de error.
- Tarjetas de resumen.
- Menu lateral o superior.
