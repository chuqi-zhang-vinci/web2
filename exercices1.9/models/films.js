const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');

const defaultFilms = 
[
    {
        id : 1,
        title : "The Shawshank Redemption",
        duration : 142,
        budget : 10,
        link : "https://www.moviemeter.nl/film/273",
    },

    {
        id : 2,
        title : "The Godfather",
        duration : 175,
        budget : 11,
        link : "https://www.moviemeter.nl/film/320",
    },
    
    {
        id : 3,
        title : "The Godfather: Part II",
        duration : 202, 
        budget : 15,
        link : "https://www.moviemeter.nl/film/321",
    }
];

function readAllFilms(minimumDuration) {
  const films = parse(jsonDbPath, defaultFilms);

  if (minimumDuration === undefined) return films;

  const minimumDurationAsNumber = Number(minimumDuration);
  if (Number.isNaN(minimumDurationAsNumber) || minimumDurationAsNumber < 0) return undefined;

  const filmsReachingMinimumDuration = films.filter((film) => film.duration >= minimumDuration);
  return filmsReachingMinimumDuration;
}

function readOneFilm(id) {
  const idAsNumber = Number(id);
  const films = parse(jsonDbPath, defaultFilms);
  const indexOfFilmFound = films.findIndex((pizza) => pizza.id === idAsNumber);
  if (indexOfFilmFound < 0) return undefined;

  return films[indexOfFilmFound];
}

function createOneFilm(title, link, duration, budget) {
  const films = parse(jsonDbPath, defaultFilms);

  const createdFilm = {
    id: getNextId(),
    title,
    link,
    duration,
    budget,
  };

  films.push(createdFilm);

  serialize(jsonDbPath, films);

  return createdFilm;
}

function getNextId() {
  const films = parse(jsonDbPath,  defaultFilms);
  const lastItemIndex = films?.length !== 0 ? films.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = films[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

module.exports = {
    readAllFilms,
    readOneFilm,
    createOneFilm,
  };