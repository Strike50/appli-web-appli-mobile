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

  startFight(players, monster) {
    if (this.comparePosition() === true) {
      while (monster.hp > 0) {
        players.forEach(player => {
          player.fight(monster);
        });
        const playerSelected = this.getRandomInt(players.length + 1);
        if (players[playerSelected].hp > 0) {
          monster.fight(players[playerSelected]);
        }
      }
    }
  }
}


export default Battle;
