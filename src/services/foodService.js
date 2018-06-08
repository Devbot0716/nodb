import axios from "axios";

function getRandomRecipe() {
    return axios.get(`/random-recipe`)
        .then(res => {
            return res.data.recipe;
        })
}

export { getRandomRecipe }