const express = require('express')
const router = express.Router()
const dateFormat = require('dateformat')

router.use(function timeLog(req, res, next){
    console.log('Incoming : ANGULAR ----> Time: ', dateFormat())
    next()
})

const Hero = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ]

const Crisis = [
    { id: 1, name: 'Dragon Burning Cities' },
    { id: 2, name: 'Sky Rains Great White Sharks' },
    { id: 3, name: 'Giant Asteroid Heading For Earth' },
    { id: 4, name: 'Procrastinators Meeting Delayed Again' },
  ]

let getHero = (hero_id)=>{
    return Hero.filter((hero)=>{
        return hero.id == hero_id
    })
}

let getCrisis = (crisis_id)=>{
    return Crisis.filter((crisis)=>{
        return crisis.id == crisis_id
    })
}

//API ROUTES FOR FETCHING HEROES
router.get('/heroes', (req, res, next)=>{
    res.json(Hero)
})

router.get('/heroes/:id', (req, res, next)=>{
    const hero = getHero(req.params.id)
    console.log(hero[0])
    res.json(hero[0])
})

//API ROUTES FOR FETCHING CRISIS
router.get('/crisis', (req, res, next)=>{
    res.json(Crisis)
})

router.get('/crisis/:id', (req, res, next)=>{
    const crisis = getCrisis(req.params.id)
    console.log(crisis[0])
    res.json(crisis[0])
})

module.exports = router