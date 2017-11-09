import axios from 'axios'

const api = {
    // Get all of the categories available for the app. List is found in categories.js. Feel free to extend this list as you desire.
    allCategories: axios({method: 'get', url: 'http://localhost:3001/categories', headers: { 'Authorization': 'whatever-you-want' }})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Get all of the posts for a particular category.
    allCategoriesPost: axios({method: 'get', url: 'http://localhost:3001/category/posts'})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Get all of the posts. Useful for the main page when no category is selected.
    allPost: axios({method: 'get', url: 'http://localhost:3001/posts'})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Add a new post.
    addPost: axios({method: 'post', url: 'http://localhost:3001/posts'})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Get the details of a single post (By id).
    postDetails: (id) => axios({method: 'get', url: `http://localhost:3001/posts/:${id}`})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Used for voting on a post.
    votePost: (id) =>  axios({method: 'post', url: `http://localhost:3001/posts/:${id}`})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Edit the details of an existing post.
    editPost: (id) => axios({method: 'put', url: `http://localhost:3001/posts/:${id}`})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Sets the deleted flag for a post to 'true'. Sets the parentDeleted flag for all child comments to 'true'.
    deletePost: (id) => axios({method: 'delete', url: `http://localhost:3001/posts/:${id}`})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Get all the comments for a single post.
    getComments: (id) => axios({method: 'get', url: `http://localhost:3001/posts/:${id}/comments`})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Get all the comments for a single post.
    addComment: axios({method: 'post', url: `http://localhost:3001/comments`})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Get the details for a single comment.
    getCommentDetails: (id) => axios({method: 'get', url: `http://localhost:3001/comments/${id}`})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Used for voting on a comment.
    voteComment: (id) => axios({method: 'post', url: `http://localhost:3001/comments/${id}`})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Edit the details of an existing comment.
    editComment: (id) => axios({method: 'put', url: `http://localhost:3001/comments/${id}`})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Sets a comment's deleted flag to true.
    deleteComment: (id) => axios({method: 'delete', url: `http://localhost:3001/comments/${id}`})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),
}

export default api