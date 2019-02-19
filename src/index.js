import axios from 'axios';
import $ from 'jquery'
import Player from './js/Player/Player.js';
import Monster from './js/Monster/Monster.js';
import Item from './js/Item/Item.js';
import Battle from './js/Battle/Battle.js';

let p = new Player('Ronan', 300, 500, 0, "/dist/img/Battlers/Bandit.png");
let p2 = new Player('Ronan2', 400, 200, 0, "/dist/img/Battlers/Hero_f.png");
let m = new Monster('Enki', 9999, 1, "/dist/img/Battlers/rat.png", 0, 0, 30, 30);
let i = new Item('Anneau de Chouffe', 'Un litre et demi de Chouffe', 0, 6000);
$(document).ready(function(){
  $("#ennemy").attr("src", m.picture);
  $("#player0").attr("src", p.picture);
  $("#player1").attr("src", p2.picture);
});

console.log(p);
console.log(m);
console.log(i);
console.log('Le combat commence !!');
p.addItem(i);
let listPlayer = [p,p2];
let b = new Battle(listPlayer, m);
console.log('res: ');
b.startFight();
/*axios.post('https://swordartonlinemobile-epsi.firebaseio.com/players.json', listPlayer)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });*/