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
        
    }
}
