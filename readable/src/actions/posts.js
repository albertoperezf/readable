export const ALL_POST = 'ALL_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const VOTE_POST = 'ADD_POST'
export const DETAILS_POST = 'DETAILS_POST'
export const GET_COMMENT_POST = 'ADD_POST'
export const ADD_COMMENT_POST = 'ADD_POST'

export const allPost = () => ({
    type: ALL_POST,
});

export const addPost = id => ({
    type: ADD_POST,
    id
});

export const detailsPost = id => ({
    type: DETAILS_POST,
    id
});

export const votePost = id => ({
    type: VOTE_POST,
    id
});

export const editPost = id => ({
    type: EDIT_POST,
    id
});

export const deletePost = id => ({
    type: DELETE_POST,
    id
});

export const allCommentsPost = id => ({
    type: GET_COMMENT_POST,
    id
});

export const addCommentsPost = id => ({
    type: ADD_COMMENT_POST,
    id
});
