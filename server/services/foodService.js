const axios = require('axios').default;

function getRandomRecipe() {
    var randInt = ~~(Math.random() * 40000) + 10000;
    var url = `https://food2fork.com/api/get?rId=${randInt}&key=${process.env.RECIPE_KEY}`;

    return axios
        .get(url)
        .then(res => {
            return res.data;
        });
}

module.exports = {getRandomRecipe};