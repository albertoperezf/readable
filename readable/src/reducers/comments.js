import {
    ALL_COMMENTS_FROM_POST,
    ADD_COMMENTS_TO_POST,
    COMMENT_DETAIL,
    EDIT_COMMENT,
    DELETE_COMMENT,
    VOTE_COMMENT
} from '../actions/comments'

function comments (state = {}, action) {
    switch (action.type) {
        case ALL_COMMENTS_FROM_POST:
            return state;
        case ADD_COMMENTS_TO_POST:
            return state;
        case COMMENT_DETAIL:
            return state;
        case EDIT_COMMENT:
            return state;
        case DELETE_COMMENT:
            return state;
        case VOTE_COMMENT:
            return state;
        default:
            return state
    }
}

export default comments;