import Actor from '../Actor/Actor.js';

class Player extends Actor {
  constructor(name, hp, love, xp, picture) {
    super(name, hp, love, picture);
    this.xp = xp;
    this.items = [];
    this.picture = picture;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemIndex) {
    this.items.remove(itemIndex);
  }

}

export default Player;
