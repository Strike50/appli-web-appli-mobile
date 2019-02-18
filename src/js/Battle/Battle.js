import Player from '../Player/Player';

class Battle {
  constructor(players, monster){
    this.players=players;
    this.monster=monster;
  }

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
        player.xp=player.xp+monster.xp
        player.item = player.item.push(monster.item)
        return 'vous avez gagné';
      }

    });
  }
}

export default Battle;
