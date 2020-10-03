"use strict";

const numberOfFilms = +prompt("How many films have you watched?","");

let personalMovieDB = {
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false
};

var i;
for (i = 0; i < 2; i++) {
  let filmWatched = prompt("One of the latest movies you've watched?","");
  let filmRate = prompt("What score would you give to this movie?","");
  personalMovieDB.movies[filmWatched] = filmRate;
}

console.log(personalMovieDB.movies);