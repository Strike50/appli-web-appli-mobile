import $ from 'jquery';
class Battle {
  constructor(players, monster) {
    this.players = players;
    this.monster = monster;
  }

  comparePosition() {
    return true;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  startFight() {
    if (this.comparePosition() === true) {
      let isMonsterDead = false;
      let isPlayerDead = false;
      while (isMonsterDead === false && isPlayerDead === false) {
        const playerSelected = this.getRandomInt(this.players.length);

        if(this.players[playerSelected].hp <= 0){
          isPlayerDead = true;
       }
       
        if (this.players[playerSelected].hp > 0 && !isMonsterDead) {
          this.players[playerSelected].fight(this.monster);
          $("#ennemy").after("<li>"+this.monster.toString()+"</li>")
        }
        
        if(this.monster.hp <= 0){
          isMonsterDead = true;
        }
        
        if (this.players[playerSelected].hp > 0 && !isMonsterDead) {
          this.monster.fight(this.players[playerSelected]);
          $("#player"+playerSelected).after("<li>"+this.players[playerSelected].toString()+"</li>")
        }
      }

    }
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

}


export default Battle;
