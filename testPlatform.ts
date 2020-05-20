import {Platform} from "./platform";
import {storageDevice} from "./storageDevice";

let plat1 = new Platform('playStation4', 2015, 'Sony', 64, 4, true, 268, true, storageDevice.CD, 'black');
let plat2 = new Platform('playStation4', 2015, 'Sony', 64, 4, true, 268, true, storageDevice.CD, 'black');
let plat3 = new Platform('playStation4', 2015, 'Sony', 64, 4, true, 268, true, storageDevice.CD, 'whithe');

plat1.printPlatform();
console.log('----');
plat1.toStringPlatform();
console.log('----');
console.log(plat1.alreadyIN(plat2));
console.log(plat1.alreadyIN(plat3));