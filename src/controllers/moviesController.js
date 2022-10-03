
const moment = require('moment'); // require
const db = require('../database/models/index')


module.exports = {
    list : (req,res) => {
        db.Movie.findAll()
        .then((movies) => {
            return res.render('moviesList',{
                movies
            })
        })
        .catch(error => console.log(error))

    },
    new : (req,res) => {
        db.Movie.findAll()
        .then((movies) => {
            return res.render('newestMovies',{
                movies
            })
        })
        .catch(error => console.log(error))

    },
    recommended : (req,res) => {
        db.Movie.findAll()
        .then((movies) => {
            return res.render('recommendedMovies',{
                movies
            })
        })
        .catch(error => console.log(error))

    },
    detail : (req,res) => {
        db.Movie.findByPk(req.params.id)
        .then((movies) => {
            return res.render('moviesDetail',{
                movies
            })
        })
        .catch(error => console.log(error))
        
    },
     //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        db.Genre.findAll({
            order : ['name']
        })
            .then(genres => res.render('moviesAdd',{
            genres
        }))
        .catch(error => console.log(error))
        
    },
    create: function (req, res) {
        const{title, release_date, rating, awards, genre_id, length} = req.body;
        db.Movie.create({
            ...req.body,
            title : title.trim(),
        })
            .then(movie => {
                console.log(movie)
                return res.redirect('/movies/detail/' + movie.id)
            })
            .catch(error => console.log(error))
    },
    edit: function(req, res) {
        let genres = db.Genre.findAll({
            order : ['name'],
        });
        let movie = db.Movie.findByPk(req.params.id)
            
        Promise.all([genres,movie])
            .then(([genres,movie]) =>{
                //return res.send(movie)
                res.render('moviesEdit', {
                    genres,
                    Movie : movie,
                    moment : moment,
                });
            })
        .catch(error => console.log(error));
    },
    update: function (req,res) {
        db.Movie.update(
            {
                ...req.body,
                title : req.body.title.trim()
            },
            {
                where : {id : req.params.id}
            }
        )
            .then( response => {
                console.log(response);
                return res.redirect('/movies/detail/' + req.params.id)
            })
            .catch(error => console.log(error))
    },
    delete: function (req, res) {
        db.Movie.findByPk(req.params.id)
            .then(movie => res.render('moviesDelete',{
                Movie : movie
            }))
            .catch(error => console.log(error))
    },
    destroy: function (req, res) {
        db.Movie.destroy({
            where :{
                id : req.params.id
            }
        })
        .then(result => {
            console.log(result)
            return res.redirect('/movies')
        })
        .catch( error => console.log(error))
    },
};
