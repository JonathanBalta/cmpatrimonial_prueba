const { Router } = require('express');
let router = Router();

router.get('/', (req, res) => {

    let message = req.session.message;
    delete req.session.message;
    console.log(message)
    res.render('index')
})
router.post('/contact-post', (req, res) => {

    req.session.message = 'Mensaje enviado!';
    console.log(req.session.message)
    console.log(req.body)
    res.send('received')
})

module.exports = router;