import axios from 'axios'

const api = {
    //Get all categories
    allCategories: axios({method: 'get', url: 'http://localhost:3001/categories', headers: { 'Authorization': 'whatever-you-want' }})
    .then(function (response) {
        return response.data.categories;
    }).catch(function (error) {
        console.log(error);
    })

}

export default api