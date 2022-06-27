'use strict';

const addKitten = document.querySelector(".js-new-form");


if (addKitten.classList.contains('.collapsed')) {
  addKitten.classList.remove(".collapsed"); 
} else {
  addKitten.classList.add(".collapsed");
}

const kittenCards = document.querySelector (".js-list");

const kittenImage1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenName1 = 'Anastacio';
const kittenDesc1 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';


const kittenRace = 'British Shorthair';

const kittenRace1 = '';

let kittenRace1ToDisplay;

if (kittenRace1 === "") {
  kittenRace1ToDisplay = `No se ha especificado la raza`;
} else {
  kittenRace1ToDisplay = kittenRace1;
}

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




const kittenImage2 = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenName2 = 'Fiona';
const kittenDesc2 =
  'Cariñoso, dormilón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';


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

const kittenImage3 = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenName3 = 'Cielo';
const kittenDesc3 =
  'Arisco, hiperactivo le guta mucho jugar a la pelota. Es una maravilla acariciarle!';

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

const input_search_desc = document.querySelector('.js_in_search_desc');

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


  


