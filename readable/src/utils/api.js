import axios from 'axios'

const api = {
    // GET
    // Get all of the categories available for the app. List is found in categories.js. Feel free to extend this list as you desire.
    allCategories: axios({method: 'get', url: 'http://localhost:3001/categories', headers: { 'Authorization': 'superAwesomeSecret' }})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Get all of the posts for a particular category.
    allCategoriesPost: axios({method: 'get', url: 'http://localhost:3001/category/posts', headers: { 'Authorization': 'superAwesomeSecret' }})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Get all of the posts. Useful for the main page when no category is selected.
    allPost: axios({method: 'get', url: 'http://localhost:3001/posts', headers: { 'Authorization': 'superAwesomeSecret' }})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Get the details of a single post (By id).
    postDetails: (id) => axios({method: 'get', url: `http://localhost:3001/posts/:${id}`, headers: { 'Authorization': 'superAwesomeSecret' }})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Get all the comments for a single post.
    getComments: (id) => axios({method: 'get', url: `http://localhost:3001/posts/:${id}/comments`, headers: { 'Authorization': 'superAwesomeSecret' }})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Get the details for a single comment.
    getCommentDetails: (id) => axios({method: 'get', url: `http://localhost:3001/comments/${id}`, headers: { 'Authorization': 'superAwesomeSecret' }})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // POST
    // Add a new post.
    // TODO: Test petitions
    // TODO: Add POST params to the petitions
    // TODO: Missing header for auth
    addPost: (author, body, category, id, timestamp, title) => axios({
        method: 'post',
        url: 'http://localhost:3001/posts',
        headers: { 'Authorization': 'superAwesomeSecret' },
        data: {
            author: `${author}`,
            body: `${body}`,
            category: `${category}`,
            id: `${id}`,
            timestamp: `${timestamp}`,
            title: `${title}`
        }
    }).then(function (response) {
        return response.data.categories;
    }).catch(function (error) {
        console.log(error);
    }),

    // Used for voting on a post.
    // option - [String]: Either "upVote" or "downVote".
    votePost: (id, option) => axios({
        method: 'post',
        url: `http://localhost:3001/posts/:${id}`,
        headers: { 'Authorization': 'superAwesomeSecret' },
        data: {
            option: `${option}`
        }
    }).then(function (response) {
        return response.data.categories;
    }).catch(function (error) {
        console.log(error);
    }),

    // Add a comment to a post.
    addCommentToPost: (author, body, id, parentId, timestamp) => axios({
        method: 'post',
        url: 'http://localhost:3001/comments',
        headers: { 'Authorization': 'superAwesomeSecret' },
        data: {
            author: `${author}`,
            body: `${body}`,
            id: `${id}`,
            parentId: `${parentId}`,
            timestamp: `${timestamp}`
        }
    }).then(function (response) {
        return response.data.categories;
    }).catch(function (error) {
        console.log(error);
    }),

    // Used for voting on a comment.
    // option - [String]: Either "upVote" or "downVote".
    voteComment: (id, option) => axios({
        method: 'post',
        url: `http://localhost:3001/comments/${id}`,
        headers: { 'Authorization': 'superAwesomeSecret' },
        data: {
            option: `${option}`
        }
    }).then(function (response) {
        return response.data.categories;
    }).catch(function (error) {
        console.log(error);
    }),

    // PUT
    // Edit the details of an existing post.
    // title - [String], body - [String].
    editPost: (body, id, title) => axios({
        method: 'put',
        url: `http://localhost:3001/posts/:${id}`,
        headers: { 'Authorization': 'superAwesomeSecret' },
        data: {
            body: `${body}`,
            id: `${id}`,
            title: `${title}`
        }
    }).then(function (response) {
        return response.data.categories;
    }).catch(function (error) {
        console.log(error);
    }),

    // Edit the details of an existing comment.
    editComment: (body, timestamp) => axios({
        method: 'put',
        url: `http://localhost:3001/comments/${id}`,
        headers: { 'Authorization': 'superAwesomeSecret' },
        data: {
            body: `${body}`,
            timestamp: `${timestamp}`
        }
    }).then(function (response) {
        return response.data.categories;
    }).catch(function (error) {
        console.log(error);
    }),

    // DELETE
    // Sets the deleted flag for a post to 'true'. Sets the parentDeleted flag for all child comments to 'true'.
    deletePost: (id) => axios({method: 'delete', url: `http://localhost:3001/posts/:${id}`, headers: { 'Authorization': 'superAwesomeSecret' }})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        }),

    // Sets a comment's deleted flag to true.
    deleteComment: (id) => axios({method: 'delete', url: `http://localhost:3001/comments/${id}`, headers: { 'Authorization': 'superAwesomeSecret' }})
        .then(function (response) {
            return response.data.categories;
        }).catch(function (error) {
            console.log(error);
        })
}

export default api