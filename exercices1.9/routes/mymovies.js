const express = require('express');
const {
  readAllFilms,
  readOneFilm,
  createOneFilm,
} = require('../models/films');

const router = express.Router();

// Read all the films, filtered by minimum-duration if the query param exists
router.get('/', (req, res) => {
  const filmsPotentiallyFiltered = readAllFilms(req?.query?.['minimum-duration']);

  if (filmsPotentiallyFiltered === undefined) return res.sendStatus(400);

  return res.json(filmsPotentiallyFiltered);
});

// Read a film from its id in the menu
router.get('/:id', (req, res) => {
  const foundFilm = readOneFilm(req?.params?.id);

  if (!foundFilm) return res.sendStatus(404);

  return res.json(foundFilm);
});

// Create a film
router.post('/', (req, res) => {
  const title = req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined;
  const link = req?.body?.content?.trim().length !== 0 ? req.body.link : undefined;
  const duration = typeof req?.body?.duration !== 'number' || req.body.duration < 0 ? undefined : req.body.duration;
  const budget = typeof req?.body?.budget !== 'number' || req.body.budget < 0 ? undefined : req.body.budget;

  if (!title || !link || !duration || !budget) return res.sendStatus(400);

  const createdFilm = createOneFilm(title, link, duration, budget);

  return res.json(createdFilm);
});






module.exports = router;