class Item{

constructor(Nom,Description,Hp,Damage) {
this.Nom = Nom;
this.Description = Description;
this.Hp = Hp;
this.Damage = Damage;
}

creeItem(){
let Nom = prompt("Entrez le nom de l'item");
let Description = prompt("Entrez une description");
let Hp = prompt("Entrez l'ajout de points de vie qu'apporte l'item");
let Damage = prompt("Entrez l'ajout de dégats qu'apporte l'item");
let item = new Item(Nom,Description,Hp,Damage);
prompt(item);
}

}

export default Item;
