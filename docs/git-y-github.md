# Git Y GitHub Para El Proyecto

## Ideas Principales

Git guarda versiones del proyecto.

GitHub permite compartir esas versiones entre todos los integrantes.

Una rama permite trabajar en una parte del proyecto sin modificar directamente la version principal.

## Comandos Basicos

Ver que archivos cambiaron:

```bash
git status
```

Preparar cambios:

```bash
git add .
```

Guardar una version:

```bash
git commit -m "Agrega formulario de turnos de laboratorio"
```

Subir cambios a GitHub:

```bash
git push
```

Traer cambios desde GitHub:

```bash
git pull
```

Crear una rama:

```bash
git checkout -b grupo-laboratorio
```

Cambiar de rama:

```bash
git checkout develop
```

## Ramas Del Proyecto

```txt
main
develop
grupo-autenticacion
grupo-laboratorio
grupo-comedor
grupo-notebooks
```

## Como Trabaja Cada Grupo

1. Entrar a su rama.
2. Trabajar en su carpeta.
3. Probar que el proyecto funcione.
4. Guardar cambios con commit.
5. Subir los cambios a GitHub.
6. Avisar que ya esta listo para integrar.

## Ejemplo

```bash
git checkout grupo-comedor
git status
git add .
git commit -m "Agrega listado de reservas de comedor"
git push
```

## Vocabulario

| Concepto | Significado |
| --- | --- |
| Repositorio | Carpeta del proyecto controlada con Git |
| Commit | Version guardada del proyecto |
| Branch o rama | Linea de trabajo separada |
| Push | Subir cambios a GitHub |
| Pull | Bajar cambios desde GitHub |
| Merge | Unir cambios de una rama con otra |
| Conflicto | Cuando dos cambios chocan y hay que decidir cual queda |

