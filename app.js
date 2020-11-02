// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let formulaire = document.querySelector('#formulaire');
let error = document.querySelector('small');


// Etape 2 - Cacher l'erreur
error.style = 'display:none';
// Etape 3 - Générer un nombre aléatoire

let nombreAleatoire = Math.floor(Math.random()*1001);
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier

function verifier (nombre){
  let instruction = document.createElement('div');
  
  
  if(nombre < nombreAleatoire){
    instruction.className = 'instruction plus';   
    instruction.textContent = coups+ "# " + "(" + nombre +") " + "C'est plus ! ";
    
  }  
      else if(nombre > nombreAleatoire){
          instruction.className = 'instruction moins';
          
          instruction.textContent = coups + "# " + "(" + nombre +") " + "C'est Moins ! ";
          
      }
        else{
          instruction.className = 'instruction fini';
          instruction.textContent = coups + "# " + "(" + nombre + ") " + "c'est le juste prix !";
          input.disabled = true;
          
        }
  
    document.querySelector("#instructions").prepend(instruction);
};

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener('keyup',()=>{
  
  if(isNaN(input.value)){
    error.style.display = 'inline';
  }else{
    error.style.display = 'none';
  }
});


// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener("submit",(e)=>{
  e.preventDefault();
  
  if(isNaN(input.value) || input.value == ""){
    
    prix.style.borderColor = 'red';
  }else{
    coups++;
    prix.style.borderColor = 'silver';
    nombreChoisi = input.value;
    input.value = '';
    verifier(nombreChoisi);
  };
  
});
