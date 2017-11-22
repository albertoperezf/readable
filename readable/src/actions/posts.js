export const ALL_POST = 'ALL_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'VOTE_POST'
export const DETAILS_POST = 'DETAILS_POST'

// Get all of the posts. Useful for the main page when no category is selected.
export const allPost = (posts) => ({
    type: ALL_POST,
    posts
});

// Add a new post.
// id - UUID should be fine, but any unique id will work.
// timestamp - [Timestamp] Can in whatever format you like, you can use Date.now() if you like.
// title - [String].
// body - [String].
// author - [String].
// category - Any of the categories listed in categories.js. Feel free to extend this list as you desire.
export const addPost = ({author, body, category, id, timestamp, title}) => ({
    type: ADD_POST,
    author,
    body,
    category,
    id,
    timestamp,
    title
});

// Get the details of a single post.
export const detailsPost = id => ({
    type: DETAILS_POST,
    id
});

// Used for voting on a post.
export const votePost = (downVote = null, id, upVote = null) => ({
    type: VOTE_POST,
    downVote,
    id,
    upVote
});

// Edit the details of an existing post.
export const editPost = ({body, id, title}) => ({
    type: EDIT_POST,
    body,
    id,
    title
});

// Sets the deleted flag for a post to 'true'.
// Sets the parentDeleted flag for all child comments to 'true'.
export const deletePost = id => ({
    type: DELETE_POST,
    id
});
