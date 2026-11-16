# Guía Para Clonar Y Abrir El Proyecto

## Objetivo

Descargar el proyecto desde GitHub y abrirlo en la computadora para poder ver y modificar las pantallas.

## 1. Instalar Git

1. Entrar a https://git-scm.com/downloads
2. Elegir Windows.
3. Descargar el instalador.
4. Instalar dejando las opciones por defecto.
5. Al finalizar, abrir Git Bash.

## 2. Abrir Git Bash

Opciones:

- Desde el menú inicio, escribir `Git Bash`.
- Desde una carpeta, clic derecho y elegir `Open Git Bash here`.
- Desde Visual Studio Code, abrir una terminal y elegir Git Bash.

## 3. Verificar Git

En Git Bash escribir:

```bash
git --version
```

Si aparece una versión, Git quedó instalado.

## 4. Configurar Nombre Y Email

Esto se hace una sola vez por computadora:

```bash
git config --global user.name "Nombre Apellido"
git config --global user.email "correo@email.com"
```

## 5. Clonar El Repositorio

Ubicarse en la carpeta donde se quiere guardar el proyecto. Por ejemplo:

```bash
cd Desktop
```

Clonar el repositorio:

```bash
git clone https://github.com/Silmorato/sistema-integrador-6to-ppp.git
```

Entrar a la carpeta:

```bash
cd sistema-integrador-6to-ppp
```

## 6. Abrir El Proyecto

Opción simple:

```txt
Hacer doble clic en index.html
```

Opción recomendada:

```txt
Abrir la carpeta en Visual Studio Code.
Hacer clic derecho sobre index.html.
Elegir Open with Live Server.
```

## 7. Encontrar Mi Módulo

```txt
Grupo 1: modulos/autenticacion
Grupo 2: modulos/laboratorio
Grupo 3: modulos/comedor
Grupo 4: modulos/notebooks
```

## 8. Modificar Y Probar

1. Abrir el archivo HTML del módulo.
2. Cambiar un título, texto, campo o dato de ejemplo.
3. Guardar.
4. Volver al navegador.
5. Actualizar la página.
6. Revisar si el cambio se ve correctamente.

## Idea Clave

Primero vamos a trabajar con HTML y CSS.

No hace falta instalar Node, usar npm ni aprender React para esta primera etapa.
