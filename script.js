const numberOfFilm = prompt('How many films did you watched?', '');

const personalmovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i < 2; i++) {
    const a = prompt('What is the last film you watch?',''),
          b = prompt('How did you rate this film?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

console.log(personalmovieDB);