import Actor from "../Actor/Actor.js";

class Player extends Actor {

  love;

  constructor(name, hp, love) {
    super(name, hp, love);

    this.love = love;
  }


}
