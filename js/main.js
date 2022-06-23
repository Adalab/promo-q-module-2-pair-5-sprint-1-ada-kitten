'use strict';

const addKitten = document.querySelector(".js-new-form");

addKitten.classList.remove("collapsed");

const kittenOne = document.querySelector (".js-list");

kittenOne = <li class="card">
<article>
  <img
    class="card_img"
    src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">British Shorthair</h4>
  <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
  </p>
</article>
</li>;

//preguntar si hay que poner un innerHTML o un add o algo