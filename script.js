// description toggle
const dettails = document.querySelectorAll(".styleDettagli");

function toggleHidden (event){

  const dettail = event.currentTarget;
  const description = dettail.childNodes[1];
  
  if( description.classList.contains('hidden')){
    description.classList.remove("hidden");
  }else{
    description.classList.add("hidden");
  }
}

for(const dettail of dettails){
  dettail.addEventListener("click",toggleHidden);
}
// add esame in prenotati
const esami_prenotati = document.querySelector(".preferiti");
const btns_prenota = document.querySelectorAll(".bottone2");
const esami_prenotabili = document.querySelector("#cont");

function toggle_esame(event){
  const btn = event.currentTarget;
  const esame = event.currentTarget.parentElement;

  if(btn.textContent === "Prenota"){
    esami_prenotati.appendChild(esame);
    btn.textContent = "Rimuovi";
  }else{
    esami_prenotabili.appendChild(esame);
    btn.textContent = "Prenota";
  }
}

for(const btn of btns_prenota){
  btn.addEventListener("click", toggle_esame);
}

// research bar

const searchbar = document.querySelector("#searchbar");
const ricercabili = document.querySelectorAll(".item");
const contenitore_risultati_ricerca = document.querySelector("#ricercati");
const contenitore_esami = document.querySelector("#cont");

function search(event){
  const text = event.currentTarget.value;
  
  if(text !== ""){
    contenitore_esami.classList.add('hidden');
    console.log(contenitore_esami);
    for(const item of ricercabili){
      console.log(item.childNodes[1].textContent);
      if(item.childNodes[1].textContent.includes(text)){
        contenitore_risultati_ricerca.appendChild(item);
      }else{
        contenitore_esami.appendChild(item);
      }
    }
    
  }else{
    contenitore_esami.classList.remove("hidden");
    for(const item of ricercabili){
      contenitore_esami.appendChild(item);
    }
  }

}

searchbar.addEventListener("keyup",search);