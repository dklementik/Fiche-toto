function compteur(){
     var varJSCpt= document.getElementById("pCpt");

     var nombre=parseInt(varJSCpt.innerHTML);

       varJSCpt.innerHTML=nombre + 1;

}

function afficherPhoto(objet){
   console.log("function afficherPhoto appelée");
    // objet.className="zoomImage";
      if(objet.className=="zoomImage") {// l'image est grossie
        objet.className="";
      }
        else {                          //l'image est normale
          objet.className="zoomImage";
        }
      }
