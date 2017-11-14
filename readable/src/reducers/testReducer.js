import {
    ADD_RECIPE,
} from "../actions/testAction";

function food (state = {}, action) {
    switch (action.type) {
        case ADD_RECIPE :
            const { recipe } = action

            return {
                ...state,
                [recipe.label]: recipe,
            }
        default :
            return state
    }
}

export default food;