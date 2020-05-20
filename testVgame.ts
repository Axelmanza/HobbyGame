import {Videogame} from "./videogame";
import {Platform} from "./platform";
import {Person} from "./person";
//Persons
let raquel = new Person('Raquel', 'Spanish', 'Tester', 3);
let jorge = new Person('Jorge', 'Spanish', 'Tester', 3);
let alfredo = new Person('Alfredo', 'Spanish', 'Director', 6);
let alex = new Person('Alex', 'Spanish', 'Developer', 5);
//Platforms
let PS4 = new Platform('PS4', 2015, 'Sony', 64, 4, true, 268, true, 'CD', 'black');
let Xbox = new Platform('Xbox', 2015, 'Microsoft', 64, 4, true, 268, true, 'CD', 'black');
let NS64 = new Platform('NS64', 2015, 'Nintendo', 64, 4, true, 268, true, 'CD', 'whithe');

let Game1 = new Videogame('Final Fantasy X', 2008, [alex, jorge], 'Japanese', alfredo, ['Spanish', 'English'], [PS4, Xbox, NS64], 70, 9);

Game1.printVideojuego();
console.log('----');
Game1.toStringVideogame();
console.log('----');
console.log(Game1.inLanguage('Spanish')); //true
console.log('----');
console.log(Game1.isInPlatform('Xbox')); //true
console.log('----');
console.log(Game1.gameDeveloper(raquel)); //false
console.log(Game1.gameDeveloper(alex)); //true


