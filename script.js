const numberOfFilm = +prompt('How many films are you watched?', '');

const personalmovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What is the last film you watch?',''),
      b = prompt('How did you rate this film?',''),
      c = prompt('What is the last film you watch?',''),
      d = prompt('How did you rate this film?','');

personalmovieDB.movies[a] = b;
personalmovieDB.movies[c] = d;

console.log(personalmovieDB);