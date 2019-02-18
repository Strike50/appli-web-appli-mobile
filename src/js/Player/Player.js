import Actor from '../Actor/Actor.js';

class Player extends Actor {
  constructor(name, hp, love, xp) {
    super(name, hp, love);
    this.xp = xp;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemIndex) {
    this.items.remove(itemIndex);
  }

}

export default Player;
