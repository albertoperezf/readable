import {
    ALL_POST,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    VOTE_POST,
    DETAILS_POST
} from "../actions/posts"

function posts (state = {}, action) {
    const {
        author,
        body,
        category,
        id,
        timestamp,
        title
    } = action;

    switch (action.type) {
        case ALL_POST:
            return {
                ...state
            };
        case ADD_POST:
            return {
                ...state
            };
        case EDIT_POST:
            return {
                ...state
            };
        case DELETE_POST:
            return {
                ...state
            };
        case VOTE_POST:
            return {
                ...state
            };
        case DETAILS_POST:
            return {
                ...state
            };
        default:
            return state
    }
}

export default posts;