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
      while (this.monster.hp > 0) {
        this.players.forEach(player => {
          player.fight(this.monster);
          console.log(this.monster.toString());
        });
        if(this.monster.hp <= 0){
          isMonsterDead = true;
        }
        const playerSelected = this.getRandomInt(this.players.length);
        if (this.players[playerSelected].hp > 0 && !isMonsterDead) {
          this.monster.fight(this.players[playerSelected]);
        }
      }
    }
  }
}


export default Battle;
