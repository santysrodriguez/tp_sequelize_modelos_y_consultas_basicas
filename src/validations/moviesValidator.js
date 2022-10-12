const {check} = require('express-validator')


module.exports = [

    check('title')
        .notEmpty().withMessage('El titulo es obligatorio').bail()
        .isLength({
            min : 2
        }).withMessage('Cómo mínimo 2 caracteres'),

    check('rating')
        .notEmpty().withMessage('El rating es obligatorio').bail()
        .isNumeric({
            no_symbols : true,
        }).withMessage('Debe un número entero positivo'),

    check('awards')
    .notEmpty().withMessage('Indique la cantidad de premios').bail()
    .isNumeric({
        no_symbols : true,
    }).withMessage('Debe un número entero positivo'),

    check('release_date')
        .notEmpty().withMessage('la fecha es obligatoria'),
    
    check('length')
    .notEmpty().withMessage('indique la duracion de la pelicula').bail()
    .isNumeric({
        no_symbols : true,
    }).withMessage('Debe un número entero positivo'),
    
]