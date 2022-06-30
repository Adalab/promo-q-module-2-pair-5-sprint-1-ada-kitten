'use strict';


const kittenCards = document.querySelector (".js-list");

const url1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const name1 = 'Anastacio';
const desc1 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';


const url2 = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const name2 = 'Fiona';
const desc2 =
  'Cariñoso, dormilón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

const url3 = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const name3 = 'Cielo';
const desc3 =
    'Arisco, hiperactivo le guta mucho jugar a la pelota. Es una maravilla acariciarle!';
  


const race = 'British Shorthair';

const race1 = '';




const input_search_desc = document.querySelector('.js_in_search_desc');

const plusButton = document.querySelector ('.js_plusButton');
const addKitten = document.querySelector('.js-new-form');


const formButton = document.querySelector(".js-btn-add");

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

const searchDesc = document.querySelector('.js_in_search_desc');
const searchRace = document.querySelector ('.js_in_search_race');
const searchBtn = document.querySelector ('.js_search_btn');
const searchMsgError = document.querySelector ('.js-label-search-error');

const cancelBtn = document.querySelector ('.js-btn-cancel');
const inputRace = document.querySelector ('.js-input-race');



let race1ToDisplay;

if (race1 === "") {
  race1ToDisplay = `No se ha especificado la raza`;
} else {
  race1ToDisplay = race1;
}




// input_search_desc.value = 'hiperactivo';

// const descrSearchText = input_search_desc.value;

// if( kittenDesc1.includes(descrSearchText) ) {
//   kittenCards.innerHTML = kittenOne;
//   }
  
//   if( kittenDesc2.includes(descrSearchText) ) {
//     kittenCards.innerHTML = kittenTwo;
//   }
  
//   if( kittenDesc3.includes(descrSearchText) ) {
//     kittenCards.innerHTML = kittenThree;
//   }





 formButton.addEventListener('click',(event)=>{
  event.preventDefault()
 console.log("He clickado");

const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;

if (valueDesc === '' || valuePhoto === '' || valueName === '') {
  labelMesageError.innerHTML = "Debe rellenar todos los valores";
} 
else {
  labelMesageError.innerHTML = "";
}
});



function handleClick (ev) {
  ev.preventDefault();

  const valueDesc = searchDesc.value;
  const valueRace = searchRace.value;

  if (valueDesc === '' && valueRace === '') {
    searchMsgError.innerHTML = "Debe rellenar alguno de los valores";
  } 
  else {
    searchMsgError.innerHTML = "";
  }
};

searchBtn.addEventListener ('click', handleClick);




cancelBtn.addEventListener('click',(event)=>{
 event.preventDefault();

 addKitten.classList.add('collapsed');
 inputPhoto.value ="";
 inputName.value ="";
 inputRace.value ="";
 inputDesc.value="";

});


 /*plusButton.addEventListener('click',(event)=>{
  event.preventDefault()
  console.log("He clickado");
  if (addKitten.classList.contains('collapsed')){
    addKitten.classList.remove('collapsed'); 
  } else {
    addKitten.classList.add('collapsed');
  }

 });

 ESTO EQUIVALE A LO DE ABAJO
*/

function showAddKitten() {
  addKitten.classList.remove('collapsed');
}
function hideAddKitten() {
  addKitten.classList.add('collapsed');
}

function handleClickAddKitten(event) {
  event.preventDefault();
  if (addKitten.classList.contains('collapsed')) {
    showAddKitten();
  } else {
    hideAddKitten();
  }
}

plusButton.addEventListener('click', handleClickAddKitten);


/*
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src=${kittenImage1}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRace1ToDisplay}</h4>
  <p class="card_description">
   ${kittenDesc1.replace("Ruiseño", "Risueño")}
  </p>
</article>
</li>`;




const kittenTwo = `<li class="card">
<img
  class="card_img"
  src=${kittenImage2}
  alt="gatito"
/>
<h3 class="card_title">${kittenName2.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace}</h4>
<p class="card_description">
  ${kittenDesc2}
</p>
</li>`;



const kittenThree = `<li class="card">
<img
  class="card_img"
  src=${kittenImage3}
  alt="gatito"
/>
<h3 class="card_title">${kittenName3.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace}</h4>
<p class="card_description">
${kittenDesc3}
</p>
</li>`;

kittenCards.innerHTML = kittenOne + kittenTwo + kittenThree;


TODO ESTO EQUIVALE A LO DE ABAJO
*/

function renderKitten(url, desc, name, race) {
  return`<li class="card">
<img
  class="card_img"
  src=${url}
  alt="gatito"
/>
<h3 class="card_title">${name.toUpperCase()}</h3>
<h4 class="card_race">${race}</h4>
<p class="card_description">
${desc}
</p>
</li>`;
  
}

kittenCards.innerHTML += renderKitten(url1,desc1,name1,race1);
kittenCards.innerHTML += renderKitten(url2,desc2,name2,race);
kittenCards.innerHTML += renderKitten(url3,desc3,name3,race);