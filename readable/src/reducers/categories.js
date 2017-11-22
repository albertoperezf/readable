import {
    ALL_CATEGORIES,
    ALL_POST_FROM_CATEGORY
} from '../actions/categories'

function categories (state = {}, action) {
    switch (action.type) {
        case ALL_CATEGORIES:
            return state
        case ALL_POST_FROM_CATEGORY:
            return state
        default:
            return state
    }
}

export default categories;