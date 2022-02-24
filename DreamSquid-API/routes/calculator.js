const express = require ('express');
const router = express.Router();

const pokeCalcul = require('../calculator/pokeCalcul');
const RPGCalcul = require('../calculator/RPGCalcul');
const personaCalcul = require('../calculator/personaCalcul');
const chimeraCalcul = require('../calculator/chimeraCalcul');
const calculator = require('../controllers/calculator');
const auth = require('../middleware/auth');

router.get('/pokemon', pokeCalcul.description, calculator.send);
router.get('/auth/pokemon', auth.getAuth, pokeCalcul.description, calculator.saveAndSend);
router.get('/RPG', RPGCalcul.description, calculator.send);
router.get('/auth/RPG', auth.getAuth, RPGCalcul.description, calculator.saveAndSend);
router.get('/persona', personaCalcul.description, calculator.send);
router.get('/auth/persona', auth.getAuth, personaCalcul.description, calculator.saveAndSend);
router.get('/chimera', chimeraCalcul.description, calculator.send);
router.get('/auth/chimera', auth.getAuth, chimeraCalcul.description, calculator.saveAndSend);
router.put('/save', auth.getAuth, calculator.saveTheLast);

module.exports = router;