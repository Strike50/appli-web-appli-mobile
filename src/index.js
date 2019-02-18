import axios from 'axios';

import Player from './js/Player/Player.js';
import Monster from './js/Monster/Monster.js';
import Item from './js/Item/Item.js';
import Battle from './js/Battle/Battle.js';

let p = new Player('Ronan', 3, 500, 0);
let m = new Monster('Enki', 1, 1, 0, 0, 30, 30);
let i = new Item('Anneau de Chouffe', 'Un litre et demi de Chouffe', 0, 6000);
console.log(p);
console.log(m);
console.log(i);
console.log('Le combat commence !!');
p.addItem(i);
let listPlayer = [p];
let b = new Battle(listPlayer, m);
console.log('res: ');
b.startFight();
axios.post('https://swordartonlinemobile-epsi.firebaseio.com/players.json', listPlayer)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });