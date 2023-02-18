'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const ad = document.querySelectorAll('.promo__adv img'),
promo = document.querySelector('.promo__genre'),
bgFone = document.querySelector('.promo__bg'),
listOfFilms = document.querySelector('.promo__interactive-list');


ad.forEach(block =>{
    block.remove();
});

promo.textContent = 'ДРАМА';

bgFone.style.backgroundImage = 'url("../img/bg.jpg")';

listOfFilms.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((item, i)=>{
listOfFilms.innerHTML += `
<li class="promo__interactive-item">${i+1}. ${item}
    <div class="delete"></div>
</li>
`;
});


