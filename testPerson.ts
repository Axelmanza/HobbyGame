 import {Person} from "./person";

let raquel = new Person('Raquel', 'Spanish', 'Tester', 3);
let prueba = new Person('Raquel', 'Spanish', 'Tester', 3);
let prueba2 = new Person('Raquel', 'Spanish', 'Tester', 6);
let alex = new Person('Alex', 'Spanish', 'Developer', 5);

raquel.toString();
console.log('----');
raquel.inDataBase(prueba);
raquel.inDataBase(prueba2);
console.log('----');
alex.printPerson();

