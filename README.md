# API Rest Recomendación Video Juegos - Prueba 1 Pruebas de Software

Módulo de recomendación de video juegos para la Prueba 1 de Pruebas de Software.

## Características

* Recomendar 2 juegos aleatorios para una consola
* Recomendar 3 juegos aleatorios para un género
* Recomendar 1 juego aleatorio para una consola y género específico
* Buscar un juego por su nombre

## Consolas disponibles

* PS2
* N64
* GBA

## Instrucciones de instalación

1. Clonar repositorio

    `git clone https://github.com/Spawnbig/tarea-1-prueb-software`

2. Instalación de dependencias 

    `npm install`

3. Ejecución de la aplicación

    `npm start`

## Uso

Una vez iniciada la aplicación, se podrá acceder a los diferentes endpoints al utilizar localhost:3000 se podrán utilizar los siguientes endpoints:

* GET `/consoles/$console_abreviation/random_games` - Recomendar 2 juegos (aleatorios) para una consola

Ejemplo de uso: localhost:3000/consoles/PS2/random_games

* POST `/:console/genre/random_game` - Recomendar 3 juegos (aleatorios) para un género

Ejemplo de uso: localhost:3000/genres/genre/random_games
En el body se debe ingresar el género en formato JSON, por ejemplo: {"genre": "Action"}

* POST `/genres/random_games` - Recomendar 3 juegos (aleatorios) para un género

Ejemplo de uso: localhost:3000/genres/random_games
En el body se debe ingresar el género en formato JSON, por ejemplo: {"genre_name": "Action"}

* GET `/game` - Buscar un juego por su nombre

Ejemplo de uso: localhost:3000/game?name="Super Mario Bros"


## Integrantes
- Nicolás Rivas
- Nicolás Sanhueza