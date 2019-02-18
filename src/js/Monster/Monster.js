import Actor from "../Actor/Actor.js";

class Monster extends Actor {
  latitude;
  longitude;

  apparitionFrequency;

  constructor(name, hp, strength, latitude, longitude, apparitionFrequency) {
    super(name, hp, strength);
    
    this.latitude = latitude;
    this.longitude = longitude;
    this.apparitionFrequency = apparitionFrequency;
  }
}
