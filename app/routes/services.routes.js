let { Router } = require('express');
let router = Router();

router.get('/ahorro', (req, res) => {

    res.render('services/ahorro')
})
router.get('/seguro-de-vida', (req, res) => {

    res.render('services/seguro-de-vida')
})
router.get('/retiro', (req, res) => {

    res.render('services/retiro')
})
router.get('/inversion', (req, res) => {

    res.render('services/inversion')
})
router.get('/gastos-medicos', (req, res) => {

    res.render('services/gastos-medicos')
})
router.get('/seguro-de-viaje', (req, res) => {

    res.render('services/seguro-de-viaje')
})
router.get('/seguro-de-auto', (req, res) => {

    res.render('services/seguro-de-auto')
})

module.exports = router;