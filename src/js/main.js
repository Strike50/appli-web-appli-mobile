import Player from './Player/Player.js';
import Monster from './Monster/Monster.js';
import Item from './Item/Item.js';
import Battle from './Battle/Battle.js';

let p = new Player('Ronan', 3, 500, 0);
let m = new Monster('Enki', 1, 1, 0, 0, 30, 30);
let i = new Item('Anneau de Chouffe', 'Un litre et demi de Chouffe', 0, 6000);
p.addItem(i);
let listPlayer = [p];
let b = new Battle(listPlayer, m);
b.startFight();

