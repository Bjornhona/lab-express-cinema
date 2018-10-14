const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const seeds = require('../bin/seeds.js');

const movieSchema = new Schema({
  title : String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

const Movie = mongoose.model('Movie', movieSchema);

Movie.insertMany(seeds)
  .then(res => {
    console.log('Movies inserted', res);
  })
  .catch(err => {
    console.log('error', err)
  });

// Movie.remove()
//   .then(() => {
      // console.log("remove");
    
      // Movie.insertMany(seeds)
      // .then((res) => {
      //   console.log('Movies inserted', res)
      // })
      // .catch((err) => {
      //   console.log('error', err)
//   })
//   .catch((err) => {
//     console.log('error', error)
//   });

mongoose.connect('mongodb://localhost/cinemaApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

module.exports = Movie;