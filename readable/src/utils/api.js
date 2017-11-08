import axios from 'axios'

const api = {
    //Get all categories
    allCategories: axios({method: 'get', url: 'http://localhost:3001/categories', headers: { 'Authorization': 'whatever-you-want' }})
    .then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    })

}

export default api