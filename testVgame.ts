import {Videogame} from "./videogame";
import {Platform} from "./platform";
import {Person} from "./person";
import {HobbyGame} from "./hobbyGame";

//Persons
let raquel = new Person('Raquel', 'Spanish', 'Tester', 3);
let jorge = new Person('Jorge', 'Spanish', 'Tester', 3);
let alfredo = new Person('Alfredo', 'Spanish', 'Director', 6);
let alex = new Person('Alex', 'Spanish', 'Developer', 5);
//Platforms
let PS4 = new Platform('PS4', 2015, 'Sony', 64, 4, true, 268, true, 'CD', 'black');
let Xbox = new Platform('Xbox', 2015, 'Microsoft', 64, 4, true, 268, true, 'CD', 'black');
let NS64 = new Platform('NS64', 2015, 'Nintendo', 64, 4, true, 268, true, 'CD', 'whithe');
//Games
let Game1 = new Videogame('Final Fantasy X', 2008, [alex, jorge], 'Japanese', alfredo, ['Spanish', 'English', 'Japanese'], [PS4, Xbox, NS64], 70, 10);
let Game2 = new Videogame('Final Fantasy IV', 2005, [alex, alfredo], 'Japanese', raquel, ['Spanish', 'English', 'Japanese'], [PS4, NS64], 50, 3);
//HobbyGame
let hooby1 = new HobbyGame([Game1, Game2]);


//Test VideoGame
// Game1.printVideojuego();
// console.log('----');
// Game1.toStringVideogame();
// console.log('----');
// console.log(Game1.inLanguage('Spanish'))
// console.log('----');
// console.log(Game1.isInPlatform('Xbox'))
// console.log('----');
// console.log(Game1.gameDeveloper(raquel));
// console.log(Game1.gameDeveloper(alex));

//Test HOBBYGAME
console.log(hooby1.totalPrice());
console.log('----');
console.log(hooby1.totalPricePlatform('Xbox'));
console.log('----');
console.log(hooby1.inLang('Japanese'))
console.log('----');
console.log(hooby1.ofDeveloper(alex));
console.log('----');
console.log(hooby1.inPlatAndLang('Xbox', 'Japanese'));
console.log('----');
console.log(hooby1.byScore());