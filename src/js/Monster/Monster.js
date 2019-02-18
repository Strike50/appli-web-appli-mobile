import Actor from '../Actor/Actor.js';

class Monster extends Actor {
  constructor(name, hp, strength, latitude, longitude, apparitionFrequency) {
    super(name, hp, strength);

	this.position = new Point(this.latitude, this.longitude);
    this.apparitionFrequency = apparitionFrequency;
  }
}

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
