var express = require('express');
var router = express.Router();

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
    res.json(MENU);
}

let orderList = [];

for (let films of MENU){
    if(films.duration >= parseInt(req.query["minimum-duration"])){
        console.log("----------hello----------");
        orderList.push(films);
    }
}

if(req.query["minimum-duration"] < 0) return res.sendStatus(404);

res.json(orderList);

});


router.get('/:id', (req, res) => {
    if(req.params.id == null)
        res.json("ca n'a pas marché");
    else{
        console.log("vous rentrer dans le id.");
        console.log(req.params.id);
    
        let id_cherche;
    
        for (let films of MENU){
            if(films.id == parseInt(req.params.id)){
                console.log('-------------id-------------');
                id_cherche = films;
            }
        }
        if(req.params.id < 0 || req.params.id > MENU.length)
            return res.sendStatus(404);
        res.json(id_cherche);
    }
});

router.post('/', (req, res) => {
    const title = req?.body?.title?.length !== 0 ? req.body.title : res.sendStatus(400);
    const duration = req?.body?.duration?.length !== 0 ? req.body.duration : res.sendStatus(400);
    const budget = req?.body?.budget?.length !== 0 ? req.body.budget : res.sendStatus(400);
    const link = req?.body?.link?.length !== 0 ? req.body.link : res.sendStatus(400);

    console.log('-------------POST FILMS-------------');

    const nextId = MENU.length + 1;

    const newFilm = {
        id : nextId,
        title : title,
        duration : duration,
        budget : budget,
        link : link,
    };

    MENU.push(newFilm);

    res.json(newFilm);
    res.json(MENU);
});





module.exports = router;
  