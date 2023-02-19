'use strict';

document.addEventListener('DOMContentLoaded', () => {


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
        listOfFilms = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substr(0, 21)}...`;
            }

            if (favorite) {
                console.log(`${newFilm}: Избранный вами фильм`);
            }

            movieDB.movies.push(newFilm);
            ArrSort(movieDB.movies);
            createMovieList(movieDB.movies, listOfFilms);
        }


        event.target.reset();
    });



    const deleteAdv = (arr) => {
        arr.forEach(block => {
            block.remove();
        });
    };


    const makeChanges = () => {
        promo.textContent = 'ДРАМА';

        bgFone.style.backgroundImage = 'url("../img/bg.jpg")';
    };


    function ArrSort(arr) {
        arr.sort();
    };

    function createMovieList(element, selector) {
        selector.innerHTML = '';
        ArrSort(movieDB.movies);

        element.forEach((item, i) => {
            selector.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${item}
        <div class="delete"></div>
    </li>
    `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {

            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(element, selector);
            });

        });
    };



    deleteAdv(ad);
    makeChanges();
    createMovieList(movieDB.movies, listOfFilms);

});
