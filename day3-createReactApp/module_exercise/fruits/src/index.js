import items from './food';
import { choice, remove } from './helpers';


var fruit = choice(items);
console.log('I would like to have ' + fruit + ' please');
console.log('Here you go' + fruit);
console.log('Delicious! May I have another ?');

let remaining = remove(items, fruit);
console.log("Sorry the we are left with" + remaining.length + ' fruits');


