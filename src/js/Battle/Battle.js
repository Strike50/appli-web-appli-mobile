import Actor from '../Actor/Actor.js';
import Item from '../Item/Item.js';

class Battle {

  comparePosition(){
    return true;
  }

  startFight(players, monster){
    players.forEach(player => {
      if(player.hp >= 0){
        player.fight(monster);
      } else {
        return 'vous avez perdu';
      }
      if(monster.hp >= 0){
        monster.fight(player);
      } else {
        return 'vous avez perdu';
      }
      
    });
  }
}

