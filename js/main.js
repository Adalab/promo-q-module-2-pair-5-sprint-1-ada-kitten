'use strict';

const addKitten = document.querySelector(".js-new-form");

addKitten.classList.remove("collapsed");

const kittenCards = document.querySelector (".js-list");

const kittenImage1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenName1 = 'Anastacio';
const kittenDesc =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenRace = 'British Shorthair';

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src=${kittenImage1}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRace}</h4>
  <p class="card_description">
   ${kittenDesc.replace("Ruiseño", "Risueño")}
  </p>
</article>
</li>`;




const kittenImage2 = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenName2 = 'Fiona';


const kittenTwo = `<li class="card">
<img
  class="card_img"
  src=${kittenImage2}
  alt="gatito"
/>
<h3 class="card_title">${kittenName2.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace}</h4>
<p class="card_description">
  ${kittenDesc}
</p>
</li>`;

const kittenImage3 = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenName3 = 'Cielo';

const kittenThree = `<li class="card">
<img
  class="card_img"
  src=${kittenImage3}
  alt="gatito"
/>
<h3 class="card_title">${kittenName3.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace}</h4>
<p class="card_description">
${kittenDesc}
</p>
</li>`;

kittenCards.innerHTML = kittenOne + kittenTwo + kittenThree;



