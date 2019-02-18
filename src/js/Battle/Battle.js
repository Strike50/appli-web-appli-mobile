import Player from '../Player/Player';
import Actor from '../Actor/Actor.js';
import Item from '../Item/Item.js';

class Battle {
  constructor(players, monster){
    this.players=players;
    this.monster=monster;
  }

  comparePosition(){
    return true;
  }

  startFight(players, monster){
    startFight(players, monster){
      if(this.comparePosition() == true){
        while(monster.hp > 0){
          players.forEach(player => {
            player.fight(monster);
          });
          playerSelected = getRandomInt(players.length + 1)
          if(players[playerSelected].hp > 0){
          monster.fight(players[playerSelected]);
        }
        }
      }    
    }
  }
  }
}

export default Battle;
