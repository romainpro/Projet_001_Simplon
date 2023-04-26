 
 
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies mi facilisis libero sollicitudin vulputate. Mauris facilisis vestibulum nisi, at viverra aridcu interdum .' 
const titre1 = '25 avril 2023'
const titre2 = 'lorem ipsum dolor sit amret'


 var articletext='';

function ajouttxt(text,images,titre1,titre2){


return `

<div class="pc" >
    <a href="pagepc.html"><img class="images" src="${images}" alt="PC de couleur rose"></a>
    <h4>${titre1}</h4>
    <h2>${titre2}</h2>
    <p>${text}</p>
    <a class="souligne" href="pagepc.html">EN SAVOIR PLUS</a>
</div>` 
}

articletext = articletext + ajouttxt(lorem,'img/image_001.jpg',titre1,titre2);
articletext = articletext + ajouttxt(lorem,'img/image_002.jpg',titre1,titre2);
articletext = articletext + ajouttxt(lorem,'img/image_003.jpg',titre1,titre2);
articletext = articletext + ajouttxt(lorem,'img/image_001.jpg',titre1,titre2);
articletext = articletext + ajouttxt(lorem,'img/image_002.jpg',titre1,titre2);
articletext = articletext + ajouttxt(lorem,'img/image_003.jpg',titre1,titre2);


document.getElementById("article").innerHTML=articletext; 