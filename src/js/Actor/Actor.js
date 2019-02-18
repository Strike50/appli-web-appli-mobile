class Actor {
  constructor(name, hp, damage){
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  fight(target){
    const remainingLife = target.hp - this.damage;
    if(remainingLife < 0){
      target.hp = 0;
    }else{
      target.hp = remainingLife;
    }
  }

  toString(){
    return this.name + ' possède ' + this.hp + ' points de vies et ' + this.damage + ' points d\'attaque.';
  }
}

export default Actor;
