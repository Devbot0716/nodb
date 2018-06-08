const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express(),
      port = process.env.SERVER_PORT || 3002,
      foodService = require('./services/foodService');
      require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

/*** ENDPOINTS ***/
app.get('/random-recipe', (req, res)=>{
    foodService.getRandomRecipe()
      .then(recipe => {
          res.send(recipe)
      })
      .catch(err => {
          res.send(err.message)
      })
})

// app.post('/addFavorite', (req, res) => {
//     foodService.addFavorite()
//         .then()
// }) 

// app.delete('/delete', (req, res) =>{
//     foodService.deleteFavorite()
//         .then()

//     }
// })

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})