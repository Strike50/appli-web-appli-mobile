class Actor {
  constructor(name, hp, damage, picture){
    this.name = name;
    this.hp = hp;
    this.damage = damage;
    this.picture = picture;
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
