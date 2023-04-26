
 var articletext='';

function ajouttxt(text,images,titre){


return `

<div class="pc" >
    <a href="pagepc.html"><img src="${images}" alt="PC de couleur rose"></a>
    <h4>25 avril 2023</h4>
    <h2>${titre}</h2>
    <p>${text}</p>
    <a class="souligne" href="pagepc.html">EN SAVOIR PLUS</a>
</div>
<div class="pc">
    <a href="pagepc.html"><img src="${images}" alt="PC de couleur rose"></a>
    <h4>25 avril 2023</h4>
    <h2>${titre}</h2>
    <p>${text}</p>           
     <a class="souligne" href="pagepcn.html">EN SAVOIR PLUS</a>
</div>` 
}

articletext = articletext + ajouttxt("ok",'img/pcnoir.jpg',"titre");
articletext = articletext + ajouttxt("ok",'img/pcnoir.jpg',"titre");
articletext = articletext + ajouttxt("ok",'img/pcrose.jpg',"titre");
articletext = articletext + ajouttxt("ok",'img/pcrose.jpg',"titre");
articletext = articletext + ajouttxt("ok",'img/pcrose.jpg',"titre");
articletext = articletext + ajouttxt("ok",'img/pcrose.jpg',"titre");
articletext = articletext + ajouttxt("ok",'img/pcrose.jpg',"titre");


document.getElementById("article").innerHTML=articletext; 