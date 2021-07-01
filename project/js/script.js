/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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


    const sortArr = (arr) => {
        arr.sort();
    };
    sortArr(movieDB.movies);

    const list = document.querySelector('.promo__interactive-list');

    const imgs = document.querySelectorAll('.promo__adv img');

   const deleteImgs = (imgs) => {
       imgs.forEach(item => {
           item.remove();
       });
   };
   deleteImgs(imgs);

    const bg = document.querySelector('.promo__genre');

    const promo = document.querySelector('.promo__bg');

   const makeChanges = () => {
       bg.textContent = 'драма';

       promo.style.background = 'url("img/bg.jpg") center center/cover no-repeat';
   };
   makeChanges();


    function createMovieList(films, parent) {
        parent.innerHTML = "";

        films.forEach((film, i) => {
           parent.innerHTML += `
        <li class="promo__interactive-item"> ${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
        });
    }
    createMovieList(movieDB.movies, list);


    const addForm = document.querySelector('form.add'),
        input = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newFilm = input.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, list);
        }
        e.target.reset();
    });
});