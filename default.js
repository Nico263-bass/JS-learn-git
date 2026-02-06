let user=function (Id,nom,postNom,preNom,sexe,age){
  this.nom=nom;
  this.postNom=postNom;
  this.preNom=preNom;
  this.sexe=sexe;
  this.age=age;
  this.Id=Id;
};
user.prototype.Info=function (){
 return console.log (`je suis ${this.age}`)
};
user.prototype.estAdult=function (){
  if(this.age>=18){
    return true;
  }
  else {
    return false;
  }
};
let firstUser=new user(2,'BOMOLO','BOKENYOLA','NICO','M',25);
console.log(('2')==NaN)