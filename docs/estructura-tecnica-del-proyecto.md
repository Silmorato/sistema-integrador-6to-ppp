# Estructura Tecnica Del Proyecto

## Recomendacion

Usar un solo repositorio de GitHub, pero separar el frontend y el backend en carpetas diferentes.

```txt
api-integradora/
  frontend/
  backend/
  docs/
```

Esto permite que todos trabajen sobre el mismo proyecto, pero sin mezclar responsabilidades.

## Por Que No Hacer Todo Mezclado

Si el frontend y el backend quedan mezclados desde el inicio, puede ser mas dificil para los grupos entender donde va cada cosa.

Como en esta etapa se va a construir principalmente el frontend, conviene que el trabajo real este en:

```txt
frontend/
```

Y que el backend quede preparado para una etapa posterior:

```txt
backend/
```

## Estructura Del Frontend

```txt
frontend/
  src/
    componentes/
    datos/
    estilos/
    modulos/
      autenticacion/
      laboratorio/
      comedor/
      notebooks/
```

## Carpetas Por Grupo

```txt
Grupo 1: frontend/src/modulos/autenticacion
Grupo 2: frontend/src/modulos/laboratorio
Grupo 3: frontend/src/modulos/comedor
Grupo 4: frontend/src/modulos/notebooks
```

## Carpetas Compartidas

```txt
frontend/src/componentes
frontend/src/datos
frontend/src/estilos
```

Estas carpetas son compartidas. No deberian modificarse sin avisar al resto.

## Flujo De Trabajo Sugerido

1. Cada grupo trabaja en su modulo.
2. Primero se hacen pantallas simples.
3. Despues se agregan formularios y listados.
4. Los datos se simulan con archivos JavaScript.
5. Mas adelante se puede conectar con una API real.

## Decision Sobre Frontend Y Backend

La recomendacion para este proyecto es:

```txt
Un solo repositorio.
Frontend y backend separados por carpetas.
Primera etapa: frontend.
Segunda etapa: backend, si el tiempo alcanza.
```
