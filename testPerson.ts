 import {Person} from "./person";
 import {Profession} from "./profession";

let raquel = new Person('Raquel', 'Spanish', Profession.TESTER, 3);
let prueba = new Person('Raquel', 'Spanish', Profession.TESTER, 3);
let prueba2 = new Person('Raquel', 'Spanish', Profession.DEVELOPER, 6);
let alex = new Person('Alex', 'Spanish', Profession.DEVELOPER, 5);

raquel.toString();
console.log('----');
raquel.inDataBase(prueba);
raquel.inDataBase(prueba2);
console.log('----');

console.log(alex.nameToString());


