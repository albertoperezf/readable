export const ALL_COMMENTS_FROM_POST = 'ALL_COMMENTS_FROM_POST';
export const ADD_COMMENTS_TO_POST = 'ADD_COMMENTS_TO_POST';
export const COMMENT_DETAIL = 'COMMENT_DETAIL';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';

// Get all the comments for a single post.
export const allCommentsFromPost = id => ({
    type: ALL_COMMENTS_FROM_POST,
    id
});

// Add a comment to a post.
export const addCommentsToPost = (author, body, id, parentId, timestamp) => ({
    type: ADD_COMMENTS_TO_POST,
    author,
    body,
    id,
    parentId,
    timestamp
});

// Get the details for a single comment.
export const commentDetails = id => ({
   type: COMMENT_DETAIL,
    id
});

// Edit the details of an existing comment.
export const editComment = (body, id, timestamp) => ({
    type: EDIT_COMMENT,
    body,
    id,
    timestamp
});

// Sets a comment's deleted flag to true.
export const deleteComment = id => ({
    type: DELETE_COMMENT,
    id
});

// Used for voting on a comment.
export const voteComment = (downVote = null, id, upVote = null) => ({
    type: VOTE_COMMENT,
    downVote,
    id,
    upVote
});