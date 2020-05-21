import {Videogame} from "./videogame";
import {Platform} from "./platform";
import {Person} from "./person";
import {HobbyGame} from "./hobbyGame";
import * as readline from 'readline-sync'
import { read } from "fs-extra";
//desarrolladores
let masDesarrolladores = false;
let desarrolladores: Person[] = [];
while(!masDesarrolladores){
    let developer = new Person(readline.question('Developers\nName: '),
                readline.question('Nationality: '),
                readline.question('Profession(developer, tester, manager, director): '),
                Number(readline.question('Experience: '))
                );
    desarrolladores.push(developer)
    masDesarrolladores = readline.question('Hay mas desarrolladores?(si/no) ') === 'no'
}
//plataformas
let masPlataformas = false;
let plataformas: Platform[] = [];
while(!masPlataformas){
    let plataforma = new Platform(readline.question('Platform\nName: '),
                Number(readline.question('Release Year: ')),
                readline.question('Company: '),
                Number(readline.question('nBits: ')),
                Number(readline.question('Generation: ')),
                Boolean(readline.question('Has HD(true/false): ')),
                Number(readline.question('HD Size: ')),
                Boolean(readline.question('Has Internet Conexion(true/false): ')),
                readline.question('Storage Device(cd, dvd, blueray, tarjeta, cartucho): '),
                readline.question('Color: ')
                );
    plataformas.push(plataforma)
    masPlataformas = readline.question('Hay mas plataformas?(si/no) ') === 'no'
}
//Juegos
let masGames = false;
let games: Videogame[] = [];
while(!masGames){
    let game = new Videogame(readline.question('Games\nTitle: '),
                Number(readline.question('Year: ')),
                desarrolladores,
                readline.question('Nationality: '),
                new Person(readline.question('Director\nName: '),
                readline.question('Nationality: '),
                readline.question('Profession(developer, tester, manager, director): '),
                Number(readline.question('Experience: '))
                ),
                readline.question('Has HD(true/false): '),
                plataformas,
                Number(readline.question('Price: ')),
                readline.question('Score(0-10): ')
                );
    games.push(game)
    masGames = readline.question('Hay mas juegos?(si/no) ') === 'no'
}

let coleccion = new HobbyGame(games);
coleccion.escribirEnFicheroJson('Interactive');