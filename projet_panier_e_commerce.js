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
const panier=[new article(1,'Samsung Galaxie',350.49,'Résistant à l\'eau Meilleur choix pour pas cher Lorem, ipsum dolor.' ,'images/iPhone16,2.png'),
    new article(2,'Iphone 16',960,'Excellent rapport qualité Meilleur choix pour pas cher Lore.','images/iPhone18,3.png'),
    new article(3,'Iphone 17 pro',1380.89,'Lorem, ipsum dolor Lorem ipsum dolor Lorem, ipsum.','images/iPad14,10.png'),
    new article(4,'Mac17,2',190,'Meilleur choix ipsum dolor Lorem ipsum dolor Lorem','images/Mac17,2.png'),
    new article(5,'iPad16,10',850.77,'Meilleur choix pour pas cher Lorem, ipsum dolor.','images/iPad16,10.png'),
    new article(6,'Mac14,8.',190,'Lorem, ipsum dolor ipsum dolor Lorem.','images/Mac14,8.png'),
    new article(7,'AudioAccessory5,1',1450.55,'Lorem, ipsum dolor ipsum dolor Lorem.','images/AudioAccessory5,1.png'),
    new article(8,'AppleTV6,2',1600.00,'Lorem, ipsum dolor ipsum dolor Lorem.','images/AppleTV6,2.png'),
    new article(9,'iPod5,1',1000,'Lorem, ipsum dolor ipsum dolor Lorem.','images/iPod5,1.png'),
    new article(10,'Mac16,9',490,'Meilleur choix ipsum dolor Lorem','images/Mac16,9.png'),
    new article(11,'Samsung A33',2100,'rien à signaler ipsum dolor Lorem','images/samsung.png'),
];
/* *********************************panier d'article ajouté*********************************************** */
const panierAchat=[];
/* ------------------------------------------------------------------------------------------------------- */
const   section=document.querySelector('.img');
panier.forEach(i=>{
    const   gritem=document.createElement('div');
            gritem.classList.add('gritem');
            gritem.classList.add('test');
            section.appendChild(gritem);
    const   img=document.createElement('img');
            img.src=i.img;
            gritem.appendChild(img);
  /* ajout des informations: nom,description et prix */
    const   info=document.createElement('div');
            info.classList.add('info');
            gritem.appendChild(info);
    const   name=document.createElement('p');
            name.classList.add('NomProduit')
            name.textContent=i.nom;
            info.appendChild(name);
    /* ***************************ajout de la description du produit************************************************************************/
    const   descProduit=document.createElement('p');
            descProduit.classList.add('descProduit');
            descProduit.textContent=i.comment;
            info.appendChild(descProduit);
    /* *******************bouton ajouter au panier ***********************/
    const   btn=document.createElement('button');
            btn.classList.add('btn')
            btn.textContent='Ajouter';
            info.appendChild(btn);
/**********************Création du badge du panier article *******************************/
            btn.addEventListener('click',()=>{
                const ajoutArticle=document.querySelector('.active');
                      panierAchat.push(i);
                      ajoutArticle.textContent=panierAchat.length;
                      ajoutArticle.classList.add('badge')
                      console.log(panierAchat);
            });
            btn.addEventListener('click',()=>{
                panierAchat.forEach(item=>{
                        alert(`le panier contient ${item.nom}`)
                })
            })
  
    const   prix=document.createElement('p');
            prix.textContent=`${i.prix} $`;
            prix.classList.add('prix');
            info.append(prix);
});


 