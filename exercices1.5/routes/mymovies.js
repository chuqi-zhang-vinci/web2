var express = require('express');
const {serialize, parse } = require('../utils/json');
var router = express.Router();

const jsonDbPath = __dirname + '../data/movies.json';

const MENU = 
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



router.get('/', (req, res) => {
console.log(`GET /films/${req.query["minimum-duration"]}`);

if(req.query["minimum-duration"] === undefined){
    return res.json(MENU);
}

let orderList = [];
const films = parse(jsonDbPath, MENU);

for (let film of films){
    if(film.duration >= parseInt(req.query["minimum-duration"])){
        console.log("----------hello----------");
        orderList.push(film);
    }
}

if(req.query["minimum-duration"] < 0) return res.sendStatus(404);

return res.json(orderList);
});


router.get('/:id', (req, res) => {
    if(req.params.id == null)
        return res.json("ca n'a pas marché");
    else{
        console.log("vous rentrer dans le id.");
        console.log(req.params.id);
    
        let id_cherche;
        const films = parse(jsonDbPath, MENU);
    
        for (let film of films){
            if(film.id == parseInt(req.params.id)){
                console.log('-------------id-------------');
                id_cherche = film;
            }
        }
        if(req.params.id < 0 || req.params.id > films.length)
            return res.sendStatus(404);
        return res.json(id_cherche);
    }
});

router.post('/', (req, res) => {
    const title = req?.body?.title?.length !== 0 ? req.body.title : res.sendStatus(400);
    const duration = req?.body?.duration?.length !== 0 ? req.body.duration : res.sendStatus(400);
    const budget = req?.body?.budget?.length !== 0 ? req.body.budget : res.sendStatus(400);
    const link = req?.body?.link?.length !== 0 ? req.body.link : res.sendStatus(400);

    console.log('-------------POST FILMS-------------');

    const films = parse(jsonDbPath, MENU);
    const nextId = MENU.length + 1;

    const newFilm = {
        id : nextId,
        title : title,
        duration : duration,
        budget : budget,
        link : link,
    };

    films.push(newFilm);
    serialize(jsonDbPath, films);

    return res.json(newFilm);
});





module.exports = router;
  