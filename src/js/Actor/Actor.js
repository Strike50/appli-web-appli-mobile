class Actor {
  constructor(name, hp, damage){
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  fight(target){
    target.hp = target.hp - this.damage;
  }

  toString(){
    return this.name + ' possède ' + this.hp + ' points de vies et '+ this.damage + ' points d\'attaque.';
  }
}

export default Actor;
