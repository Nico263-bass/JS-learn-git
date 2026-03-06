 /* création d'un panier E-commerce dynamique */
 const newItem=document.getElementsByClassName('gritem');
 function insert(){
     for (let i = 0; i < newItem.length; i++) {
         newItem[i].classList.add('test')
     }
 };
 insert();
 const info=document.querySelectorAll('.gritem');
     const putInfo=()=>{
      info.forEach(i=>{
       newInfo=document.createElement('div');
 /* ajout du style au nouvel élément crée appelé j */
  const  j=i.appendChild(newInfo);
      j.classList.add('info')
      
    }) };
 putInfo(); 
/* Insertion automatique des informations de chaque article*/
//  pour JS, chaque article a: .gritem >img+.info>(.blocinfo(p-- nomArticle+ span--Comment))+P--prix +.stars avec 5 étoiles
class artcile {
    constructor(Id,nom, prix, comment){
        this.nom = nom;
        this.prix = prix;
        this.comment = comment;
    }
    getName() {
        return this.nom;
    }
}
/*création des articles partant de la classe définie ci-haut*/
const art_1=new artcile(1,'Samsung Galaxie',350.49,'Résistant à l\'eau');
const art_2=new artcile(2,'Iphone 16',960,'Excellent rapport qualité prix');
const art_3=new artcile(3,'Iphone 17 pro',1380.89,'le meilleur smartphone du marché en terme d\'autonomie et de qualité photo')
const art_4=new artcile(4,'Tecno camon 9',190,'Meilleur choix pour moins cher')
const panier=[art_1,art_2,art_3,art_4];
