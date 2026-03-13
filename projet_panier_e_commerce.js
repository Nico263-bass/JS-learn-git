 /* création d'un panier E-commerce dynamique */
/* Insertion automatique des informations de chaque article*/

//  pour JS, chaque article a: .gritem >img+.info>(.blocinfo(p-- nomArticle+ span--Comment))+P--prix +.stars avec 5 étoiles
class article {
    constructor(Id,nom, prix, comment,img){
        this.nom = nom;
        this.prix = prix;
        this.comment = comment;
        this.id=Id;
        this.img=img;
    }
}
/*création des articles partant de la classe définie ci-haut*/
/* exemple d'artcle */
const panier=[new article(1,'Samsung Galaxie',350.49,'Résistant à l\'eau','images/iPhone16,2.png'),
    new article(2,'Iphone 16',960,'Excellent rapport qualité prix','images/iPhone18,3.png'),
    new article(3,'Iphone 17 pro',1380.89,'le meilleur smartphone du marché en terme d\'autonomie et de qualité photo','images/iPad14,10.png'),
    new article(4,'Mac17,2',190,'Meilleur choix pour moins cher','images/Mac17,2.png'),
    new article(5,'iPad16,10',190,'Meilleur choix pour moins cher','images/iPad16,10.png'),
    new article(6,'Mac14,8.',190,'Meilleur choix pour moins cher','images/Mac14,8.png'),
    new article(7,'AudioAccessory5,1',190,'Meilleur choix pour moins cher','images/AudioAccessory5,1.png'),
    new article(8,'AppleTV6,2',190,'Meilleur choix pour moins cher','images/AppleTV6,2.png'),
    new article(9,'iPod5,1',190,'Meilleur choix pour moins cher','images/iPod5,1.png'),
    new article(10,'Mac16,9',190,'Meilleur choix pour moins cher','images/Mac16,9.png'),
    new article(11,'Samsung A33',920,'rien à signaler','images/samsung.png')
];
/* ------------------------------------------------------------------------------------------------------- */
const   section=document.querySelector('.img');
panier.forEach(i=>{
    const   gritem=document.createElement('div');
            gritem.classList.add('gritem');
            gritem.classList.add('test');
            section.appendChild(gritem);
    const img=document.createElement('img');
            img.src=i.img;
            gritem.appendChild(img);
  /* ajout des informations: nom,description et prix */
    const info=document.createElement('div');
          info.classList.add('info');
          gritem.appendChild(info);
    const name=document.createElement('p');
          name.textContent=i.nom;
          info.appendChild(name);
         
            
});
    /* Ajout de l'image et des informations sur le produit */
  
        
//            
//             
//   
//     const   name=document.createElement('span');
//             name.textContent=i.nom;
//     const   info=document.querySelectorAll('.gritem');
//             info.forEach(index=>{
//                 const NewInfo=document.createElement('div');
//                       NewInfo.classList.add('info');
//                       index.appendChild(NewInfo);
//             })
// });
/* exécution de la fonction putInfo qui affiche les informations sur le produit dans le div gritem */
 


 