const db = require('../database/models/index')


module.exports = {
    list : (req,res) => {
        db.Genre.findAll()
        .then((genres) => {
            return res.render('genresList',{
                genres
            })
        })
        .catch(error => console.log(error))

    },
    detail : (req,res) =>{
        db.Genre.findByPk(req.params.id)
        .then((genre) => {
            return res.render('genresDetail',{
                genre
            })
        })
        .catch(error => console.log(error))

    },
    //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        db.Genre.findAll({
            order : ['name']
        })
            .then(genres => res.render('genresAdd',{
            genres
        }))
        .catch(error => console.log(error))
        
    },
    create: function (req, res) {
        const{name,ranking} = req.body;
        db.Genre.create({
            ...req.body,
            name : name,
            ranking : ranking,
        })
            .then(genre => {
                console.log(genre)
                return res.redirect('/genres')
            })
            .catch(error => console.log(error))
    },
    delete: function (req, res) {
        db.Genre.findByPk(req.params.id)
            .then(genre => res.render('genresDelete',{
                Genre : genre
            }))
            .catch(error => console.log(error))
    },
    destroy: function (req, res) {
        db.Genre.destroy({
            where :{
                id : req.params.id
            }
        })
        .then(result => {
            console.log(result)
            return res.redirect('/genres')
        })
        .catch( error => console.log(error))
    },
    
}