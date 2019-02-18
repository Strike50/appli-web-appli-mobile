class Actor {
  constructor(name, hp, damage){
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  fight(target){
    target.hp -= this.damage;
  }
}

export default Actor;
