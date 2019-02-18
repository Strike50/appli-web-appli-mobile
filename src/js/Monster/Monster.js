import Actor from "../Actor/Actor.js";

class Monster extends Actor {

  strength;

  constructor(name, hp, strength) {
    super(name, hp);

    this.strength = strength;
  }
}