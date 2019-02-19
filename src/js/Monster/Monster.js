import Actor from '../Actor/Actor.js';

class Monster extends Actor {
  constructor(name, hp, strength, picture, latitude, longitude, apparitionFrequency, xp) {
    super(name, hp, strength, picture);
    this.position = new Point(this.latitude, this.longitude);
    this.apparitionFrequency = apparitionFrequency;
    this.xp = xp;
  }
}

export default Monster;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
